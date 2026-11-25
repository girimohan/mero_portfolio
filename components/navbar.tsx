"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, FileText, Github, Linkedin } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { LiveAppsMenu, LiveAppsMobileList } from "@/components/live-apps-menu"
import { SubstackIcon } from "@/components/substack"
import { profile } from "@/lib/data/profile"
import { cn } from "@/lib/utils"

const socials = [
  { href: profile.links.github, label: "GitHub", Icon: Github },
  { href: profile.links.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: profile.links.substack, label: "Substack", Icon: SubstackIcon },
]

function SocialLinks() {
  return (
    <>
      {socials.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${label} (opens in a new tab)`}
          title={label}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <Icon className={label === "Substack" ? "h-3.5 w-3.5" : "h-4 w-4"} />
        </a>
      ))}
    </>
  )
}

const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Writing" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close the mobile menu after navigating.
  useEffect(() => setOpen(false), [pathname])

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled || open ? "border-border bg-background/80 backdrop-blur-lg" : "border-transparent bg-background/0",
      )}
    >
      <nav className="shell flex h-16 items-center justify-between" aria-label="Main">
        <Link href="/" className="group flex items-center gap-2 font-semibold tracking-tight">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-foreground font-mono text-[11px] font-bold text-background transition-transform group-hover:-rotate-6">
            MG
          </span>
          <span>{profile.name}</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "rounded-full px-3 py-1.5 text-sm transition-colors",
                isActive(item.href) ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
          <LiveAppsMenu />
          <span className="mx-2 h-5 w-px bg-border" aria-hidden />
          <SocialLinks />
          <ThemeToggle />
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 inline-flex items-center gap-1.5 rounded-full bg-foreground px-3.5 py-1.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
          >
            <FileText className="h-3.5 w-3.5" />
            Resume
          </a>
        </div>

        <div className="flex items-center gap-0.5 lg:hidden">
          <SocialLinks />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-muted"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border lg:hidden">
          <div className="shell flex flex-col py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-base",
                  isActive(item.href) ? "bg-muted font-medium" : "text-muted-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
            <LiveAppsMobileList />
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-lg bg-foreground px-3 py-2.5 text-center font-medium text-background"
            >
              Download resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
