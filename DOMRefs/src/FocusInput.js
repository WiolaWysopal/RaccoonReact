import React, { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef(null); // utworzenie referencji

  const handleFocus = () => {
    inputRef.current.focus(); // ustawienie fokusu na input
  };

  return (
    <div class="focus-style">
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
};

export default FocusInput;
