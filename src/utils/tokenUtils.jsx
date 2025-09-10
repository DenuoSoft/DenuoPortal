export const isTokenExpired = (token) => {
	if (!token) return true;

	try {
		const payload = JSON.parse(atob(token.split('.')[1]));
		const exp = payload.exp * 1000;
		return Date.now() >= exp - (60 * 1000);
	} catch (error) {
		console.error('Error parsing token:', error);
		return true;
	}
};

export const getToken = () => localStorage.getItem('authToken');
export const getRefreshToken = () => localStorage.getItem('refreshToken');
export const setTokens = (access, refresh) => {
	localStorage.setItem('authToken', access);
	localStorage.setItem('refreshToken', refresh);
};
export const clearTokens = () => {
	localStorage.removeItem('authToken');
	localStorage.removeItem('refreshToken');
};
