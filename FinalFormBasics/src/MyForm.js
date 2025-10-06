import { Form, Field } from "react-final-form";
import InterestPicker from "./InterestPicker";

const onSubmit = async (values) => {
  console.log("Form values:", values);
  window.alert(JSON.stringify(values, null, 2));
};

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "First Name is required";
  }
  if (!values.lastName) {
    errors.lastName = "Last Name is required";
  }
  if (!values.email) {
    errors.email = "Email is required";
  }
  if (!values.phone) {
    errors.phone = "Phone is required";
  }
  return errors;
};

const MyForm = () => (
  <Form
    onSubmit={onSubmit}
    validate={validate}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <h2>Simple Default Input</h2>

        <Field name="firstName">
          {({ input, meta }) => (
            <div>
              <label> First Name </label>
              <input {...input} placeholder="First Name" />
              {meta.touched && meta.error && (
                <span style={{ color: "red" }}>{meta.error}</span>
              )}
            </div>
          )}
        </Field>

        <Field name="lastName">
          {({ input, meta }) => (
            <div>
              <label> Last Name </label>
              <input {...input} placeholder="Last Name" />
              {meta.touched && meta.error && (
                <span style={{ color: "red" }}>{meta.error}</span>
              )}
            </div>
          )}
        </Field>

        <Field name="email">
          {({ input, meta }) => (
            <div>
              <label> E-mail </label>
              <input {...input} placeholder="Email" />
              {meta.touched && meta.error && (
                <span style={{ color: "red" }}>{meta.error}</span>
              )}
            </div>
          )}
        </Field>

        <div>
          <label> Interests </label>
          <Field name="interests" component={InterestPicker} />
        </div>

        <Field name="bio">
          {({ input, meta }) => (
            <div>
              <label> Bio </label>
              <textarea {...input} />
              {meta.touched && meta.error && (
                <span style={{ color: "red" }}>{meta.error}</span>
              )}
            </div>
          )}
        </Field>

        <Field name="phone">
          {({ input, meta }) => (
            <div>
              <label> Phone </label>
              <input type="text" {...input} placeholder="Phone" />
              {meta.touched && meta.error && (
                <span style={{ color: "red" }}>{meta.error}</span>
              )}
            </div>
          )}
        </Field>

        <button type="submit"> Submit </button>
      </form>
    )}
  />
);

export default MyForm;
