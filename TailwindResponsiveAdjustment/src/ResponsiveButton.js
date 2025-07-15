const ResponsiveButton = ({ children }) => {
  return (
    <button
      className="
      bg-blue-500 text-white font-semibold rounded
      px-3 py-1 text-sm
      sm:px-4 sm:py-2 sm:text-base
      md:px-6 md:py-3 md:text-lg
      hover:bg-blue-600
      transition-colors duration-200
    "
    >
      {children}
    </button>
  );
};

export default ResponsiveButton;
