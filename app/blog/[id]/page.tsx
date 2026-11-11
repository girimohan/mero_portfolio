import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound, permanentRedirect } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { blogPosts, getBlogPost } from "@/lib/data/blogs"
import { profile } from "@/lib/data/profile"

type Props = { params: Promise<{ id: string }> }

export function generateStaticParams() {
  return blogPosts.map((p) => ({ id: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost((await params).id)
  if (!post) return {}
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: post.summary, images: post.image ? [post.image] : undefined },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { id } = await params
  const post = getBlogPost(id)
  if (!post) notFound()
  if (id !== post.slug) permanentRedirect(`/blog/${post.slug}`)

  return (
    <article className="shell max-w-3xl pb-8 pt-10 sm:pt-14">
      <Link href="/blog" className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
        All writing
      </Link>

      <header className="mt-8">
        <p className="font-mono text-xs text-muted-foreground">
          {post.date} · {post.category}
          {post.readTime ? ` · ${post.readTime}` : ""}
        </p>
        <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">{post.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{post.summary}</p>
      </header>

      {post.image && (
        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-muted">
          <Image src={post.image} alt="" fill priority sizes="(min-width: 768px) 720px, 100vw" className="object-cover" />
        </div>
      )}

      <div
        className="prose prose-neutral mt-10 max-w-none dark:prose-invert prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-primary prose-li:my-1"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <footer className="mt-16 flex flex-col gap-2 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <span>Written by {profile.name}</span>
        <a href={`mailto:${profile.email}?subject=${encodeURIComponent(`Re: ${post.title}`)}`} className="font-medium text-foreground underline underline-offset-4">
          Reply by email
        </a>
      </footer>
    </article>
  )
}
