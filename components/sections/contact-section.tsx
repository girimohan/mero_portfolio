"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ContactSection() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <section className="py-20 bg-background dark:bg-background/90" id="contact">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4 dark:text-foreground">Get In Touch</h2>
          <div className="w-24 h-0.5 bg-finland-blue dark:bg-finland-blue/70 mx-auto mb-6"></div>
          <p className="text-xl text-foreground/80 dark:text-foreground/70 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out to me.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-4">
            <Card className="border-finland-blue/20 hover:border-finland-blue/40 dark:border-finland-blue/30 dark:hover:border-finland-blue/50 dark:bg-card/50 transition-colors">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="bg-finland-blue/10 dark:bg-finland-blue/20 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-finland-blue dark:text-finland-blue/90" />
                </div>
                <div>
                  <h3 className="font-medium dark:text-foreground">Email</h3>
                  <a
                    href="mailto:mohan_gi@hotmail.com"
                    className="text-foreground/80 dark:text-foreground/70 hover:text-finland-blue dark:hover:text-finland-blue/90 transition-colors"
                  >
                    mohan_gi@hotmail.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-finland-lightBlue/20 hover:border-finland-lightBlue/40 dark:border-finland-lightBlue/30 dark:hover:border-finland-lightBlue/50 dark:bg-card/50 transition-colors">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="bg-finland-lightBlue/10 dark:bg-finland-lightBlue/20 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-finland-lightBlue dark:text-finland-lightBlue/90" />
                </div>
                <div>
                  <h3 className="font-medium dark:text-foreground">Location</h3>
                  <p className="text-foreground/80 dark:text-foreground/70">Helsinki, Finland</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-finland-blue/20 hover:border-finland-blue/40 dark:border-finland-blue/30 dark:hover:border-finland-blue/50 dark:bg-card/50 transition-colors">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="bg-finland-blue/10 dark:bg-finland-blue/20 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-finland-blue dark:text-finland-blue/90" />
                </div>
                <div>
                  <h3 className="font-medium dark:text-foreground">Phone</h3>
                  <p className="text-foreground/80 dark:text-foreground/70">Available upon request</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="border-finland-blue/20">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-finland-blue/20 focus-visible:ring-finland-blue"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-finland-blue/20 focus-visible:ring-finland-blue"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="border-finland-blue/20 focus-visible:ring-finland-blue"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className="border-finland-blue/20 focus-visible:ring-finland-blue"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-finland-blue hover:bg-finland-blue/90 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
