import React, { useState } from "react";

function ClickButton() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked); // zmienia stan na przeciwny
  };

  return (
    <div>
      <button onClick={handleClick}>Kliknij mnie</button>
      <p>
        {clicked
          ? "Przycisk został kliknięty!"
          : "Kliknij przycisk, aby zobaczyć komunikat."}
      </p>
    </div>
  );
}

export default ClickButton;
