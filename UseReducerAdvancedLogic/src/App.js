import "./App.css";
import { useDarkMode } from "./useDarkMode";
import { useContext } from "react";
import { themeContext } from "./ThemeContext";

function App() {
  const [darkMode, setDarkMode] = useDarkMode(false);

  const theme = useContext(themeContext);

  const { state } = useContext(themeContext);
  const { user } = state || {};
  const { username, isLoggedIn } = user || {};

  return (
    <div className={`app-container ${darkMode ? "dark" : ""}`}>
      <h1 className={`app-title ${darkMode ? "dark" : ""}`}>
        {darkMode ? "Dark theme" : "Light theme"}
      </h1>
      <p className={`app-paragraph ${darkMode ? "dark" : ""}`}>Hello</p>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`app-button ${darkMode ? "dark" : ""}`}
      >
        {darkMode ? "Select light theme" : "Select dark theme"}
      </button>

      {!isLoggedIn ? (
        <button
          className={`app-button ${darkMode ? "dark" : ""}`}
          onClick={() =>
            theme.dispatch({
              type: "login",
              payload: { username: "Jane" },
            })
          }
        >
          Login as Jane
        </button>
      ) : (
        <button
          className={`app-button ${darkMode ? "dark" : ""}`}
          onClick={() => theme.dispatch({ type: "logout" })}
        >
          Logout ({username})
        </button>
      )}
    </div>
  );
}

export default App;
