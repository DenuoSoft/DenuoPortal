import { css } from "styled-components";

/* eslint-disable react/prop-types */
const RadioButton = ({ label, value, checked, onChange }) => {
	return (
		<label>
			<input
				type='radio'
				value={value}
				checked={checked}
				onChange={onChange}
				className={css.radioInput}
			/>
			{label}
		</label>
	);
};

export default RadioButton;
