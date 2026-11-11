import Link from "next/link"
import { ProjectCard } from "@/components/project-card"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { getProject, projects, smallerProjects, topicLabels, type Project, type ProjectTopic } from "@/lib/data/projects"

// The hero already shows the tram system, so the research paper leads here.
// Smart Parking and NPF are linked from the hero's fact tiles.
const order = [
  "multi-agent-llm-failure-modes",
  "helsinki-tram-mlops",
  "public-procurement-intelligence",
  "fintax-retrieval-benchmark",
  "kushmabazar",
]

const topics: ProjectTopic[] = ["llm", "ml", "data", "research", "apps"]

export default function ProjectsSection() {
  const [lead, ...rest] = order.map((slug) => getProject(slug)).filter((p): p is Project => Boolean(p))
  const total = projects.length + smallerProjects.length

  return (
    <section id="work" className="shell py-20 sm:py-24">
      <SectionHeading
        eyebrow="Selected work"
        title="Things I've built and studied"
        description="A few projects that show how I work: real data, honest baselines and something people can use at the end."
        action={{ href: "/projects", label: `All ${total} projects` }}
      />

      <div className="grid gap-5">
        {lead && (
          <Reveal>
            <ProjectCard project={lead} large priority />
          </Reveal>
        )}
        <div className="grid gap-5 md:grid-cols-2">
          {rest.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 0.06}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-2 text-sm">
        <span className="mr-1 text-muted-foreground">Looking for something specific?</span>
        {topics.map((t) => {
          const count = projects.filter((p) => p.topics.includes(t)).length
          return (
            <Link
              key={t}
              href={`/projects?topic=${t}`}
              className="rounded-full border border-border px-3 py-1 text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
            >
              {topicLabels[t]} <span className="font-mono text-xs opacity-60">{count}</span>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
