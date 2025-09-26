import PropTypes from 'prop-types';
import css from './button.module.scss';

const Button = ({ label, sendIcon, arrowUpIcon, onClick, type = "button", disabled = false }) => {
	return (
		<button
            type={type}
            className={css.button}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
			{sendIcon && <span className={css.icon}>{sendIcon}</span>}
			{arrowUpIcon && <span className={css.icon}>{arrowUpIcon}</span>}
		</button>
	);
};
Button.propTypes = {
    label: PropTypes.string,
    sendIcon: PropTypes.node,         
    arrowUpIcon: PropTypes.node,      
    onClick: PropTypes.func,
    type: PropTypes.oneOf(["button", "submit", "reset"]), 
    disabled: PropTypes.bool          
};
export default Button;