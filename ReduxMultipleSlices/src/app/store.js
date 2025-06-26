import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import settingsReducer from "../features/settingSlice";

const loggerMiddleware = (store) => (next) => (action) => {
  console.log("Dispatching: ", action);
  const resultVariable = next(action);
  console.log("Next state:", store.getState());
  return resultVariable;
};

export const storeVariable = configureStore({
  reducer: {
    user: userReducer,
    settings: settingsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
});
