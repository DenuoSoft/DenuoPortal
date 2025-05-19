import React from 'react';
import css from './button.module.scss';
type ButtonType = "button" | "submit" | "reset";

interface ButtonProps {
    label: string;
    sendIcon?: React.ReactNode;
    arrowUpIcon?: React.ReactNode;
    onClick?: () => void;
    type?: ButtonType;
}

const Button: React.FC<ButtonProps> = ({ label, sendIcon, arrowUpIcon, onClick, type = "button" }) => {
	return (
		<button type={type} className={css.button} onClick={onClick}>
            <span>{label}</span>
			{sendIcon && <span className={css.icon}>{sendIcon}</span>}
			{arrowUpIcon && <span className={css.icon}>{arrowUpIcon}</span>}
		</button>
	);
};
export default Button;
