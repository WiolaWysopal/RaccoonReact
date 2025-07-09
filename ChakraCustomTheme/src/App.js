import { Box, Heading, Text, Button } from "@chakra-ui/react";

function App() {
  return (
    <Box p={6}>
      <Heading> Welcome in my App </Heading>
      <Text fontSize="lg" mt={4}>
        {" "}
        This is App with CustomTheme{" "}
      </Text>
      <Button mt={6} size="md">
        {" "}
        Click Me{" "}
      </Button>
    </Box>
  );
}

export default App;
