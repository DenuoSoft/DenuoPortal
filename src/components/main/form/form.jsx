import css from './form.module.scss';
//import { Input } from "./input/input";
import AutocompleteInput from './autocomplete/inputAutocomplete';
import { userData } from '../../../data/userData';
import { clientData} from '../../../data/clientData';
//import { CheckBox } from './checkbox/checkbox';
//import { InputSelect } from "./select/select";
//import FormRadioGroup from "./radio/radio";
import RadioButtons from './radiobuttons/radiobuttons'
import { allInputs } from './input/input-data'
import { textData } from './form-data'

export const Form = () => {
	return (
		<main>
			<form className={css.form}>
				<AutocompleteInput placeholder="Partner" data={userData} />
				<AutocompleteInput placeholder="Fee Earner" data={userData} />
				<AutocompleteInput placeholder="Client" data={clientData} />
				<RadioButtons />
				{allInputs.map(({ id, label }) => (
					<AutocompleteInput key={id} placeholder={label} />
))}
				{/* <span>Client intake criteria</span>
				<span>Non-financial client intake criteria</span>
				<span>Matter intake criteria</span> */}
				{textData.map(({id, title, questions}) => (
					<div key={id} className={css.questions }>
						<h2>{title}</h2>
						<span>{ questions.one}</span>
						<span>{questions.two}</span>
						<span>{questions.three}</span>
						<span>{questions.four}</span>
						<span>{questions.five}</span>
						<span>{ questions.six}</span>
					</div>   
				))}
			</form>
		</main>
	);
};
