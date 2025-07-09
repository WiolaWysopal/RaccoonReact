import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  components: {
    Button: {
      variants: {
        fancy: {
          bg: "teal.400",
          color: "white",
          _hover: {
            bg: "teal.600",
            transform: "scale(1.05)",
            boxShadow: "lg",
          },
        },
      },
    },
  },
});

export default customTheme;
