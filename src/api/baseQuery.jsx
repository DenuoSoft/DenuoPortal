import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { logout, setCredentials } from '../components/auth/authSlice';
import { getToken, getRefreshToken, isTokenExpired, clearTokens } from '../utils/tokenUtils';

const BASE_URL = import.meta.env.VITE_API_URL;

const baseQuery = fetchBaseQuery({
	baseUrl: BASE_URL,
	prepareHeaders: (headers) => {
		const token = getToken();
		if (token && !isTokenExpired(token)) {
			headers.set('Authorization', `Bearer ${token}`);
		}
		return headers;
	},
});

export const baseQueryWithReauth = async (args, api, extraOptions) => {
	let result = await baseQuery(args, api, extraOptions);

	if (result.error?.status === 401) {
		const refreshToken = getRefreshToken();

		if (refreshToken && !isTokenExpired(refreshToken)) {
			const refreshResult = await baseQuery(
				{
					url: '/auth/refresh/',
					method: 'POST',
					body: { refresh: refreshToken },
				},
				api,
				extraOptions
			);

			if (refreshResult.data) {
				const newAccessToken = refreshResult.data.access;
				localStorage.setItem('authToken', newAccessToken);
				
				api.dispatch(setCredentials({
					token: newAccessToken,
					refreshToken: refreshToken,
				}));

				result = await baseQuery(args, api, extraOptions);
			} else {
				handleLogout(api);
			}
		} else {
			handleLogout(api);
		}
	}

	return result;
};

const handleLogout = (api) => {
	api.dispatch(logout());
	clearTokens();
};