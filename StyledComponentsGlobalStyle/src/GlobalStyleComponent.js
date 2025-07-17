// GlobalStyleComponent.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0rem;
    padding: 0rem;
    font-family: 'Arial', sans-serif;
    background-color: #0a2fd3ff;
    color: #f0f0f0;
  },
  p {
    margin: 1rem;
    padding: 1rem;
    font-size: 2rem;
  },
  button {
  background-color: #04AA6D;
  border: none;
  color: white;
  padding: 0.5rem 2rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  margin: 1rem;
},

button:hover {
  background-color: #0e4602ff;
  color: white;
}
`;

export default GlobalStyle;
