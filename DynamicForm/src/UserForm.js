import React, { useState, useEffect } from "react";

const UserForm = ({ defaultData }) => {
  const [formData, setFormData] = useState(defaultData);

  // Synchronizacja z props, jeśli się zmienią
  useEffect(() => {
    setFormData(defaultData);
  }, [defaultData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>User Form</h2>
      <form>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Surname: </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </form>

      <h3>Preview:</h3>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
};

export default UserForm;
