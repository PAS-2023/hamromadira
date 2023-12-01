// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:3001/api' }),
  endpoints: (builder) => ({
      productCart: builder.mutation({
          query: () => `product`
      }),
    //   login: builder.mutation({
    //       query: ({data, token}) => ({
    //           url: 'login',
    //           method: 'POST',
    //           body: data,
    //           headers: {
    //               'authentication' : token
    //           }
    //       })
    //   }),
      // other api
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useProductCartMutation } = apiSlice;