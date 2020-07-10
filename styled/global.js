import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    outline: none;
  };
  body {
    height: 100vh;
    overflow-x: hidden;
    margin: 0;
    background: #f4f4f4;
  };
`;

export default GlobalStyle;
