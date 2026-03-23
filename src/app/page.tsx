'use client'

import Image from 'next/image'
import styled from 'styled-components'
import Main from './components/Main'
import { useThemeMode } from '@/styles/app-theme-provider'

const Page = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 40px 24px;
  background: ${({ theme }) => theme.colors.pageBackground};
`

const MainPanel = styled.main`
  width: 100%;
  max-width: 900px;
  display: grid;
  gap: 24px;
  padding: 36px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.panelBorder};
  background: ${({ theme }) => theme.colors.panelBackground};
  box-shadow: ${({ theme }) => theme.shadows.panel};

  @media (max-width: 600px) {
    padding: 24px;
  }
`

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`

const ThemeSwitch = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.buttonBorder};
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.buttonBackground};
  color: ${({ theme }) => theme.colors.buttonText};
  font-size: 0.9rem;
  font-weight: 600;
  padding: 10px 16px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.buttonBackgroundHover};
  }
`

const Intro = styled.section`
  display: grid;
  gap: 16px;
  color: ${({ theme }) => theme.colors.textSecondary};

  h1 {
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: clamp(1.8rem, 3vw, 2.4rem);
    line-height: 1.2;
  }

  p {
    max-width: 680px;
    line-height: 1.7;
  }

  a {
    color: ${({ theme }) => theme.colors.link};
    font-weight: 600;
  }
`

export default function Home() {
  const { mode, toggleMode } = useThemeMode()

  return (
    <Page>
      <MainPanel>
        <Header>
          <Image
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
          <ThemeSwitch type="button" onClick={toggleMode}>
            Switch to {mode === 'dark' ? 'cleanmode' : 'darkmode'}
          </ThemeSwitch>
        </Header>

        <Intro>
          <h1>Boilerplate pronto para escalar com qualidade.</h1>
          <p>
            Esta base inclui lint, formatação, testes, Storybook e estilos com
            styled-components + createGlobalStyle.
          </p>
          <p>
            Explore a documentação em{' '}
            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js Docs
            </a>{' '}
            e execute o Storybook para trabalhar componentes de forma isolada.
          </p>
        </Intro>

        <Main />
      </MainPanel>
    </Page>
  )
}
