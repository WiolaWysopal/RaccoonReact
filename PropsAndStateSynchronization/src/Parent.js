import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [parentValue, setParentValue] = useState(0);

  return (
    <div>
      <h2>Parent Component</h2>
      <button onClick={() => setParentValue((prev) => prev + 1)}>
        Increase Parent Value
      </button>
      <Child valueFromParent={parentValue} />
    </div>
  );
};

export default Parent;
