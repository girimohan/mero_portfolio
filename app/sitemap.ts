import type { MetadataRoute } from "next"
import { projects } from "@/lib/data/projects"
import { blogPosts } from "@/lib/data/blogs"
import { profile } from "@/lib/data/profile"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = profile.siteUrl
  const pages = ["", "/projects", "/about", "/blog", "/lab", "/contact"].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }))
  return [
    ...pages,
    ...projects.map((p) => ({ url: `${base}/projects/${p.slug}`, changeFrequency: "monthly" as const, priority: 0.6 })),
    ...blogPosts.map((p) => ({ url: `${base}/blog/${p.slug}`, changeFrequency: "yearly" as const, priority: 0.5 })),
  ]
}
