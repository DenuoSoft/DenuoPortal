import {useState, useEffect} from 'react';
import Keycloak from 'keycloak-js';
import {httpClient} from '../../HttpClient';
import PropTypes from 'prop-types';
import {KeycloakContext} from './keycloak-context';

const initOptions = {
  url: 'https://sso.denuo.ru:8443', 
  realm: 'denuo',
  clientId: 'portaldev', 
};

let kc;

const AuthComponent = ({children}) => {
  // eslint-disable-next-line no-unused-vars
  const [infoMessage, setInfoMessage] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState({name: '', email: '', id: ''});
  const [keycloakInstance, setKeycloakInstance] = useState(null);

  const handleStorageAccess = async () => {
    if (document.hasStorageAccess && document.requestStorageAccess) {
      try {
        const hasAccess = await document.hasStorageAccess();
        if (!hasAccess) {
          await document.requestStorageAccess();
        }
        return true;
      } catch (error) {
        console.warn('Storage access denied:', error);
        return false;
      }
    }
    return true;
  };

  useEffect(() => {
    const initializeKeycloak = async () => {
      if (!kc) {
        kc = new Keycloak(initOptions);
        setKeycloakInstance(kc);

        try {
          const storageAccessGranted = await handleStorageAccess();
          if (!storageAccessGranted) {
            console.warn('Storage access not granted - authentication may fail');
          }

          const auth = await kc.init({
            onLoad: 'login-required',
            checkLoginIframe: true,
            pkceMethod: 'S256',
            enableLogging: true, 
          });

          if (!auth) {
            window.location.reload();
            return;
          }

          //console.info('Authenticated');
          setAuthenticated(true);

          try {
            httpClient.defaults.headers.common['Authorization'] = `Bearer ${kc.token}`;
           // console.debug('Authorization header set successfully.');
          } catch (error) {
            console.error('Failed to set authorization header:', error);
            setInfoMessage('Failed to set authorization header');
          }

          kc.onTokenExpired = () => {
           // console.log('Token expired, attempting refresh...');
            kc.updateToken(30)
              .then(refreshed => {
                if (refreshed) {
             //     console.log('Token refreshed');
                  httpClient.defaults.headers.common['Authorization'] = `Bearer ${kc.token}`;
                }
              })
              .catch(err => {
                console.error('Failed to refresh token:', err);
                kc.logout();
              });
          };

          const userData = await kc.loadUserInfo();
          setUserInfo({
            name: userData.name,
            email: userData.email,
            shortname: userData.preferred_username,
          });

        } catch (error) {
          console.error('Authentication Failed:', error);
          kc = null;
          setAuthenticated(false);
          setKeycloakInstance(null);
        }
      }
    };
if (window.isSecureContext) {
      initializeKeycloak();
    } else {
      console.error('Authentication requires secure context (HTTPS)');
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