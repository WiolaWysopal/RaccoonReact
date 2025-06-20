import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import { useEffect } from "react";

import AdminPanel from "./components/AdminPanel";
import LoginForm from "./components/LoginForm";
import { useState } from "react";

export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="App">
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Router>
          <LoginForm path="/" />
          <AdminPanel path="/adminpanel/*" />
        </Router>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
