import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string
      pageBackground: string
      panelBackground: string
      panelBorder: string
      textPrimary: string
      textSecondary: string
      link: string
      buttonBackground: string
      buttonBackgroundHover: string
      buttonBorder: string
      buttonText: string
    }
    shadows: {
      panel: string
    }
  }
}
