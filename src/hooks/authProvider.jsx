// auth.js
import { useState, useEffect, createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import Keycloak from 'keycloak-js';
import {httpClient} from '../HttpClient';

const AuthContext = createContext(null);

const AuthProvider = ({ children, initOptions }) => {
  const [keycloak, setKeycloak] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: '', email: '' });

  useEffect(() => {
    const kc = new Keycloak(initOptions);
    setKeycloak(kc);

    kc.init({
      onLoad: 'login-required',
      checkLoginIframe: false,
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
		
  }, [initOptions]);

  const authContextValue = {
    keycloak,
    authenticated,
    userInfo,
    login: keycloak ? () => keycloak.login() : null,
    logout: keycloak ? () => keycloak.logout() : null,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
  initOptions: PropTypes.shape({
    url: PropTypes.string.isRequired,
    realm: PropTypes.string.isRequired,
    clientId: PropTypes.string.isRequired,
  }).isRequired,
};
const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };