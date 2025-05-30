import React, { useState } from "react";
import UserGreeting from "./UserGreeting";
import withPropsLogger from "./withPropsLogger";
import "./App.css";

const LoggedUserGreeting = withPropsLogger(UserGreeting);

function App() {
  const [name, setName] = useState("Anna");

  return (
    <div className="App">
      <LoggedUserGreeting name={name} />
      <button
        onClick={() => setName(name === "Jane" ? "John" : "Jane")}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Change name
      </button>
    </div>
  );
}

export default App;
