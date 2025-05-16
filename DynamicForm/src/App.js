import React from "react";
import UserForm from "./UserForm";
import "./App.css";

const App = () => {
  const initialData = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
  };

  return (
    <div className="App">
      <h1>Dynamic Form</h1>
      <UserForm defaultData={initialData} />
    </div>
  );
};

export default App;
