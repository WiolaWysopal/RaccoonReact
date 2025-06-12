import React, { useReducer } from "react";

const formReducer = (state, action) => {
  switch (action.type) {
    case "HANDLE INPUT TEXT":
      return {
        ...state,
        [action.field]: action.payload,
      };
    case "RESET FORM":
      return action.initialState; // reset do stanu początkowego
    default:
      return state;
  }
};

const Form = () => {
  const initialFormState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    hasConsented: false,
  };

  const [formState, dispatch] = useReducer(formReducer, initialFormState);

  const handleTextChange = (e) => {
    dispatch({
      type: "HANDLE INPUT TEXT",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  const handleReset = () => {
    dispatch({ type: "RESET FORM", initialState: initialFormState });
  };

  return (
    <form>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formState.firstName}
          onChange={handleTextChange}
        />
      </label>

      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formState.lastName}
          onChange={handleTextChange}
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleTextChange}
        />
      </label>

      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formState.password}
          onChange={handleTextChange}
        />
      </label>

      <button type="button" onClick={handleReset}>
        Reset Form
      </button>
    </form>
  );
};

export default Form;
