import {Routes, Route} from 'react-router-dom';
import {Layout} from '../layout/layout';
import Header from '../header/header';
import {Footer} from '../footer/footer';
import {useKeycloak} from '../auth/keycloak-context';
import {
	Main,
	HR,
	Marketing,
	IT,
	Forms,
	Phonebook,
} from '../pages/index';
const AppContent = () => {
	const {authenticated, userInfo} = useKeycloak();

	return (
		<>
			<Header userInfo={userInfo} isAuthenticated={authenticated} />
			<Layout isAuthenticated={authenticated} userInfo={userInfo}>
				<Routes>
					<Route path="/" element={<Main userInfo={userInfo}/>} />
					<Route path="/hr" element={<HR userInfo={userInfo}/>} />
					<Route path="/marketing" element={<Marketing userInfo={userInfo}/>} />
					<Route path="/it" element={<IT userInfo={userInfo}/>} />
					<Route path="/forms" element={<Forms />} />
					<Route path="/phonebook" element={<Phonebook />} />
				</Routes>
			</Layout>
			<Footer />
		</>
	);
};

export default AppContent;
