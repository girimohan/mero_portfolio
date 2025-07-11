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
    name: "Machine Learning",
    icon: <Brain className="h-5 w-5" />,
    skills: [
      { name: "Computer Vision", level: skillLevels.ADVANCED },
      { name: "Deep Learning", level: skillLevels.ADVANCED },
      { name: "Natural Language Processing", level: skillLevels.INTERMEDIATE },
      { name: "PyTorch", level: skillLevels.ADVANCED },
      { name: "TensorFlow/Keras", level: skillLevels.INTERMEDIATE },
      { name: "YOLO Object Detection", level: skillLevels.EXPERT },
      { name: "Transfer Learning", level: skillLevels.ADVANCED },
      { name: "Model Deployment", level: skillLevels.INTERMEDIATE },
    ],
  },
  {
    name: "Data Science",
    icon: <ChartBar className="h-5 w-5" />,
    skills: [
      { name: "Data Analysis", level: skillLevels.ADVANCED },
      { name: "Statistical Analysis", level: skillLevels.ADVANCED },
      { name: "Pandas & NumPy", level: skillLevels.EXPERT },
      { name: "Scikit-learn", level: skillLevels.ADVANCED },
      { name: "Data Visualization", level: skillLevels.ADVANCED },
      { name: "Feature Engineering", level: skillLevels.ADVANCED },
      { name: "Time Series Analysis", level: skillLevels.INTERMEDIATE },
      { name: "Exploratory Data Analysis", level: skillLevels.ADVANCED },
    ],
  },
  {
    name: "Programming",
    icon: <Code className="h-5 w-5" />,
    skills: [
      { name: "Python", level: skillLevels.EXPERT },
      { name: "SQL", level: skillLevels.ADVANCED },
      { name: "JavaScript", level: skillLevels.INTERMEDIATE },
      { name: "R", level: skillLevels.INTERMEDIATE },
      { name: "Git & Version Control", level: skillLevels.ADVANCED },
      { name: "Docker", level: skillLevels.INTERMEDIATE },
      { name: "RESTful APIs", level: skillLevels.INTERMEDIATE },
      { name: "Flask/Django", level: skillLevels.INTERMEDIATE },
    ],
  },
  {
    name: "Domain Knowledge",
    icon: <Lightbulb className="h-5 w-5" />,
    skills: [
      { name: "Computer Vision Applications", level: skillLevels.ADVANCED },
      { name: "MLOps", level: skillLevels.INTERMEDIATE },
      { name: "Research Methodology", level: skillLevels.ADVANCED },
      { name: "Data Ethics", level: skillLevels.INTERMEDIATE },
      { name: "Industry Project Experience", level: skillLevels.ADVANCED },
      { name: "Technical Documentation", level: skillLevels.ADVANCED },
      { name: "Problem Solving", level: skillLevels.ADVANCED },
      { name: "Team Collaboration", level: skillLevels.ADVANCED },
    ],
  },
]

// Import the necessary icons
import { Brain, BarChartIcon as ChartBar, Code, Lightbulb } from "lucide-react"

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("Machine Learning")
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
    <section className="py-20 bg-background" id="skills">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Technical Expertise</h2>
          <div className="w-24 h-0.5 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            As a Data Scientist and ML Engineer, I've developed expertise in various technologies and methodologies.
          </p>
        </div>

        <Tabs defaultValue="Machine Learning" className="w-full max-w-4xl mx-auto" onValueChange={handleTabChange}>
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8 bg-card p-1 rounded-lg">
            {skillCategories.map((category) => (
              <TabsTrigger
                key={category.name}
                value={category.name}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-md"
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
                <div className="bg-primary/20 p-3 rounded-full">{getCategoryIcon()}</div>
                <h3 className="text-xl font-medium ml-3">{category.name} Skills</h3>
              </div>

              <Card className="border border-primary/20">
                <CardContent className="p-6">
                  {/* Expert Skills */}
                  {groupedSkills[skillLevels.EXPERT].length > 0 && (
                    <div className="mb-8">
                      <div className="flex items-center mb-4">
                        <Award className="h-5 w-5 text-primary mr-2" />
                        <h4 className="text-lg font-medium">Expert Level</h4>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {groupedSkills[skillLevels.EXPERT].map((skill) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex items-center bg-primary/10 rounded-md p-3"
                          >
                            <Award className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                            <span className="font-medium text-sm">{skill.name}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Advanced Skills */}
                  {groupedSkills[skillLevels.ADVANCED].length > 0 && (
                    <div className="mb-8">
                      <div className="flex items-center mb-4">
                        <Zap className="h-5 w-5 text-secondary mr-2" />
                        <h4 className="text-lg font-medium">Advanced Level</h4>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {groupedSkills[skillLevels.ADVANCED].map((skill) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex items-center bg-secondary/10 rounded-md p-3"
                          >
                            <Zap className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                            <span className="font-medium text-sm">{skill.name}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Intermediate Skills */}
                  {groupedSkills[skillLevels.INTERMEDIATE].length > 0 && (
                    <div>
                      <div className="flex items-center mb-4">
                        <Check className="h-5 w-5 text-muted-foreground mr-2" />
                        <h4 className="text-lg font-medium">Intermediate Level</h4>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {groupedSkills[skillLevels.INTERMEDIATE].map((skill) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex items-center bg-muted rounded-md p-3"
                          >
                            <Check className="h-4 w-4 text-muted-foreground mr-2 flex-shrink-0" />
                            <span className="font-medium text-sm">{skill.name}</span>
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
