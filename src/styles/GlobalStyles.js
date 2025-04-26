// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #e05d6f;
    --primary-dark: #c94d5f;
    --secondary-color: #8bc34a;
    --secondary-dark: #7cb342;
    --text-color: #333;
    --light-bg: #fff5f5;
    --white: #ffffff;
    --gray: #f5f5f5;
    --dark-gray: #666;
    --light-pink: #fff0f3;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--text-color);
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  @media (max-width: 768px) {
    html {
      font-size: 14px;
    }
  }
`;

export default GlobalStyles;
