import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html, body {
    font-size: 16px;
  }

  html, body {
    height: 100%;
    width: 100%;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    font-weight: normal;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
    outline: none;
    font: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  #root {
    height: 100%;
    width: 100%;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
  }
`;

export default GlobalStyle;
