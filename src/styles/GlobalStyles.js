import { createGlobalStyle } from 'styled-components';
// import font from '../assets/fonts/Merienda.ttf';
import font from '../assets/fonts/BalsamiqSansBold.ttf';

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 18px;
    line-height: 1.8;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
  }
  @font-face {
    font-family: Balsamiq;
    src: url(${font});
  }
  a {
    text-decoration: none;
    outline: 0;
  }
  p, li {
    letter-spacing: 0.5px;
  }

  h1 {
    font-size: 30px;
    margin: 0 0 25px 0;
    line-height: 1.2;
    font-family: 'Balsamiq Sans', cursive;
    font-weight: 700;
    font-style: italic;
    @media (max-width: 800px) {
      font-size: 2.5rem;
      margin: 0 0 1.5rem;
      }
  }

  h2,h3,h4,h5,h6 {
    font-size: 20px;
    margin: 0 0 20px 0;
    text-align: left;
    line-height: 1.2;
    font-family: 'Balsamiq Sans', cursive;
    font-weight: 700;
    font-style: italic;
    @media (max-width: 800px) {
      font-size: 2rem;
      }
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyles;
