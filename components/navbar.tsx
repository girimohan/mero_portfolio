"use client"

import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Github, Link, Menu, X, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"

interface NavbarProps {
  activeSection?: string
}

const Navbar = ({ activeSection = "home" }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 dark:bg-background/90 backdrop-blur-md border-b border-border/50 dark:border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavigation("home")}
              className="text-2xl font-bold text-primary dark:text-primary hover:text-primary/80 dark:hover:text-primary/90 transition-colors"
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
                className={`text-sm font-medium transition-colors hover:text-primary dark:hover:text-primary ${
                  activeSection === item.id 
                    ? "text-primary dark:text-primary" 
                    : "text-foreground/70 dark:text-foreground/80"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Social Links & Theme Switcher */}
          <div className="hidden md:flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="icon" 
              asChild 
              className="text-foreground/80 dark:text-foreground/70 hover:text-primary dark:hover:text-primary"
            >
              <a
                href="https://www.linkedin.com/in/mohan-giri-37b87a186/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              asChild 
              className="text-foreground/80 dark:text-foreground/70 hover:text-primary dark:hover:text-primary"
            >
              <a href="https://github.com/girimohan" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            {/* Theme Switcher */}
            <div className="relative ml-2">
              <ThemeToggle />
              {/* Optional: Add a dropdown for more theme options in the future */}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground/80 dark:text-foreground/70 hover:text-primary dark:hover:text-primary"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
            {/* Theme Switcher for Mobile */}
            <div className="ml-2">
              <ThemeToggle mobile={true} />
            </div>
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
              className="md:hidden border-t border-border/50 dark:border-border/30"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item.id)}
                    className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors hover:text-primary dark:hover:text-primary hover:bg-muted/50 dark:hover:bg-muted/30 rounded-md ${
                      activeSection === item.id 
                        ? "text-primary dark:text-primary bg-muted/50 dark:bg-muted/30" 
                        : "text-foreground/70 dark:text-foreground/80"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}

                <div className="flex items-center justify-center space-x-4 pt-4 border-t border-border/50 dark:border-border/30 mt-4">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    asChild 
                    className="text-foreground/80 dark:text-foreground/70 hover:text-primary dark:hover:text-primary"
                  >
                    <a
                      href="https://www.linkedin.com/in/mohan-giri-37b87a186/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    asChild 
                    className="text-foreground/80 dark:text-foreground/70 hover:text-primary dark:hover:text-primary"
                  >
                    <a
                      href="https://github.com/girimohan"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <div className="ml-2">
                    <ThemeToggle mobile={true} />
                  </div>
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
