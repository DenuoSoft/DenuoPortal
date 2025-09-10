import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from './baseQuery';
import { authEndpoints } from './authEndpoints';
import { newsEndpoints } from './newsEndpoints';
import { announceEndpoints } from './announceEndpoints';
import { userEndpoints } from './userEndpoints';

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: baseQueryWithReauth,
	tagTypes: ['News', 'Announcements', 'User'],
	endpoints: (builder) => ({
		...authEndpoints(builder),
		...newsEndpoints(builder),
		...announceEndpoints(builder),
		...userEndpoints(builder),
	}),
	keepUnusedDataFor: 60, 
	refetchOnMountOrArgChange: 30, 
});
export const {
	useGetNewsQuery,
	useLoginMutation,
	useRefreshTokenMutation,
	useLogoutMutation,
	useVerifyTokenQuery,
	useGetUsersQuery,
	useCreateNewsMutation,
	useDeleteNewsMutation,
	useGetAnnounceQuery,
	useCreateAnnounceMutation,
	useDeleteAnnounceMutation,
} = apiSlice;
