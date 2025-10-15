import React, { useState } from "react";
import ErrorBoundary from "./ErrorBoundary";

function BuggyComponent() {
  const [count, setCount] = useState(0);
  if (count === 3) {
    // Symulacja błędu
    throw new Error("Oops! Something broke!");
  }

  return (
    <div>
      <p> Clics: {count} </p>
      <button onClick={() => setCount(count + 1)}> Click </button>
    </div>
  );
}

function App() {
  return (
    <div className="App" style={{ textAlign: "center", marginTop: "50px" }}>
      <h1> Error Boundary Example </h1>
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
    </div>
  );
}

export default App;
