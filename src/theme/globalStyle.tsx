import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #1F4266;
    margin: 0;
    padding: 0;
  }
  
  * {
    box-sizing: border-box;
  }
  
  h1, h2, h3, h4, h5, p {
    font-size: inherit;
    font-weight: inherit;
    margin: 0;
    padding: 0;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  button {
    font-family: Roboto, sans-serif;
    font-size: inherit;
    font-weight: inherit;
    border: none;
    outline: none;
  }
`;

export default GlobalStyle;