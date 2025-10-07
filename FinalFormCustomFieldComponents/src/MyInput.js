import React from "react";
import { Field } from "react-final-form";

const MyInput = ({ name, label, placeholder, validate }) => (
  <Field name={name} validate={validate}>
    {({ input, meta }) => (
      <div style={{ marginBottom: "1rem" }}>
        <label>{label}</label>
        <br />
        <input {...input} placeholder={placeholder} />
        {meta.touched && meta.error && (
          <span style={{ color: "red", marginLeft: "0.5rem" }}>
            {meta.error}
          </span>
        )}
      </div>
    )}
  </Field>
);

export default MyInput;
