"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Github, Facebook, Twitter, Linkedin, LinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { getProject, type Project } from "@/lib/data/projects"

export default function ProjectPage() {
  const params = useParams()
  const router = useRouter()
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (params.id) {
      const foundProject = getProject(params.id as string)
      setProject(foundProject || null)
      setLoading(false)
    }
  }, [params.id])

  const shareUrl = typeof window !== "undefined" ? window.location.href : ""
  const shareTitle = project ? `Check out this project: ${project.title}` : "Check out this project"

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      "_blank",
    )
  }

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, "_blank")
  }

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, "_blank")
  }

  const copyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl)
      alert("Link copied to clipboard!")
    }
  }

  const handleBackToProjects = () => {
    router.push("/#projects")
  }

  if (loading) {
    return (      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <div className="flex min-h-screen flex-col">
          <Navbar activeSection="projects" />
          <div className="min-h-screen flex items-center justify-center">
            <div className="animate-pulse text-xl">Loading project...</div>
          </div>
        </div>
      </ThemeProvider>
    )
  }

  if (!project) {
    return (      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <div className="flex min-h-screen flex-col">
          <Navbar activeSection="projects" />
          <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <h1 className="text-2xl font-bold mb-4">Project not found</h1>
            <p className="mb-6 text-foreground/70">The project you're looking for doesn't exist or has been removed.</p>
            <Button onClick={handleBackToProjects}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
          </div>
        </div>
      </ThemeProvider>
    )
  }

  return (    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="flex min-h-screen flex-col">
        <Navbar activeSection="projects" />
        <div className="min-h-screen pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <Button variant="ghost" className="mb-6" onClick={handleBackToProjects}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>

            <article>
              <div className="mb-8">
                <Badge className="mb-4 bg-primary text-primary-foreground">
                  {project.category?.toUpperCase()}
                </Badge>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">{project.title}</h1>
                
                {project.subtitle && (
                  <p className="text-xl text-foreground/70 mb-6">{project.subtitle}</p>
                )}

                <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-8">
                  <Image
                    src={project.image || "/images/ui/placeholder.svg?height=400&width=600"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Project Actions */}
                <div className="flex gap-4 mb-8">
                  {project.demoUrl && project.demoUrl !== "#" && (
                    <Button asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && project.githubUrl !== "#" && (
                    <Button variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  )}
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
                <p className="text-foreground/90 leading-relaxed">{project.description}</p>
              </div>

              {/* Project Content */}
              {project.content && (
                <div
                  className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-foreground prose-p:text-foreground/90 prose-a:text-primary prose-strong:text-foreground prose-code:text-foreground/90 prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded"
                  dangerouslySetInnerHTML={{ __html: project.content }}
                />
              )}

              <div className="mt-12 pt-6 border-t border-border">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Share this project</h3>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={shareOnTwitter}
                    className="rounded-full h-10 w-10 hover:text-primary hover:border-primary"
                    aria-label="Share on Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={shareOnFacebook}
                    className="rounded-full h-10 w-10 hover:text-primary hover:border-primary"
                    aria-label="Share on Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={shareOnLinkedIn}
                    className="rounded-full h-10 w-10 hover:text-primary hover:border-primary"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={copyLink}
                    className="rounded-full h-10 w-10 hover:text-primary hover:border-primary"
                    aria-label="Copy link"
                  >
                    <LinkIcon className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </article>          </div>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  )
}