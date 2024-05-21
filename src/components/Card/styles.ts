import styled from 'styled-components'
import { typography } from '../../styles/typography'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px 36px;
  background: ${({ theme }) => theme['base-card']};
  padding: 0 1.25rem 1.25rem;
  width: 16rem;
  align-items: center;
  text-align: center;

  > img {
    margin-top: -1.25rem;
    max-width: 7.5rem;
    max-height: 7.5rem;
    align-self: center;
  }
`

export const Tags = styled.div`
  margin-top: 0.75rem;
  display: flex;
  align-items: center;
  align-self: center;
  gap: 0.25rem;

  > span {
    ${typography.fonts.tag}
    padding: 0.25rem 0.5rem;
    background: ${({ theme }) => theme['yellow-100']};
    color: ${({ theme }) => theme['yellow-800']};
    border-radius: 999px;
    text-transform: uppercase;
  }
`

export const CoffeeTitle = styled.h3`
  margin-top: 1rem;
  ${typography.fonts.titleS};
  color: ${({ theme }) => theme['base-subtitle']};
`

export const CoffeeDescription = styled.p`
  ${typography.fonts.textS};
  color: ${({ theme }) => theme['base-label']};
  margin-top: 0.5rem;
`

export const Control = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 32px;
`

export const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  color: ${({ theme }) => theme['base-text']};

  > span {
    ${typography.fonts.textS};
  }

  > span:last-child {
    ${typography.fonts.titleM};
  }
`

export const Order = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  & > button {
    border: none;
    background-color: ${({ theme }) => theme['purple-800']};
    transition: background-color 0.2s;
    border-radius: 6px;
    padding: 8px;
    display: flex;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme['purple-500']};
    }
  }
`
