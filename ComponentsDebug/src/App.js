import React, { useState } from "react";
import FaultyClass from "./FaultyClass";
import FaultyFunction from "./FaultyFunction";
import "./App.css";

const App = () => {
  const [showFunction, setShowFunction] = useState(true);

  return (
    <div class="App">
      <h1>Error in cleaning side effects</h1>
      <button onClick={() => setShowFunction(!showFunction)}>
        Switch component: {showFunction ? "class" : "functional"}
      </button>
      <hr />
      {showFunction ? <FaultyFunction /> : <FaultyClass />}
    </div>
  );
};

export default App;
