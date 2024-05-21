import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  width: 100%;
  max-width: 70rem;
`

export const Aside = styled.aside`
  display: flex;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 0.875rem;

    background: ${(props) => props.theme['purple-100']};
    padding: 0.625rem 0.5rem;
    border-radius: 6px;

    svg {
      color: ${({ theme }) => theme['purple-500']};
    }

    span {
      color: ${({ theme }) => theme['purple-800']};
    }
  }

  a {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: ${({ theme }) => theme['yellow-100']};
    border-radius: 6px;

    svg {
      fill: ${({ theme }) => theme['yellow-800']};
    }
  }
`
