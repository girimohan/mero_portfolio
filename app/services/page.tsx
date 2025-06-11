import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { BrainCircuit, Code, Database, LineChart, Layers, Cpu } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="container">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Services</h1>
            <p className="text-muted-foreground text-lg max-w-3xl">
              I offer a range of services in machine learning, software development, and data engineering to help
              businesses leverage technology for growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-background border rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <BrainCircuit className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-xl font-bold mb-2">Machine Learning Solutions</h2>
              <p className="text-muted-foreground">
                Custom machine learning models tailored to your business needs, from concept to deployment, with a focus
                on practical applications and measurable results.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-background border rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Cpu className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-xl font-bold mb-2">Computer Vision Systems</h2>
              <p className="text-muted-foreground">
                Specialized computer vision solutions for object detection, image classification, and visual quality
                control to automate inspection processes.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-background border rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-xl font-bold mb-2">Full Stack Development</h2>
              <p className="text-muted-foreground">
                End-to-end web application development using modern frameworks and technologies, with a focus on clean
                code, performance, and user experience.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-background border rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-xl font-bold mb-2">Data Engineering</h2>
              <p className="text-muted-foreground">
                Design and implementation of data pipelines, ETL processes, and database solutions to ensure efficient
                data flow and storage for your applications.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-background border rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <LineChart className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-xl font-bold mb-2">Data Analysis & Visualization</h2>
              <p className="text-muted-foreground">
                Transform raw data into actionable insights through statistical analysis and interactive visualizations
                that help drive business decisions.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-background border rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Layers className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-xl font-bold mb-2">Technical Consultation</h2>
              <p className="text-muted-foreground">
                Expert advice on technology stack selection, system architecture, and implementation strategies for AI
                and software development projects.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
