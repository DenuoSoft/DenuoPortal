import React from 'react';
import css from './button.module.scss';

const Button = ({ label }) => {
	return <div className={css.button}>{label}</div>;
};
export default Button;
