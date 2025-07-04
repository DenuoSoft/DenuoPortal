import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: 'https://portal.denuo.ru'}),
  tagTypes: ['Data'], // Упростил теги, так как у вас один источник данных
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => '/datadb.json', // Правильный путь к JSON-файлу
      providesTags: ['Data'],
    }),
    // Если вам нужно разделять новости и события, можно так:
    getNews: builder.query({
      query: () => '/datadb.json',
      transformResponse: (response) => response.news, // Предполагая, что в JSON есть поле news
      providesTags: ['Data'],
    }),
    getEvents: builder.query({
      query: () => '/datadb.json',
      transformResponse: (response) => response.events, // Предполагая, что в JSON есть поле events
      providesTags: ['Data'],
    }),
    // Остальные методы мутаций нужно пересмотреть, 
    // так как вы не можете изменять статический JSON-файл на сервере через HTTP-запросы
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