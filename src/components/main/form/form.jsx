import css from './form.module.scss';
//import { Input } from "./input/input";
import AutocompleteInput from './autocomplete/inputAutocomplete';
//import { InputSelect } from "./select/select";
//import FormRadioButtonsGroup from "./radio/radio";

export const Form = () => {
	return (
		<main>
			<form className={css.form}>
				<AutocompleteInput />
			</form>
		</main>
	);
};
