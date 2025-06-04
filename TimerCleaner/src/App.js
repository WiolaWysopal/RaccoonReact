import React, { useState } from "react";
import Timer from "./Timer";
import "./App.css";

function App() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div className="App">
      <h1>Timera switcher</h1>
      <button onClick={() => setShowTimer((prev) => !prev)}>
        {showTimer ? "Hide timer" : "Show timer"}
      </button>

      {showTimer && <Timer />}
    </div>
  );
}

export default App;
