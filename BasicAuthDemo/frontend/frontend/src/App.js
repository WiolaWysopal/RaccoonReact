import React, { useState } from "react";

function App() {
  const [data, setData] = useState(null);

  const fetchSecret = async () => {
    const username = prompt("Podaj login:");
    const password = prompt("Podaj haslo:");
    const response = await fetch("http://localhost:3001/secret", {
      headers: {
        Authorization: "Basic " + btoa(username + ":" + password),
      },
    });
    if (response.ok) {
      const json = await response.json();
      setData(json.message);
    } else {
      setData("Niepoprawne dane lub brak autoryzacji");
    }
  };

  const fetchPublic = async () => {
    const response = await fetch("http://localhost:3001/public");
    const json = await response.json();
    setData(json.message);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Demo Basic Authentication</h1>
      <button onClick={fetchPublic}>Pobierz publiczne dane</button>
      <button onClick={fetchSecret}>Pobierz chronione dane</button>
      {data && <p>{data}</p>}
    </div>
  );
}

export default App;
