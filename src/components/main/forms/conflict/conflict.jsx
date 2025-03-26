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
import SendIcon from '@mui/icons-material/Send';
import Input from '../components/input/input';
import { TextArea } from '../components/textarea/textarea';

export const Form = () => {
	const handleCurrencyChange = (value) => {
		console.log('Selected Currency:', value);
	};

	const handleYesNoChange = (value) => {
		console.log('Selected Option:', value);
	};
	return (
		<main>
			<form className={css.form}>
				<AutocompleteInput placeholder='Partner' data={userData} />
				<AutocompleteInput placeholder='Fee Earner' data={userData} />
				<AutocompleteInput placeholder='Denuo legal entity' data={dnentity} />
				<AutocompleteInput placeholder='Client' data={clientData} />
				<RadioButtons
					title='Currency'
					options={currency}
					onChange={handleCurrencyChange}
				/>
				{allInputs.map(({ id, label }) => (
					<Input key={id} placeholder={label} />
				))}
				<span className={css.questions}>Is this matter contentious?</span>
				<RadioButtons options={yesNoOptions} onChange={handleYesNoChange} />
				<span className={css.questions}>
					Is this matter confidential/sensitive?
				</span>
				<RadioButtons options={yesNoOptions} onChange={handleYesNoChange} />
				<Input placeholder='Reason' />
				<span className={css.title}>Client intake criteria</span>
				<Input placeholder='Client sector' />
				{textData.map(({ id, title, questions }) => (
					<div key={id} className={css.questionsBox}>
						<span className={css.title}>{title}</span>
						{Object.keys(questions).map((key, index) => (
							<div key={index} className={css.radio}>
								<span className={css.questions}>{questions[key]}</span>
								<RadioButtons
									options={yesNoOptions}
									onChange={handleYesNoChange}
								/>
							</div>
						))}
					</div>
				))}

				<TextArea placeholder='Any other important information on the client or matter...' />
			</form>
			<div className={css.navigation}>
				<Button type='button' label='Back' />
				<Button type='button' label='Next' />
				<Button
					type='button'
					label='Send'
					sendIcon={<SendIcon fontSize='small' />}
				/>
			</div>
		</main>
	);
};
