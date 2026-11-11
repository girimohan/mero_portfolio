import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound, permanentRedirect } from "next/navigation"
import { ArrowLeft, ArrowRight, ExternalLink, Github, Lock } from "lucide-react"
import { ProjectCard, ProjectCover, StatusDot } from "@/components/project-card"
import { categoryLabels, getProject, projects, type Project } from "@/lib/data/projects"

type Props = { params: Promise<{ id: string }> }

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).id)
  if (!project) return {}
  return {
    title: project.title,
    description: project.tagline,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { title: project.title, description: project.tagline, images: project.image ? [project.image] : undefined },
  }
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params
  const project = getProject(id)
  if (!project) notFound()
  // Old links used numeric ids; send them to the slug URL.
  if (id !== project.slug) permanentRedirect(`/projects/${project.slug}`)

  const index = projects.indexOf(project)
  const next = projects[(index + 1) % projects.length]
  const gallery = project.gallery?.filter((g) => g.src !== project.image) ?? []
  const related = (project.related ?? []).map((slug) => getProject(slug)).filter((p): p is Project => Boolean(p))

  return (
    <article className="shell pb-8 pt-10 sm:pt-14">
      <Link href="/projects" className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
        All projects
      </Link>

      <header className="mt-8 max-w-3xl">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-muted-foreground">
          <span>{categoryLabels[project.category]}</span>
          <span>{project.context}</span>
          {project.year && <span>{project.year}</span>}
          <StatusDot status={project.status} />
        </div>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">{project.title}</h1>
        <p className="mt-4 text-xl leading-relaxed text-muted-foreground">{project.tagline}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:opacity-85"
            >
              <ExternalLink className="h-4 w-4" />
              {project.status === "Live" ? "Open live site" : "Open demo"}
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted"
            >
              <Github className="h-4 w-4" />
              Source code
            </a>
          )}
          {project.privateCode && (
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <Lock className="h-3.5 w-3.5" />
              Code is private. Happy to walk through it on request.
            </span>
          )}
        </div>
      </header>

      {project.image && (
        <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-muted">
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            fill
            priority
            sizes="(min-width: 1152px) 1104px, 100vw"
            className={project.imageFit === "contain" ? "bg-white object-contain p-4" : "object-cover object-top"}
          />
        </div>
      )}

      {!project.image && (project.cover || !project.metrics) && (
        <div className="relative mt-12 h-56 overflow-hidden rounded-2xl border border-border">
          <ProjectCover project={project} className="p-8" />
        </div>
      )}

      {project.metrics && (
        <dl
          className={`${project.image ? "mt-6" : "mt-12"} grid gap-px overflow-hidden rounded-2xl border border-border bg-border ${
            project.metrics.length === 2 ? "sm:grid-cols-2" : project.metrics.length >= 3 ? "sm:grid-cols-3" : ""
          }`}
        >
          {project.metrics.map((m) => (
            <div key={m.label} className="bg-background p-5">
              <dt className="sr-only">{m.label}</dt>
              <dd className="font-mono text-2xl font-semibold">{m.value}</dd>
              <dd className="mt-1 text-sm text-muted-foreground">{m.label}</dd>
            </div>
          ))}
        </dl>
      )}

      <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_16rem]">
        <div className="max-w-2xl space-y-10">
          <section>
            <h2 className="eyebrow mb-3">Overview</h2>
            <p className="text-lg leading-relaxed">{project.summary}</p>
          </section>

          {project.sections?.map((section) => (
            <section key={section.heading}>
              <h2 className="mb-3 text-xl font-semibold">{section.heading}</h2>
              {section.body?.map((p) => (
                <p key={p} className="mb-3 leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
              {section.bullets && (
                <ul className="space-y-2.5">
                  {section.bullets.map((b) => (
                    <li key={b} className="flex gap-3 leading-relaxed text-muted-foreground">
                      <span className="mt-2.5 h-1 w-3 shrink-0 rounded-full bg-primary" aria-hidden />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <h2 className="eyebrow mb-3">Built with</h2>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span key={tag} className="chip text-foreground/80">
                {tag}
              </span>
            ))}
          </div>
        </aside>
      </div>

      {gallery.length > 0 && (
        <section className="mt-16">
          <h2 className="eyebrow mb-5">Screens</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {gallery.map((g) => (
              <figure key={g.src}>
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-muted">
                  <Image src={g.src} alt={g.caption} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover object-top" />
                </div>
                <figcaption className="mt-2 text-sm text-muted-foreground">{g.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="eyebrow mb-5">Related projects</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </section>
      )}

      <Link
        href={`/projects/${next.slug}`}
        className="group mt-20 flex items-center justify-between gap-4 rounded-2xl border border-border p-6 transition-colors hover:bg-muted/50"
      >
        <span>
          <span className="eyebrow">Next project</span>
          <span className="mt-1 block text-xl font-semibold">{next.title}</span>
        </span>
        <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
      </Link>
    </article>
  )
}
