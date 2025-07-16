import React, { useState } from "react";
import styled from "styled-components";

// Przycisk zmienia styl w zależności od props.primary
const StyledButton = styled.button`
  display: inline-block;
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 1.5em;
  border: none;
  border-radius: 0.5rem;
  color: white;
  cursor: pointer;
  background-color: ${(props) => (props.primary ? "#007bff" : "#6c757d")};

  &:hover {
    opacity: 0.85;
  }
`;

const PropsStyles = () => {
  const [isPrimary, setIsPrimary] = useState(true);

  const handleClick = () => {
    setIsPrimary((prev) => !prev); // przełączanie wartości primary
  };

  return (
    <StyledButton onClick={handleClick} primary={isPrimary}>
      {isPrimary ? "Primary (Blue)" : "Secondary (Gray)"}
    </StyledButton>
  );
};

export default PropsStyles;
