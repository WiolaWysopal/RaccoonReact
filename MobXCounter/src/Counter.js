import React from "react";
import CounterStore from "./CounterStore.js";
import { observer } from "mobx-react";

const Counter = () => {
  return (
    <div className="countercontainer">
      <h2> {CounterStore.counter} </h2>
      <div className="buttons">
        <button onClick={() => CounterStore.increment()}> Increment </button>
        <button onClick={() => CounterStore.decrement()}> Decrement </button>
        <button onClick={() => CounterStore.multiplyby10()}>
          {" "}
          Multiply by 10{" "}
        </button>
        <button onClick={() => CounterStore.divideby10()}>
          {" "}
          Divide by 10{" "}
        </button>
        <button onClick={() => CounterStore.reset()}> Reset </button>
      </div>
    </div>
  );
};

export default observer(Counter);
