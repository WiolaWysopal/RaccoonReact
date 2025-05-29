import React, { useEffect } from "react";
import FormWithCustomEvent from "./FormWithCustomEvent";
import "./App.css";

function App() {
  useEffect(() => {
    const handleFormInputChange = (e) => {
      console.log("New form value:", e.detail.value);
    };

    window.addEventListener("formInputChange", handleFormInputChange);

    return () => {
      window.removeEventListener("formInputChange", handleFormInputChange);
    };
  }, []);

  return (
    <div class="App">
      <h1>Custom Event Form</h1>
      <FormWithCustomEvent />
    </div>
  );
}

export default App;
