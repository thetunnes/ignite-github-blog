import styled from 'styled-components';

export const SearchPostContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.75rem;

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.25rem;
  }

  input {
    background: ${props => props.theme.input};
    color: ${props => props.theme.text};
    padding: 0.75rem 1rem;

    border: 1px solid ${props => props.theme.border};
    border-radius: 6px;

    &::placeholder {
      color: ${props => props.theme.label};
    }

    &:focus {
      border-color: ${props => props.theme.blue};
    }
  }
`