import React, { useRef } from "react";

export default function ContactForm() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const errorRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    let valid = true;

    // Reset field styles
    nameRef.current.style.border = "1px solid #ccc";
    emailRef.current.style.border = "1px solid #ccc";
    errorRef.current.textContent = "";

    if (!name) {
      nameRef.current.style.border = "2px solid red";
      valid = false;
    }

    if (!email) {
      emailRef.current.style.border = "2px solid red";
      valid = false;
    }

    if (!valid) {
      errorRef.current.textContent = "Please fill in all required fields.";
      return;
    }

    alert(`Form submitted:\nName: ${name}\nEmail: ${email}`);

    // Clear fields after successful submission
    nameRef.current.value = "";
    emailRef.current.value = "";
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="name">Name:</label>
          <br />
          <input type="text" id="name" ref={nameRef} />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="email">Email:</label>
          <br />
          <input type="email" id="email" ref={emailRef} />
        </div>
        <div
          ref={errorRef}
          style={{ color: "red", marginBottom: "1rem" }}
        ></div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
