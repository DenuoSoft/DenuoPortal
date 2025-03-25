import React from 'react';
import css from './button.module.scss';

const Button = ({ label, sendIcon }) => {
	return (
		<div className={css.button}>
            <span>{label}</span>
			{sendIcon && <span className={css.icon}>{sendIcon}</span>}
		</div>
	);
};
export default Button;
