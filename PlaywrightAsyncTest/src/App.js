import { useState } from "react";

function App() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    setTimeout(() => {
      setData("Secret data loaded!");
    }, 1500);
  };

  return (
    <div className="App">
      <h1> Async Demo </h1>
      <button id="load-btn" onClick={fetchData}>
        {" "}
        Load Data{" "}
      </button>

      {data ? <p id="result"> {data} </p> : <p id="loading"> Waiting... </p>}
    </div>
  );
}

export default App;
