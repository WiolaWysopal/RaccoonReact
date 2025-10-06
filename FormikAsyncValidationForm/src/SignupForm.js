import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

// przykładowa funkcja sprawdzająca email w API
const checkEmailAvailability = async (email) => {
  // symulacja requestu
  await new Promise((resolve) => setTimeout(resolve, 800));

  // przykładowa odpowiedź (normalnie użyłabyś fetch/axios)
  const fakeResponse = { exists: email === "test@example.com" };

  return !fakeResponse.exists;
};

// funkcja walidująca email (asynchroniczna)
const validateEmail = async (value) => {
  let error;
  if (!value) {
    error = "EMAIL REQUIRED";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
    error = "E-MAIL INVALID";
  } else {
    const available = await checkEmailAvailability(value);
    if (!available) {
      error = "THIS E-MAIL IS ALREADY REGISTERED";
    }
  }
  return error;
};

const SignupForm = () => {
  return (
    <Formik
      initialValues={{ email: "" }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting, isValidating }) => (
        <Form className="p-4 flex flex-col gap-3 max-w-md mx-auto">
          <label htmlFor="email">Email</label>
          <Field
            type="email"
            name="email"
            validate={validateEmail}
            className="border p-2 rounded"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="text-red-500 text-sm"
          />

          <button
            type="submit"
            disabled={isSubmitting || isValidating}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            REGISTER
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
