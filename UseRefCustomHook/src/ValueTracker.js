import React, { useState } from "react";
import { usePrevious } from "./usePrevious";

export default function ValueTracker() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div style={{ fontFamily: "Arial", padding: "2rem" }}>
      <h2>Value Tracker</h2>
      <p>
        Current count: <strong>{count}</strong>
      </p>
      <p>
        Previous count: <strong>{prevCount ?? "Click Increment button"}</strong>
      </p>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button
        onClick={() => setCount(count - 1)}
        style={{ marginLeft: "1rem" }}
      >
        Decrement
      </button>
    </div>
  );
}
