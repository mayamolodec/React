import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const quizApi = createApi({
  reducerPath: "quizApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
    credentials: "include",

  }),
  endpoints: (builder) => ({
    getQuizzes: builder.query({
      query: () => "quizes",
    }),
    getCurrentUser: builder.query({
      query: () => "users/me",
    }),
    signUp: builder.mutation({
      query: (userData) => ({
        url: "users/sign-up",
        method: "POST",
        body: userData,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),

    signIn: builder.mutation({
      query: (userCredentials) => ({
        url: "users/sign-in",
        method: "POST",
        body: userCredentials,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const {
  useGetQuizzesQuery,
  useGetCurrentUserQuery,
  useSignInMutation,
  useSignUpMutation,
} = quizApi;

quizApi.js

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const quizApi = createApi({
//   reducerPath: "quizApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "http://localhost:3000",
//     credentials: "include",
//   }),
//   endpoints: (builder) => ({
//     signUp: builder.mutation({
//       query: (body) => ({
//         url: "/users/sign-up",
//         method: "POST",
//         body,
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }),
//     }),

//     signIn: builder.mutation({
//       query: (body) => ({
//         url: "/users/sign-in",
//         method: "POST",
//         body,
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }),
//     }),

//     getCurrentUser: builder.query({
//       query: () => ({
//         url: "/users/me",
//         method: "GET",
//       }),
//     }),

//     getQuizzes: builder.query({
//       query: () => ({
//         url: "/quizes",
//         method: "GET",
//       }),
//     }),
//   }),
// });

// export const {
//   useSignUpMutation,
//   useSignInMutation,
//   useGetCurrentUserQuery,
//   useGetQuizzesQuery,
// } = quizApi;
