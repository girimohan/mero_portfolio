import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

// The real Helsinki Tram MLOps pipeline, drawn as a flow. Dashes move along
// the edges to show data streaming through (disabled for reduced motion).
const nodes = [
  { x: 40, label: "HSL feed", sub: "MQTT" },
  { x: 150, label: "ingest", sub: "10 s" },
  { x: 260, label: "parquet", sub: "daily" },
  { x: 370, label: "model", sub: "GBM" },
  { x: 480, label: "dashboard", sub: "live" },
]

export function PipelineTile() {
  return (
    <Link
      href="/projects/helsinki-tram-mlops"
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card/70 p-5 backdrop-blur-sm transition-colors hover:border-foreground/20 sm:p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-live" />
            </span>
            running 24/7 on a cloud VM
          </p>
          <h2 className="mt-2 text-lg font-semibold">Helsinki Tram MLOps</h2>
          <p className="text-sm text-muted-foreground">Every tram in Helsinki, forecast 5 minutes ahead.</p>
        </div>
        <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
      </div>

      <svg viewBox="0 0 520 96" className="my-4 w-full" role="img" aria-label="Pipeline: HSL feed, ingest, parquet, model, dashboard">
        <line x1="40" y1="34" x2="480" y2="34" className="stroke-border" strokeWidth="2" />
        <line x1="40" y1="34" x2="480" y2="34" className="pipeline-flow stroke-primary" strokeWidth="2" strokeDasharray="6 14" strokeLinecap="round" />
        {nodes.map((n, i) => (
          <g key={n.label}>
            <circle cx={n.x} cy="34" r="11" className="fill-background stroke-border" strokeWidth="2" />
            <circle cx={n.x} cy="34" r="4" className="pipeline-node fill-primary" style={{ animationDelay: `${i * 0.35}s` }} />
            <text x={n.x} y="68" textAnchor="middle" className="fill-foreground font-mono text-[11px]">
              {n.label}
            </text>
            <text x={n.x} y="84" textAnchor="middle" className="fill-muted-foreground font-mono text-[10px]">
              {n.sub}
            </text>
          </g>
        ))}
      </svg>

      <dl className="grid grid-cols-3 gap-3 border-t border-border pt-4 font-mono">
        <div>
          <dd className="text-base font-semibold sm:text-lg">~100</dd>
          <dt className="text-[11px] leading-tight text-muted-foreground">trams tracked</dt>
        </div>
        <div>
          <dd className="text-base font-semibold sm:text-lg">35.2 s</dd>
          <dt className="text-[11px] leading-tight text-muted-foreground">forecast error</dt>
        </div>
        <div>
          <dd className="text-base font-semibold sm:text-lg">64.7 s</dd>
          <dt className="text-[11px] leading-tight text-muted-foreground">naive baseline</dt>
        </div>
      </dl>
    </Link>
  )
}
