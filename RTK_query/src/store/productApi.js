import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
 reducerPath:"prodictApi",
 baseQuery:fetchBaseQuery({baseUrl:"https://dummyjson.com/"}),
 endpoints:(builder)=>({
 getAllProducts: builder.query({
    query:()=>'products'
 }),
 getSingleProduct: builder.query({
    query:(item)=>`products/search?q=${item}`
 }),
 })
});

export const {useGetAllProductsQuery, useGetSingleProductQuery} = productApi;