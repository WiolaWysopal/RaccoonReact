import React, { useRef, useState } from "react";
import "./App.css";

function App() {
  const counterRef = useRef(0); // Przechowuje wartość licznika
  const [visibleValue, setVisibleValue] = useState(null); // Do wyświetlenia wartości

  const handleIncrement = () => {
    counterRef.current += 1; // Zwiększ licznik bez renderu
    console.log("Current counter value (unvisible):", counterRef.current);
  };

  const handleShowValue = () => {
    setVisibleValue(counterRef.current); // Ustaw do wyświetlenia
  };

  return (
    <div class="App">
      <h2>useRef counter</h2>

      <button onClick={handleIncrement} style={{ marginRight: "10px" }}>
        Increase
      </button>

      <button onClick={handleShowValue}>Show counter value</button>

      {visibleValue !== null && (
        <p>
          Current counter value: <strong>{visibleValue}</strong>
        </p>
      )}
    </div>
  );
}

export default App;
