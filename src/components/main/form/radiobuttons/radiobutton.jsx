/* eslint-disable react/prop-types */
const RadioButton = ({ label, value, checked, onChange }) => {
	return (
		<label className='flex items-center'>
			<input
				type='radio'
				value={value}
				checked={checked}
				onChange={onChange}
				className='mr-2 cursor-pointer'
			/>
			{label}
		</label>
	);
};

export default RadioButton;
