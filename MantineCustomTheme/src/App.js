import React, { useState } from "react";
import { MantineProvider, Button, Paper, Text } from "@mantine/core";
import { Global } from "@emotion/react";

function App() {
  const [colorScheme, setColorScheme] = useState("light");

  const toggleColorScheme = () => {
    setColorScheme((current) => (current === "dark" ? "light" : "dark"));
  };

  const theme = {
    colorScheme,
    primaryColor: colorScheme === "dark" ? "orange" : "blue",
    fontFamily: colorScheme === "dark" ? "Arial, sans-serif" : "Georgia, serif",
    fontSizes: {
      xs: 10,
      sm: 12,
      md: 16,
      lg: 20,
      xl: 24,
    },
    spacing: {
      xs: 6,
      sm: 10,
      md: 14,
      lg: 18,
      xl: 24,
    },
  };

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <Global
        styles={{
          body: {
            fontFamily: theme.fontFamily,
            transition: "all 0.3s ease",
          },
        }}
      />

      <Paper
        style={{
          minHeight: "100vh",
          padding: 20,
          backgroundColor: colorScheme === "dark" ? "#1A1B1E" : "#fff",
          color: colorScheme === "dark" ? "white" : "black",
          transition: "all 0.3s ease",
        }}
      >
        <Button onClick={toggleColorScheme} mb="md">
          Przełącz na {colorScheme === "dark" ? "jasny" : "ciemny"} tryb
        </Button>

        <Text>
          Aktualny tryb: <strong>{colorScheme}</strong>
        </Text>
        <Text>Przykładowy tekst z aktualnym fontem: {theme.fontFamily}</Text>
      </Paper>
    </MantineProvider>
  );
}

export default App;
