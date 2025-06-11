import React, { useState } from "react";
import Child from "./Child";

function InlineFunctionExample() {
  const [count, setCount] = useState(0);

  console.log("Render Parent (InlineFunctionExample)");

  return (
    <div>
      <h2>Inline Function Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increase Count
      </button>

      {/* Funkcja inline: tworzona od nowa przy każdym renderze */}
      <Child
        label="Click me (inline)"
        onClick={() => console.log("Child component clicked (inline)")}
      />
    </div>
  );
}

export default InlineFunctionExample;
