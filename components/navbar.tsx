"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Github, Linkedin, Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"

interface NavbarProps {
  activeSection?: string
}

const Navbar = ({ activeSection = "home" }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const isHomePage = pathname === "/"

  const scrollToSection = (sectionId: string) => {
    if (!isHomePage) {
      // If not on home page, navigate to home first then scroll
      router.push(`/#${sectionId}`)
      return
    }

    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 100
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
    setIsMenuOpen(false)
  }

  const handleNavigation = (sectionId: string) => {
    if (isHomePage) {
      scrollToSection(sectionId)
    } else {
      router.push(`/#${sectionId}`)
    }
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavigation("home")}
              className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
            >
              Giri Mohan
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.id ? "text-primary" : "text-foreground/70"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Social Links & Theme Switcher */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" size="icon" asChild className="text-foreground/80 hover:text-primary">
              <a
                href="https://www.linkedin.com/in/mohan-giri-37b87a186/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="text-foreground/80 hover:text-primary">
              <a href="https://github.com/girimohan" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            {/* Theme Switcher Dropdown */}
            <div className="relative ml-2">
              <Button
                variant="ghost"
                size="icon"
                aria-label={!mounted ? "Loading theme..." : theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
                className=""
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                {!mounted ? (
                  <Sun className="h-5 w-5" />
                ) : theme === "light" ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </Button>
              {/* Optional: Add a dropdown for more theme options in the future */}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground/80 hover:text-primary"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
            {/* Theme Switcher for Mobile */}
            <Button
              variant="ghost"
              size="icon"
              aria-label={!mounted ? "Loading theme..." : theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="ml-2"
            >
              {!mounted ? (
                <Sun className="h-5 w-5" />
              ) : theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-border/50"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item.id)}
                    className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors hover:text-primary hover:bg-muted/50 rounded-md ${
                      activeSection === item.id ? "text-primary bg-muted/50" : "text-foreground/70"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}

                <div className="flex items-center justify-center space-x-4 pt-4 border-t border-border/50 mt-4">
                  <Button variant="ghost" size="icon" asChild className="text-foreground/80 hover:text-primary">
                    <a
                      href="https://www.linkedin.com/in/mohan-giri-37b87a186/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild className="text-foreground/80 hover:text-primary">
                    <a
                      href="https://github.com/girimohan"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label={!mounted ? "Loading theme..." : theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                    className="ml-2"
                  >
                    {!mounted ? (
                      <Sun className="h-5 w-5" />
                    ) : theme === "light" ? (
                      <Moon className="h-5 w-5" />
                    ) : (
                      <Sun className="h-5 w-5" />
                    )}
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
