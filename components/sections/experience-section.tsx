import Link from "next/link"
import { ArrowRight, GraduationCap } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { education, experience } from "@/lib/data/profile"

export default function ExperienceSection() {
  return (
    <section id="experience" className="border-y border-border bg-muted/30">
      <div className="shell py-20 sm:py-24">
        <SectionHeading eyebrow="Background" title="Experience & education" action={{ href: "/about", label: "More about me" }} />

        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <ol className="relative space-y-10 border-l border-border pl-6">
            {experience.map((job, i) => (
              <Reveal as="li" key={job.company} delay={i * 0.05} className="relative">
                  <span className="absolute -left-[29.5px] top-1.5 translate-x-[2px] h-2.5 w-2.5 rounded-full border-2 border-background bg-foreground" aria-hidden />
                  <p className="font-mono text-xs text-muted-foreground">{job.period}</p>
                  <h3 className="mt-1 text-lg font-semibold">
                    {job.role} <span className="font-normal text-muted-foreground">· {job.company}</span>
                  </h3>
                  <p className="mt-2 text-muted-foreground">{job.summary}</p>
                  {job.tech.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {job.tech.map((t) => (
                        <span key={t} className="chip">{t}</span>
                      ))}
                    </div>
                  )}
              </Reveal>
            ))}
          </ol>

          <div className="space-y-4">
            {education.map((edu, i) => (
              <Reveal key={edu.school} delay={i * 0.05}>
                <a
                  href={edu.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl border border-border bg-card p-5 transition-colors hover:border-foreground/20"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                      <GraduationCap className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="font-mono text-xs text-muted-foreground">{edu.period}</p>
                      <h3 className="font-semibold">{edu.school}</h3>
                      <p className="text-sm text-muted-foreground">{edu.degree}</p>
                      <p className="mt-2 text-sm text-muted-foreground">{edu.note}</p>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
            <Reveal delay={0.1}>
              <Link href="/about#certifications" className="group inline-flex items-center gap-1 px-1 text-sm text-muted-foreground hover:text-foreground">
                Certifications and languages
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
