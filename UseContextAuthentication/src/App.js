import "./App.css";
import React, { createContext, useState } from "react";
import Form from "./Form";

export const UserContext = createContext();

export const App = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (name) => {
    setUser({ name }); // ✅ poprawione
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <UserContext.Provider value={{ user, isAuthenticated, login, logout }}>
      <Form />
    </UserContext.Provider>
  );
};

export default App;
