import React, { useState } from "react";
import "./App.css";

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Current counter value: {count}</p>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}

export default Counter;
