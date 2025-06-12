import React, { useState } from "react";

function expensiveCalculation(num) {
  console.log("Expensive calculations in progress...");
  let result = 0;
  for (let i = 0; i < 1e8; i++) {
    result += i % num;
  }
  return result;
}

export default function ExpensiveComponentWithoutMemo() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);

  const result = expensiveCalculation(number);

  return (
    <div>
      <h2>Without useMemo</h2>
      <p>Result: {result}</p>
      <button onClick={() => setCount((c) => c + 1)}>
        Increase counter ({count})
      </button>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
      />
    </div>
  );
}
