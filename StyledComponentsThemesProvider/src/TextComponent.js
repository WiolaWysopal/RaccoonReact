import React from "react";
import styled from "styled-components";

const StyledText = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  border: 1px solid ${(props) => props.theme.text};
  padding: 2rem;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 600px;
  margin: 1rem auto;
  transition: all 0.3s ease-in-out;
`;

const TextComponent = () => {
  return (
    <StyledText>
      <h2>This is a Themed Text Component</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </StyledText>
  );
};

export default TextComponent;
