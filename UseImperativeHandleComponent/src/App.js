import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
import Counter from "./Counter";
import "./App.css";

const App = () => {
  const counterRef = useRef();

  return (
    <div class="App">
      <h1>useImperativeHandle Component</h1>
      <Counter ref={counterRef} />
      <button onClick={() => counterRef.current.reset()}>Reset</button>
      <button onClick={() => counterRef.current.forceUpdate()}>
        Force update
      </button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
