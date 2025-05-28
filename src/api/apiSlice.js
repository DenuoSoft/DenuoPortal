import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001'}),
	tagTypes: ['News', 'Event'],
	endpoints: (builder) => ({
		getNews: builder.query({
			query: () => '/news',
			providesTags: ['News'],
		}),
		createNews: builder.mutation({
			query: (news) => ({
				url: '/news',
				method: 'POST',
				body: news,
			}),
			invalidatesTags: ['News'],
		}),
		deleteNews: builder.mutation({
			query: (id) => ({
				url: `/news/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['News'],
		}),
		getEvent: builder.query({
			query: () => '/events',
			providesTags: ['Events'],
		}),
		createEvent: builder.mutation({
			query: (event) => ({
				url: '/events',
				method: 'POST',
				body: event,
			}),
			invalidatesTags: ['Events'],
		}),
		deleteEvent: builder.mutation({
			query: (id) => ({
				url: `/events/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Events'],
		}),
	}),
});
export const {
	useGetNewsQuery,
	useCreateNewsMutation,
	useDeleteNewsMutation,
	useGetEventQuery,
	useCreateEventMutation,
	useDeleteEventMutation,
} = apiSlice;
