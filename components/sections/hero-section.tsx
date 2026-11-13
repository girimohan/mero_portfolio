import Image from "next/image"
import Link from "next/link"
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { PipelineTile } from "@/components/hero/pipeline-tile"
import { TerminalTile } from "@/components/hero/terminal-tile"
import { profile } from "@/lib/data/profile"

// Short, verifiable facts. Each one links to where it can be checked.
const facts = [
  { value: "5th / 149", label: "teams in the University of Helsinki ML competition", href: "/projects/npf-classification" },
  { value: "1,480", label: "LLM agent runs in my multi-agent failure study", href: "/projects/multi-agent-llm-failure-modes" },
  { value: "97.9%", label: "parking detection precision in my bachelor's thesis", href: "/projects/smart-parking-assistant" },
  { value: "8 yrs", label: "leading service teams before moving into tech", href: "/about" },
]

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background: slow aurora, fine grain and a fading grid. */}
      <div className="pointer-events-none absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black_55%,transparent)]" aria-hidden>
        <div className="aurora absolute -top-40 left-[10%] h-[520px] w-[520px] rounded-full bg-primary/20 blur-[120px] dark:bg-primary/15" />
        <div className="aurora aurora-delay absolute -top-20 right-[5%] h-[420px] w-[420px] rounded-full bg-sky-400/20 blur-[120px] dark:bg-violet-500/10" />
        <div className="bg-grid absolute inset-0" />
        <div className="grain absolute inset-0" />
      </div>

      <div className="shell pb-16 pt-8 sm:pt-12 lg:pb-20">
        <div className="grid gap-4 lg:grid-cols-12">
          {/* Headline */}
          <Reveal className="flex flex-col justify-between rounded-3xl border border-border bg-card/60 p-6 backdrop-blur-sm sm:p-10 lg:col-span-8">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs text-muted-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-60 motion-reduce:hidden" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-live" />
                </span>
                {profile.lookingFor}
              </span>

              <h1 className="mt-8 text-[2.6rem] font-semibold leading-[0.98] tracking-tighter sm:text-6xl lg:text-7xl">
                I build machine learning systems,{" "}
                <span className="font-serif font-normal italic tracking-tight text-gradient">end to end.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                I&apos;m {profile.name}, an ML engineer and M.Sc. student at the University of Helsinki. I take projects
                from the raw data feed to the model, its evaluation and the app people actually use.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
              >
                See selected work
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </Link>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
              >
                <Mail className="h-4 w-4" />
                Email me
              </a>
              <div className="flex items-center gap-1 text-muted-foreground">
                <a href={profile.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-full p-2.5 transition-colors hover:bg-muted hover:text-foreground">
                  <Github className="h-5 w-5" />
                </a>
                <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full p-2.5 transition-colors hover:bg-muted hover:text-foreground">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Portrait */}
          <Reveal delay={0.05} className="lg:col-span-4">
            <div className="relative h-full min-h-[320px] overflow-hidden rounded-3xl border border-border bg-white sm:min-h-[420px]">
              <Image
                src={profile.heroPhoto}
                alt={`Portrait of ${profile.name}`}
                fill
                priority
                sizes="(min-width: 1024px) 380px, 100vw"
                className="object-cover object-[50%_18%] dark:brightness-[0.88]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-5 pt-16 text-white">
                <p className="text-lg font-semibold">{profile.name}</p>
                <p className="flex items-center gap-1 text-sm text-white/80">
                  <MapPin className="h-3.5 w-3.5" /> {profile.location}
                </p>
              </div>
            </div>
          </Reveal>

          {/* What I'm doing now */}
          <Reveal delay={0.1} className="lg:col-span-5">
            <TerminalTile />
          </Reveal>

          {/* A real system, end to end */}
          <Reveal delay={0.15} className="lg:col-span-7">
            <PipelineTile />
          </Reveal>

          {/* Verifiable facts */}
          <Reveal delay={0.2} className="lg:col-span-12">
            <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {facts.map((fact) => (
                <Link
                  key={fact.value}
                  href={fact.href}
                  className="group rounded-3xl border border-border bg-card/60 p-5 backdrop-blur-sm transition-colors hover:border-foreground/20 sm:p-6"
                >
                  <dt className="sr-only">{fact.label}</dt>
                  <dd className="flex items-center justify-between gap-1 whitespace-nowrap font-mono text-xl font-semibold tracking-tight sm:text-3xl">
                    {fact.value}
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </dd>
                  <dd className="mt-1 text-xs leading-snug text-muted-foreground sm:text-sm">{fact.label}</dd>
                </Link>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
