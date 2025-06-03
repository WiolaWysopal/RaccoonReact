import React, { useState, useEffect } from "react";

export default function InputDuplicator() {
  const [inputValue, setInputValue] = useState("");
  const [duplicatedValue, setDuplicatedValue] = useState("");

  useEffect(() => {
    setDuplicatedValue(inputValue + inputValue);
  }, [inputValue]);

  return (
    <div>
      <h2>Input Duplicator</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something..."
      />
      <p>Duplicated value: {duplicatedValue}</p>
    </div>
  );
}
