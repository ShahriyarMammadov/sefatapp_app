import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./appSlice";
import counterReducer from "./counterSlice";
import burgerReducer from "./burgerSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    counters: counterReducer,
    burger: burgerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
