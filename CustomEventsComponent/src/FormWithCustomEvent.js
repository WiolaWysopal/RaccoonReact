import React, { useState } from "react";

function FormWithCustomEvent() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    // Tworzymy i emitujemy niestandardowe zdarzenie z nową wartością
    const event = new CustomEvent("formInputChange", {
      detail: { value: newValue },
    });

    window.dispatchEvent(event);
  };

  return (
    <div>
      <label>
        Type something...
        <input type="text" value={inputValue} onChange={handleChange} />
      </label>
    </div>
  );
}

export default FormWithCustomEvent;
