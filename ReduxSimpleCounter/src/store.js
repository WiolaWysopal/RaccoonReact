import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";

export const storeVariable = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
