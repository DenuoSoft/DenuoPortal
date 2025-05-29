import {Routes, Route} from 'react-router-dom';
import {Layout} from './components/layout/layout';
import Header from './components/header/header';
import {Footer} from './components/footer/footer';
import {useKeycloak} from './components/auth/keycloak-context';
import {
	Main,
	HR,
	Marketing,
	IT,
	Forms,
	Phonebook,
} from './components/pages/index';
const AppContent = () => {
	const {authenticated, userInfo} = useKeycloak();

	return (
		<>
			<Header userInfo={userInfo} isAuthenticated={authenticated} />
			<Layout isAuthenticated={authenticated}>
				<Routes>
					<Route path="/" element={<Main isAuthenticated={authenticated}/>} />
					<Route path="/hr" element={<HR />} />
					<Route path="/marketing" element={<Marketing />} />
					<Route path="/it" element={<IT />} />
					<Route path="/forms" element={<Forms />} />
					<Route path="/phonebook" element={<Phonebook />} />
				</Routes>
			</Layout>
			<Footer />
		</>
	);
};

export default AppContent;
