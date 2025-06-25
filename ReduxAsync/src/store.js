import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postsSlice";

const storeVariable = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

export default storeVariable;
