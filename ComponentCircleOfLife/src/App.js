import React, { useState } from "react";
import LifecycleDemo from "./LifecycleDemo";
import "./App.css";

function App() {
  const [visible, setVisible] = useState(true);

  return (
    <div class="App">
      <h1>Component Life Cycle Demo</h1>
      <button onClick={() => setVisible((prev) => !prev)}>
        {visible ? "Hide" : "Show"} Component
      </button>
      {visible && <LifecycleDemo />}
    </div>
  );
}

export default App;
