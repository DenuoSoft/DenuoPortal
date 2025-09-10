export const announceEndpoints = (builder) => ({
  getAnnounce: builder.query({
			query: () => '/api/announcements',
			providesTags: ['Announcements'],
		}),

		createAnnounce: builder.mutation({
			query: (results) => ({
				url: '/api/announcements',
				method: 'POST',
				body: results,
			}),
			invalidatesTags: ['Announcements'],
		}),

		deleteAnnounce: builder.mutation({
			query: (id) => ({
				url: `/api/announcements/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Announcements'],
		}),
})
