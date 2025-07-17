import styled from "@emotion/styled";

const DynamicButton = styled.button`
  background-color: ${(props) => (props.active ? "#1af102ff" : "#5b7fffff")};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 1rem;

  &:hover {
    opacity: 0.9;
  }
`;

export default DynamicButton;
