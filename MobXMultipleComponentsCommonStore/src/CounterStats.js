import React from "react";
import { observer } from "mobx-react-lite";
import counterStore from "./CounterStore";

const CounterStats = observer(() => {
  return (
    <div>
      <p> Is number even or odd? {counterStore.isEven ? " even " : " odd "} </p>
    </div>
  );
});

export default CounterStats;
