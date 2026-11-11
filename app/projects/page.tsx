import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"
import { ProjectGrid } from "@/components/project-grid"
import { projects, smallerProjects } from "@/lib/data/projects"
import { profile } from "@/lib/data/profile"

export const metadata: Metadata = {
  title: "Projects",
  description: "Machine learning systems, LLM research and full-stack apps by Mohan Giri.",
}

export default function ProjectsPage() {
  return (
    <div className="shell pb-8 pt-12 sm:pt-16">
      <header className="mb-12 max-w-2xl">
        <p className="eyebrow mb-3">Projects</p>
        <h1 className="text-4xl font-semibold sm:text-5xl">Everything I&apos;ve built</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Machine learning systems, research and the apps around them, newest and most substantial first. Projects
          marked &ldquo;Private code&rdquo; live in private repositories, and I&apos;m happy to walk through them.
        </p>
      </header>

      <ProjectGrid projects={projects} />

      <section className="mt-24">
        <h2 className="text-2xl font-semibold">Smaller projects &amp; coursework</h2>
        <p className="mt-2 text-muted-foreground">
          Experiments, assignments and early work. More on{" "}
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-foreground">
            GitHub
          </a>
          .
        </p>
        <ul className="mt-8 divide-y divide-border border-y border-border">
          {smallerProjects.map((p) => {
            const inner = (
              <>
                <span className="font-mono text-xs text-muted-foreground">{p.year}</span>
                <span>
                  <span className="flex items-center gap-1 font-medium">
                    {p.title}
                    {p.href && <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />}
                  </span>
                  <span className="mt-0.5 block text-sm text-muted-foreground">{p.description}</span>
                </span>
                <span className="hidden flex-wrap justify-end gap-1.5 sm:flex">
                  {p.tags.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </span>
              </>
            )
            const cls = "grid gap-1 py-5 sm:grid-cols-[4rem_1fr_auto] sm:items-baseline sm:gap-6"
            return (
              <li key={p.title}>
                {p.href ? (
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className={`${cls} group hover:bg-muted/40`}>
                    {inner}
                  </a>
                ) : (
                  <div className={cls}>{inner}</div>
                )}
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}
