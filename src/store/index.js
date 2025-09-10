/* eslint-disable no-undef */
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';
import authReducer from '../components/auth/authSlice'

const stringMiddleware = () => (next) => (action) => {
	if (typeof action === 'string') {
		return next({
			type: action,
		});
	}
	return next(action);
};
const store = configureStore({
	reducer: {
		auth: authReducer,
		[apiSlice.reducerPath]: apiSlice.reducer
	},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware, apiSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production'
    
})
store.dispatch(apiSlice.endpoints.login.initiate())
export default store;
