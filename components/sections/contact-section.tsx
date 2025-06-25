"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  return (
    <section className="py-20 bg-background dark:bg-background/90" id="contact">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4 dark:text-foreground">Get In Touch</h2>
          <div className="w-24 h-0.5 bg-finland-blue dark:bg-finland-blue/70 mx-auto mb-6"></div>
          <p className="text-xl text-foreground/80 dark:text-foreground/70 max-w-2xl mx-auto">
            Feel free to reach out to me for any inquiries or collaboration opportunities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          >
            <Card className="border-finland-blue/20 hover:border-finland-blue/40 dark:border-finland-blue/30 dark:hover:border-finland-blue/50 dark:bg-card/50 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="bg-finland-blue/10 dark:bg-finland-blue/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Mail className="h-8 w-8 text-finland-blue dark:text-finland-blue/90" />
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-foreground">Email</h3>
                <a
                  href="mailto:mohan_gi@hotmail.com"
                  className="text-lg text-finland-blue dark:text-finland-blue/90 hover:underline font-medium"
                >
                  mohan_gi@hotmail.com
                </a>
                <p className="text-foreground/60 dark:text-foreground/50 mt-2">
                  Send me an email and I'll get back to you as soon as possible.
                </p>
              </CardContent>
            </Card>

            <Card className="border-finland-lightBlue/20 hover:border-finland-lightBlue/40 dark:border-finland-lightBlue/30 dark:hover:border-finland-lightBlue/50 dark:bg-card/50 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="bg-finland-lightBlue/10 dark:bg-finland-lightBlue/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-finland-lightBlue dark:text-finland-lightBlue/90" />
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-foreground">Location</h3>
                <p className="text-lg font-medium text-foreground/80 dark:text-foreground/70">Helsinki, Finland</p>
                <p className="text-foreground/60 dark:text-foreground/50 mt-2">
                  Available for remote work and local meetups.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <h3 className="text-xl font-semibold mb-6 dark:text-foreground">Connect with me</h3>
            <div className="flex justify-center gap-4">
              <Button
                variant="outline"
                size="lg"
                className="gap-2 border-finland-blue text-finland-blue hover:bg-finland-blue hover:text-white dark:border-finland-blue/70 dark:text-finland-blue/90"
                asChild
              >
                <a href="mailto:mohan_gi@hotmail.com">
                  <Mail className="h-5 w-5" />
                  Email Me
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2"
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
                className="gap-2"
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
      </div>
    </section>
  )
}
