"use client"

import React from "react"
import { useThemeMode } from "@/hooks/use-theme"
import { Button } from "@/components/ui/button"
import { Sun, Moon } from "lucide-react"

interface ThemeToggleProps {
  mobile?: boolean
  className?: string
}

/**
 * Theme toggle button component
 * Shows different icons based on current theme and handles theme switching
 */
export function ThemeToggle({ mobile = false, className = "" }: ThemeToggleProps) {
  const { mounted, isDark, toggleTheme } = useThemeMode()

  return (
    <Button
      variant="ghost"
      size="icon"
      type="button"
      onClick={toggleTheme}
      className={`
        relative overflow-hidden rounded-md
        bg-background hover:bg-muted
        dark:bg-background dark:hover:bg-muted
        transition-colors duration-300
        ${mobile ? "" : "border border-transparent hover:border-border/30"}
        ${className}
      `}
      aria-label={!mounted ? "Loading theme..." : isDark ? "Switch to light mode" : "Switch to dark mode"}
      data-theme-toggle
      data-state={isDark ? "dark" : "light"}
    >
      {/* Visual indicator for current theme */}
      <span className="sr-only">
        {isDark ? "Switch to light mode" : "Switch to dark mode"}
      </span>
      
      {/* Sun icon (shown in dark mode) */}
      <Sun 
        className={`
          h-[1.2rem] w-[1.2rem]
          absolute
          transition-all duration-300
          ${isDark 
            ? "scale-100 rotate-0 text-yellow-400" 
            : "scale-0 -rotate-90 opacity-0"}
        `}
      />
      
      {/* Moon icon (shown in light mode) */}
      <Moon 
        className={`
          h-[1.2rem] w-[1.2rem] 
          absolute
          transition-all duration-300
          ${!isDark 
            ? "scale-100 rotate-0 text-slate-700" 
            : "scale-0 rotate-90 opacity-0"}
        `}
      />
    </Button>
  );
}
