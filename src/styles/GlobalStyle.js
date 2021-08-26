import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  :root {
    --descfont-size: 16px;
    --descfont-color: #4d4e4e;
    --portray-height: 36rem;
    --icon-size: 25px;
    --mypicture-offset: 3rem;

    @media screen and (max-width: 830px) {
      --portray-height: 30rem;
    }

    @media (max-width: 600px) {
      --portray-height: 25rem;
    }

  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Poppins';
  }

  h1,
  h2 {
    font-size: 35px;
  }

 
  @media screen and (max-width: 830px) {
    h1,
    h2 {
      font-size: 30px;
    }
  }

  @media (max-width: 600px) {
    h1,
    h2 {
      font-size: 25px;
    }
  }
`;

export default GlobalStyle;
