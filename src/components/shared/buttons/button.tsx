import React from 'react';
import css from './button.module.scss';

const Button = ({ label, sendIcon, onClick }) => {
	return (
		<div className={css.button} onClick={onClick}>
            <span>{label}</span>
			{sendIcon && <span className={css.icon}>{sendIcon}</span>}
		</div>
	);
};
export default Button;
