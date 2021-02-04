import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
html {
  font-size: 16px;
}
html,
button,
input,
select,
a {
  font-size: 1em;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  line-height: 1.6;
  text-decoration: none;
  color: #000000;
}
`;
export default GlobalStyles;
