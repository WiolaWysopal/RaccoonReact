import React, { useState } from "react";
import { createStyles } from "@mantine/styles";

const useStyles = createStyles((theme, { color }) => ({
  box: {
    margin: theme.spacing.md,
    width: 200,
    height: 200,
    backgroundColor:
      color === "red"
        ? theme.colors.red[6]
        : color === "green"
          ? theme.colors.green[6]
          : theme.colors.blue[6],
    borderRadius: theme.radius.md,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.white,
    fontWeight: 700,
    cursor: "pointer",
    userSelect: "none",
    transition: "background-color 0.3s",
    "&:hover": {
      backgroundColor:
        color === "red"
          ? theme.colors.red[8]
          : color === "green"
            ? theme.colors.green[8]
            : theme.colors.blue[8],
    },
  },
}));

export function ColorBox({ color }) {
  const { classes } = useStyles({ color });
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className={classes.box}
      onClick={() => setClicked(!clicked)}
      style={{
        opacity: clicked ? 0.5 : 1,
        border: clicked ? "4px solid white" : undefined,
      }}
    >
      {clicked ? "Clicked!" : "Click me"}
    </div>
  );
}
