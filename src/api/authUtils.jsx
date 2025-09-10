import { logout, setCredentials } from '../components/auth/authSlice';
import { getToken, getRefreshToken, isTokenExpired, clearTokens } from '../utils/tokenUtils';
import { apiSlice } from '../api/apiSlice';

export const checkAuth = () => async (dispatch) => {
  const token = getToken();
  const refreshToken = getRefreshToken();

  if (token && !isTokenExpired(token)) {
    dispatch(setCredentials({ token, refreshToken, user: null }));
    return true;
  }

  if (refreshToken && !isTokenExpired(refreshToken)) {
    try {
      const result = await dispatch(
        apiSlice.endpoints.refreshToken.initiate(refreshToken)
      ).unwrap();
      
      if (result.access) {
        return true;
      }
    } catch (error) {
      console.error('Token refresh failed:', error);
    }
  }

  dispatch(logout());
  clearTokens();
  return false;
};