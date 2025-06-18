import React from "react";
import { Link } from "react-router-dom";
import UserID from "./UserID";

const MainPage = () => {
  return (
    <div>
      <h2>MainPage Component</h2>
      <Link to="/AboutUs"> About us </Link>

      <hr></hr>

      <h3>User Profile</h3>
      <UserID />

      <Link to="/Contact"> Contact </Link>
    </div>
  );
};

export default MainPage;
