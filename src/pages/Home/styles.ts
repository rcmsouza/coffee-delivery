import styled from 'styled-components'
import { typography } from '../../styles/typography'

export const HomeContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5.875rem 0;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    ${typography.fonts.titleXL}
    color: ${({ theme }) => theme['base-title']};
  }

  span {
    ${typography.fonts.textL}
    color: ${({ theme }) => theme['base-subtitle']}
  }
`

export const ContentItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 20px;

  > div {
    display: flex;
    align-items: center;
    gap: 12px;

    svg {
      padding: 8px;
      border-radius: 999px;
    }
  }
`

export const CoffeeList = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  padding-bottom: 3rem;

  h1 {
    ${typography.fonts.titleL}
  }

  > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 32px;
    margin-top: 3.375rem;
  }
`
