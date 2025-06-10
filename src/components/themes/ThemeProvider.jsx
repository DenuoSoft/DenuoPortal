import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {ThemeContext} from './ThemeContext';

export const ThemeProvider = ({children}) => {
	const [theme, setTheme] = useState('light');

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
			setTheme(savedTheme);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('theme', theme);

		document.body.className = theme;
	}, [theme]);

	const toggleTheme = () => {
		setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
	};

	return (
		<ThemeContext.Provider value={{theme, toggleTheme}}>
			{children}
		</ThemeContext.Provider>
	);
};
ThemeProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
