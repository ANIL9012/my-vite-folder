import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slice/UserSlice";
export const store = configureStore({
  reducer: {
    users: userSlice.reducer,
  },
});
