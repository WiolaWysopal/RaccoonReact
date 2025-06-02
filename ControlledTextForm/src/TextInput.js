import React, { useState } from "react";

function TextInput() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <form>
        <label>
          Type text:
          <input type="text" value={text} onChange={handleChange} />
        </label>
      </form>
      <p>Current value: {text}</p>
    </div>
  );
}

export default TextInput;
