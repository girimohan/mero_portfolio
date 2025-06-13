"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ComponentProps, ReactNode } from "react"

type ThemeProviderProps = ComponentProps<typeof NextThemesProvider> & {
  children: ReactNode
}

/**
 * Theme provider component that wraps next-themes
 * Handles theme persistence and switching
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider 
      attribute="class" 
      disableTransitionOnChange={false}
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}
