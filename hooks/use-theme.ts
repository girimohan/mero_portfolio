import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

type Theme = 'dark' | 'light' | 'system' | undefined

export interface ThemeMode {
  mounted: boolean
  theme: Theme
  systemTheme: Theme
  isDark: boolean
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

export function useThemeMode(): ThemeMode {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme, systemTheme } = useTheme()

  // Set mounted state once the component is mounted on the client side
  useEffect(() => {
    setMounted(true)
  }, [])

  // Determine if the current theme is dark
  const isDark = mounted && (resolvedTheme === 'dark')

  // Function to toggle between light and dark theme
  const toggleTheme = () => {
    // Toggle theme - using resolvedTheme for more reliable switching
    const newTheme = isDark ? 'light' : 'dark'
    setTheme(newTheme)
  }

  return {
    mounted,
    theme: theme as Theme,
    systemTheme: systemTheme as Theme,
    isDark,
    toggleTheme,
    setTheme: (newTheme: Theme) => setTheme(newTheme || 'dark')
  }
}
