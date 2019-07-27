import { createGlobalStyle } from 'styled-components';

import 'font-awesome/css/font-awesome.css';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body, html {
    background-color: #273a47;
    height: 100vh;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: Arial, Helvetica, sans-serif;


  }

  #root {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .none {
    display: none;
  }

  button {
    outline: none;
    border: none;
    background: none;

    &:hover {
      cursor: pointer;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
