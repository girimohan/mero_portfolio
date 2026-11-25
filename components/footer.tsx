import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { profile } from "@/lib/data/profile"
import { SubstackIcon } from "@/components/substack"

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="shell flex flex-col gap-6 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium text-foreground">{profile.name}</p>
          <p>
            {profile.role} · {profile.location}
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer">
          <Link href="/projects" className="hover:text-foreground">Projects</Link>
          <Link href="/about" className="hover:text-foreground">About</Link>
          <Link href="/#live" className="hover:text-foreground">Live apps</Link>
          <Link href="/blog" className="hover:text-foreground">Writing</Link>
          <Link href="/lab" className="hover:text-foreground">Lab</Link>
          <Link href="/contact" className="hover:text-foreground">Contact</Link>
        </nav>

        <div className="flex items-center gap-1">
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-full p-2 hover:bg-muted hover:text-foreground">
            <Github className="h-4 w-4" />
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full p-2 hover:bg-muted hover:text-foreground">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href={profile.links.substack} target="_blank" rel="noopener noreferrer" aria-label="AIFinPost on Substack" className="rounded-full p-2 hover:bg-muted hover:text-foreground">
            <SubstackIcon className="h-3.5 w-3.5" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="rounded-full p-2 hover:bg-muted hover:text-foreground">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="shell pb-8 text-xs text-muted-foreground/80">© {new Date().getFullYear()} {profile.name}</div>
    </footer>
  )
}
