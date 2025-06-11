import React, { useState, useMemo } from "react";

// Przykładowa skomplikowana funkcja (np. sumowanie liczb do count)
function heavyComputation(num) {
  console.log("I do expensive calculations...");
  let total = 0;
  for (let i = 0; i <= num * 1000000; i++) {
    total += i;
  }
  return total;
}

function OptimizedComponent() {
  const [count, setCount] = useState(5);
  const [multiplier, setMultiplier] = useState(1);
  const [name, setName] = useState("");

  // useMemo zapamiętuje wynik dopóki 'count' się nie zmieni
  const computedValue = useMemo(() => heavyComputation(count), [count]);

  return (
    <div>
      <h2>Calculating useMemo Optimization</h2>

      <div>
        <label>
          Count (affects calculations):
          <input
            type="number"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
        </label>
      </div>

      <div>
        <label>
          Multiplier (not affects calculations):
          <input
            type="number"
            value={multiplier}
            onChange={(e) => setMultiplier(Number(e.target.value))}
          />
        </label>
      </div>

      <div>
        <label>
          Name (not affects calculations):
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>

      <p>Expensive calculation value: {computedValue}</p>
      <p>Result * multiplier: {computedValue * multiplier}</p>
      <p>Given name: {name}</p>
    </div>
  );
}

export default OptimizedComponent;
