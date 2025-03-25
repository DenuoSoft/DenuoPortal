import css from './form.module.scss';
import AutocompleteInput from './autocomplete/inputAutocomplete';
import { userData } from '../../../data/userData';
import { clientData } from '../../../data/clientData';
import RadioButtons from './radiobuttons/radiobuttons';
import { allInputs } from './input/input-data';
import { textData, currency, yesNoOptions } from './form-data';
import Button from '../../shared/buttons/button';

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
				<AutocompleteInput placeholder='Client' data={clientData} />
				<RadioButtons
					title='Currency'
					options={currency}
					onChange={handleCurrencyChange}
				/>
				{allInputs.map(({ id, label }) => (
					<AutocompleteInput key={id} placeholder={label} />
				))}
				
				{textData.map(({ id, title, questions }) => (
					<div key={id} className={css.questionsBox}>
						<h2>{title}</h2>
						{Object.keys(questions).map((key, index) => (
							<div key={index} className={css.radio }>
								<span className={ css.questions}>{questions[key]}</span>
								<RadioButtons
									options={yesNoOptions}
									onChange={handleYesNoChange}
								/>
							</div>
						))}
					</div>
				))}
				<div className={css.navigation}>
					<Button label='Back'/>

					<Button label='Next' />

					<Button label='Submit' />
				</div>
			</form>
		</main>
	);
};
