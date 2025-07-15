const ResponsiveCard = ({ title, content }) => {
  return (
    <div
      className="bg-blue-200 shadow-md rounded p-4 m-2
                        sm:p-6 sm:m-4
                        md:p-8 md:m-6
                        lg:max-w-lg lg:m-8
                        xl:max-w-xl"
    >
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
        {" "}
        {title}{" "}
      </h2>
      <p className="text-sm sm:text-base md:text-lg"> {content} </p>
    </div>
  );
};

export default ResponsiveCard;
