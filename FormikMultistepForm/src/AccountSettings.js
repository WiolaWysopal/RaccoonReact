import React from "react";
import { Field, ErrorMessage } from "formik";

export default function AccountSettings() {
  return (
    <>
      <label> Login </label>
      <Field name="username" />
      <ErrorMessage name="username" component="div" className="text-red-500" />

      <label> Password </label>
      <Field name="password" type="password" />
      <ErrorMessage name="password" component="div" className="text-red-500" />
    </>
  );
}
