import React, { useState, useCallback } from "react";
import Child from "./Child";

function UseCallbackExample() {
  const [count, setCount] = useState(0);

  console.log("Render Parent (UseCallbackExample)");

  // Funkcja memoizowana – ta sama instancja jeśli nie zmienia się zależność
  const handleClick = useCallback(() => {
    console.log("Child Component Clicked (useCallback)");
  }, []);

  return (
    <div>
      <h2>useCallback Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increase Count
      </button>

      <Child label="Click me (useCallback)" onClick={handleClick} />
    </div>
  );
}

export default UseCallbackExample;
