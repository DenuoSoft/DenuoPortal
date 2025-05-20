/* eslint-disable react/prop-types */
import RadioButton from './radiobutton';
import { useState, useEffect } from 'react';
import css from './radiobuttons.module.scss';

const RadioButtons = ({ title, options, onChange, value, name}) => {
	const [selectedValue, setSelectedValue] = useState(value || '');
  useEffect(() => {
    setSelectedValue(value || '');
}, [value]);
	const handleRadioChange = (event) => {
		setSelectedValue(event.target.value);
		onChange(event.target.value);
	};

	return (
		<div className={css.radioBox}>
			<span className={css.radioLabel}>{title}</span>
			{options.map((option) => (
				<RadioButton
					key={option.value}
					label={option.label}
					value={option.value}
					checked={selectedValue === option.value}
					onChange={handleRadioChange}
					name={name}
				/>
			))}
		</div>
	);
};

export default RadioButtons;
