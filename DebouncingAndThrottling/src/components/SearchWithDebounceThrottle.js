import React, { useState, useCallback } from "react";
import { debounce, throttle } from "lodash";

export default function SearchWithDebounceThrottle() {
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const [throttledValue, setThrottledValue] = useState("");

  // Debounce: wykonuje się po 500 ms od ostatniego wpisania
  const debouncedUpdate = useCallback(
    debounce((value) => {
      setDebouncedValue(value);
    }, 500),
    [],
  );

  // Throttle: wykonuje się max raz na 1000 ms
  const throttledUpdate = useCallback(
    throttle((value) => {
      setThrottledValue(value);
    }, 1000),
    [],
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    debouncedUpdate(value);
    throttledUpdate(value);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Debounce vs Throttle</h2>

      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
        className="p-2 border border-gray-400 rounded w-full"
      />

      <div className="mt-4">
        <p>
          <strong>Given value (current):</strong> {inputValue}
        </p>
        <p>
          <strong>Debounce (500ms):</strong> {debouncedValue}
        </p>
        <p>
          <strong>Throttle (1000ms):</strong> {throttledValue}
        </p>
      </div>
    </div>
  );
}
