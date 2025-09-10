export const userEndpoints = (builder) => ({
  getUsers: builder.query({
			query: (params = {}) => ({
				url: '/api/accounts/users',
				params: params,
			}),
			providesTags: ['User'],
		})
})