import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../features/userSlice";

export const UserForm = () => {
  const dispatchVariable = useDispatch();
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchVariable(updateUser(formData));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2> Update user </h2>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <button type="submit"> Save </button>
      </form>
    </div>
  );
};
