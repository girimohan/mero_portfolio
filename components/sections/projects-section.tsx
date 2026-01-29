"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react"
import { getProjects, getProjectsByCategory, type Project } from "@/lib/data/projects"

const INITIAL_DISPLAY_COUNT = 6

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([])
  const [category, setCategory] = useState("all")
  const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY_COUNT)
  const router = useRouter()
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  // Load projects from static data
  useEffect(() => {
    setProjects(getProjects())
  }, [])

  const filteredProjects = getProjectsByCategory(category)
  const displayedProjects = filteredProjects.slice(0, displayCount)
  const hasMore = displayCount < filteredProjects.length

  // Reset display count when category changes
  useEffect(() => {
    setDisplayCount(INITIAL_DISPLAY_COUNT)
  }, [category])

  const handleLoadMore = () => {
    setDisplayCount(prev => prev + 6)
  }

  const handleShowLess = () => {
    setDisplayCount(INITIAL_DISPLAY_COUNT)
  }

  // Function to handle project card click - navigate to project page
  const handleProjectClick = (project: Project) => {
    router.push(`/projects/${project.id}`)
  }

  return (    <section id="projects" ref={containerRef} className="py-20 min-h-screen relative overflow-hidden dark:bg-background/60">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background/90 to-background dark:from-background/70 dark:to-background" />
        <motion.div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl" style={{ y }} />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"
          style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block"
            >              <Badge className="px-4 py-1 text-lg mb-4 bg-primary/20 text-primary border-primary/30 dark:bg-primary/30 dark:border-primary/40 rounded-full">
                Portfolio
              </Badge>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 primary-text-gradient dark:text-primary-gradient">Featured Projects</h2>
            <p className="text-xl text-foreground/80 dark:text-foreground/70 max-w-2xl mx-auto">
              A collection of innovative projects spanning machine learning, computer vision, NLP, and web development.
              Each project demonstrates practical applications of cutting-edge technologies.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >            <Tabs value={category} onValueChange={setCategory} className="w-auto">
              <TabsList className="grid w-full grid-cols-4 lg:grid-cols-5 bg-card/50 dark:bg-card/30 backdrop-blur-sm">
                <TabsTrigger value="all" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground dark:data-[state=inactive]:text-foreground/70">
                  All
                </TabsTrigger>
                <TabsTrigger value="ml" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground dark:data-[state=inactive]:text-foreground/70">
                  ML/AI
                </TabsTrigger>
                <TabsTrigger value="web" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground dark:data-[state=inactive]:text-foreground/70">
                  Web
                </TabsTrigger>
                <TabsTrigger value="testing" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Testing
                </TabsTrigger>
                <TabsTrigger value="data" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Data
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {displayedProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index % 6) }}
                  whileHover={{ y: -10 }}
                >                <Card
                  className="overflow-hidden cursor-pointer group h-full flex flex-col bg-card/80 dark:bg-card/60 backdrop-blur-sm border border-border/50 dark:border-border/30 hover:border-primary/30 dark:hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/5 dark:hover:shadow-primary/10"
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image || "/images/ui/placeholder.svg?height=400&width=600"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="bg-primary hover:bg-primary text-primary-foreground mb-2">
                        {project.category?.toUpperCase()}
                      </Badge>
                      {project.subtitle && (
                        <p className="text-white/90 text-sm font-medium">{project.subtitle}</p>
                      )}
                    </div>
                  </div>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-3 line-clamp-2 text-foreground">{project.title}</h3>
                    <p className="text-foreground/70 mb-4 line-clamp-3 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.tags.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="mt-auto flex items-center text-primary group/link">
                      <span className="text-sm font-medium">View Project</span>
                      <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
            </AnimatePresence>
          </div>

          {/* Load More / Show Less Button */}
          {filteredProjects.length > INITIAL_DISPLAY_COUNT && (
            <motion.div
              className="flex justify-center mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {hasMore ? (
                <Button
                  onClick={handleLoadMore}
                  variant="outline"
                  size="lg"
                  className="group border-primary/30 hover:border-primary hover:bg-primary/10 dark:border-primary/40 dark:hover:bg-primary/20"
                >
                  <span>Load More Projects</span>
                  <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                </Button>
              ) : (
                <Button
                  onClick={handleShowLess}
                  variant="outline"
                  size="lg"
                  className="group border-primary/30 hover:border-primary hover:bg-primary/10 dark:border-primary/40 dark:hover:bg-primary/20"
                >
                  <span>Show Less</span>
                  <ChevronUp className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                </Button>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
