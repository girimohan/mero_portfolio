"use client"

import { useEffect, useId, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowRight, ArrowUpRight, ChevronDown, Lock } from "lucide-react"
import { liveAppGroupLabels, liveApps, liveAppsByGroup, type LiveApp, type LiveAppGroup } from "@/lib/data/live-apps"
import { cn } from "@/lib/utils"

const groups: LiveAppGroup[] = ["radars", "apps"]

export function LiveDot({ className }: { className?: string }) {
  return (
    <span className={cn("relative flex h-2 w-2", className)} aria-hidden>
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-60 motion-reduce:hidden" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-live" />
    </span>
  )
}

function MenuItem({ app }: { app: LiveApp }) {
  return (
    <a
      href={app.url}
      target="_blank"
      rel="noopener noreferrer"
      role="menuitem"
      className="group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-muted focus-visible:bg-muted"
    >
      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-1.5 text-sm font-medium text-foreground">
          {app.name}
          {app.private && (
            <span className="inline-flex items-center gap-0.5 rounded-full border border-border px-1.5 py-px text-[10px] font-normal text-muted-foreground">
              <Lock className="h-2.5 w-2.5" /> Private
            </span>
          )}
        </span>
        <span className="mt-0.5 block truncate text-xs text-muted-foreground">{app.description}</span>
      </span>
      <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
    </a>
  )
}

/** Desktop navbar dropdown listing every deployed app. */
export function LiveAppsMenu() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const rootRef = useRef<HTMLDivElement>(null)
  const panelId = useId()

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    if (!open) return
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("pointerdown", onPointer)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("pointerdown", onPointer)
      document.removeEventListener("keydown", onKey)
    }
  }, [open])

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-haspopup="menu"
        className={cn(
          "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm transition-colors",
          open ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground",
        )}
      >
        <LiveDot />
        Live apps
        <span className="rounded-full bg-foreground/[0.06] px-1.5 font-mono text-[11px] leading-5 dark:bg-white/10">
          {liveApps.length}
        </span>
        <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <div
          id={panelId}
          role="menu"
          aria-label="Live apps"
          className="absolute right-0 top-full z-50 mt-3 w-[640px] origin-top-right overflow-hidden rounded-2xl border border-border bg-popover text-popover-foreground shadow-2xl shadow-black/10 dark:shadow-black/40"
        >
          <div className="grid grid-cols-2 divide-x divide-border">
            {groups.map((group) => (
              <div key={group} className="p-2">
                <p className="eyebrow px-3 pb-1 pt-2">{liveAppGroupLabels[group].title}</p>
                {liveAppsByGroup(group).map((app) => (
                  <MenuItem key={app.url} app={app} />
                ))}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between border-t border-border bg-muted/50 px-5 py-3 text-xs text-muted-foreground">
            <span>Every link opens the running app in a new tab.</span>
            <Link href="/#live" className="group inline-flex items-center gap-1 font-medium text-foreground">
              Launcher on home page
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

/** Compact list for the mobile menu. */
export function LiveAppsMobileList() {
  return (
    <div className="mt-3 border-t border-border pt-3">
      <p className="flex items-center gap-2 px-3 pb-2 text-sm font-medium">
        <LiveDot /> Live apps
      </p>
      {groups.map((group) => (
        <div key={group} className="mb-2">
          <p className="eyebrow px-3 py-1.5">{liveAppGroupLabels[group].title}</p>
          <div className="grid gap-1 sm:grid-cols-2">
            {liveAppsByGroup(group).map((app) => (
              <a
                key={app.url}
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-1 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <span className="flex min-w-0 items-center gap-1.5">
                  <span className="truncate">{app.name}</span>
                  {app.private && <Lock className="h-3 w-3 shrink-0" aria-label="Private" />}
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
