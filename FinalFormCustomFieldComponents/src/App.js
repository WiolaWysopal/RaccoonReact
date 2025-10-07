import React from "react";
import { Form } from "react-final-form";
import MyInput from "./MyInput";

const required = (value) => (value ? undefined : "Required");

const App = () => {
  const onSubmit = async (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <div className="App">
      <h2>Custom Field Components Example</h2>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <MyInput
              name="firstName"
              label="First Name"
              placeholder="Jane"
              validate={required}
            />
            <MyInput
              name="lastName"
              label="Last Name"
              placeholder="Doe"
              validate={required}
            />
            <button type="submit">Submit</button>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />
    </div>
  );
};

export default App;
