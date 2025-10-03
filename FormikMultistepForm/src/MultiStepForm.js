import React, { useState } from "react";
import { Formik, Form } from "formik";

import PersonalData from "./PersonalData";
import ContactData from "./ContactData";
import AccountSettings from "./AccountSettings";
import Summary from "./Summary";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  username: "",
  password: "",
};

// --- Walidacje kroków ---
const validateStep = (values, step) => {
  const errors = {};
  if (step === 0) {
    if (!values.firstName) errors.firstName = "NAME REQUIRED";
    if (!values.lastName) errors.lastName = "SURNAME REQUIRED";
  }
  if (step === 1) {
    if (!values.email) errors.email = "EMAIL REQUIRED";
    if (!values.phone) errors.phone = "PHONE REQUIRED";
  }
  if (step === 2) {
    if (!values.username) errors.username = "LOGIN REQUIRED";
    if (!values.password || values.password.length < 6)
      errors.password = "PASSOWRD (min. 6 characters)";
  }
  return errors;
};

export default function MultiStepForm() {
  // w tym przypadku useState pamięta, który krok ma być aktualnie wyświetlony
  const [step, setStep] = useState(0);

  const handleNext = () => setStep((s) => s + 1);
  const handlePrev = () => setStep((s) => s - 1);

  const handleSubmit = (values, actions) => {
    const errors = validateStep(values, step);
    if (Object.keys(errors).length > 0) {
      actions.setErrors(errors);
      return;
    }
    if (step === 3) {
      alert("REGISTRED SUCCESSFULLY!\n" + JSON.stringify(values, null, 2));
    } else {
      handleNext();
    }
  };

  const steps = [
    <PersonalData />,
    <ContactData />,
    <AccountSettings />,
    <Summary />,
  ];

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form className="p-4 border rounded w-80 mx-auto">
          {step < steps.length - 1 ? steps[step] : <Summary values={values} />}

          <div className="mt-4 flex justify-between">
            {step > 0 && (
              <button type="button" onClick={handlePrev}>
                Back
              </button>
            )}
            <button type="submit">
              {step === steps.length - 1 ? "Approve" : "Forward"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
