import styled from 'styled-components'
import { typography } from '../../styles/typography'
import { FormContainer } from './components/AddressForm/styles'

export const CartContainer = styled.main`
  display: flex;
  align-items: flex-start;
  padding: 2.5rem 1.25rem;
  gap: 2rem;
  margin: 0 auto;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;

  h2 {
    ${typography.fonts.titleXS};
    color: ${({ theme }) => theme['base-subtitle']};
  }
`

export const CartTotal = styled(FormContainer)`
  border-radius: 6px 36px;
  gap: 0;

  img {
    width: 4rem;
    height: 4rem;
  }

  > span {
    display: block;
    height: 1px;
    background-color: ${({ theme }) => theme['base-button']};
    margin: 24px 0;
  }
`

export const CoffeeSelected = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  align-items: flex-start;
  gap: 1rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    > span {
      color: ${({ theme }) => theme['base-subtitle']};
      font-weight: bold;
    }

    > div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${({ theme }) => theme['base-text']};

      > strong {
        ${typography.fonts.textM};
        font-weight: bold;
      }

      > button {
        display: flex;
        border: none;
        background: ${({ theme }) => theme['base-button']};
        color: ${({ theme }) => theme['base-text']};
        padding: 0.5rem;
        border-radius: 6px;
        gap: 0.25rem;
        align-items: center;
        cursor: pointer;

        &:hover {
          background-color: ${({ theme }) => theme['base-hover']};
        }

        > svg {
          fill: ${({ theme }) => theme['purple-500']};
        }

        > span {
          ${typography.fonts.buttonM};
          text-transform: uppercase;
          color: ${({ theme }) => theme['base-text']};
        }
      }
    }
  }
`

export const BaseHeader = styled.div`
  display: flex;
  gap: 0.5rem;

  > div {
    p {
      color: ${({ theme }) => theme['base-subtitle']};
    }

    span {
      ${typography.fonts.textS}
      color: ${({ theme }) => theme['base-text']};
    }
  }
`

export const PriceDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  color: ${({ theme }) => theme['base-text']};
  ${typography.fonts.textS};

  > div {
    display: flex;
    justify-content: space-between;

    span {
      color: ${({ theme }) => theme['base-text']};
    }

    strong {
      ${typography.fonts.textL};
      font-weight: bold;
      color: ${({ theme }) => theme['base-subtitle']};
    }
  }
`

export const CheckoutButton = styled.button`
  margin-top: 24px;
  width: 100%;
  padding: 0.75rem;
  text-transform: uppercase;
  border: none;
  cursor: pointer;

  ${typography.fonts.buttonG};
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme['yellow-500']};

  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme['yellow-800']};
  }

  border-radius: 6px;
`
