import React, { useEffect, useState } from "react";

const FaultyFunction = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Counter works:", count);
    }, 1000);

    // Błąd: brak `clearInterval(interval)` – efekt uboczny NIE JEST czyszczony
  }, []); // tylko przy montażu

  return (
    <div>
      <p>Clicks: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default FaultyFunction;
