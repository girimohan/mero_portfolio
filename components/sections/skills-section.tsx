import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { skills } from "@/lib/data/profile"

export default function SkillsSection() {
  return (
    <section id="skills" className="shell py-20 sm:py-24">
      <SectionHeading
        eyebrow="Toolbox"
        title="What I work with"
        description="Grouped by what it's for. Everything here is used in at least one project on this site."
      />
      <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group, i) => (
          <Reveal key={group.group} delay={i * 0.05} className="bg-background">
            <div className="h-full p-6">
              <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">{group.group}</h3>
              <ul className="space-y-2 text-sm">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
