import React from "react";
import { Form, Field } from "react-final-form";
// potrzebne do obsługi błędu globalnego
import { FORM_ERROR } from "final-form";

// symulacja opóźnienia i odpowiedzi serwera
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(1000);

  // symulacja: jeśli email = "error@test.com", zwróć błąd
  if (values.email === "error@test.com") {
    return { [FORM_ERROR]: "Ten adres email jest już zajęty!" };
  }

  // w innym przypadku zwróć sukces
  return;
};

const required = (value) => (value ? undefined : "Required");

const App = () => (
  <div>
    <h2>Form with Loading, Success and Error States</h2>
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting, submitError, submitSucceeded }) => (
        <form onSubmit={handleSubmit}>
          <Field name="email" validate={required}>
            {({ input, meta }) => (
              <div>
                <label>Email</label>
                <input {...input} type="email" placeholder="Email" />
                {meta.touched && meta.error && (
                  <span style={{ color: "red" }}>{meta.error}</span>
                )}
              </div>
            )}
          </Field>

          <button type="submit" disabled={submitting}>
            {submitting ? "Wysyłanie..." : "Wyślij"}
          </button>

          {submitError && (
            <div style={{ color: "red", marginTop: "10px" }}>{submitError}</div>
          )}

          {submitSucceeded && (
            <div style={{ color: "green", marginTop: "10px" }}>
              Dane wysłane poprawnie!
            </div>
          )}
        </form>
      )}
    />
  </div>
);

export default App;
