import React from "react";
import Counter from "./Counter";
import "./App.css";

const App = () => {
  return (
    <div class="App">
      <h1>Render Props – example</h1>
      <Counter
        render={(count) => (
          <p>
            Current counter value: <strong>{count}</strong>
          </p>
        )}
      />
    </div>
  );
};

export default App;
