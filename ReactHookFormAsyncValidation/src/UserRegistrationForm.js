import React from "react";
import { useForm } from "react-hook-form";

// symulacja API (normalnie tu byłby fetch do backendu)
const checkUsernameAvailability = async (username) => {
  // sztuczne opóźnienie
  await new Promise((resolve) => setTimeout(resolve, 800));

  // lista zajętych nazw
  const takenUsernames = ["admin", "test", "user123"];

  return !takenUsernames.includes(username.toLowerCase());
};

export default function UserRegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    alert("Registration completed successfully!");
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Username */}
        <div style={{ marginBottom: "15px" }}>
          <input
            {...register("username", {
              required: "USERNAME REQUIRED",
              validate: async (value) => {
                const available = await checkUsernameAvailability(value);
                return available || "THIS USERNAME IS NOT AVAILABLE";
              },
            })}
            placeholder="Username"
          />
          {errors.username && (
            <p style={{ color: "red" }}>{errors.username.message}</p>
          )}
        </div>

        {/* Email */}
        <div style={{ marginBottom: "15px" }}>
          <input
            {...register("email", {
              required: "EMAIL REQUIRED",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Please provide a valid email address",
              },
            })}
            placeholder="Email"
          />
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div style={{ marginBottom: "15px" }}>
          <input
            type="password"
            {...register("password", {
              required: "PASSWORD REQUIRED",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
            placeholder="Password"
          />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "CHECKING..." : "REGISTER"}
        </button>
      </form>
    </div>
  );
}
