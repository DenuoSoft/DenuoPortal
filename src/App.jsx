import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Layout } from './components/layout/layout';
import { Main } from './pages/main/main';
import { HR } from './pages/hr/hr';
import { Marketing } from './pages/marketing/marketing';
import { IT } from './pages/it/it';
import { Forms } from './pages/forms/forms';
import { Phonebook } from './pages/phonebook/phonebook';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
	return (
		<Layout>
			<Header />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/hr' element={<HR />} />
				<Route path='/marketing' element={<Marketing />} />
				<Route path='/it' element={<IT />} />
				<Route path='/forms' element={<Forms />} />
				<Route path='/phonebook' element={<Phonebook />} />
			</Routes>
			<Footer />
		</Layout>
	);
};
