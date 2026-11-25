import { ArrowUpRight } from "lucide-react"
import { profile } from "@/lib/data/profile"
import { cn } from "@/lib/utils"

/** Substack mark (lucide has no brand icon for it). Inherits currentColor. */
export function SubstackIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
    </svg>
  )
}

/** Feature card for the AIFinPost newsletter, shown on the home page and /blog. */
export function SubstackCard({ className }: { className?: string }) {
  const { url, name, description } = profile.newsletter
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative flex flex-col gap-5 overflow-hidden rounded-3xl border border-border bg-card p-6 transition-colors hover:border-[#FF6719]/40 sm:flex-row sm:items-center sm:p-7",
        className,
      )}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#FF6719]/10 blur-3xl" aria-hidden />
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FF6719] text-white shadow-lg shadow-[#FF6719]/20">
        <SubstackIcon className="h-5 w-5" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex flex-wrap items-center gap-2">
          <span className="text-lg font-semibold">{name}</span>
          <span className="chip">Weekly newsletter on Substack</span>
        </span>
        <span className="mt-1 block text-sm text-muted-foreground">{description}</span>
      </span>
      <span className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity group-hover:opacity-85 sm:self-center">
        Read on Substack
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </a>
  )
}
