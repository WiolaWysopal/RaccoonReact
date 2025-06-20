import "./App.css";
import { Router } from "@reach/router";

import AdminPanel from "./components/AdminPanel";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="App">
      <Router>
        <LoginForm path="/" />
        <AdminPanel path="/adminpanel/*" />
      </Router>
    </div>
  );
}

export default App;
