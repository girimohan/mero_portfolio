import type { Metadata } from "next"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { profile } from "@/lib/data/profile"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Mohan Giri about ML / AI engineering roles or projects.",
}

const channels = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Linkedin, label: "LinkedIn", value: "mohan-giri", href: profile.links.linkedin },
  { icon: Github, label: "GitHub", value: "@girimohan", href: profile.links.github },
]

export default function ContactPage() {
  return (
    <div className="shell pb-8 pt-12 sm:pt-16">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div>
          <p className="eyebrow mb-3">Contact</p>
          <h1 className="text-4xl font-semibold sm:text-5xl">
            Let&apos;s <span className="font-serif font-normal italic">talk.</span>
          </h1>
          <p className="mt-4 max-w-md text-lg text-muted-foreground">
            I&apos;m open to ML and AI engineering roles in Finland. Questions about a project are welcome too.
          </p>

          <ul className="mt-10 space-y-3">
            {channels.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-2xl border border-border p-4 transition-colors hover:bg-muted/50"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                    <c.icon className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-xs text-muted-foreground">{c.label}</span>
                    <span className="block font-medium">{c.value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" /> {profile.location}
          </p>
        </div>

        <ContactForm />
      </div>
    </div>
  )
}
