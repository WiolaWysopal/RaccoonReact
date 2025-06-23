import React, { useState } from "react";
import { themeContext } from "./ThemeContext";

export default function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <themeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
}
