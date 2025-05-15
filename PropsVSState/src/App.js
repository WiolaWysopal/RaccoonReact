import React from "react";
import Counter from "./Counter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter initialValue={5} />
    </div>
  );
}

export default App;
