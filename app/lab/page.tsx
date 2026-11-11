import type { Metadata } from "next"
import { getExperiments } from "@/lib/data/experiments"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Lab",
  description: "Small experiments and things Mohan Giri is exploring with LLMs and agents.",
}

const statusStyle: Record<string, string> = {
  active: "bg-live",
  exploring: "bg-amber-500",
  completed: "bg-muted-foreground/50",
}

function formatMonth(date: string) {
  const [y, m] = date.split("-").map(Number)
  return new Date(y, (m ?? 1) - 1).toLocaleDateString("en-GB", { month: "short", year: "numeric" })
}

export default function LabPage() {
  const experiments = getExperiments()

  return (
    <div className="shell pb-8 pt-12 sm:pt-16">
      <header className="mb-12 max-w-2xl">
        <p className="eyebrow mb-3">Lab</p>
        <h1 className="text-4xl font-semibold sm:text-5xl">Experiments &amp; tinkering</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Smaller explorations that aren&apos;t full projects: trying tools, comparing approaches and learning by building.
        </p>
      </header>

      <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
        {experiments.map((exp) => (
          <li key={exp.id} className="bg-background p-6">
            <div className="flex items-center justify-between gap-3 font-mono text-xs text-muted-foreground">
              <span>{formatMonth(exp.date)}</span>
              <span className="inline-flex items-center gap-1.5 capitalize">
                <span className={cn("h-2 w-2 rounded-full", statusStyle[exp.status])} />
                {exp.status}
              </span>
            </div>
            <h2 className="mt-3 text-lg font-semibold">{exp.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{exp.description}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {exp.tags.map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
