import React from "react";

const BuggyComponent = () => {
  throw new Error("TEST ERROR");
};

export default BuggyComponent;
