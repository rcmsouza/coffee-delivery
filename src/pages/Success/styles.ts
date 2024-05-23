import styled from 'styled-components'
import { typography } from '../../styles/typography'

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem 1.25rem;
  gap: 2rem;
  margin: 0 auto;

  > div {
    display: flex;
    gap: 6rem;
  }
`

export const OrderInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border: 1px solid ${({ theme }) => theme['yellow-500']};
  border-radius: 6px 36px;
  padding: 2.5rem;
`

export const InfoContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  align-items: center;
  ${typography.fonts.textM}
  color: ${({ theme }) => theme['base-text']};

  > div {
    display: flex;
    flex-direction: column;

    > svg {
      padding: 0.5rem;
      border-radius: 999px;
    }
  }
`
