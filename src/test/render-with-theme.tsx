import { render } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { themeTokens } from '@/styles/theme'

type RenderWithThemeOptions = Omit<RenderOptions, 'wrapper'>

export function renderWithTheme(
  ui: React.ReactElement,
  options?: RenderWithThemeOptions
) {
  return render(ui, {
    wrapper: ({ children }) => (
      <ThemeProvider theme={themeTokens.clean}>{children}</ThemeProvider>
    ),
    ...options
  })
}
