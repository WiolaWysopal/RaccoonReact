import React, { useRef } from "react";
import CustomInput from "./CustomInput";

const ParentComponent = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <CustomInput ref={inputRef} />
      <button onClick={handleFocus} style={{ marginLeft: "10px" }}>
        Focus input
      </button>
    </div>
  );
};

export default ParentComponent;
