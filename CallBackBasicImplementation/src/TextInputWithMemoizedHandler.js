import React, { useState, useCallback } from "react";

export default function TextInputWithMemoizedHandler() {
  const [text, setText] = useState("");
  const [submittedText, setSubmittedText] = useState("");

  // useCallback memoizes the click handler
  const handleClick = useCallback(() => {
    console.log("handleClick recreated"); // Monitor function recreation
    setSubmittedText(text);
  }, [text]);

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "2rem auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        style={{ padding: "0.5rem", width: "100%" }}
      />
      <button
        onClick={handleClick}
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
      <p style={{ marginTop: "1rem" }}>
        <strong>Submitted text:</strong> {submittedText}
      </p>
    </div>
  );
}
