import { useState } from "react";
import { themeContext } from "./ThemeContext";
import { useContext } from "react";
import { useEffect } from "react";

export const useDarkMode = (isDarkMode) => {
  const themeVariable = useContext(themeContext);
  const [darkMode, setDarkMode] = useState(isDarkMode);

  useEffect(() => {
    if (darkMode) {
      themeVariable.dispatch({ type: "dark" });
    } else {
      themeVariable.dispatch({ type: "light" });
    }
  }, [darkMode, themeVariable]);

  return [darkMode, setDarkMode];
};
