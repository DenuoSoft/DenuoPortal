import { useState } from 'react';
import { userData } from '../../../../data/userData';
import css from './inputAutocomplete.module.scss'
// Пример данных пользователей
/* const users = [
  { id: 0, name: 'vasya', phone: 3456 },
  { id: 1, name: 'kolya', phone: 7891 }
]; */

const AutocompleteInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    
    if (value) {
      const filtered = userData.filter(user =>
        user.name.toLowerCase().includes(value.toLowerCase())
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
  
  const handleSuggestionClick = (user) => {
    setInputValue(user.name);
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
        placeholder="Partner"
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
          {filteredSuggestions.map((user, index) => (
            <li
              className={ css.list}
              key={user.id}
              onClick={() => handleSuggestionClick(user)}
              onMouseEnter={() => setActiveSuggestionIndex(index)}
            >
              {user.name} 
            </li>
          ))}
        </ul>
        </div>
        
      )}
    </div>
  );
};

export default AutocompleteInput;
