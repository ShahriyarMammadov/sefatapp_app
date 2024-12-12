import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://sefatapp.up.railway.app/" }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "auth/user/login",
        method: "POST",
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: "appUsers/register",
        method: "POST",
        body: data,
      }),
    }),
    updateProfile: builder.mutation({
      query: ({ data, userId }) => ({
        url: `appUsers/${userId}`,
        method: "PATCH",
        body: data,
      }),
    }),
    verifyOtp: builder.mutation({
      query: (data) => ({
        url: "appUsers/verify-otp",
        method: "POST",
        body: data,
      }),
    }),
    getFavorites: builder.query({
      query: (userId) => `wishlist/${userId}`,
    }),
    addFavorite: builder.mutation({
      query: (data) => ({
        url: "wishlist",
        method: "POST",
        body: data,
      }),
    }),
    getDoctors: builder.query({
      query: () => "doctors",
    }),
    getClinics: builder.query({
      query: () => "clinics",
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useUpdateProfileMutation,
  useVerifyOtpMutation,
  useGetFavoritesQuery,
  useAddFavoriteMutation,
  useGetDoctorsQuery,
  useGetClinicsQuery,
} = authApi;
