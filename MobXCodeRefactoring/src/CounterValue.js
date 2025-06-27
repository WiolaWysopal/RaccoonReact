import React from "react";
import { observer } from "mobx-react-lite";
import counterStore from "./CounterStore";

const CounterValue = observer(() => {
  return (
    <div>
      <h2> Current value: {counterStore.count} </h2>
    </div>
  );
});

export default CounterValue;
