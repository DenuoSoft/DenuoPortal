/* eslint-disable no-unused-vars */
import Header from './components/header/header';
import {Footer} from './components/footer/footer';
import {Layout} from './components/layout/layout';
import {
	Main,
	HR,
	Marketing,
	IT,
	Forms,
	Phonebook,
	Admin,
} from './components/pages/index';
import {Routes, Route} from 'react-router-dom';
import {AuthProvider} from './hooks/authProvider.jsx';

const App = () => {
	const initOptions = {
		url: 'https://sso.denuo.ru:8443',
		realm: 'denuo',
		clientId: 'portal',
	};

	return (
		<AuthProvider initOptions={initOptions}>
			<Layout>
				<Header />
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/hr" element={<HR />} />
					<Route path="/marketing" element={<Marketing />} />
					<Route path="/it" element={<IT />} />
					<Route path="/forms" element={<Forms />} />
					<Route path="/phonebook" element={<Phonebook />} />
					<Route path="/admin" element={<Admin />} />
				</Routes>
				<Footer />
			</Layout>
		</AuthProvider>
	);
};
export default App;