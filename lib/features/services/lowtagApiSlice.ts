import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_BASE_URL = 'http://localhost:1337/api/';

export const lowtagApi = createApi({
  reducerPath: 'lowtagApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  tagTypes: ['Category', 'Product', 'Deal', 'Tag'],
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => 'categories?populate=*',
      providesTags: ['Category'],
    }),
    getCategoryBySlug: builder.query({
      query: (slug) => `categories?filters[slug][$eq]=${slug}&populate=*`,
      providesTags: ['Category'],
    }),
    getProducts: builder.query({
      query: () => 'products?populate=*',
      providesTags: ['Product'],
    }),
    getProductsByTag: builder.query({
      query: (tagSlug) => `products?filters[tags][slug][$eq]=${tagSlug}&populate=*`,
      providesTags: ['Product'],
    }),
    getDeals: builder.query({
      query: () => 'deals?filters[active][$eq]=true&populate=*',
      providesTags: ['Deal'],
    }),
    getTags: builder.query({
      query: () => 'tags?populate=*',
      providesTags: ['Tag'],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetCategoryBySlugQuery,
  useGetProductsQuery,
  useGetProductsByTagQuery,
  useGetDealsQuery,
  useGetTagsQuery,
} = lowtagApi;
