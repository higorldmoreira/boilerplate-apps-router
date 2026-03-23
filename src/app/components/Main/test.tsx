import { screen } from '@testing-library/react'
import { renderWithTheme } from 'test/render-with-theme'
import Main from '.'

describe('Main', () => {
  it('should render the heading', () => {
    renderWithTheme(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avancado/i })
    ).toBeInTheDocument()
  })

  it('should match snapshot and theme styles', () => {
    const { container } = renderWithTheme(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avancado/i })
    ).toHaveStyleRule('color', '#10161d')
    expect(container.firstChild).toMatchSnapshot()
  })
})
