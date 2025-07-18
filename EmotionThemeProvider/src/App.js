import React from "react";
import { darkTheme, lightTheme } from "./Theme";
import ThemeToggle from "./Theme";
import { ThemeProvider } from "@emotion/react";
import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <div
        style={{
          background: isDarkMode ? darkTheme.background : lightTheme.background,
          color: isDarkMode ? darkTheme.textColor : lightTheme.textColor,
          height: "100vh",
          padding: "1rem",
        }}
      >
        <h1> Hello! </h1>
        <p> This is {isDarkMode ? "dark" : "light"} mode </p>
        <ThemeToggle
          toggle={() => setIsDarkMode((prev) => !prev)}
          isDarkMode={isDarkMode}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
