import React from "react";
import Hello from "./Hello";
import Counter from "./Counter";
import withLogger from "./withLogger";
import "./App.css";

const HelloWithLogger = withLogger(Hello);
const CounterWithLogger = withLogger(Counter);

function App() {
  return (
    <div>
      <HelloWithLogger name="Jane Doe" />
      <CounterWithLogger />
    </div>
  );
}

export default App;
