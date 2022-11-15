import styled from "styled-components";
import effectLeft from "../assets/lines-left.png";
import effectRight from "../assets/lines-right.png";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 300px;
  background: ${(props) => props.theme.profile};
  background-image: url("/src/assets/lines-left.png"), url("/src/assets/lines-right.png");
  background-repeat: no-repeat, no-repeat;
  background-size: 30% 80%;
  background-position: left, right;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem 4rem;


  @media screen and (max-width: 768px) {
    background-size: 50% 80%;
  }
`;
