import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 :focus {
  outline: 0;
 }

 body {
  font-size: 1rem;
  background: ${(props) => props.theme.background};
 }
 
 body, input, textarea, button {
  font: 400 1rem Nunito, sans-serif;
  color: ${(props) => props.theme.text};
 }

  @media screen and (max-width: 1120px) {

    body {
      font-size: 93.75%;
    }
  }

  @media screen and (max-width: 768px) {

    body {
      font-size: 87.5%;
    }
  }
`;

export const GlobalContainer = styled.div`
  width: 100%;
  max-width: 864px;

  margin: 0 auto;
  padding: 0 1.5rem;
`
