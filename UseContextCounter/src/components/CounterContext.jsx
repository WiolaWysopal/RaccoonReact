import React, { createContext, useState, useMemo } from "react";

export const CounterContext = createContext();

export const CountContext = ({ children }) => {
  const [count, setCount] = useState(0);

  const valueVariable = useMemo(
    () => ({
      count,
      increment: () => setCount((prev) => prev + 1),
      decrement: () => setCount((prev) => prev - 1),
    }),
    [count],
  );

  return (
    <CounterContext.Provider value={valueVariable}>
      {children}
    </CounterContext.Provider>
  );
};
