import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const app_id = "96c1c767e43949a3a7e72c8aa392ab54";
export const exchangeApi = createApi({
  reducerPath: "exchangeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://openexchangerates.org/api/" }),
  endpoints: (builder) => ({
    getLatestRates: builder.query<LatestRates, void>({
      query: () => ({ url: "latest.json", params: { app_id } }),
    }),
    getCurrencies: builder.query<Currencies, void>({
      query: () => ({ url: "currencies.json", params: { app_id } }),
    }),
  }),
});

export const { useGetCurrenciesQuery, useGetLatestRatesQuery } = exchangeApi;
