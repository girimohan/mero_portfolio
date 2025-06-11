import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h1 className="text-4xl font-bold mb-4">About Me</h1>
                <p className="text-muted-foreground text-lg">
                  Machine Learning Engineer and Full Stack Developer with a passion for building intelligent systems.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Background</h2>
                <p className="text-muted-foreground">
                  I am a Computer Applications graduate from HAMK University of Applied Sciences, specializing in
                  Machine Learning and Full Stack Development. My academic journey has equipped me with a strong
                  foundation in computer science principles, while my practical experience has honed my skills in
                  developing end-to-end solutions.
                </p>
                <p className="text-muted-foreground">
                  During my studies and professional work, I've successfully delivered multiple projects that combine
                  machine learning with practical applications. My focus has been on creating systems that solve
                  real-world problems with high accuracy and reliability.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Education</h2>
                <div className="space-y-4">
                  <div className="bg-background border rounded-lg p-4">
                    <h3 className="font-medium">Bachelor of Computer Applications</h3>
                    <p className="text-muted-foreground">HAMK University of Applied Sciences</p>
                    <p className="text-sm text-muted-foreground">2020 - 2024</p>
                  </div>
                  <div className="bg-background border rounded-lg p-4">
                    <h3 className="font-medium">Machine Learning Specialization</h3>
                    <p className="text-muted-foreground">Online Certification</p>
                    <p className="text-sm text-muted-foreground">2022</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Work Experience</h2>
                <div className="space-y-4">
                  <div className="bg-background border rounded-lg p-4">
                    <h3 className="font-medium">ML Engineer Intern</h3>
                    <p className="text-muted-foreground">HAMK Smart Research Unit</p>
                    <p className="text-sm text-muted-foreground">2023 - 2024</p>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                      <li>Developed machine learning solutions for industrial applications</li>
                      <li>Led the Smart Parking System project with 97.9% accuracy</li>
                      <li>Implemented computer vision algorithms for quality control</li>
                    </ul>
                  </div>
                  <div className="bg-background border rounded-lg p-4">
                    <h3 className="font-medium">Web Developer (Part-time)</h3>
                    <p className="text-muted-foreground">Freelance</p>
                    <p className="text-sm text-muted-foreground">2021 - Present</p>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                      <li>Designed and developed responsive websites for clients</li>
                      <li>Created custom web applications using React and Django</li>
                      <li>Implemented database solutions and API integrations</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <Button className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download CV
                </Button>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-background border rounded-xl p-6">
                <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
                  <Image src="/placeholder.svg?height=400&width=300" alt="Mohan Giri" fill className="object-cover" />
                </div>
                <h2 className="text-xl font-semibold mb-2">Mohan Giri</h2>
                <p className="text-muted-foreground mb-4">ML Engineer & Developer based in Helsinki, Finland</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Email:</span>
                    <span>contact@mohangiri.com</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">LinkedIn:</span>
                    <a href="#" className="text-primary hover:underline">
                      @mohangiri
                    </a>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">GitHub:</span>
                    <a href="#" className="text-primary hover:underline">
                      @girimohan
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-background border rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-4">Skills</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Python</Badge>
                      <Badge>JavaScript</Badge>
                      <Badge>TypeScript</Badge>
                      <Badge>SQL</Badge>
                      <Badge>HTML/CSS</Badge>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Frameworks & Libraries</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge>PyTorch</Badge>
                      <Badge>TensorFlow</Badge>
                      <Badge>React</Badge>
                      <Badge>Django</Badge>
                      <Badge>Flask</Badge>
                      <Badge>Next.js</Badge>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Tools & Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Git</Badge>
                      <Badge>Docker</Badge>
                      <Badge>AWS</Badge>
                      <Badge>PostgreSQL</Badge>
                      <Badge>MongoDB</Badge>
                      <Badge>PowerBI</Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-background border rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-4">Languages</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>English</span>
                    <span className="text-muted-foreground">Fluent</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Finnish</span>
                    <span className="text-muted-foreground">Intermediate</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Hindi</span>
                    <span className="text-muted-foreground">Native</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
