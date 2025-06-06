import React from "react";
import useForm from "../hooks/useForm";
import "../App.css";

export default function MyForm() {
  const initialValues = {
    name: "",
    email: "",
  };

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "'Name' is required";
    }
    if (!values.email) {
      errors.email = "'Email' is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Wrong e-mail address";
    }
    return errors;
  };

  const { values, errors, handleChange, resetForm } = useForm(
    initialValues,
    validate,
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate(values);
    if (Object.keys(formErrors).length === 0) {
      alert(`Form sent: ${JSON.stringify(values, null, 2)}`);
      resetForm();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>

      <button type="submit">Sent</button>
      <button type="button" onClick={resetForm}>
        Clear
      </button>
    </form>
  );
}
