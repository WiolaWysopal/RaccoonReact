import React, { useState } from "react";
import useClickHistory from "./useClickHistory";

function ClickTracker() {
  const { addClick, clearHistory, getHistory } = useClickHistory();
  const [, setRenderTrigger] = useState(0); // żeby wymusić odświeżenie

  const handleClick = () => {
    addClick();
    setRenderTrigger((x) => x + 1); // tylko po to, by wymusić ponowny render
  };

  const handleClear = () => {
    clearHistory();
    setRenderTrigger((x) => x + 1);
  };

  return (
    <div>
      <h2>Clicks History</h2>
      <button onClick={handleClick}>Add click</button>
      <button onClick={handleClear}>Wipe a history</button>
      <ul>
        {getHistory().map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </div>
  );
}

export default ClickTracker;
