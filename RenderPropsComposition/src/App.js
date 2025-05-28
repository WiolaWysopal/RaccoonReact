import React from "react";
import Counter from "./Counter";
import ItemManager from "./ItemManager";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>Render Props Example</h1>

      <Counter>
        {({ count, increment }) => (
          <ItemManager>
            {({ items, inputText, setInputText, addItem }) => (
              <div>
                <div>
                  <button onClick={increment}> Click me ({count}) </button>
                </div>

                <div>
                  <input
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Multiply element"
                  />
                  <button onClick={addItem}> Multiply </button>
                </div>

                <div>
                  <h2>List of Element (x{count}):</h2>
                  <ul>
                    {items.map((item, index) => (
                      <li key={index}>
                        {item} × {count}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </ItemManager>
        )}
      </Counter>
    </div>
  );
};

export default App;
