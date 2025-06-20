import "./App.css";
import { useState } from "react";
import UserContext from "./UserContext";
import Account from "./Account";
import LoginForm from "./LoginForm";
import { Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <div className="App">
      <UserContext.Provider value={{ user, login, logout }}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
