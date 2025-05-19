import React from "react";
import Parent from "./Parent";
import Child from "./Child";
import "./App.css";

const App = () => {
  return (
    <div>
      <h1>Example of using Children Component</h1>
      <Parent>
        <Child />
      </Parent>
    </div>
  );
};

export default App;
