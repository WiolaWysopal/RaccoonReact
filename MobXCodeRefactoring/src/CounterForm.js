import React from "react";
import { observer } from "mobx-react-lite";
import counterStore from "./CounterStore";

const CounterForm = observer(() => {
  return (
    <div>
      <button onClick={() => counterStore.increment()}> Increment </button>
      <button onClick={() => counterStore.decrement()}> Decrement </button>
    </div>
  );
});

export default CounterForm;
