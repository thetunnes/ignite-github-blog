import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.profile};
  padding: 2rem;
  position: relative;
  display: flex;
  align-items: center;
  gap: 2rem;

  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px #00000033;
  z-index: 999;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }

  .content-profile {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    width: 100%;

    header {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      h1 {
        color: ${({ theme }) => theme.title};
        font-size: 1.5rem;
        line-height: 1.3;
      }

      a {
        text-decoration: none;
        text-transform: uppercase;
        color: ${(props) => props.theme.blue};
        display: flex;
        align-items: center;
        gap: 0.5rem;

        font-size: 0.75rem;

        transition: all 0.4s;
        :hover {
          text-decoration: underline;
        }
      }
    }

    footer {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 1.75rem;

      span {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: ${(props) => props.theme.subtitle};
        font-size: 1rem;

        > svg {
          color: ${(props) => props.theme.label};
          font-size: 1.125rem;
        }
      }
    }
  }

  @media screen and (max-width: 512px) {
    flex-direction: column;
    img {
      width: 5rem;
      height: 5rem;
    }

    .content-profile {
      header {
        flex-direction: column;
      }
    }
  }
`;
