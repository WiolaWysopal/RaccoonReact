import React from "react";
import { useStore } from "./store";

const ThemeToggleButton = () => {
  const theme = useStore((state) => state.theme);
  const toggleTheme = useStore((state) => state.toggleTheme);

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? "Switch dark mode " : "Switch light mode"}
    </button>
  );
};

export default ThemeToggleButton;
