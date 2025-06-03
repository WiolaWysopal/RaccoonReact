import React, { useState } from "react";
import LifecycleLogger from "./LifecycleLogger";
import "./App.css";

function App() {
  const [showLogger, setShowLogger] = useState(true);

  return (
    <div class="App">
      <button onClick={() => setShowLogger((prev) => !prev)}>
        {showLogger ? "Hide" : "Show"} Logger
      </button>

      {showLogger && <LifecycleLogger />}
    </div>
  );
}

export default App;
