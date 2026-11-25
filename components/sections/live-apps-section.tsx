import Link from "next/link"
import { AppWindow, ArrowUpRight, Lock, Radar } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { LiveDot } from "@/components/live-apps-menu"
import { displayHost, liveAppGroupLabels, liveApps, liveAppsByGroup, type LiveApp } from "@/lib/data/live-apps"

function hostingLabel(url: string) {
  return displayHost(url).includes("github.io") ? "GitHub Pages" : displayHost(url).split("/")[0]
}

function StatusPill({ app }: { app: LiveApp }) {
  return app.private ? (
    <span className="inline-flex items-center gap-1 rounded-full border border-border px-2 py-0.5 text-[11px] text-muted-foreground">
      <Lock className="h-3 w-3" /> Private
    </span>
  ) : (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-live/30 bg-live/10 px-2 py-0.5 text-[11px] font-medium text-live">
      <LiveDot className="h-1.5 w-1.5 [&>span]:h-1.5 [&>span]:w-1.5" /> Live
    </span>
  )
}

/** Tall card: the whole card opens the app; "Case study" is a separate link layered above. */
function RadarCard({ app }: { app: LiveApp }) {
  return (
    <div className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-lg hover:shadow-black/5 motion-reduce:hover:translate-y-0 dark:hover:shadow-black/30">
      <div className="flex items-center justify-between">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-accent-foreground">
          <Radar className="h-[18px] w-[18px]" />
        </span>
        <StatusPill app={app} />
      </div>
      <h4 className="mt-4 font-semibold">
        <a
          href={app.url}
          target="_blank"
          rel="noopener noreferrer"
          className="after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-ring"
        >
          {app.name}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </h4>
      <p className="mt-1 flex-1 text-sm leading-snug text-muted-foreground">{app.description}</p>
      <div className="mt-4 flex items-center justify-between gap-2 border-t border-border pt-3 text-xs">
        {app.slug ? (
          <Link href={`/projects/${app.slug}`} className="relative z-10 text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
            Case study
          </Link>
        ) : (
          <span className="truncate text-muted-foreground">{app.private ? "Password required" : hostingLabel(app.url)}</span>
        )}
        <span className="inline-flex items-center gap-0.5 font-medium text-foreground">
          Open
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </div>
  )
}

/** Compact row for the products list. */
function AppRow({ app }: { app: LiveApp }) {
  return (
    <a
      href={app.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3.5 transition-colors hover:border-foreground/20 hover:bg-muted/40"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-muted text-muted-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
        <AppWindow className="h-[18px] w-[18px]" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-sm font-medium">{app.name}</span>
        <span className="block truncate font-mono text-[11px] text-muted-foreground">{displayHost(app.url)}</span>
      </span>
      <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
      <span className="sr-only">{app.description} (opens in a new tab)</span>
    </a>
  )
}

export default function LiveAppsSection() {
  const radars = liveAppsByGroup("radars")
  const apps = liveAppsByGroup("apps")

  return (
    <section id="live" className="shell pb-20 pt-6 sm:pb-24 sm:pt-8">
      <SectionHeading
        eyebrow="Live now"
        title={
          <span className="inline-flex flex-wrap items-center gap-x-3">
            Try the apps directly
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 align-middle font-mono text-xs font-normal tracking-normal text-muted-foreground">
              <LiveDot /> {liveApps.length} deployed
            </span>
          </span>
        }
        description="Everything here is deployed and running. Each link opens the app in a new tab; the two private radars ask for a password."
        action={{ href: "/projects", label: "Case studies" }}
      />

      <div className="space-y-10">
        <div>
          <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-lg font-semibold">{liveAppGroupLabels.radars.title}</h3>
            <p className="text-sm text-muted-foreground">{liveAppGroupLabels.radars.note}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {radars.map((app, i) => (
              <Reveal key={app.url} delay={i * 0.04} className="h-full">
                <RadarCard app={app} />
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-lg font-semibold">{liveAppGroupLabels.apps.title}</h3>
            <p className="text-sm text-muted-foreground">{liveAppGroupLabels.apps.note}</p>
          </div>
          <Reveal>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {apps.map((app) => (
                <AppRow key={app.url} app={app} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
