import Link from "next/link"

export default function NotFound() {
  return (
    <div className="shell flex min-h-[60vh] flex-col items-start justify-center py-20">
      <p className="font-mono text-sm text-muted-foreground">404</p>
      <h1 className="mt-2 text-4xl font-semibold">This page doesn&apos;t exist.</h1>
      <p className="mt-3 text-muted-foreground">It may have moved when the site was redesigned.</p>
      <div className="mt-8 flex gap-3">
        <Link href="/" className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background">Home</Link>
        <Link href="/projects" className="rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted">Projects</Link>
      </div>
    </div>
  )
}
