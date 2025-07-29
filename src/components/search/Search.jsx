import {useState, useEffect, useRef} from 'react';
import './search.scss';
import {Input} from '../form';
import ContentItems from '../contentItems/ContentItems';
import {HistoryIcon} from '../shared/icons/icon-history';

const Search = () => {
	const [query, setQuery] = useState('');
	const [searchEngine, setSearchEngine] = useState('google');
	const [history, setHistory] = useState([]);
	const [selectedFromHistory, setSelectedFromHistory] = useState(false);
	const [showDropdown, setShowDropdown] = useState(false);
	const dropdownRef = useRef(null);
	const inputRef = useRef(null);

	useEffect(() => {
		const savedHistory = localStorage.getItem('searchHistory');
		if (savedHistory) {
			setHistory(JSON.parse(savedHistory));
		}
	}, []);

	const filteredHistory = history
		.filter((item) => item.toLowerCase().includes(query.toLowerCase()))
		.sort((a, b) => {
			const aIndex = a.toLowerCase().indexOf(query.toLowerCase());
			const bIndex = b.toLowerCase().indexOf(query.toLowerCase());
			return aIndex - bIndex;
		});

	const shouldShowDropdown = showDropdown && filteredHistory.length > 0;

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target) &&
				event.target !== inputRef.current
			) {
				setShowDropdown(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	const saveToHistory = (query) => {
		const newHistory = [
			query,
			...history.filter((item) => item.toLowerCase() !== query.toLowerCase()),
		].slice(0, 10);

		setHistory(newHistory);
		localStorage.setItem('searchHistory', JSON.stringify(newHistory));
	};

	const clearHistory = () => {
		setHistory([]);
		localStorage.removeItem('searchHistory');
		setShowDropdown(false);
	};

	const performSearch = () => {
		if (!query.trim()) return;

		saveToHistory(query);
		const searchUrl =
			searchEngine === 'google'
				? `https://www.google.com/search?q=${encodeURIComponent(query)}`
				: `https://yandex.ru/search/?text=${encodeURIComponent(query)}`;

		window.open(searchUrl, '_blank');
		setShowDropdown(false);
		setQuery('');
	};

	const handleSearch = (e) => {
		e.preventDefault();
		performSearch();
	};

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			performSearch();
		}
	};

	useEffect(() => {
		if (query && selectedFromHistory) {
			performSearch();
			setSelectedFromHistory(false);
		}
	}, [query]);

	const handleHistoryItemClick = (item) => {
		setQuery(item);
		setSelectedFromHistory(true);
		setShowDropdown(false);
	};
	const highlightMatch = (text, query) => {
		const parts = text.split(new RegExp(`(${query})`, 'gi'));
		return parts.map((part, i) =>
			part.toLowerCase() === query.toLowerCase() ? (
				<mark key={i}>{part}</mark>
			) : (
				part
			)
		);
	};

	return (
		<div className="search-container">
			<ContentItems>
				<div className="search-box">
					<div className="title">Internet search</div>
					<form onSubmit={handleSearch}>
						<div className="search-input-container" ref={dropdownRef}>
							<Input
								ref={inputRef}
								type="text"
								value={query}
								onChange={(e) => {
									setQuery(e.target.value);
									setShowDropdown(true);
								}}
								onKeyDown={handleKeyDown}
								onFocus={() => setShowDropdown(true)}
								placeholder="Enter your query..."
							/>
							<button
								type="submit"
								className="search-button"
								onClick={handleSearch}
							>
								Search
							</button>

							{shouldShowDropdown && (
								<div className="dropdown-menu">
									<div className="history-section">
										<div className="dropdown-header">
											<div className="dropdown-title">History</div>
											<button 
												className="clear-history-button"
												onClick={clearHistory}
											>
												Clear history
											</button>
										</div>
										{filteredHistory.map((item, index) => (
											<div
												key={`his-${index}`}
												className="dropdown-item"
												onClick={() => handleHistoryItemClick(item)}
											>
												<span className="history-icon">
													<HistoryIcon />
												</span>
												{highlightMatch(item, query)}
											</div>
										))}
									</div>
								</div>
							)}
						</div>
						
						<div className="engine-selector">
							<label>
								<input
									type="radio"
									value="google"
									checked={searchEngine === 'google'}
									onChange={() => setSearchEngine('google')}
								/>
								Google
							</label>
							<label>
								<input
									type="radio"
									value="yandex"
									checked={searchEngine === 'yandex'}
									onChange={() => setSearchEngine('yandex')}
								/>
								Яндекс
							</label>
						</div>
					</form>
				</div>
			</ContentItems>
		</div>
	);
};

export default Search;