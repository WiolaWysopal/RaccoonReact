import { Heading } from "@chakra-ui/react";

function HeadingComponent() {
  return (
    <Heading
      fontSize={{ base: "lg", sm: "xl", md: "2xl", lg: "3xl", xl: "4xl" }}
      textAlign={{ base: "center", md: "left" }}
      mb={6}
    >
      Responsive Interface
    </Heading>
  );
}

export default HeadingComponent;
