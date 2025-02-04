import css from './form.module.scss';
import {Input} from "./input/input";
//import {CheckBox} from "./checkbox/checkbox";
//import {TextArea} from "./textarea/textarea.tsx";
import ControlledOpenSelect from "./select/select";
import FormRadioButtonsGroup from "./radio/radio";
//import {Button} from "./button/button";
//import {FormData} from "./form-data";
//import { useForm } from '../../../hooks/use-form';
//import { useState } from 'react';

export const Form = () => {

    return (
        <main>
            <form className={css.form}>
                <Input/>
                <ControlledOpenSelect/>
                <FormRadioButtonsGroup/>
            </form>
        </main>
   
    )

}
 