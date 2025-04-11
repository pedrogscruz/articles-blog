import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${({ theme }) => theme.body.fontFamily};
    font-size: ${({ theme }) => theme.body.fontSize};
    line-height: ${({ theme }) => theme.body.lineHeight};
    font-weight: ${({ theme }) => theme.body.fontWeight};
    background-image: radial-gradient(circle at 85% 390px, #EF4C84 -35%, transparent 17%), radial-gradient(circle at 22% 990px, #00BFC1 -50%, transparent 25%), radial-gradient(circle at 85% 1590px, #667AA2 -30%, transparent 17%);
    background-size: 100% 2000px;
    background-repeat: repeat-y;
  }

  h1 {
    font-size: ${({ theme }) => theme.h1.fontSize};
    line-height: ${({ theme }) => theme.h1.lineHeight};
    font-weight: ${({ theme }) => theme.h1.fontWeight};
    margin: 0;
  }
  
  h2 {
    font-size: ${({ theme }) => theme.h2.fontSize};
    line-height: ${({ theme }) => theme.h2.lineHeight};
    font-weight: ${({ theme }) => theme.h2.fontWeight};
    margin: 0;
  }
  
  h3 {
    font-size: ${({ theme }) => theme.h3.fontSize};
    line-height: ${({ theme }) => theme.h3.lineHeight};
    font-weight: ${({ theme }) => theme.h3.fontWeight};
    margin: 0;
  }
  
  caption {
    font-size: ${({ theme }) => theme.caption.fontSize};
    line-height: ${({ theme }) => theme.caption.lineHeight};
    font-weight: ${({ theme }) => theme.caption.fontWeight};
    margin: 0;
  }

  p {
    margin: 0;
  }
`; 