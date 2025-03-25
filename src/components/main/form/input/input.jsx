/* eslint-disable react/prop-types */
//import React from 'react';
import css from './input.module.scss';
//import { useState } from 'react';

const Input = ({ placeholder, onChange, value, onKeyDown }) => {
  //const [searchTerm, setSearchTerm] = useState('');
  
	const clearInput = () => {
		onChange({ target: { value: '' } });
	};

	return (
		<div className={css.inputbox}>
			<input
				type='text'
				className={css.input}
				value={value}
				onChange={onChange}
        placeholder={placeholder}
        onKeyDown={onKeyDown}
        
      />
      {value && (
							<button onClick={clearInput} className={css.clearButton}>
								✖
							</button>
						)}
		</div>
	);
};
export default Input;
