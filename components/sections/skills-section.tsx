"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Brain, 
  Bot, 
  Database, 
  Code2, 
  Workflow, 
  Sparkles,
  CheckCircle2,
  TrendingUp
} from "lucide-react"

// Core expertise areas - what recruiters want to see
const expertiseAreas = [
  {
    title: "AI & Machine Learning",
    icon: Brain,
    description: "Building intelligent systems with deep learning, computer vision, and NLP",
    highlights: ["Deep Learning", "Computer Vision", "PyTorch", "YOLO", "Transfer Learning", "Model Optimization"],
  },
  {
    title: "Agentic AI & LLMs",
    icon: Bot,
    description: "Designing autonomous AI agents and multi-agent systems with modern LLM frameworks",
    highlights: ["LangChain", "LangGraph", "Multi-Agent Systems", "RAG Pipelines", "Prompt Engineering", "AI Orchestration"],
  },
  {
    title: "Data Science & Analytics",
    icon: Database,
    description: "Transforming raw data into actionable insights and predictive models",
    highlights: ["Python", "Pandas", "Statistical Analysis", "Feature Engineering", "Data Visualization", "ML Pipelines"],
  },
  {
    title: "Full Stack Development",
    icon: Code2,
    description: "Building end-to-end applications from ML models to production deployment",
    highlights: ["Python", "FastAPI", "Django", "Docker", "Kubernetes", "REST APIs"],
  },
]

// Key technologies - quick visual scan
const keyTechnologies = [
  "Python", "PyTorch", "TensorFlow", "LangChain", "OpenAI", "Hugging Face",
  "Pandas", "Scikit-learn", "SQL", "Docker", "Kubernetes", "Git", "FastAPI"
]

// What sets you apart
const differentiators = [
  {
    icon: Workflow,
    title: "End-to-End ML",
    description: "From data preprocessing to production deployment"
  },
  {
    icon: Bot,
    title: "Agentic Systems",
    description: "Building autonomous AI agents that reason and act"
  },
  {
    icon: TrendingUp,
    title: "Cutting-Edge",
    description: "Always learning the latest in AI/ML research"
  },
]

export default function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  return (
    <section className="py-20 relative overflow-hidden" id="skills">
      {/* Subtle Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-muted/20 to-background" />
        <motion.div 
          className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-primary/5 blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 10 }}
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="px-4 py-1 text-lg mb-4 bg-primary/10 text-primary border-primary/20 rounded-full">
              Expertise
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What I <span className="primary-text-gradient">Bring</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Specialized in building intelligent systems — from ML models to autonomous AI agents
            </p>
          </motion.div>

          {/* Core Expertise Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-5xl mx-auto">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50 hover:border-primary/30 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        <area.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{area.title}</h3>
                        <p className="text-foreground/60 text-sm">{area.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {area.highlights.map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1 text-sm rounded-full bg-muted text-foreground/80 border border-border/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Differentiators */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {differentiators.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="text-center p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary mb-4">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-foreground/60">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack - Quick Scan */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-lg font-medium mb-6 text-foreground/70">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {keyTechnologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-card border border-border/50 text-foreground/80 font-medium hover:border-primary/50 hover:text-primary transition-colors duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.03 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

