"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { getBlogPosts, type BlogPost } from "@/lib/data/blogs"

export default function BlogSection() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
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

  // Load blog posts from static data
  useEffect(() => {
    setBlogPosts(getBlogPosts())
  }, [])

  // Function to handle blog card click - navigate to blog page
  const handleBlogClick = (post: BlogPost) => {
    router.push(`/blog/${post.id}`)
  }

  return (
    <section id="blog" ref={containerRef} className="py-20 min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background to-background/90" />
        <motion.div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" style={{ y }} />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
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
                Insights
              </Badge>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 primary-text-gradient">From The Blog</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Insights and reflections on machine learning, computer vision, NLP, and modern web development. Explore my
              thoughts on industry best practices and emerging technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                whileHover={{ y: -10 }}
              >
                <Card
                  className="overflow-hidden cursor-pointer group h-full flex flex-col bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5"
                  onClick={() => handleBlogClick(post)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image || "/images/ui/placeholder.svg?height=400&width=600"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                      <Badge className="bg-primary hover:bg-primary text-primary-foreground">{post.category}</Badge>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center text-foreground/70 mb-3 text-sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-semibold mb-3 line-clamp-2 text-foreground">{post.title}</h3>
                    <p className="text-foreground/70 mb-4 line-clamp-3">{post.summary}</p>

                    <div className="mt-auto flex items-center text-primary group/link">
                      <span className="text-sm font-medium">Read Article</span>
                      <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
