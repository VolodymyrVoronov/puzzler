import { createGlobalStyle } from "styled-components";

import bgPattern from "./../assets/bg-pattern.svg";

const GlobalStyles = createGlobalStyle`

  body {
    background-image: url(${bgPattern});
    background-attachment: fixed;
  }
`;

export default GlobalStyles;
