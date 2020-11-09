import { createGlobalStyle } from 'styled-components';

import 'react-circular-progressbar/dist/styles.css';

export default createGlobalStyle`
  :root{
    font-size:60%;
  }

  html, body, #root {
    width:100%;
    height:100%;
    margin: 1px solid red;
  }

  * {
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }

  *, body, button, input, textarea {
    font: 500 1.6rem Roboto;
    border: 0;
    outline: 0;
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
`;