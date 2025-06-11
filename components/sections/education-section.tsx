"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, BookOpen } from "lucide-react"

const education = [
  {
    institution: "HAMK University of Applied Sciences",
    degree: "Computer Applications",
    period: "2021-08-01 - 2024-12-31",
    level: "Bachelor",
    description:
      "Specialized in Machine Learning and Artificial Intelligence applications, with a focus on computer vision and natural language processing technologies.",
    url: "https://www.hamk.fi/en/",
  },
]

const certifications = [
  {
    title: "Data Analyst in PowerBI",
    issuer: "DataCamp",
    date: "Oct 2023",
    description:
      "Advanced Data Analyst Course in PowerBI, covering data modeling, DAX queries, and interactive dashboard creation.",
  },
  {
    title: "AWS Academy Cloud Foundation",
    issuer: "Amazon",
    date: "Sept 2023",
    description:
      "Comprehensive overview of AWS Cloud architecture, core services, security, pricing, and support options.",
  },
]

export default function EducationSection() {
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

  return (
    <section id="education" ref={containerRef} className="py-20 min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background/90 to-background" />
        <motion.div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl" style={{ y }} />
        <motion.div
          className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
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
              <Badge className="px-4 py-1 text-lg mb-4 bg-primary/10 text-primary border-primary/20 rounded-full">
                Qualifications
              </Badge>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Education & Certifications</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              My academic foundation and professional certifications that have shaped my expertise in machine learning,
              data science, and software development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center mb-8">
                <div className="p-3 rounded-full bg-primary/10 mr-4">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>

              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border border-border/30 hover:border-primary/20 transition-colors p-6 mb-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold">{edu.institution}</h4>
                        <p className="text-primary">{edu.degree}</p>
                      </div>
                      <Badge className="mt-2 md:mt-0 bg-primary/10 text-primary border-primary/20">{edu.level}</Badge>
                    </div>

                    <Badge variant="outline" className="mb-4">
                      {edu.period}
                    </Badge>

                    <p className="text-foreground/80 mb-4 leading-relaxed">{edu.description}</p>

                    <a
                      href={edu.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:underline"
                    >
                      <BookOpen className="w-4 h-4 mr-2" />
                      Visit Institution Website
                    </a>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center mb-8">
                <div className="p-3 rounded-full bg-primary/10 mr-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Certifications</h3>
              </div>

              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border border-border/30 hover:border-primary/20 transition-colors p-6 mb-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold">{cert.title}</h4>
                        <p className="text-primary">{cert.issuer}</p>
                      </div>
                      <Badge className="mt-2 md:mt-0 bg-primary/10 text-primary border-primary/20">{cert.date}</Badge>
                    </div>

                    <p className="text-foreground/80">{cert.description}</p>
                  </Card>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="mt-8 text-center"
              >
                <p className="text-foreground/70 italic">
                  Continuously expanding my knowledge through professional development and online courses.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
