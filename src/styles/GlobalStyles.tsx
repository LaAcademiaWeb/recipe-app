import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.textPrimary};
    transition: all 0.3s ease-in-out;
  }

  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.linkHover};
    }
  }

  input, button {
    font-family: inherit;
  }
`;

export default GlobalStyles;
