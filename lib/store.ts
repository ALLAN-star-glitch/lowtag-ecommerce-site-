// lib/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { lowtagApi } from './features/services/lowtagApiSlice';


export const makeStore = () =>
  configureStore({
    reducer: {
      [lowtagApi.reducerPath]: lowtagApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(lowtagApi.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
