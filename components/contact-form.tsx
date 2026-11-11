"use client"

import { useState, type FormEvent } from "react"
import { CheckCircle2, Loader2, Send } from "lucide-react"
import { profile } from "@/lib/data/profile"

type Status = "idle" | "sending" | "sent" | "error"

const field =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-foreground/40 focus:ring-2 focus:ring-ring/20"

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    data.append("access_key", accessKey ?? "")
    data.append("from_name", "Portfolio contact form")
    data.append("subject", `Portfolio message from ${data.get("name")}`)

    setStatus("sending")
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data })
      const json = await res.json()
      if (!json.success) throw new Error(json.message)
      form.reset()
      setStatus("sent")
    } catch {
      setStatus("error")
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-start gap-3 rounded-2xl border border-border bg-card p-8" role="status">
        <CheckCircle2 className="h-6 w-6 text-live" />
        <p className="text-lg font-medium">Thanks, your message is on its way.</p>
        <p className="text-muted-foreground">I usually reply within a couple of days.</p>
        <button type="button" onClick={() => setStatus("idle")} className="mt-2 text-sm underline underline-offset-4">
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-border bg-card p-6 sm:p-8">
      {/* Honeypot field for spam bots */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">Name</span>
          <input name="name" required autoComplete="name" className={field} placeholder="Your name" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">Email</span>
          <input name="email" type="email" required autoComplete="email" className={field} placeholder="you@company.com" />
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium">Message</span>
        <textarea name="message" required rows={6} className={`${field} resize-y`} placeholder="What would you like to talk about?" />
      </label>

      {status === "error" && (
        <p className="text-sm text-destructive" role="alert">
          The message couldn&apos;t be sent. Please email me directly at{" "}
          <a href={`mailto:${profile.email}`} className="underline">{profile.email}</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending" || !accessKey}
        className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85 disabled:opacity-50"
      >
        {status === "sending" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      {!accessKey && (
        <p className="text-xs text-muted-foreground">The form is not configured. Please use email instead.</p>
      )}
    </form>
  )
}
