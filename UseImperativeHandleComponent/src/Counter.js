import React, { useState, useImperativeHandle, forwardRef } from "react";

// Komponent zliczający, udostępnia metody reset i forceUpdate
const Counter = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);
  const [, setTick] = useState(0); // używane do forceUpdate

  // Udostępnienie metod rodzicowi
  useImperativeHandle(ref, () => ({
    reset() {
      setCount(0);
    },
    forceUpdate() {
      setTick((prev) => prev + 1);
    },
  }));

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
});

export default Counter;
