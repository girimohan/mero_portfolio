"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const { toast } = useToast()
  
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const form = e.currentTarget
    const formData = new FormData(form)
    
    // Add your email as the recipient
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "") // Get free key at web3forms.com
    formData.append("to_email", "mohan_gi@hotmail.com")
    formData.append("from_name", "Portfolio Contact Form")
    formData.append("subject", `New message from ${formData.get("name")}: ${formData.get("subject")}`)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus('success')
        toast({
          title: "Message sent! ✉️",
          description: "Thank you for reaching out. I'll get back to you soon!",
        })
        form.reset()
      } else {
        throw new Error(data.message || "Something went wrong")
      }
    } catch (error) {
      setSubmitStatus('error')
      toast({
        title: "Failed to send message",
        description: "Please try again or email me directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  return (
    <section className="py-20 min-h-screen relative overflow-hidden dark:bg-background/60" id="contact">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background/90 to-background dark:from-background/70 dark:to-background" />
        <motion.div 
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-secondary/5 dark:bg-secondary/10 blur-3xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 8 }}
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="text-center mb-12"
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
                Contact
              </Badge>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 primary-text-gradient">Get In Touch</h2>
            <p className="text-xl text-foreground/80 dark:text-foreground/70 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
            >
              <Card className="border-primary/20 hover:border-primary/40 dark:border-primary/30 dark:hover:border-primary/50 dark:bg-card/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <CardContent className="p-8 text-center">
                  <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 dark:text-foreground">Email</h3>
                  <a
                    href="mailto:mohan_gi@hotmail.com"
                    className="text-lg text-primary hover:underline font-medium"
                  >
                    mohan_gi@hotmail.com
                  </a>
                  <p className="text-foreground/60 dark:text-foreground/50 mt-2">
                    Send me an email and I'll get back to you within 24 hours.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-secondary/20 hover:border-secondary/40 dark:border-secondary/30 dark:hover:border-secondary/50 dark:bg-card/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/5">
                <CardContent className="p-8 text-center">
                  <div className="bg-secondary/10 dark:bg-secondary/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 dark:text-foreground">Location</h3>
                  <p className="text-lg font-medium text-foreground/80 dark:text-foreground/70">Helsinki, Finland</p>
                  <p className="text-foreground/60 dark:text-foreground/50 mt-2">
                    Available for remote work worldwide & local meetups.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-12"
            >
              <Card className="border-primary/20 dark:border-primary/30 dark:bg-card/50 overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-5">
                    {/* Form Section */}
                    <div className="md:col-span-3 p-8">
                      <h3 className="text-2xl font-bold mb-2 dark:text-foreground">Send Me a Message</h3>
                      <p className="text-foreground/60 dark:text-foreground/50 mb-6">
                        Fill out the form below and I'll get back to you as soon as possible.
                      </p>
                      
                      <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Honeypot field for spam protection */}
                        <input type="checkbox" name="botcheck" className="hidden" />
                        
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name" className="text-foreground/80">Your Name *</Label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              required
                              placeholder="John Doe"
                              className="w-full px-4 py-3 rounded-lg border border-border/50 dark:border-border/30 bg-background dark:bg-background/50 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-foreground/80">Your Email *</Label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              placeholder="john@example.com"
                              className="w-full px-4 py-3 rounded-lg border border-border/50 dark:border-border/30 bg-background dark:bg-background/50 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="subject" className="text-foreground/80">Subject *</Label>
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            required
                            placeholder="Project Inquiry / Job Opportunity / Collaboration"
                            className="w-full px-4 py-3 rounded-lg border border-border/50 dark:border-border/30 bg-background dark:bg-background/50 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="message" className="text-foreground/80">Message *</Label>
                          <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            placeholder="Tell me about your project, idea, or how I can help you..."
                            className="w-full px-4 py-3 rounded-lg border border-border/50 dark:border-border/30 bg-background dark:bg-background/50 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 resize-none"
                          />
                        </div>
                        
                        <Button
                          type="submit"
                          size="lg"
                          disabled={isSubmitting}
                          className={`w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 ${
                            submitStatus === 'success' ? 'bg-green-600 hover:bg-green-600' : ''
                          } ${
                            submitStatus === 'error' ? 'bg-red-600 hover:bg-red-600' : ''
                          }`}
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                              Sending...
                            </>
                          ) : submitStatus === 'success' ? (
                            <>
                              <CheckCircle className="mr-2 h-5 w-5" />
                              Message Sent!
                            </>
                          ) : submitStatus === 'error' ? (
                            <>
                              <AlertCircle className="mr-2 h-5 w-5" />
                              Try Again
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-5 w-5" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </form>
                    </div>
                    
                    {/* Info Sidebar */}
                    <div className="md:col-span-2 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 dark:from-primary/20 dark:via-primary/10 dark:to-secondary/20 p-8 flex flex-col justify-center">
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold mb-3 dark:text-foreground">Quick Response</h4>
                          <p className="text-foreground/70 dark:text-foreground/60 text-sm">
                            I typically respond within 24 hours. For urgent matters, feel free to reach out on LinkedIn.
                          </p>
                        </div>
                        
                        <div className="h-px bg-border/50 dark:bg-border/30" />
                        
                        <div>
                          <h4 className="text-lg font-semibold mb-3 dark:text-foreground">What I Can Help With</h4>
                          <ul className="space-y-2 text-sm text-foreground/70 dark:text-foreground/60">
                            <li className="flex items-center gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                              ML/AI Project Development
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                              Full Stack Web Applications
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                              Data Science Consulting
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                              Technical Collaboration
                            </li>
                          </ul>
                        </div>
                        
                        <div className="h-px bg-border/50 dark:bg-border/30" />
                        
                        <div>
                          <h4 className="text-lg font-semibold mb-3 dark:text-foreground">Direct Contact</h4>
                          <a 
                            href="mailto:mohan_gi@hotmail.com" 
                            className="text-primary hover:underline font-medium text-sm"
                          >
                            mohan_gi@hotmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center"
            >
              <h3 className="text-xl font-semibold mb-6 dark:text-foreground">Or connect with me on</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 border-primary/50 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  asChild
                >
                  <a href="mailto:mohan_gi@hotmail.com">
                    <Mail className="h-5 w-5" />
                    Email
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 hover:bg-foreground hover:text-background transition-all duration-300"
                  asChild
                >
                  <a href="https://github.com/girimohan" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    GitHub
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5] transition-all duration-300"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/mohan-giri-37b87a186/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
