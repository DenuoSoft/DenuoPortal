import { useState } from 'react';

import PropTypes from 'prop-types';
import css from './inputAutocomplete.module.scss'
//import { userData } from '../../../../data/userData';

const AutocompleteInput = ({ placeholder, data}) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    
    if (value) {
      const filtered = data.filter(data =>
        data.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      setActiveSuggestionIndex(prevIndex => 
        (prevIndex < filteredSuggestions.length - 1 ? prevIndex + 1 : prevIndex)
      );
    } else if (e.key === 'ArrowUp') {
      setActiveSuggestionIndex(prevIndex =>
        (prevIndex > 0 ? prevIndex - 1 : 0)
      );
    } else if (e.key === 'Enter') {
      if (activeSuggestionIndex >= 0) {
        setInputValue(filteredSuggestions[activeSuggestionIndex].name);
        setShowSuggestions(false);
      }
    }
  };
  
  const handleSuggestionClick = (data) => {
    setInputValue(data.name);
    setShowSuggestions(false);
  };
  const clearInput = () => {
    setInputValue('');
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    setActiveSuggestionIndex(-1);
  };
  return (
    <div className="relative w-full">
      <div className={css.searchbox}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className={css.input}
          placeholder={placeholder}
        />
        {inputValue && (
          <button 
          onClick={clearInput}
          className={css.clearButton}
          style={{ display: inputValue ? 'block' : 'none' }} 
        >
          ✖
        </button>
        )}
      
      </div>
      
      {showSuggestions && inputValue && (
        <div className={css.listbox}>
            <ul>
          {filteredSuggestions.map((data, index) => (
            <li
              className={ css.list}
              key={data.id}
              onClick={() => handleSuggestionClick(data)}
              onMouseEnter={() => setActiveSuggestionIndex(index)}
            >
              {data.name} 
            </li>
          ))}
        </ul>
        </div>
        
      )}
    </div>
  );
};
AutocompleteInput.propTypes = {
placeholder: PropTypes.string.isRequired,
 data: PropTypes.array, 
};

export default AutocompleteInput;
