import React, { useEffect } from "react";

function ButtonClickListener() {
  useEffect(() => {
    // Funkcja obsługująca kliknięcie
    const handleClick = (event) => {
      if (event.target.tagName === "BUTTON") {
        alert("Button clicked!!");
      }
    };

    // Rejestrujemy globalnego listenera na kliknięcia
    window.addEventListener("click", handleClick);

    // Sprzątanie - usunięcie listenera przy unmount
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div>
      <p>Click any button to trigger an alert.</p>
      <button>Button 1</button>
      <button>Button 2</button>
    </div>
  );
}

export default ButtonClickListener;
