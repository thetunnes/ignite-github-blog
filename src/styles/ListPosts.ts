import styled from "styled-components";

export const ListPostsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;

  a {
    text-decoration: none;
    width: 100%;
    background: ${(props) => props.theme.post};
    border: 2px solid transparent;
    border-radius: 12px;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;

    transition: all 0.4s ease;

    header {
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 1rem;

      h4 {
        text-align: left;
        flex: 1;
        color: ${props => props.theme.title};
      }

      span {
        color: ${props => props.theme.span};
      }
    }

    p {
      overflow: hidden;
      text-align: left;
      text-overflow: ellipsis;
      color: ${props => props.theme.text};
    }

    &:hover {
      border: 2px solid ${props => props.theme.label};
    }
  }

  @media screen and (max-width: 512px) {
    grid-template-columns: 1fr;
  }
`;
