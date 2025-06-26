import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light", // albo dark dla ciemnego motywu
};

const settingSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = settingSlice.actions;
export default settingSlice.reducer;
