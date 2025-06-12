import "./App.css";
import ExpensiveComponentWithMemo from "./ExpensiveComponentWithMemo";
import ExpensiveComponentWithoutMemo from "./ExpensiveComponentWithoutMemo";
import { useState } from "react";

function App() {
  const [showMemo, setShowMemo] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setShowMemo(!showMemo)}>
        Show {showMemo ? "WITHOUT useMemo" : "WITH useMemo"}
      </button>

      {showMemo ? (
        <ExpensiveComponentWithMemo />
      ) : (
        <ExpensiveComponentWithoutMemo />
      )}
    </div>
  );
}

export default App;
