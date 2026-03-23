export type ThemeMode = 'clean' | 'dark'

export const themeTokens = {
  clean: {
    colors: {
      background: '#f5f7fa',
      pageBackground: '#ecf0f5',
      panelBackground: '#ffffff',
      panelBorder: '#d4dde7',
      textPrimary: '#10161d',
      textSecondary: '#4b5563',
      link: '#0b5cd6',
      buttonBackground: '#ffffff',
      buttonBackgroundHover: '#eef2f8',
      buttonBorder: '#c8d2df',
      buttonText: '#1f2937'
    },
    shadows: {
      panel: '0 16px 40px rgba(16, 22, 29, 0.08)'
    }
  },
  dark: {
    colors: {
      background: '#0a0f14',
      pageBackground: '#0f1620',
      panelBackground: '#111a24',
      panelBorder: '#243243',
      textPrimary: '#f0f6ff',
      textSecondary: '#9cadc1',
      link: '#8ec5ff',
      buttonBackground: '#192230',
      buttonBackgroundHover: '#223043',
      buttonBorder: '#30435c',
      buttonText: '#e7effa'
    },
    shadows: {
      panel: '0 20px 44px rgba(0, 0, 0, 0.35)'
    }
  }
} as const

export type AppTheme = (typeof themeTokens)[ThemeMode]
