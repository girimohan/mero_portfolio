"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react"

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/90" />
        <motion.div
          style={{ opacity, y }}
          className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          style={{ opacity, y: useTransform(scrollYProgress, [0, 1], [0, -200]) }}
          className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            ref={ref}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-block"
              >
                <Badge className="px-4 py-1 text-lg mb-6 bg-primary/10 text-primary border-primary/20 rounded-full">
                  Full-Stack Developer
                </Badge>
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Hi, I'm <span className="primary-text-gradient">Giri Mohan</span>
              </h1>

              <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                A passionate full-stack developer and machine learning enthusiast with expertise in building modern web
                applications and AI-powered solutions. Based in Finland, I combine technical skills with creative
                problem-solving to deliver exceptional digital experiences.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                  <Mail className="h-4 w-4" />
                  Contact Me
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                >
                  <FileText className="h-4 w-4" />
                  Download CV
                </Button>
              </div>

              <div className="flex gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full h-10 w-10 hover:text-primary hover:bg-primary/10"
                  aria-label="GitHub"
                  asChild
                >
                  <a href="https://github.com/girimohan" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full h-10 w-10 hover:text-primary hover:bg-primary/10"
                  aria-label="LinkedIn"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/mohan-giri-37b87a186/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full h-10 w-10 hover:text-primary hover:bg-primary/10"
                  aria-label="Email"
                  asChild
                >
                  <a href="mailto:mohan_gi@hotmail.com">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 profile-hexagon bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/10 glow-yellow" />
                <div className="absolute inset-2 profile-hexagon overflow-hidden bg-card">
                  <Image
                    src="/images/profile/profile.png"
                    alt="Giri Mohan"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          >
            <span className="text-sm text-foreground/60 mb-2">Scroll Down</span>
            <ArrowDown className="h-4 w-4 text-foreground/60" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
