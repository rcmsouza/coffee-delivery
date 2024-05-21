import { createGlobalStyle } from 'styled-components'
import { typography } from './typography'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body{
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    ${typography.fonts.textM};
    font-weight: 400;
    font-size: 1rem;
  }
`
