import React, { useState, useEffect } from "react";

const Child = ({ valueFromParent }) => {
  const [localValue, setLocalValue] = useState(valueFromParent);

  // Synchronizacja lokalnego stanu z props
  useEffect(() => {
    setLocalValue(valueFromParent);
  }, [valueFromParent]);

  return (
    <div>
      <p>Props value: {valueFromParent}</p>
      <p>Local value: {localValue}</p>
      <button onClick={() => setLocalValue((prev) => prev + 1)}>
        Increase local value
      </button>
    </div>
  );
};

export default Child;
