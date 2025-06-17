import React from "react";
import CounterUI from "./CounterUI";
import { CountContext } from "./CounterContext";

const FinalCounter = () => {
  return (
    <div>
      <CountContext>
        <CounterUI />
      </CountContext>
    </div>
  );
};

export default FinalCounter;
