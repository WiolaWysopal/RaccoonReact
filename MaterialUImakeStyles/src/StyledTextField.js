import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  inputRoot: {
    margin: "20rem",
    width: "20rem",

    "& .MuiInputBase-root": {
      backgroundColor: "#f0f0ff",
      borderRadius: 8,
      padding: "0.5rem",
    },
    "& .MuiInputBase-input": {
      color: "#333",
      fontSize: "1rem",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#8a2be2",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#5e17eb",
    },
    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#3f00ff",
    },
    "& label": {
      color: "#8a2be2",
    },
    "& label.Mui-focused": {
      color: "#3f00ff",
    },
  },
});

const StyledTextField = () => {
  const classes = useStyles();
  return (
    <TextField
      className={classes.inputRoot}
      variant="outlined"
      label="Your name"
    />
  );
};

export default StyledTextField;
