import { useState } from "react";

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const incrementValue = () => setCount((prev) => prev + 1);
  const decrementValue = () => setCount((prev) => prev - 1);
  const resetValue = () => setCount(initialValue);

  return {
    count,
    increment: incrementValue,
    decrement: decrementValue,
    reset: resetValue,
  };
};

export default useCounter;
