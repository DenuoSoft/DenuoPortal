import { useState } from 'react';
import { currency } from '../../conflict/conflict-data';
import css from './radiobuttons.module.scss';

const RadioButtons = () => {
	const [selectedCurrency, setSelectedCurrency] = useState(currency[0]);
	const handleCurrencyChange = (event) => {
		setSelectedCurrency(event.target.value);
	};

	return (
		<div className={css.radioBox}>
			<span className={css.radioLabel}>Currency</span>
			{currency.map((curr) => (
				<label key={curr} className='flex items-center mb-2'>
					<input
						type='radio'
						value={curr}
						checked={selectedCurrency === curr}
						onChange={handleCurrencyChange}
						className='mr-2'
						aria-labelledby={`${curr}-label`}
					/>
					<span id={`${curr}-label`} className='text-lg'>
						{curr}
					</span>
				</label>
			))}
		</div>
	);
};

export default RadioButtons;
