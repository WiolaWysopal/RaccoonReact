import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: inline-block;
  color: #4f7abfff;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #874fbfff;
  border-radius: 0.5rem;
  display: block;

  &:hover {
    background-color: #105b72c2;
    color: #f6f6f6ff;
  }
`;

const SampleComponent = () => {
  return <StyledButton> This is StyledButton </StyledButton>;
};

export default SampleComponent;
