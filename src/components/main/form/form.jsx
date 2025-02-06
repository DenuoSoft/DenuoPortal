
import css from './form.module.scss';
import { Input } from "./input/input";
//import { InputSelect } from "./select/select";
//import FormRadioButtonsGroup from "./radio/radio";

export const Form = () => {
    return (
        <main>
            <form className={css.form}>
                <Input />
            </form>
        </main>
    )
}
