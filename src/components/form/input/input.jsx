/* eslint-disable react/prop-types */
import {forwardRef} from 'react';
import css from './input.module.scss';

const Input = forwardRef(({placeholder, onChange, onClick, value, onKeyDown, name}, ref) => {
	
	const clearInput = () => {
		onChange({target: {value: '', name: name}});
	};

	return (
		<div className={css.inputbox}>
			<input
				ref={ref}
				type="text"
				className={css.input}
				value={value}
				onClick={onClick}
				onChange={onChange}
				placeholder={placeholder}
				onKeyDown={onKeyDown}
				name={name}
			/>
			{value && (
				<button onClick={clearInput} className={css.clearButton}>
					✖
				</button>
			)}
		</div>
	);
})
Input.displayName = 'Input'; 
export default Input;
