import React, { useState } from "react";
import LifecycleClass from "./LifecycleClass";
import LifecycleFunction from "./LifecycleFunction";
import "./App.css";

const App = () => {
  const [showClass, setShowClass] = useState(true);

  return (
    <div class="App">
      <h1>Components comparison</h1>
      <button onClick={() => setShowClass(!showClass)}>
        Switch Component {showClass ? "functional" : "class"}
      </button>
      <hr />
      {showClass ? <LifecycleClass /> : <LifecycleFunction />}
    </div>
  );
};

export default App;
