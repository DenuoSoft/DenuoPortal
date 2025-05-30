/* eslint-disable no-unused-vars */
import {useState, useEffect} from 'react';
import Keycloak from 'keycloak-js';
import {httpClient} from '../../HttpClient';
import PropTypes from 'prop-types';
import {KeycloakContext} from './keycloak-context';
const initOptions = {
	url: 'https://sso.denuo.ru:8443',
	realm: 'denuo',
	clientId: 'portal',
};

let kc;

const AuthComponent = ({children}) => {
	const [infoMessage, setInfoMessage] = useState('');
	const [authenticated, setAuthenticated] = useState(false);
	const [userInfo, setUserInfo] = useState({name: '', email: '', id: ''});
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
						/* console.info('Authenticated');
						console.log('auth', auth);
						console.log('Keycloak', kc);
						console.log('Access Token', kc.token); */

						try {
							httpClient.defaults.headers.common[
								'Authorization'
							] = `Bearer ${kc.token}`;
							console.debug('Authorization header set successfully.');
						} catch (error) {
							console.error('Failed to set authorization header:', error);
							setInfoMessage('Failed to set authorization header');
						}

						kc.onTokenExpired = () => {
							console.log('token expired');
						};

						kc.loadUserInfo()
							.then((data) => {
								console.log(data)
								setUserInfo({
									name: data.name,
									email: data.email,
									shortname: data.preferred_username,
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

	const authContextValue = {
		authenticated,
		userInfo,
		keycloak: keycloakInstance,
	};

	return (
		<KeycloakContext.Provider value={authContextValue}>
			{children}
		</KeycloakContext.Provider>
	);
};

AuthComponent.propTypes = {
	children: PropTypes.node.isRequired,
};

export default AuthComponent;
