import React from 'react';
import css from './button.module.scss';

const Button = ({ label, sendIcon, arrowUpIcon, onClick }) => {
	return (
		<div className={css.button} onClick={onClick}>
            <span>{label}</span>
			{sendIcon && <span className={css.icon}>{sendIcon}</span>}
			{arrowUpIcon && <span className={css.icon}>{arrowUpIcon}</span>}
		</div>
	);
};
export default Button;
