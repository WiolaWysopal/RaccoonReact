import React from "react";
import ThemeProvider from "./ThemeProvider";
import AuthProvider from "./AuthProvider";
import Dashboard from "./Dashboard";
import LoginComponent from "./LoginComponent";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ThemeProvider>
          <LoginComponent />
          <Dashboard />
        </ThemeProvider>
      </AuthProvider>
    </div>
  );
}
