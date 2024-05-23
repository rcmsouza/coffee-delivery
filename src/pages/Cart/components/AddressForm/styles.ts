import styled from 'styled-components'
import { typography } from '../../../../styles/typography'

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background: ${({ theme }) => theme['base-card']};
  width: 100%;
  border-radius: 6px;
  gap: 2rem;
`

export const AddressHeader = styled.div`
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

  svg {
    fill: ${({ theme }) => theme['yellow-800']};
  }
`

export const AddressForm = styled.div`
  display: grid;
  grid-template-areas:
    'cep . .'
    'street street street'
    'number fullAddress fullAddress'
    'neighborhood city state';
  grid-template-columns: 200px 1fr 60px;
  grid-gap: 16px 12px;
`
export const PaymentContainer = styled(FormContainer)``

export const PaymentHeader = styled.div`
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
  svg {
    fill: ${({ theme }) => theme['purple-500']};
  }
`

export const PaymentMethods = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  white-space: nowrap;
`
