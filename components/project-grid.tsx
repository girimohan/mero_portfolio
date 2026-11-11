"use client"

import { useEffect, useState } from "react"
import { ProjectCard } from "@/components/project-card"
import { topicLabels, type Project, type ProjectTopic } from "@/lib/data/projects"
import { cn } from "@/lib/utils"

type Filter = "all" | ProjectTopic
const filters: Filter[] = ["all", "ml", "llm", "data", "research", "apps"]

function isFilter(value: string | null): value is Filter {
  return value !== null && (filters as string[]).includes(value)
}

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("all")

  // Allow deep links such as /projects?topic=llm. Read on the client so the
  // page itself can stay fully static.
  useEffect(() => {
    const topic = new URLSearchParams(window.location.search).get("topic")
    if (isFilter(topic)) setFilter(topic)
  }, [])

  function select(f: Filter) {
    setFilter(f)
    const url = f === "all" ? window.location.pathname : `${window.location.pathname}?topic=${f}`
    window.history.replaceState(null, "", url)
  }

  const visible = filter === "all" ? projects : projects.filter((p) => p.topics.includes(filter))

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects by topic">
        {filters.map((f) => {
          const count = f === "all" ? projects.length : projects.filter((p) => p.topics.includes(f)).length
          return (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => select(f)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm transition-colors",
                filter === f
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground",
              )}
            >
              {f === "all" ? "All" : topicLabels[f]}
              <span className="ml-1.5 font-mono text-xs opacity-60">{count}</span>
            </button>
          )
        })}
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  )
}
