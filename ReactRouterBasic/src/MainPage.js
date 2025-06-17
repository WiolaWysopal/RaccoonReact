import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <h2>MainPage Component</h2>
      <Link to="/AboutUs"> About us </Link>
      <hr></hr>
      <Link to="/Contact"> Contact </Link>
    </div>
  );
};

export default MainPage;
