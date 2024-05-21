import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 0.25rem;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme['base-button']};
  padding: 0.5rem;
  border-radius: 6px;

  > button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;

    > svg {
      color: ${({ theme }) => theme['purple-500']};

      transition: all 0.2s;

      &:hover {
        color: ${({ theme }) => theme['purple-800']};
      }
    }

    span {
      padding-top: 2px;
      color: ${({ theme }) => theme['base-title']};
    }
  }
`
