"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Star, Award, Zap } from "lucide-react"

// Define skill levels for job search perspective
const skillLevels = {
  INTERMEDIATE: "Intermediate",
  ADVANCED: "Advanced",
  EXPERT: "Expert",
}

// Define skill categories with more favorable skill levels for job search
const skillCategories = [
  {
    name: "Machine Learning & AI",
    icon: <Brain className="h-5 w-5" />,
    skills: [
      { name: "Computer Vision", level: skillLevels.ADVANCED },
      { name: "Deep Learning", level: skillLevels.ADVANCED },
      { name: "Natural Language Processing", level: skillLevels.ADVANCED },
      { name: "PyTorch", level: skillLevels.ADVANCED },
      { name: "TensorFlow/Keras", level: skillLevels.INTERMEDIATE },
      { name: "YOLO Object Detection", level: skillLevels.EXPERT },
      { name: "OpenCV", level: skillLevels.ADVANCED },
      { name: "HuggingFace Transformers", level: skillLevels.ADVANCED },
      { name: "RAG (Retrieval-Augmented Generation)", level: skillLevels.INTERMEDIATE },
      { name: "Chatbot Development", level: skillLevels.INTERMEDIATE },
      { name: "Transfer Learning", level: skillLevels.ADVANCED },
      { name: "Model Deployment", level: skillLevels.INTERMEDIATE },
    ],
  },
  {
    name: "Full Stack Development",
    icon: <Code className="h-5 w-5" />,
    skills: [
      { name: "React & Next.js", level: skillLevels.ADVANCED },
      { name: "TypeScript", level: skillLevels.ADVANCED },
      { name: "Node.js", level: skillLevels.INTERMEDIATE },
      { name: "Django", level: skillLevels.INTERMEDIATE },
      { name: "Flask", level: skillLevels.INTERMEDIATE },
      { name: "RESTful APIs", level: skillLevels.ADVANCED },
      { name: "Database Design", level: skillLevels.INTERMEDIATE },
      { name: "Frontend Frameworks", level: skillLevels.ADVANCED },
      { name: "Responsive Design", level: skillLevels.ADVANCED },
      { name: "Web Testing", level: skillLevels.INTERMEDIATE },
      { name: "Robot Framework", level: skillLevels.INTERMEDIATE },
      { name: "Web Performance", level: skillLevels.INTERMEDIATE },
    ],
  },
  {
    name: "Programming & Tools",
    icon: <ChartBar className="h-5 w-5" />,
    skills: [
      { name: "Python", level: skillLevels.EXPERT },
      { name: "JavaScript", level: skillLevels.ADVANCED },
      { name: "SQL", level: skillLevels.ADVANCED },
      { name: "R Programming Language", level: skillLevels.INTERMEDIATE },
      { name: "Git & Version Control", level: skillLevels.ADVANCED },
      { name: "Docker", level: skillLevels.INTERMEDIATE },
      { name: "Linux/Unix", level: skillLevels.INTERMEDIATE },
      { name: "Cloud Platforms", level: skillLevels.INTERMEDIATE },
      { name: "Big Data Technologies", level: skillLevels.INTERMEDIATE },
      { name: "Data Science Tools", level: skillLevels.ADVANCED },
      { name: "Data Analysis", level: skillLevels.ADVANCED },
    ],
  },
  {
    name: "Professional Skills",
    icon: <Lightbulb className="h-5 w-5" />,
    skills: [
      { name: "Problem Solving", level: skillLevels.ADVANCED },
      { name: "Research & Development", level: skillLevels.ADVANCED },
      { name: "Technical Documentation", level: skillLevels.ADVANCED },
      { name: "Project Management", level: skillLevels.INTERMEDIATE },
      { name: "Team Collaboration", level: skillLevels.ADVANCED },
      { name: "Agile Methodologies", level: skillLevels.INTERMEDIATE },
      { name: "Code Review", level: skillLevels.INTERMEDIATE },
      { name: "System Architecture", level: skillLevels.INTERMEDIATE },
    ],
  },
]

// Import the necessary icons
import { Brain, BarChartIcon as ChartBar, Code, Lightbulb } from "lucide-react"

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("Machine Learning & AI")
  const [skills, setSkills] = useState<(typeof skillCategories)[0]["skills"]>([])

  // Load skills from localStorage if available
  useEffect(() => {
    try {
      const storedSkills = localStorage.getItem("portfolio-skills")
      if (storedSkills) {
        const parsedSkills = JSON.parse(storedSkills)
        // If we have stored skills, use them instead of the default ones
        if (parsedSkills && Array.isArray(parsedSkills) && parsedSkills.length > 0) {
          // Find the active category
          const category = parsedSkills.find((cat) => cat.name === activeTab)
          if (category && category.skills) {
            setSkills(category.skills)
            return
          }
        }
      }

      // Fallback to default skills if no stored skills
      const category = skillCategories.find((cat) => cat.name === activeTab)
      if (category) {
        setSkills(category.skills)
      }
    } catch (error) {
      console.error("Error loading skills from localStorage:", error)
      // Fallback to default skills
      const category = skillCategories.find((cat) => cat.name === activeTab)
      if (category) {
        setSkills(category.skills)
      }
    }
  }, [activeTab])

  const handleTabChange = (value: string) => {
    setActiveTab(value)
  }

  // Get the icon for the current category
  const getCategoryIcon = () => {
    const category = skillCategories.find((cat) => cat.name === activeTab)
    return category?.icon || <Star className="h-5 w-5" />
  }

  // Group skills by level
  const groupedSkills = {
    [skillLevels.EXPERT]: skills.filter((skill) => skill.level === skillLevels.EXPERT),
    [skillLevels.ADVANCED]: skills.filter((skill) => skill.level === skillLevels.ADVANCED),
    [skillLevels.INTERMEDIATE]: skills.filter((skill) => skill.level === skillLevels.INTERMEDIATE),
  }

  return (
    <section className="py-20 bg-background dark:bg-background/80" id="skills">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4 dark:text-foreground">Technical Expertise</h2>
          <div className="w-24 h-0.5 bg-primary dark:bg-primary/80 mx-auto mb-6"></div>
          <p className="text-xl text-foreground/80 dark:text-foreground/70 max-w-2xl mx-auto">
            As an ML Engineer and Full Stack Developer, I've developed expertise in various technologies and methodologies.
          </p>
        </div>

        <Tabs defaultValue="Machine Learning & AI" className="w-full max-w-4xl mx-auto" onValueChange={handleTabChange}>
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8 bg-card dark:bg-card/50 p-1 rounded-lg">
            {skillCategories.map((category) => (
              <TabsTrigger
                key={category.name}
                value={category.name}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground dark:data-[state=inactive]:text-foreground/70 rounded-md"
              >
                <div className="flex items-center gap-2">
                  {category.icon}
                  <span>{category.name}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.name} value={category.name} className="space-y-8">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-primary/20 dark:bg-primary/30 p-3 rounded-full">{getCategoryIcon()}</div>
                <h3 className="text-xl font-medium ml-3 dark:text-foreground">{category.name} Skills</h3>
              </div>

              <Card className="border border-primary/20 dark:border-primary/30 dark:bg-card/50">
                <CardContent className="p-6">
                  {/* Expert Skills */}
                  {groupedSkills[skillLevels.EXPERT].length > 0 && (
                    <div className="mb-8">
                      <div className="flex items-center mb-4">
                        <Award className="h-5 w-5 text-primary dark:text-primary/90 mr-2" />
                        <h4 className="text-lg font-medium dark:text-foreground">Expert Level</h4>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {groupedSkills[skillLevels.EXPERT].map((skill) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex items-center bg-primary/10 dark:bg-primary/20 rounded-md p-3"
                          >
                            <Award className="h-4 w-4 text-primary dark:text-primary/90 mr-2 flex-shrink-0" />
                            <span className="font-medium text-sm dark:text-foreground/90">{skill.name}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Advanced Skills */}
                  {groupedSkills[skillLevels.ADVANCED].length > 0 && (
                    <div className="mb-8">
                      <div className="flex items-center mb-4">
                        <Zap className="h-5 w-5 text-secondary dark:text-secondary/90 mr-2" />
                        <h4 className="text-lg font-medium dark:text-foreground">Advanced Level</h4>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {groupedSkills[skillLevels.ADVANCED].map((skill) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex items-center bg-secondary/10 dark:bg-secondary/20 rounded-md p-3"
                          >
                            <Zap className="h-4 w-4 text-secondary dark:text-secondary/90 mr-2 flex-shrink-0" />
                            <span className="font-medium text-sm dark:text-foreground/90">{skill.name}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Intermediate Skills */}
                  {groupedSkills[skillLevels.INTERMEDIATE].length > 0 && (
                    <div>
                      <div className="flex items-center mb-4">
                        <Check className="h-5 w-5 text-foreground/60 dark:text-foreground/50 mr-2" />
                        <h4 className="text-lg font-medium dark:text-foreground">Intermediate Level</h4>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {groupedSkills[skillLevels.INTERMEDIATE].map((skill) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex items-center bg-muted dark:bg-muted/60 rounded-md p-3"
                          >
                            <Check className="h-4 w-4 text-foreground/60 dark:text-foreground/50 mr-2 flex-shrink-0" />
                            <span className="font-medium text-sm dark:text-foreground/80">{skill.name}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
