import React from "react";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";

const useStyles = makeStyles({
  root: {
    background:
      "linear-gradient(45deg,rgb(107, 122, 254) 30%,rgb(200, 83, 255) 90%)",
    border: 3,
    borderRadius: 5,
    boxShadow: "0 0.25rem 0.5rem 0.25rem rgba(95, 80, 206, 0.3)",
    color: "black !important",
    height: 48,
    padding: "0 1rem",
    textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
  },
});

const StyledButton = () => {
  const classesVariable = useStyles();
  return <Button className={classesVariable.root}> Click Me </Button>;
};

export default StyledButton;
