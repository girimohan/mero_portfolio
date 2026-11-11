import Link from "next/link"
import { ArrowRight, Linkedin, Mail } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { profile } from "@/lib/data/profile"

export default function ContactSection() {
  return (
    <section id="contact" className="shell py-12">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-foreground px-6 py-14 text-background sm:px-12 sm:py-16">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/40 blur-[100px]"
            aria-hidden
          />
          <div className="relative max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-background/60">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">
              Let&apos;s <span className="font-serif font-normal italic">talk.</span>
            </h2>
            <p className="mt-4 text-background/70">
              I&apos;m looking for ML and AI engineering roles in Finland, and I&apos;m happy to talk about any of the
              projects here. Email is the quickest way to reach me.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
              >
                <Mail className="h-4 w-4" />
                {profile.email}
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-background/25 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-background/10"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-3 py-2.5 text-sm font-medium text-background/80 hover:text-background"
              >
                Or send a message
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
