"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight } from "lucide-react"
import { getProjects, getProjectsByCategory, type Project } from "@/lib/data/projects"

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([])
  const [category, setCategory] = useState("all")
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

  // Function to handle project card click - navigate to project page
  const handleProjectClick = (project: Project) => {
    router.push(`/projects/${project.id}`)
  }

  return (
    <section id="projects" ref={containerRef} className="py-20 min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background/90 to-background" />
        <motion.div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" style={{ y }} />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
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
            >
              <Badge className="px-4 py-1 text-lg mb-4 bg-primary/20 text-primary border-primary/30 rounded-full">
                Portfolio
              </Badge>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 primary-text-gradient">Featured Projects</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
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
          >
            <Tabs value={category} onValueChange={setCategory} className="w-auto">
              <TabsList className="grid w-full grid-cols-4 lg:grid-cols-5 bg-card/50 backdrop-blur-sm">
                <TabsTrigger value="all" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  All
                </TabsTrigger>
                <TabsTrigger value="ml" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  ML/AI
                </TabsTrigger>
                <TabsTrigger value="web" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
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
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -10 }}
              >
                <Card
                  className="overflow-hidden cursor-pointer group h-full flex flex-col bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5"
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
          </div>
        </motion.div>
      </div>
    </section>
  )
}
