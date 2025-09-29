import { useForm } from "react-hook-form";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    alert(`LOGGED AS: ${data.email}`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 max-w-sm mx-auto space-y-4"
    >
      {/* Nazwa */}
      <div>
        <label htmlFor="Name" className="block font-medium">
          Name
        </label>
        <input
          id="name"
          type="name"
          {...register("name", { required: "NAME REQUIRED" })}
          className="border rounded w-full p-2"
        />
        {errors.name && (
          <p className="text-red-600 text-sm">{errors.name.message}</p>
        )}
      </div>

      {/* E-mail */}
      <div>
        <label htmlFor="email" className="block font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email", { required: "EMAIL REQUIRED" })}
          className="border rounded w-full p-2"
        />
        {errors.email && (
          <p className="text-red-600 text-sm">{errors.email.message}</p>
        )}
      </div>

      {/* Hasło */}
      <div>
        <label htmlFor="password" className="block font-medium">
          Password
        </label>
        <input
          id="password"
          type="password"
          {...register("password", { required: "PASSWORD REQUIRED" })}
          className="border rounded w-full p-2"
        />
        {errors.password && (
          <p className="text-red-600 text-sm">{errors.password.message}</p>
        )}
      </div>

      {/* Przycisk */}
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Log in
      </button>
    </form>
  );
}
