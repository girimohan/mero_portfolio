import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="container">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Projects</h1>
            <p className="text-muted-foreground text-lg max-w-3xl">
              A collection of my recent projects in machine learning, computer vision, and web development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-background border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/ui/placeholder.svg?height=400&width=600"
                  alt="Smart Parking System"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">Smart Parking System</h2>
                <p className="text-muted-foreground mb-4">
                  A computer vision-based system that detects available parking spots with 97.9% accuracy using YOLOv5
                  object detection.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge>Python</Badge>
                  <Badge>PyTorch</Badge>
                  <Badge>YOLOv5</Badge>
                  <Badge>Computer Vision</Badge>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-background border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/ui/placeholder.svg?height=400&width=600"
                  alt="Surface Blister Detection"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">Surface Blister Detection</h2>
                <p className="text-muted-foreground mb-4">
                  Quality control system that detects surface blisters on industrial products using deep learning
                  techniques.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge>Python</Badge>
                  <Badge>TensorFlow</Badge>
                  <Badge>Deep Learning</Badge>
                  <Badge>Quality Control</Badge>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-background border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/ui/placeholder.svg?height=400&width=600"
                  alt="Data Visualization Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">Data Visualization Dashboard</h2>
                <p className="text-muted-foreground mb-4">
                  Interactive dashboard for visualizing complex datasets with filtering and drill-down capabilities.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge>React</Badge>
                  <Badge>D3.js</Badge>
                  <Badge>PowerBI</Badge>
                  <Badge>Data Analysis</Badge>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-background border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/ui/placeholder.svg?height=400&width=600"
                  alt="Personal Portfolio Website"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">Personal Portfolio Website</h2>
                <p className="text-muted-foreground mb-4">
                  A responsive portfolio website built with modern web technologies to showcase projects and skills.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge>Next.js</Badge>
                  <Badge>React</Badge>
                  <Badge>Tailwind CSS</Badge>
                  <Badge>TypeScript</Badge>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
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
