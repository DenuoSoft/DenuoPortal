import css from './form.module.scss';
import {Input} from "./input/input";
//import {CheckBox} from "./checkbox/checkbox";
//import {TextArea} from "./textarea/textarea.tsx";
import ControlledOpenSelect from "./select/select";
import FormRadioButtonsGroup from "./radio/radio";


export const Form = () => {
    
    return (
        <main>
 
            <form className={css.form}>
              
                        <Input />
    
                <ControlledOpenSelect/>
                <FormRadioButtonsGroup />
          
            </form>
        </main>
   
    )

}
 