import css from './form.module.scss';
//import { Input } from "./input/input";
import AutocompleteInput from './autocomplete/inputAutocomplete';
import { userData } from '../../../data/userData';
import { clientData} from '../../../data/clientData';
//import { CheckBox } from './checkbox/checkbox';
//import { InputSelect } from "./select/select";
import FormRadioGroup from "./radio/radio";

export const Form = () => {
	return (
		<main>
			<form className={css.form}>
				<AutocompleteInput placeholder="Partner" data={userData} />
				<AutocompleteInput placeholder="Fee Earner" data={userData} />
				<AutocompleteInput placeholder="Client" data={clientData} />
                <FormRadioGroup/>
			</form>
		</main>
	);
};
