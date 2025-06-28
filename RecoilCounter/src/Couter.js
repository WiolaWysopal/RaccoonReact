import React from "react";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

// create atom - global state
const counterState = atom({
  key: "counterState",
  default: 0,
});

// doubleCounter - for selector demonstration only
// get - allows to get atom or other selector states, which why is passed as an object
const doubleCounterState = selector({
  key: "doubleCounterState",
  get: ({ get }) => {
    const count = get(counterState);
    return count * 2;
  },
});

// readable and state changing component
const Counter = () => {
  const [count, setCount] = useRecoilState(counterState);
  const doubleCount = useRecoilValue(doubleCounterState);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2> Counter: {count}</h2>
      <h3> Counter double value: {doubleCount} </h3>
      <button onClick={increase}> Increase </button>
      <button onClick={decrease}> Decrease </button>
    </div>
  );
};

export default Counter;
