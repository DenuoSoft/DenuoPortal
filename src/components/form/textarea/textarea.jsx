/* eslint-disable react/prop-types */
import css from './textarea.module.scss';

const TextArea = ({ placeholder, onChange, name, value }) => {
	return (
		<textarea
			className={css.textarea}
			type='text'
			placeholder={placeholder}
			onChange={onChange}
			name={name}
			value={value}
		/>
	);
};
export default TextArea;