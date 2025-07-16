import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./Themes";

import styled from "styled-components";
import PropsStyles from "./PropsStyles";
import TextComponent from "./TextComponent";

const AppWrapper = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  min-height: 100vh;
  padding: 2rem;
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = isDarkMode ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <TextComponent />
        <PropsStyles onClick={toggleTheme}>
          {" "}
          Click me to switch the mode:{" "}
          {isDarkMode ? "dark mode" : "light mode"}{" "}
        </PropsStyles>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
