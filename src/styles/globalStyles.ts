import { createGlobalStyle } from "styled-components";

export const MainStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    flex: 1;
    background: ${({ theme }) => theme.palette.grey[100]};
    color: ${({ theme }) => theme.primary};
    scroll-behavior: smooth;
  }
  code {
    font-family: Consolas, 'Courier New', monospace;
  }
`;
