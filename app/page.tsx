"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HeroSection from "@/components/sections/hero-section"
import FeaturedSection from "@/components/sections/featured-section"
import SkillsSection from "@/components/sections/skills-section"
import ProjectsSection from "@/components/sections/projects-section"
import LabSection from "@/components/sections/lab-section"
import ExperienceSection from "@/components/sections/experience-section"
import BlogSection from "@/components/sections/blog-section"
import EducationSection from "@/components/sections/education-section"
import ContactSection from "@/components/sections/contact-section"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ArrowUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [showScrollTop, setShowScrollTop] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const sections = ["home", "featured", "skills", "projects", "lab", "experience", "education", "blog", "contact"]

    const handleScroll = () => {
      const pageYOffset = window.scrollY
      let newActiveSection = sections[0]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (!element) continue

        const offsetTop = element.offsetTop - 150

        if (pageYOffset >= offsetTop) {
          newActiveSection = section
        }
      }

      setActiveSection(newActiveSection)
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle hash navigation
  useEffect(() => {
    const hash = window.location.hash.replace("#", "")
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          const offsetTop = element.offsetTop - 100
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          })
          setActiveSection(hash)
        }
      }, 100)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar activeSection={activeSection} />
      <main className="flex-1">
          <section id="home">
            <HeroSection />
          </section>

          <section id="featured">
            <FeaturedSection />
          </section>

          <section id="skills">
            <SkillsSection />
          </section>

          <section id="projects">
            <ProjectsSection />
          </section>

          <section id="lab">
            <LabSection />
          </section>

          <section id="experience">
            <ExperienceSection />
          </section>

          <section id="education">
            <EducationSection />
          </section>

          <section id="blog">
            <BlogSection />
          </section>

          <section id="contact">
            <ContactSection />
          </section>
        </main>

        <Footer />

        {/* Scroll to top button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
              className="fixed bottom-6 right-6 z-50"
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      onClick={scrollToTop}
                      size="icon"
                      className="h-14 w-14 rounded-full shadow-xl bg-primary hover:bg-primary/90 text-primary-foreground border-2 border-primary-foreground/20 hover:scale-110 transition-transform duration-300"
                      aria-label="Scroll to top"
                    >
                      <ArrowUp className="h-6 w-6" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="left" className="font-medium">
                    <p>Back to top</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
  )
}
