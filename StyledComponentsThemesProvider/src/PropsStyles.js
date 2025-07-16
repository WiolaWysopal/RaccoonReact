import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: inline-block;
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 1.5em;
  border: none;
  border-radius: 0.5rem;
  color: white;
  cursor: pointer;
  background-color: #007bff;
  width: fit-content;
  &:hover {
    opacity: 0.85;
  }
`;

const PropsStyles = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default PropsStyles;
