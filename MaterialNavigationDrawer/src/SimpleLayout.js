import React from "react";
import { Grid, Box, Typography } from "@mui/material";

export default function SimpleLayout() {
  return (
    <Grid container direction="column" minHeight="100vh">
      <Grid item>
        <Box bgcolor="primary.main" color="white" p={2}>
          <Typography varian="h6"> Header </Typography>
        </Box>
      </Grid>

      <Grid item xs>
        <Box p={2} bgcolor="#f5f5f5" height="25rem">
          <Typography variant="body1"> This is a page content </Typography>
        </Box>
      </Grid>

      <Grid item>
        <Box bgcolor="secondary.main" p={2}>
          <Typography variant="caption"> ©2025 This is footer </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
