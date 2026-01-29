import type React from "react"
import { Linkedin, Github, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const ProfessionalFooter: React.FC = () => {
  return (
    <footer className="bg-background dark:bg-background/90 border-t border-border/50 dark:border-border/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-foreground dark:text-foreground">Mohan Giri</h3>
            <p className="text-foreground/70 dark:text-foreground/60 mb-4 max-w-md">
              AI/ML Engineer specializing in Machine Learning, Agentic AI, Computer Vision, and intelligent systems. 
              Passionate about creating intelligent systems with cutting-edge technology.
            </p>
            <div className="flex items-center gap-2 text-foreground/60 dark:text-foreground/50 mb-2">
              <MapPin className="h-4 w-4" />
              <span>Helsinki, Finland</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/60 dark:text-foreground/50">
              <Mail className="h-4 w-4" />
              <span>mohan_gi@hotmail.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground dark:text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-foreground/70 dark:text-foreground/60 hover:text-primary dark:hover:text-primary/90 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="text-foreground/70 dark:text-foreground/60 hover:text-primary dark:hover:text-primary/90 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#blog" className="text-foreground/70 dark:text-foreground/60 hover:text-primary dark:hover:text-primary/90 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/70 dark:text-foreground/60 hover:text-primary dark:hover:text-primary/90 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground dark:text-foreground">Connect</h4>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="icon"
                asChild
                className="h-10 w-10 rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary dark:border-border/40 dark:hover:bg-primary/90 dark:text-foreground/80"
              >
                <a href="https://github.com/girimohan" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="h-10 w-10 rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary dark:border-border/40 dark:hover:bg-primary/90 dark:text-foreground/80"
              >
                <a
                  href="https://www.linkedin.com/in/mohan-giri-37b87a186/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="h-10 w-10 rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary dark:border-border/40 dark:hover:bg-primary/90 dark:text-foreground/80"
              >
                <a href="mailto:mohan_gi@hotmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center">
          <p className="text-foreground/60">
            &copy; {new Date().getFullYear()} Mohan Giri. All rights reserved. Built with Next.js & TypeScript.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default ProfessionalFooter
