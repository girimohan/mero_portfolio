import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { getBlogPosts } from "@/lib/data/blogs"
import { SubstackCard } from "@/components/substack"

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes by Mohan Giri on machine learning, LLM systems and software.",
}

export default function BlogPage() {
  const posts = getBlogPosts()

  return (
    <div className="shell pb-8 pt-12 sm:pt-16">
      <header className="mb-12 max-w-2xl">
        <p className="eyebrow mb-3">Writing</p>
        <h1 className="text-4xl font-semibold sm:text-5xl">Notes from the work</h1>
        <p className="mt-4 text-lg text-muted-foreground">What I learned building things, and what I think about where the field is going.</p>
      </header>

      <SubstackCard className="mb-12" />

      <ul className="divide-y divide-border border-y border-border">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="group grid gap-2 py-7 sm:grid-cols-[10rem_1fr_auto] sm:items-baseline sm:gap-8">
              <span className="font-mono text-xs text-muted-foreground">
                {post.date}
                <span className="mt-1 block">{post.category}</span>
              </span>
              <span>
                <span className="block text-xl font-medium transition-colors group-hover:text-primary">{post.title}</span>
                <span className="mt-2 block text-muted-foreground">{post.summary}</span>
                {post.readTime && <span className="mt-2 block font-mono text-xs text-muted-foreground">{post.readTime}</span>}
              </span>
              <ArrowUpRight className="hidden h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground sm:block" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
