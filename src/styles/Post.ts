import styled from "styled-components";
import { ProfileContainer } from "./Profile";
import { GlobalContainer } from "./global";

export const PostContainer = styled(GlobalContainer)`
  margin-top: -5rem;

  main {
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    img {
      width: 100%;
    }
  }
`;

export const PostTitle = styled(ProfileContainer)`
  flex-direction: column;
  align-items: stretch;
  gap: 1.25rem;

  nav {
    width: 100%;
    display: flex;
    justify-content: space-between;

    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      gap: 0.5rem;
      font-size: 0.75rem;
      text-transform: uppercase;
      color: ${({ theme }) => theme.blue};

      svg {
        font-size: 1rem;
      }
    }
  }

  h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.title};
  }

  footer {
    display: flex;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${({ theme }) => theme.span};
    }
  }

  @media screen and (max-width: 512px) {
    footer {
      gap: 1rem;
    }
  }
`;
