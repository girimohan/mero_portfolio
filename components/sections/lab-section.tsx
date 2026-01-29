"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  FlaskConical, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  Bot,
  Brain,
  Wrench,
  Lightbulb,
  Zap,
  ExternalLink,
  Github
} from "lucide-react"
import { getExperiments, getExperimentsByCategory, type Experiment } from "@/lib/data/experiments"

const categoryConfig: Record<string, { icon: React.ElementType; label: string; color: string }> = {
  agents: { icon: Bot, label: "Agents", color: "text-blue-500" },
  llm: { icon: Brain, label: "LLM", color: "text-purple-500" },
  tools: { icon: Wrench, label: "Tools", color: "text-orange-500" },
  prototypes: { icon: Lightbulb, label: "Prototypes", color: "text-yellow-500" },
  vibecoding: { icon: Zap, label: "Vibecoding", color: "text-pink-500" },
}

const statusConfig: Record<string, { label: string; className: string }> = {
  active: { label: "Active", className: "bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30" },
  exploring: { label: "Exploring", className: "bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30" },
  completed: { label: "Done", className: "bg-gray-500/20 text-gray-600 dark:text-gray-400 border-gray-500/30" },
}

export default function LabSection() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [category, setCategory] = useState("all")
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

  const experiments = getExperimentsByCategory(category)
  const categories = ["all", "agents", "llm", "prototypes", "tools", "vibecoding"]

  return (
    <section id="lab" ref={containerRef} className="py-20 relative overflow-hidden dark:bg-background/60">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background/90 to-background dark:from-background/70 dark:to-background" />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl" 
          style={{ y }} 
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto"
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header - Always Visible */}
          <motion.div
            className="text-center mb-8"
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
              <Badge className="px-4 py-1 text-lg mb-4 bg-primary/20 text-primary border-primary/30 dark:bg-primary/30 dark:border-primary/40 rounded-full">
                <FlaskConical className="w-4 h-4 mr-2 inline" />
                Lab
              </Badge>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 primary-text-gradient dark:text-primary-gradient">
              Experiments & Explorations
            </h2>
            <p className="text-lg text-foreground/70 dark:text-foreground/60 max-w-2xl mx-auto mb-6">
              A space for testing ideas, building prototypes, and exploring emerging technologies. 
              Not production-ready — just pure curiosity-driven tinkering.
            </p>

            {/* Expand/Collapse Button */}
            <Button
              onClick={() => setIsExpanded(!isExpanded)}
              variant="outline"
              size="lg"
              className="group border-primary/30 hover:border-primary hover:bg-primary/10 dark:border-primary/40 dark:hover:bg-primary/20"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              <span>{isExpanded ? "Hide Experiments" : `View ${experiments.length} Experiments`}</span>
              {isExpanded ? (
                <ChevronUp className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
              ) : (
                <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              )}
            </Button>
          </motion.div>

          {/* Expandable Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                {/* Category Filter */}
                <motion.div
                  className="flex flex-wrap justify-center gap-2 mb-8"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {categories.map((cat) => {
                    const config = categoryConfig[cat]
                    const Icon = config?.icon
                    return (
                      <Button
                        key={cat}
                        variant={category === cat ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCategory(cat)}
                        className={category === cat ? "bg-primary text-primary-foreground" : "border-border/50 hover:border-primary/30"}
                      >
                        {Icon && <Icon className="w-3 h-3 mr-1.5" />}
                        {cat === "all" ? "All" : config?.label || cat}
                      </Button>
                    )
                  })}
                </motion.div>

                {/* Experiments Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {experiments.map((experiment, index) => {
                    const catConfig = categoryConfig[experiment.category]
                    const statConfig = statusConfig[experiment.status]
                    const CatIcon = catConfig?.icon || FlaskConical

                    return (
                      <motion.div
                        key={experiment.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.05 * index }}
                      >
                        <Card className="h-full bg-card/60 dark:bg-card/40 backdrop-blur-sm border border-border/50 dark:border-border/30 hover:border-primary/20 transition-all">
                          <CardContent className="p-5">
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex items-center gap-2">
                                <CatIcon className={`w-4 h-4 ${catConfig?.color || "text-primary"}`} />
                                <span className="text-xs font-medium text-foreground/60 uppercase tracking-wide">
                                  {catConfig?.label || experiment.category}
                                </span>
                              </div>
                              <Badge variant="outline" className={`text-xs ${statConfig?.className}`}>
                                {statConfig?.label}
                              </Badge>
                            </div>

                            <h3 className="text-lg font-semibold mb-2 text-foreground">
                              {experiment.title}
                            </h3>
                            <p className="text-sm text-foreground/70 mb-4 line-clamp-2">
                              {experiment.description}
                            </p>

                            <div className="flex flex-wrap gap-1.5">
                              {experiment.tags.map((tag) => (
                                <Badge 
                                  key={tag} 
                                  variant="secondary" 
                                  className="text-xs bg-secondary/50 dark:bg-secondary/30"
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>

                            {(experiment.github || experiment.link) && (
                              <div className="flex gap-2 mt-4 pt-3 border-t border-border/30">
                                {experiment.github && (
                                  <a 
                                    href={experiment.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-foreground/50 hover:text-primary transition-colors"
                                  >
                                    <Github className="w-4 h-4" />
                                  </a>
                                )}
                                {experiment.link && (
                                  <a 
                                    href={experiment.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-foreground/50 hover:text-primary transition-colors"
                                  >
                                    <ExternalLink className="w-4 h-4" />
                                  </a>
                                )}
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      </motion.div>
                    )
                  })}
                </div>

                {experiments.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-12 text-foreground/50"
                  >
                    <FlaskConical className="w-12 h-12 mx-auto mb-4 opacity-30" />
                    <p>No experiments in this category yet.</p>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
