import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./usersSlice";
export const store = configureStore({
  reducer: {
    fetchUser: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
