import styled from 'styled-components'

import { typography } from '../../styles/typography'

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Container = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme['base-button']};
  border-radius: 6px;

  background-color: ${({ theme }) => theme['base-input']};

  transition: all 0.2s;

  &[data-state='focused'] {
    border-color: ${({ theme }) => theme['yellow-800']};
  }

  &[data-state='blurred'] {
    border-color: ${({ theme }) => theme['base-button']};
  }

  input {
    color: ${({ theme }) => theme['base-text']};
    width: 100%;
    background-color: transparent;
    border: none;
    padding: 12px;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme['base-label']};
    }
  }

  span {
    color: ${({ theme }) => theme['base-label']};
    padding-right: 12px;
    ${typography.fonts.textS};
    font-style: italic;
  }
`

export const ErrorMessage = styled.p`
  ${typography.fonts.textXS};
  font-weight: bold;
  color: red;
`
