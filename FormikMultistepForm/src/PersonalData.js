import React from "react";
import { Field, ErrorMessage } from "formik";

export default function PersonalData() {
  return (
    <>
      <label> Name </label>
      <Field name="firstName" />
      <ErrorMessage name="firstName" component="div" className="text-red-500" />

      <label> Surname </label>
      <Field name="lastName" />
      <ErrorMessage name="lastName" component="div" className="text-red-500" />
    </>
  );
}
