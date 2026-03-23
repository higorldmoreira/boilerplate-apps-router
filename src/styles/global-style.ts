import { createGlobalStyle } from 'styled-components'
import type { AppTheme } from './theme'

export const GlobalStyle = createGlobalStyle`
  :root {
    color-scheme: ${({ theme }) =>
      (theme as AppTheme).colors.background === '#0a0f14' ? 'dark' : 'light'};
    font-family: var(--font-geist-sans), sans-serif;
  }

  html,
  body {
    min-height: 100%;
    max-width: 100vw;
    overflow-x: hidden;
  }

  body {
    margin: 0;
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => (theme as AppTheme).colors.textPrimary};
    background: ${({ theme }) => (theme as AppTheme).colors.background};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition:
      background 0.2s ease,
      color 0.2s ease;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; // 1rem = 10px
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`
