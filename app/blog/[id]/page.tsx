"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock, Facebook, Twitter, Linkedin, LinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { getBlogPost, type BlogPost } from "@/lib/data/blogs"

export default function BlogPostPage() {
  const params = useParams()
  const router = useRouter()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (params.id) {
      const foundPost = getBlogPost(params.id as string)
      setPost(foundPost || null)
      setLoading(false)
    }
  }, [params.id])

  const shareUrl = typeof window !== "undefined" ? window.location.href : ""
  const shareTitle = post ? `Check out this article: ${post.title}` : "Check out this article"

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

  const handleBackToBlog = () => {
    router.push("/#blog")
  }

  if (loading) {
    return (      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <div className="flex min-h-screen flex-col">
          <Navbar activeSection="blog" />
          <div className="min-h-screen flex items-center justify-center">
            <div className="animate-pulse text-xl">Loading article...</div>
          </div>
        </div>
      </ThemeProvider>
    )
  }

  if (!post) {
    return (      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <div className="flex min-h-screen flex-col">
          <Navbar activeSection="blog" />
          <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <h1 className="text-2xl font-bold mb-4">Article not found</h1>
            <p className="mb-6 text-foreground/70">The article you're looking for doesn't exist or has been removed.</p>
            <Button onClick={handleBackToBlog}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </div>
        </div>
      </ThemeProvider>
    )
  }

  return (    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="flex min-h-screen flex-col">
        <Navbar activeSection="blog" />
        <div className="min-h-screen pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <Button variant="ghost" className="mb-6" onClick={handleBackToBlog}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>

            <article>
              <div className="mb-8">
                <Badge className="mb-4 bg-primary text-primary-foreground">{post.category}</Badge>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">{post.title}</h1>

                <div className="flex items-center text-foreground/70 mb-6">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>

                <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-8">
                  <Image
                    src={post.image || "/images/ui/placeholder.svg?height=400&width=600"}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div
                className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-foreground prose-p:text-foreground/90 prose-a:text-primary prose-strong:text-foreground prose-code:text-foreground/90 prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <div className="mt-12 pt-6 border-t border-border">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Share this article</h3>
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