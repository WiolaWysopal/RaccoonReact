import { Card, Typography, CardContent, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    height: "10rem",
    width: "30rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "linear-gradient(135deg, rgba(107,122,254,0.7), rgba(200,83,255,0.7))",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "1rem",
    boxShadow: "0 1rem 2rem rgba(95, 80, 206, 0.3)",
    color: "#fff",
    padding: "1rem",
    margin: "2rem auto",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-10px)",
      boxShadow: "0 1.5rem 2.5rem rgba(95, 80, 206, 0.4)",
    },
  },
  typography: {
    textAlign: "center",
    textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
    fontSize: "1.2rem",
    fontWeight: 500,
  },
});

const StyledCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Box>
          <Typography className={classes.typography}>
            This is a sample Text
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default StyledCard;
