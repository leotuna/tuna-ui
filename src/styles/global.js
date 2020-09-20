import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #f7f7f7;
    -webkit-font-smoothing: antialiased;
    overflow-y: scroll;
  }
  body, input, button {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 16px;
    color: #373737;
  }
  a {
    color: black;
  }
`;
