import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Main from './index'

const meta = {
  title: 'App/Main',
  component: Main,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded'
  }
} satisfies Meta<typeof Main>

export default meta

type Story = StoryObj<typeof meta>

export const Cleanmode: Story = {
  parameters: {
    backgrounds: { default: 'clean' }
  },
  globals: {
    themeMode: 'clean'
  }
}

export const Darkmode: Story = {
  parameters: {
    backgrounds: { default: 'dark' }
  },
  globals: {
    themeMode: 'dark'
  }
}
