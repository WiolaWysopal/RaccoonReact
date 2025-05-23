import React, { useState, useEffect } from "react";
import StatusMessage from "./StatusMessage";
import "./App.css";

const App = () => {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    setTimeout(() => {
      const result = Math.random();
      if (result < 0.33) {
        setStatus("success");
      } else if (result >= 0.33 && result < 0.66) {
        setStatus("error");
      } else {
        setStatus("unknown");
      }
    }, 2000);
  }, []);

  return (
    <div>
      <h1>App status:</h1>
      <StatusMessage status={status} />
    </div>
  );
};

export default App;
