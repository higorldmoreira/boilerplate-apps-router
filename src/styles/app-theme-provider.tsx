'use client'

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './global-style'
import { themeTokens, type ThemeMode } from './theme'

type ThemeContextValue = {
  mode: ThemeMode
  setMode: (mode: ThemeMode) => void
  toggleMode: () => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)
const STORAGE_KEY = 'boilerplate-mode'

type AppThemeProviderProps = {
  children: ReactNode
  initialMode?: ThemeMode
}

export function AppThemeProvider({
  children,
  initialMode = 'clean'
}: AppThemeProviderProps) {
  const [mode, setMode] = useState<ThemeMode>(() => {
    if (typeof window === 'undefined') {
      return initialMode
    }

    const storedMode = window.localStorage.getItem(STORAGE_KEY)

    if (storedMode === 'clean' || storedMode === 'dark') {
      return storedMode
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'clean'
  })

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, mode)
    document.documentElement.setAttribute('data-theme', mode)
  }, [mode])

  const value = useMemo(
    () => ({
      mode,
      setMode,
      toggleMode: () =>
        setMode((currentMode) => (currentMode === 'dark' ? 'clean' : 'dark'))
    }),
    [mode]
  )

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={themeTokens[mode]}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export function useThemeMode() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useThemeMode must be used within AppThemeProvider')
  }

  return context
}
