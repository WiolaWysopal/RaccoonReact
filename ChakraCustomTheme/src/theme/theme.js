// import { extendTheme } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {
    brand: {
      50: "#e3f9f9",
      100: "#c1ecec",
      200: "#9fdfdf",
      300: "#7dd2d2",
      400: "#5bc5c5",
      500: "#3aabab", // główny kolor
      600: "#2d8686",
      700: "#206161",
      800: "#133c3c",
      900: "#061717",
    },
  },
  fonts: {
    heading: `'Segoe UI', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
  fontSizes: {
    sm: "12px",
    md: "16px",
    lg: "20px",
    xl: "24px",
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
        textTransform: "uppercase",
      },
      sizes: {
        md: {
          h: "48px",
          fontSize: "lg",
          px: "24px",
        },
      },
      variants: {
        solid: {
          bg: "brand.500",
          color: "white",
          _hover: {
            bg: "brand.600",
          },
        },
      },
    },
  },
});

export default customTheme;
