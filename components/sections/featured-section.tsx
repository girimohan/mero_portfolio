"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, TrendingUp } from "lucide-react"
import { getBlogPosts, type BlogPost } from "@/lib/data/blogs"
import { getProjects, type Project } from "@/lib/data/projects"

export default function FeaturedSection() {
  const [featuredProject, setFeaturedProject] = useState<Project | null>(null)
  const [featuredBlog, setFeaturedBlog] = useState<BlogPost | null>(null)
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

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  useEffect(() => {
    // Get featured items from static data
    const projects = getProjects()
    const blogs = getBlogPosts()
    
    if (projects.length > 0) {
      setFeaturedProject(projects[0]) // Get the first project as featured
    }
    
    if (blogs.length > 0) {
      setFeaturedBlog(blogs[0]) // Get the first blog as featured
    }
  }, [])

  return (
    <section ref={containerRef} className="py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl" style={{ y }} />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-secondary/5 blur-3xl"
          style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
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
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <Star className="h-5 w-5 text-primary" />
              <Badge className="px-4 py-1 text-lg bg-primary/20 text-primary border-primary/30 rounded-full">
                Featured
              </Badge>
              <TrendingUp className="h-5 w-5 text-primary" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 primary-text-gradient">Latest Highlights</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Discover my most recent project and blog post showcasing the latest in technology and innovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Featured Project */}
            {featuredProject && (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card
                  className="overflow-hidden cursor-pointer group h-full bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5"
                  onClick={() => router.push(`/projects/${featuredProject.id}`)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={featuredProject.image || "/images/ui/placeholder.svg?height=400&width=600"}
                      alt={featuredProject.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="bg-primary hover:bg-primary text-primary-foreground mb-2">
                        {featuredProject.category?.toUpperCase() || "PROJECT"}
                      </Badge>
                      {featuredProject.subtitle && (
                        <p className="text-white/90 text-sm font-medium">{featuredProject.subtitle}</p>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 line-clamp-2">{featuredProject.title}</h3>
                    <p className="text-foreground/70 mb-4 line-clamp-3">{featuredProject.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {featuredProject.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {featuredProject.tags.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{featuredProject.tags.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center text-primary group/link">
                      <span className="text-sm font-medium">View Project</span>
                      <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}

            {/* Featured Blog Post */}
            {featuredBlog && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card
                  className="overflow-hidden cursor-pointer group h-full bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5"
                  onClick={() => router.push(`/blog/${featuredBlog.id}`)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={featuredBlog.image || "/images/ui/placeholder.svg?height=400&width=600"}
                      alt={featuredBlog.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="bg-primary hover:bg-primary text-primary-foreground">
                        {featuredBlog.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-foreground/70 mb-3 text-sm">
                      <span>{featuredBlog.date}</span>
                      <span className="mx-2">•</span>
                      <span>{featuredBlog.readTime}</span>
                    </div>

                    <h3 className="text-xl font-semibold mb-3 line-clamp-2">{featuredBlog.title}</h3>
                    <p className="text-foreground/70 mb-4 line-clamp-3">{featuredBlog.summary}</p>

                    <div className="flex items-center text-primary group/link">
                      <span className="text-sm font-medium">Read Article</span>
                      <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => router.push("/#projects")} 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                onClick={() => router.push("/#blog")}
                className="hover:bg-primary hover:text-primary-foreground"
              >
                Read More Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}