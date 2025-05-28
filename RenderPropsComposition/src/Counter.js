import React, { useState } from "react";

const Counter = ({ children }) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prevCount) => prevCount + 1);

  return children({ count, increment });
};

export default Counter;
