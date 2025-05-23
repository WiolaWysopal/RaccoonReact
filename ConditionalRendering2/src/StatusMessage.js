import React from "react";

const StatusMessage = ({ status }) => {
  if (status === "loading") {
    return <p>Loading...</p>;
  } else if (status === "success") {
    return <p>Datas have been loaded correctly!</p>;
  } else if (status === "error") {
    return <p>An error occured</p>;
  } else {
    return <p>Status unknown</p>;
  }
};

export default StatusMessage;
