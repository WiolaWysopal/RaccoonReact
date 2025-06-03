import React, { useState } from "react";
import "./ThemeToggle.css";

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <h1>{isDarkMode ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
