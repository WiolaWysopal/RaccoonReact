import { Box } from "@chakra-ui/react";
import HeadingComponent from "./Heading";
import ResponsiveColumns from "./Columns";

function App() {
  return (
    <Box p={[2, 4, 6, 8]} bg="gray.100" minH="100vh">
      <HeadingComponent />
      <ResponsiveColumns />
    </Box>
  );
}

export default App;
