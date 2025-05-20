/* eslint-disable no-unused-vars */
import Header from './components/header/header';
import {Footer} from './components/footer/footer';
import {Layout} from './components/layout/layout';
import {Main, HR, Marketing, IT, Forms, Phonebook, Admin }  from './components/pages/index'
import {Routes, Route} from 'react-router-dom';
import Keycloak from 'keycloak-js';
import {useState, useEffect} from 'react';
import {httpClient} from './HttpClient';

const initOptions = {
	url: 'https://sso.denuo.ru:8443',
	realm: 'denuo',
	clientId: 'portal',
};

let kc;

export const App = () => {
	const [userInfo, setUserInfo] = useState({
		name: '',
		email: '',
	});
	const [authenticated, setAuthenticated] = useState(false);
	const [keycloakInstance, setKeycloakInstance] = useState(null);
	useEffect(() => {
		if (!kc) {
			kc = new Keycloak(initOptions);
			setKeycloakInstance(kc);

			kc.init({
				onLoad: 'login-required',
				checkLoginIframe: true,
				pkceMethod: 'S256',
			})
				.then((auth) => {
					if (!auth) {
						window.location.reload();
					} else {
						//	console.info('Authenticated');
						//	console.log('auth', auth);
						//	console.log('Keycloak', kc);
						//	console.log('Access Token', kc.token);

						httpClient.defaults.headers.common[
							'Authorization'
						] = `Bearer ${kc.token}`;
						setAuthenticated(true);

						kc.onTokenExpired = () => {
							//	console.log('token expired');
						};

						kc.loadUserInfo()
							.then((data) => {
								setUserInfo({
									name: data.name,
									email: data.email,
									id: data.sub,
								});
							})
							.catch((error) => {
								console.error('Failed to load user info', error);
							});
					}
				})
				.catch(() => {
					console.error('Authentication Failed');
				});
		}
	}, []);
	return (
		<Layout>
			<Header name={userInfo.name} email={userInfo.email} isAuthenticated={authenticated}/>
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
	);
};
