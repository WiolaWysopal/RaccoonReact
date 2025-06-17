import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";

const CounterUI = () => {
  const { count, increment, decrement } = useContext(CounterContext);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CounterUI;
