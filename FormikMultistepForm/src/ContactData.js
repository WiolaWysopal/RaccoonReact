import React from "react";
import { Field, ErrorMessage } from "formik";

export default function ContactData() {
  return (
    <>
      <label> Email </label>
      <Field name="email" type="email" />
      <ErrorMessage name="email" component="div" className="text-red-500" />

      <label> Phone </label>
      <Field name="phone" />
      <ErrorMessage name="phone" component="div" className="text-red-500" />
    </>
  );
}
