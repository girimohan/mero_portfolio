import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { getBlogPosts } from "@/lib/data/blogs"

export default function BlogSection() {
  const posts = getBlogPosts().slice(0, 3)

  return (
    <section id="writing" className="shell py-20 sm:py-24">
      <SectionHeading eyebrow="Writing" title="Notes from the work" action={{ href: "/blog", label: "All posts" }} />
      <ul className="divide-y divide-border border-y border-border">
        {posts.map((post, i) => (
          <Reveal as="li" key={post.slug} delay={i * 0.05}>
              <Link href={`/blog/${post.slug}`} className="group grid gap-2 py-6 sm:grid-cols-[10rem_1fr_auto] sm:items-baseline sm:gap-8">
                <span className="font-mono text-xs text-muted-foreground">{post.date}</span>
                <span>
                  <span className="block text-lg font-medium transition-colors group-hover:text-primary">{post.title}</span>
                  <span className="mt-1 line-clamp-2 block text-sm text-muted-foreground">{post.summary}</span>
                </span>
                <ArrowUpRight className="hidden h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground sm:block" />
              </Link>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
