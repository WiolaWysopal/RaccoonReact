const SpinnerButton = () => {
  return (
    <button
      type="button"
      className="flex items-center bg-indigo-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed"
      disabled
    >
      <svg
        className="mr-2 h-5 w-5 animate-spin text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>
      Processing…
    </button>
  );
};

export default SpinnerButton;
