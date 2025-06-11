import React, { useState, useCallback, useEffect } from "react";
import "./App.css";

function CounterManager() {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const [log, setLog] = useState([]);

  // Błąd: brak zależności — stale używa starego countA i countB
  const incorrectCallback = useCallback(() => {
    setLog((prev) => [
      ...prev,
      `Error: countA = ${countA}, countB = ${countB}`,
    ]);
  }, []);

  // Poprawna wersja — reaguje na zmiany countA i countB
  const correctCallback = useCallback(() => {
    setLog((prev) => [
      ...prev,
      `Correct: countA = ${countA}, countB = ${countB}`,
    ]);
  }, [countA, countB]);

  // Obserwuj, kiedy tworzone są nowe instancje
  useEffect(() => {
    console.log("correctCallback changed");
  }, [correctCallback]);

  useEffect(() => {
    console.log("incorrectCallback changed (only once for a start)");
  }, [incorrectCallback]);

  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h2>Counter Manager</h2>
      <p>Count A: {countA}</p>
      <p>Count B: {countB}</p>
      <button onClick={() => setCountA((prev) => prev + 1)}>
        Increase Count A
      </button>
      <button onClick={() => setCountB((prev) => prev + 1)}>
        Increase Count B
      </button>
      <button onClick={incorrectCallback}>Start error callback</button>
      <button onClick={correctCallback}>Start correct callback</button>
      <h3>Log:</h3>
      <ul>
        {log.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </div>
  );
}

export default CounterManager;
