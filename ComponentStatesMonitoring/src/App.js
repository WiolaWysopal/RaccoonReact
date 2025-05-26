import React, { useState } from "react";
import PropsAndStateLogger from "./PropsAndStateLogger";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Welcome!");

  return (
    <div class="App">
      <button onClick={() => setMessage("Message changed")}>
        Change message
      </button>
      <PropsAndStateLogger message={message} />
    </div>
  );
}

export default App;
