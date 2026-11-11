import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Download } from "lucide-react"
import { certifications, education, experience, languages, profile, skills } from "@/lib/data/profile"

export const metadata: Metadata = {
  title: "About",
  description: "Background, experience and education of Mohan Giri, machine learning engineer in Helsinki.",
}

const principles = [
  {
    title: "Baseline first",
    text: "A model is only as good as what it beats. The tram forecaster is measured against persistence, and FinTax measures retrieval before anything is generated.",
  },
  {
    title: "Real data, real problems",
    text: "Live transit feeds, ten years of public procurement records, atmospheric measurements and genome data. Messy data is where most of the work, and most of the learning, happens.",
  },
  {
    title: "Finish the whole loop",
    text: "Tests, CI, a deployed dashboard and a write-up of what didn't work. A notebook result is the middle of a project, not the end.",
  },
]

export default function AboutPage() {
  return (
    <div className="shell pb-8 pt-12 sm:pt-16">
      <div className="grid gap-12 lg:grid-cols-[1fr_20rem] lg:gap-16">
        <div>
          <p className="eyebrow mb-3">About</p>
          <h1 className="text-4xl font-semibold sm:text-5xl">
            From ship decks to <span className="font-serif font-normal italic">data pipelines.</span>
          </h1>
          <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              I spent eight years at Silja Line leading cabin service teams on passenger ships. It was a job about people,
              processes and keeping things running under pressure.
            </p>
            <p>
              In 2021 I started studying computer applications at HAMK. My thesis combined parking-space detection with
              a chatbot, and an internship at HAMK Smart had me building computer vision for industrial quality
              inspection. Before that, a project with Cinia had me forecasting call volumes from weather and calendar
              data.
            </p>
            <p>
              I&apos;m now doing an M.Sc. in Computer Science (Machine Learning &amp; AI) at the University of Helsinki.
              Most of my time goes into ML systems on real data and into how LLM-based systems fail. On the side
              I run Barmo, a small business I started in 2026 for websites, AI automation and bookkeeping, and I
              build apps for the Nepali community.
            </p>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-white">
            <Image src={profile.photo} alt={`Portrait of ${profile.name}`} fill sizes="320px" className="object-cover object-[50%_15%]" priority />
          </div>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:opacity-85"
          >
            <Download className="h-4 w-4" />
            Download resume (PDF)
          </a>
        </aside>
      </div>

      <section className="mt-20">
        <h2 className="eyebrow mb-6">How I work</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {principles.map((p, i) => (
            <div key={p.title} className="rounded-2xl border border-border bg-card p-6">
              <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 grid gap-10 lg:grid-cols-[12rem_1fr]">
        <h2 className="eyebrow">Experience</h2>
        <ol className="space-y-10">
          {experience.map((job) => (
            <li key={job.company} className="grid gap-2 sm:grid-cols-[10rem_1fr] sm:gap-6">
              <p className="font-mono text-xs text-muted-foreground sm:pt-1.5">{job.period}</p>
              <div>
                <h3 className="text-lg font-semibold">
                  {job.role} <span className="font-normal text-muted-foreground">· {job.company}</span>
                </h3>
                <ul className="mt-3 space-y-1.5 text-muted-foreground">
                  {job.points.map((pt) => (
                    <li key={pt} className="flex gap-3">
                      <span className="mt-2.5 h-1 w-3 shrink-0 rounded-full bg-primary" aria-hidden />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-20 grid gap-10 lg:grid-cols-[12rem_1fr]">
        <h2 className="eyebrow">Education</h2>
        <ol className="space-y-8">
          {education.map((edu) => (
            <li key={edu.school} className="grid gap-2 sm:grid-cols-[10rem_1fr] sm:gap-6">
              <p className="font-mono text-xs text-muted-foreground sm:pt-1.5">{edu.period}</p>
              <div>
                <h3 className="text-lg font-semibold">{edu.school}</h3>
                <p className="text-muted-foreground">{edu.degree}</p>
                <p className="mt-1 text-sm text-muted-foreground">{edu.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-20 grid gap-10 lg:grid-cols-[12rem_1fr]">
        <h2 className="eyebrow">Skills</h2>
        <dl className="grid gap-6 sm:grid-cols-2">
          {skills.map((g) => (
            <div key={g.group}>
              <dt className="font-medium">{g.group}</dt>
              <dd className="mt-1 text-muted-foreground">{g.items.join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="certifications" className="mt-20 grid gap-10 lg:grid-cols-[12rem_1fr]">
        <h2 className="eyebrow">Certifications &amp; languages</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          <ul className="space-y-3">
            {certifications.map((c) => (
              <li key={c.title}>
                <p className="font-medium">{c.title}</p>
                <p className="text-sm text-muted-foreground">
                  {c.issuer} · {c.year}
                </p>
              </li>
            ))}
          </ul>
          <ul className="space-y-3">
            {languages.map((l) => (
              <li key={l.name} className="flex justify-between border-b border-border pb-2">
                <span>{l.name}</span>
                <span className="text-muted-foreground">{l.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <p className="mt-20 text-muted-foreground">
        Want the details on a specific project?{" "}
        <Link href="/contact" className="font-medium text-foreground underline underline-offset-4">
          Get in touch
        </Link>
        .
      </p>
    </div>
  )
}
