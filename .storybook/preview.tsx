import type { Preview } from '@storybook/nextjs-vite'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../src/styles/global-style'
import { themeTokens } from '../src/styles/theme'

const preview: Preview = {
  globalTypes: {
    themeMode: {
      description: 'Global theme mode',
      toolbar: {
        title: 'Theme',
        icon: 'mirror',
        items: [
          { value: 'clean', title: 'Cleanmode' },
          { value: 'dark', title: 'Darkmode' }
        ],
        dynamicTitle: true
      }
    }
  },
  decorators: [
    (Story, context) => {
      const mode = context.globals.themeMode === 'dark' ? 'dark' : 'clean'

      return (
        <ThemeProvider theme={themeTokens[mode]}>
          <GlobalStyle />
          <Story />
        </ThemeProvider>
      )
    }
  ],
  parameters: {
    backgrounds: {
      default: 'clean',
      values: [
        { name: 'clean', value: '#ecf0f5' },
        { name: 'dark', value: '#0f1620' }
      ]
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
