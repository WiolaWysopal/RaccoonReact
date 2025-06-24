import { create } from "zustand";
import { createUserSlice } from "./UserSlice";
import { createThemeSlice } from "./ThemeSlice";

export const useStore = create((set, get) => ({
  ...createUserSlice(set, get),
  ...createThemeSlice(set, get),
}));
