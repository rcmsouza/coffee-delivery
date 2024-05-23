/* eslint-disable prettier/prettier */
import styled from 'styled-components'

import { typography } from '../../styles/typography'

export const Container = styled.label`
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 6px;
  border: 1px solid transparent;
  background-color: ${({ theme }) => theme['base-button']};
  color: ${({ theme }) => theme['base-text']};
  text-transform: uppercase;
  ${typography.fonts.buttonM};
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme['base-hover']};
  }

  &[data-state="true"] {
    background-color: ${({ theme }) => theme['purple-100']};
    border-color: ${({ theme }) => theme['purple-500']};
  }

  input {
    display: none;
  }

  svg {
    color: ${({ theme }) => theme['purple-500']};
  }
`
