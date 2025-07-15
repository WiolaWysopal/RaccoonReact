import ResponsiveButton from "./ResponsiveButton";

const ResponsiveForm = () => {
  return (
    <form
      className="flex flex-col space-y-4 p-4
                     sm:flex-row sm:space-x-4 sm:space-y-0
                     md:p-6
                     lg:max-w-3xl lg:mx-auto"
    >
      <input
        type="text"
        placeholder="Type something..."
        className="flex-grow border border-gray-300 rounded px-3 py-2 text-sm
                   sm:text-base
                   focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <ResponsiveButton> Send </ResponsiveButton>
    </form>
  );
};

export default ResponsiveForm;
