/* eslint-disable react/prop-types */
import RadioButton from "./radiobutton";
import { useState } from "react";
import css from './radiobuttons.module.scss'

const RadioButtons = ({ title, options, onChange }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div className={css.radioBox}>
      <span className={ css.radioLabel}>{title}</span>
      {options.map((option) => (
        <RadioButton
          key={option.value}
          label={option.label}
          value={option.value}
          checked={selectedValue === option.value}
          onChange={handleRadioChange}
        />
      ))}
    </div>
  );
}

export default RadioButtons;
