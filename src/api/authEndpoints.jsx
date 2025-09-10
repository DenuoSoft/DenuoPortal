import { getToken, getRefreshToken, setTokens, clearTokens } from '../utils/tokenUtils';
import { logout, setCredentials } from '../components/auth/authSlice';

const STATIC_CREDENTIALS = {
	username: import.meta.env.VITE_API_USER,
	password: import.meta.env.VITE_API_PASS,
};

export const authEndpoints = (builder) => ({
	login: builder.mutation({
		query: () => ({
			url: '/auth/login/',
			method: 'POST',
			body: STATIC_CREDENTIALS,
		}),
		async onQueryStarted(arg, { dispatch, queryFulfilled }) {
			try {
				const { data } = await queryFulfilled;
				if (data?.access) {
					setTokens(data.access, data.refresh);
					dispatch(setCredentials({
						token: data.access,
						refreshToken: data.refresh,
						user: data.user || null,
					}));
				}
			} catch (error) {
				console.error('Login failed:', error);
			}
		},
	}),

	refreshToken: builder.mutation({
		query: (refreshToken) => ({
			url: '/auth/refresh/',
			method: 'POST',
			body: { refresh: refreshToken },
		}),
		async onQueryStarted(arg, { dispatch, queryFulfilled }) {
			try {
				const { data } = await queryFulfilled;
				if (data?.access) {
					localStorage.setItem('authToken', data.access);
					dispatch(setCredentials({
						token: data.access,
						refreshToken: arg,
					}));
				}
			} catch (error) {
				console.error('Token refresh failed:', error);
				dispatch(logout());
				clearTokens();
			}
		},
	}),

	logout: builder.mutation({
		query: () => ({
			url: '/auth/logout/',
			method: 'POST',
			body: { refresh: getRefreshToken() },
		}),
		async onQueryStarted(arg, { dispatch, queryFulfilled }) {
			try {
				await queryFulfilled;
			} finally {
				dispatch(logout());
				clearTokens();
			}
		},
	}),

	verifyToken: builder.query({
		query: () => ({
			url: '/auth/verify/',
			method: 'POST',
			body: { token: getToken() },
		}),
	}),
});