import css from './conflict.module.scss';
import AutocompleteInput from '../components/autocomplete/inputAutocomplete';
import { userData } from '../../../../data/userData';
import { clientData } from '../../../../data/clientData';
import RadioButtons from '../components/radiobuttons/radiobuttons';
import {
	textData,
	currency,
	yesNoOptions,
	allInputs,
	dnentity,
} from './conflict-data';
import Button from '../../../shared/buttons/button';
//import SendIcon from '@mui/icons-material/Send';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Input from '../components/input/input';
import { TextArea } from '../components/textarea/textarea';
import { useState, useRef, useEffect } from 'react';

const initialFormData = {
    partner: '',
    feeEarner: '',
    dnentity: '',
    client: '',
    currency: '',
    isContentious: '',
    isConfidential: '',
    reason: '',
    clientSector: '',
    otherInfo: '',
};

export const Form = () => {
	const [formData, setFormData] = useState(initialFormData);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submissionResult, setSubmissionResult] = useState(null);
	const timerRef = useRef(null);
	const [buttonLabel, setButtonLabel] = useState('Send');
	
	
	const resetForm = () => {
        setFormData(initialFormData);
    };

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmissionResult(null);
		setButtonLabel('Sending...');
		timerRef.current = setTimeout(async () => {
			try {
				const response = await fetch('http://localhost:3000/conflict', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(formData),
				});
				const result = await response.json();
				if (response.ok) {
					setSubmissionResult({
						type: 'success',
						message: 'Form submitted successfully!',
					});
					
					
					resetForm();
				} else {
					setSubmissionResult({
						type: 'error',
						message: `Submission failed: ${result.message || response.statusText
							}`,
					});
				}
			} catch (error) {
				setSubmissionResult({
					type: 'error',
					message: `Submission failed: ${error.message}`,
				});
			} finally {
				setIsSubmitting(false);
				setButtonLabel('Send');
			}
		}, 3000);
		
	};
	useEffect(() => {
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, []);
	const handleCurrencyChange = (value) => {
		setFormData((prevState) => ({
			...prevState,
			currency: value,
		}));
	};

	const handleYesNoChange = (name, value) => {
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};
	
	return (
		<main>
			<div className={css.formLayout}>
				<form className={css.form} onSubmit={handleSubmit}>
					<AutocompleteInput
						placeholder='Partner'
						data={userData}
						value={formData.partner}
						onChange={(value) =>
							setFormData((prevState) => ({ ...prevState, partner: value }))
						}
						name='partner'
					/>
					<AutocompleteInput
						placeholder='Fee Earner'
						data={userData}
						value={formData.feeEarner}
						onChange={(value) =>
							setFormData((prevState) => ({ ...prevState, feeEarner: value }))
						}
						name='feeEarner'
					/>
					<AutocompleteInput
						placeholder='Denuo legal entity'
						data={dnentity}
						value={formData.dnentity}
						onChange={(value) =>
							setFormData((prevState) => ({ ...prevState, dnentity: value }))
						}
						name='dnentity'
					/>
					<AutocompleteInput
						placeholder='Client'
						data={clientData}
						value={formData.client}
						onChange={(value) => setFormData({ ...formData, client: value })}
						name='client'
					/>
					<RadioButtons
						title='Currency'
						options={currency}
						onChange={handleCurrencyChange}
					/>
					{allInputs.map(({ id, label, name }) => (
						<Input
							key={id}
							placeholder={label}
							name={name}
							onChange={handleInputChange}
						/>
					))}
					<span className={css.questions}>Is this matter contentious?</span>
					<RadioButtons
						options={yesNoOptions}
						onChange={(value) => handleYesNoChange('isContentious', value)}
					/>
					<span className={css.questions}>
						Is this matter confidential/sensitive?
					</span>
					<RadioButtons
						options={yesNoOptions}
						onChange={(value) => handleYesNoChange('isConfidential', value)}
					/>
					<Input
						placeholder='Reason:'
						name='reason'
						onChange={handleInputChange}
					/>
					<span className={css.title}>Client intake criteria</span>
					<Input
						placeholder='Client sector:'
						name='clientSector'
						onChange={handleInputChange}
					/>
					{textData.map(({ id, title, questions }) => (
						<div key={id} className={css.questionsBox}>
							<span className={css.title}>{title}</span>
							{Object.keys(questions).map((key, index) => (
								<div key={index} className={css.radio}>
									<span className={css.questions}>{questions[key]}</span>
									<RadioButtons
										options={yesNoOptions}
										onChange={(value) => handleYesNoChange(key, value)}
									/>
								</div>
							))}
						</div>
					))}

					<TextArea
						placeholder='Any other important information on the client or matter...'
						name='otherInfo'
						onChange={handleInputChange}
					/>
				</form>
				<div className={css.navigation}>
					<Button
						type='button'
						label='Go Up'
						arrowUpIcon={<ArrowUpwardIcon fontSize='small' />}
						onClick={scrollToTop}
					/>

					<Button
						type='submit'
						label={buttonLabel}
						//label={isSubmitting ? 'Sending...' : 'Send'}
						//sendIcon={<SendIcon fontSize='small' />}
						disabled={isSubmitting}
						onClick={handleSubmit}
					/>
				</div>
				{submissionResult && (
					<div
						className={
							submissionResult.type === 'success' ? css.success : css.error
						}
					>
						{submissionResult.message}
					</div>
				)}
			</div>
		</main>
	);
};
