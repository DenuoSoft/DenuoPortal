import {useState} from 'react';
import './Search.css'; // Создайте этот файл для стилей
import {Input} from '../form';
import ContentItems from '../contentItems/ContentItems';

const Search = () => {
	const [query, setQuery] = useState('');
	const [searchEngine, setSearchEngine] = useState('google');

	const handleSearch = (e) => {
		e.preventDefault();
		if (!query.trim()) return;

		let searchUrl;
		if (searchEngine === 'google') {
			searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
				query
			)}`;
		} else {
			searchUrl = `https://yandex.ru/search/?text=${encodeURIComponent(query)}`;
		}

		window.open(searchUrl, '_blank');
	};

	return (
		<div className="search-container">
			<ContentItems>
				<div className="search-box">
					<div className="title">Internet search</div>
					<form onSubmit={handleSearch}>
						<div className="search-input-container">
							<Input
								type="text"
								value={query}
								onChange={(e) => setQuery(e.target.value)}
								placeholder="Enter your query..."
								className="search-input"
							/>
							<button type="submit" className="search-button">
								Search
							</button>
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
