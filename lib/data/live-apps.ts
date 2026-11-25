// Deployed apps that visitors can open directly. Used by the "Live apps" menu
// in the navbar and the launcher section on the home page.
//
// Apps that have a case study set `slug`; their URL is read from the project's
// `links.demo` so it only has to be updated in one place (lib/data/projects.ts).

import { getProject } from "@/lib/data/projects"

export type LiveAppGroup = "radars" | "apps"

export const liveAppGroupLabels: Record<LiveAppGroup, { title: string; note: string }> = {
  radars: { title: "Radars", note: "Automated pipelines that collect, rank and publish fresh data on a schedule." },
  apps: { title: "Apps & tools", note: "Products and tools running in production." },
}

export interface LiveApp {
  name: string
  description: string
  url: string
  group: LiveAppGroup
  /** Case study at /projects/<slug>. */
  slug?: string
  /** The page is password protected; visitors will see a sign-in screen. */
  private?: boolean
}

type LiveAppInput = Omit<LiveApp, "url"> & { url?: string }

const entries: LiveAppInput[] = [
  // Radars
  {
    name: "Remote Job Radar",
    description: "Remote jobs you can take from Finland, ranked each morning.",
    url: "https://girimohan.github.io/remote-job-radar/",
    group: "radars",
    slug: "remote-job-radar",
  },
  {
    name: "Viral News Radar",
    description: "Today's stories many outlets and readers are picking up.",
    url: "https://girimohan.github.io/viral-news-radar/",
    group: "radars",
    slug: "viral-news-radar",
  },
  {
    name: "Learning Radar",
    description: "Courses, training and degrees in the Nordics and online.",
    url: "https://girimohan.github.io/learning-radar/",
    group: "radars",
  },
  {
    name: "Business Lead Radar",
    description: "Business leads and contacts. Password protected.",
    url: "https://girimohan.github.io/business-lead-radar/",
    group: "radars",
    private: true,
  },
  {
    name: "HR Contact Radar",
    description: "HR contacts. Password protected.",
    url: "https://girimohan.github.io/hr-contact-radar/",
    group: "radars",
    private: true,
  },

  // Apps & tools
  { name: "Helsinki Tram Dashboard", description: "Live tram positions and 5-minute delay forecasts.", group: "apps", slug: "helsinki-tram-mlops" },
  { name: "Tiski", description: "AI receptionist on a full booking system.", group: "apps", slug: "tiski-ai-receptionist" },
  { name: "KushmaBazar", description: "Bilingual community marketplace for Kushma, Nepal.", group: "apps", slug: "kushmabazar" },
  { name: "Barmo Accounts", description: "Bookkeeping with AI that reads receipts.", group: "apps", slug: "barmo-accounts" },
  { name: "PixelShrink", description: "Image compressor that never uploads your files.", group: "apps", slug: "pixelshrink" },
  { name: "TallyFlow", description: "Private online counter with goals and CSV export.", group: "apps", slug: "tallyflow" },
  { name: "Entity Extraction", description: "Extract entities from PDFs and cluster documents.", group: "apps", slug: "entity-extraction-clustering" },
  { name: "Merobihey", description: "Marriage-first matchmaking for Nepali people.", group: "apps", slug: "merobihey" },
  { name: "barmo.fi", description: "Website for Barmo, my side business.", group: "apps", slug: "barmo-website" },
]

export const liveApps: LiveApp[] = entries.flatMap((entry) => {
  const url = entry.url ?? (entry.slug ? getProject(entry.slug)?.links.demo : undefined)
  return url ? [{ ...entry, url }] : []
})

export const liveAppsByGroup = (group: LiveAppGroup) => liveApps.filter((app) => app.group === group)

/** "girimohan.github.io/remote-job-radar" style label for display. */
export function displayHost(url: string) {
  try {
    const u = new URL(url)
    const path = u.pathname.replace(/\/$/, "")
    return `${u.host.replace(/^www\./, "")}${path}`
  } catch {
    return url
  }
}
