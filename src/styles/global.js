import { createGlobalStyle } from "styled-components";

import 'font-awesome/css/font-awesome.css'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    background-color: #9B65e5;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: Arial, Helvetica, sans-serif;
  }

  .none {
    display: none;
  }
`;

export default GlobalStyle