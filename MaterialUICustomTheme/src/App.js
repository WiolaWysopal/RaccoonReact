import { Box, Paper, Stack, Typography, Button } from "@mui/material";

function App() {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h1" color="primary">
        This is H1
      </Typography>
      <Typography variant="h2" color="secondary">
        This is H2
      </Typography>
      <Typography variant="h3">This is H3</Typography>
      <Paper sx={{ p: 2, mt: 2, bgcolor: "secondary.main" }}>
        <Typography color="text.primary">
          This is inside a Paper component
        </Typography>
      </Paper>
      <Stack direction="row" spacing={2} mt={2}>
        <Button variant="contained" color="primary">
          Button 1
        </Button>
        <Button variant="outlined" color="secondary">
          Button 2
        </Button>
      </Stack>
    </Box>
  );
}

export default App;
