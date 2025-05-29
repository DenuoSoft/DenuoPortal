import { useState, useEffect } from 'react';
import Input from '../input/input';
import PropTypes from 'prop-types';
import css from './autocomplete.module.scss';


const Autocomplete = ({ placeholder, data, onChange, name, value }) => {
	const [inputValue, setInputValue] = useState(value || '');
	const [filteredSuggestions, setFilteredSuggestions] = useState([]);
	const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
	const [showSuggestions, setShowSuggestions] = useState(false);
	
	useEffect(() => {
        setInputValue(value || ''); 
	}, [value]);
	
	const handleInputChange = (e) => {
		const value = e.target.value;
		setInputValue(value);

		if (value) {
			const filtered = data.filter((data) =>
				data.name.toLowerCase().includes(value.toLowerCase())
			);
			setFilteredSuggestions(filtered);
			setShowSuggestions(true);
		} else {
			setShowSuggestions(false);
			setFilteredSuggestions([]);
		}
		onChange(name, value);
	};

	const handleKeyDown = (e) => {
		if (e.key === 'ArrowDown') {
			setActiveSuggestionIndex((prevIndex) =>
				prevIndex < filteredSuggestions.length - 1 ? prevIndex + 1 : prevIndex
			);
		} else if (e.key === 'ArrowUp') {
			setActiveSuggestionIndex((prevIndex) =>
				prevIndex > 0 ? prevIndex - 1 : 0
			);
		} else if (e.key === 'Enter') {
			if (activeSuggestionIndex >= 0) {
				setInputValue(filteredSuggestions[activeSuggestionIndex].name);
				setShowSuggestions(false);
			}
		}
	};
	const handleSuggestionClick = (suggestion) => {
		setInputValue(suggestion.name);
		onChange(suggestion.name);
		setShowSuggestions(false);
		setActiveSuggestionIndex(-1);
	};

	return (
		<div>
			<div className={css.searchbox}>
				<Input
					type='text'
					value={inputValue}
					onChange={handleInputChange}
					onKeyDown={handleKeyDown}
					className={css.input}
					placeholder={placeholder}
					name={name}
				/>
			</div>

			{showSuggestions && inputValue && (
				<div className={css.listbox}>
					<ul>
						{filteredSuggestions.length > 0 ? (
							filteredSuggestions.map((suggestion, index) => (
								<li
									className={css.list}
									key={suggestion.id}
									onClick={() => handleSuggestionClick(suggestion)}
									onMouseEnter={() => setActiveSuggestionIndex(index)}
								>
									{suggestion.name}
								</li>
							))
						) : (
							<li className={css.error}>{inputValue} not found</li>
						)}
					</ul>
				</div>
			)}
		</div>
	);
};
Autocomplete.propTypes = {
	placeholder: PropTypes.string.isRequired,
	data: PropTypes.array,
	onChange: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
};

export default Autocomplete;
