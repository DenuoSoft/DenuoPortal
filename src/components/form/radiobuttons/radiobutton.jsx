import css from './radiobuttons.module.scss';

/* eslint-disable react/prop-types */
const RadioButton = ({label, value, onChange, name, checked}) => {
	return (
		<label>
			<input
				type="radio"
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
