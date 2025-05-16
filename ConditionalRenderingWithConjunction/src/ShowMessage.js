import React, { useState } from "react";

const ShowMessage = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow((prev) => !prev)}>
        {show ? "Hide merrage" : "Show message"}
      </button>

      {show && <p>This is a conditionally rendered message!</p>}
    </div>
  );
};

export default ShowMessage;
