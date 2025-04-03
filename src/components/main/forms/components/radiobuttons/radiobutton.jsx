import { css } from "styled-components";

/* eslint-disable react/prop-types */
const RadioButton = ({ label, value, checked, onChange, name }) => {
	return (
		<label>
			<input
				type='radio'
				value={value}
				checked={checked}
				onChange={onChange}
				className={css.radioInput}
				name={name}
			/>
			{label}
		</label>
	);
};

export default RadioButton;
