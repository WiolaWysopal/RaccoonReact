import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      <h2>About us Component</h2>
      <Link to="/"> Main Page </Link>
      <hr></hr>
      <Link to="/Contact"> Contact </Link>
    </div>
  );
};

export default AboutUs;
