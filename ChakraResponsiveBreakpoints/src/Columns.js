import { Flex, Box, Text } from "@chakra-ui/react";

function ResponsiveColumns() {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      gap={6}
      justify="space-between"
    >
      <Box
        flex="1"
        p={4}
        bg={{ base: "blue.100", md: "blue.200", lg: "blue.300" }}
        borderRadius="md"
      >
        <Text fontSize={{ base: "sm", sm: "md", md: "lg" }}>First Column</Text>
      </Box>

      <Box
        flex="1"
        p={4}
        bg={{ base: "green.100", md: "green.200", lg: "green.300" }}
        borderRadius="md"
      >
        <Text fontSize={{ base: "sm", sm: "md", md: "lg" }}>Second Column</Text>
      </Box>
    </Flex>
  );
}

export default ResponsiveColumns;
