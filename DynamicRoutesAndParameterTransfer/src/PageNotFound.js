import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <h2>PageNotFound Component</h2>
      <Link to="/"> MainPage </Link>
    </div>
  );
};

export default PageNotFound;
