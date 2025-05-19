import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    tagTypes: ['News'],
    endpoints: builder => ({
        getNews: builder.query({
            query: () => '/news',
            providesTags: ['News']
        }),
        createNews: builder.mutation({
            query: news => ({
                url: '/news',
                method: 'POST',
                body: news
            }),
            invalidatesTags: ['News']
        }),
        deleteNews: builder.mutation({
            query: id => ({
                url: `/news/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['News']
        }) 
    })
})
console.log(apiSlice)
export const { useGetNewsQuery, useCreateNewsMutation, useDeleteNewsMutation } = apiSlice;