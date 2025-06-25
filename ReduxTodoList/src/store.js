import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

const storeVariable = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default storeVariable;
