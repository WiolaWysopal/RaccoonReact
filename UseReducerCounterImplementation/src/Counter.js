import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "Increase":
      return { count: state.count + 1 };

    case "Decrease":
      return { count: state.count - 1 };

    case "BackToZero":
      return { count: state.count * 0 };
    default:
      return state;
  }
};
const initialState = { count: 0 };

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const IncreaseCounter = () => {
    dispatch({ type: "Increase" });
  };
  const DecreaseCounter = () => {
    dispatch({ type: "Decrease" });
  };

  const ResetValue = () => {
    dispatch({ type: "BackToZero" });
  };

  return (
    <div className="counter">
      <div className="count-label">
        <p>Count: {state.count}</p>
      </div>
      <div className="count-buttons">
        <button onClick={DecreaseCounter}>-</button>
        <button onClick={ResetValue}>reset</button>
        <button onClick={IncreaseCounter}>+</button>
      </div>
    </div>
  );
};

export default Counter;
