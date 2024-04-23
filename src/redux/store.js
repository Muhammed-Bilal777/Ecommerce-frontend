import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/featues/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
