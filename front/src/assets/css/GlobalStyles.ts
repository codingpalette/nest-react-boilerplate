import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  html{
    font-size: 16px;
  }
  
  body{
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  }
  
  html, body, #root {
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
