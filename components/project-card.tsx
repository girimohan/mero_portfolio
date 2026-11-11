import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Lock } from "lucide-react"
import { categoryLabels, type Project } from "@/lib/data/projects"
import { cn } from "@/lib/utils"

export function StatusDot({ status }: { status: Project["status"] }) {
  const color =
    status === "Live" ? "bg-live" : status === "In progress" ? "bg-amber-500" : status === "Prototype" ? "bg-violet-500" : "bg-muted-foreground/50"
  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
      <span className="relative flex h-2 w-2">
        {status === "Live" && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-60 motion-reduce:hidden" />}
        <span className={cn("relative inline-flex h-2 w-2 rounded-full", color)} />
      </span>
      {status}
    </span>
  )
}

/** Visual for projects without a screenshot: the headline metric or the category, on a soft pattern. */
export function ProjectCover({ project, className }: { project: Project; className?: string }) {
  const metric = project.metrics?.[0]
  const lines = project.cover
  return (
    <div
      className={cn(
        "relative flex h-full w-full flex-col justify-end overflow-hidden bg-gradient-to-br from-accent via-background to-muted p-6",
        className,
      )}
    >
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: "radial-gradient(hsl(var(--primary) / 0.25) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
          maskImage: "linear-gradient(to bottom, black, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
        }}
        aria-hidden
      />
      <div className="relative">
        {lines ? (
          <pre className="whitespace-pre font-mono text-[12px] leading-relaxed text-muted-foreground sm:text-[13px]" aria-hidden>
            {lines.map((l, i) => (
              <span key={i} className={i === 0 ? "text-foreground" : undefined}>
                {l}
                {"\n"}
              </span>
            ))}
          </pre>
        ) : metric ? (
          <>
            <p className="font-mono text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">{metric.value}</p>
            <p className="mt-1 max-w-xs text-sm text-muted-foreground">{metric.label}</p>
          </>
        ) : (
          <pre className="font-mono text-[13px] leading-relaxed text-muted-foreground" aria-hidden>
            <span className="text-primary">stack</span> = [{"\n"}
            {project.tags.slice(0, 4).map((t) => (
              <span key={t}>
                {"  "}
                <span className="text-foreground">&quot;{t}&quot;</span>,{"\n"}
              </span>
            ))}
            ]
          </pre>
        )}
      </div>
    </div>
  )
}

function ProjectVisual({ project, sizes, priority }: { project: Project; sizes: string; priority?: boolean }) {
  return project.image ? (
    <Image
      src={project.image}
      alt={`Screenshot of ${project.title}`}
      fill
      sizes={sizes}
      priority={priority}
      className={cn(
        "transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none",
        project.imageFit === "contain" ? "bg-white object-contain p-3" : "object-cover object-top",
      )}
    />
  ) : (
    <ProjectCover project={project} />
  )
}

export function ProjectCard({ project, large = false, priority }: { project: Project; large?: boolean; priority?: boolean }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-xl hover:shadow-foreground/[0.04] motion-reduce:transform-none",
        large && "md:grid md:grid-cols-5",
      )}
    >
      <div
        className={cn(
          "relative aspect-[16/10] overflow-hidden border-b border-border bg-muted",
          large && "md:col-span-3 md:aspect-auto md:min-h-[340px] md:border-b-0 md:border-r",
        )}
      >
        <ProjectVisual project={project} priority={priority} sizes={large ? "(min-width: 768px) 60vw, 100vw" : "(min-width: 768px) 33vw, 100vw"} />
      </div>

      <div className={cn("flex flex-1 flex-col p-5 sm:p-6", large && "md:col-span-2 md:p-8")}>
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="font-mono text-xs text-muted-foreground">
            {categoryLabels[project.category]}
            {project.year ? ` · ${project.year}` : ""}
          </span>
          <StatusDot status={project.status} />
        </div>

        <h3 className={cn("flex items-start gap-1 font-semibold", large ? "text-2xl sm:text-3xl" : "text-lg")}>
          {project.title}
          <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
        </h3>
        <p className={cn("mt-2 text-muted-foreground", large ? "text-base" : "text-sm")}>{project.tagline}</p>

        {large && project.metrics && (
          <dl className="mt-6 grid grid-cols-1 gap-4 border-t border-border pt-5 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <dt className="sr-only">{m.label}</dt>
                <dd className="font-mono text-xl font-semibold">{m.value}</dd>
                <dd className="mt-0.5 text-xs leading-snug text-muted-foreground">{m.label}</dd>
              </div>
            ))}
          </dl>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-5">
          {project.tags.slice(0, large ? 6 : 4).map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
          {project.privateCode && (
            <span className="chip gap-1" title="Source code is in a private repository">
              <Lock className="h-3 w-3" /> Private code
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
