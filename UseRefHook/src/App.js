import React, { useRef, useState } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null); // Referencja do inputa
  const [currentValue, setCurrentValue] = useState(""); // Stan do wyświetlenia

  const handleClick = () => {
    if (inputRef.current) {
      setCurrentValue(inputRef.current.value); // Pobierz wartość inputa
    }
  };

  return (
    <div class="App">
      <h2>input useRef reading value</h2>

      <input
        type="text"
        ref={inputRef}
        placeholder="Type something"
        style={{ padding: "8px", width: "250px", marginRight: "10px" }}
      />

      <button onClick={handleClick}>Show value</button>

      {currentValue && (
        <p>
          Current input value: <strong>{currentValue}</strong>
        </p>
      )}
    </div>
  );
}

export default App;
