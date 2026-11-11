import { profile } from "@/lib/data/profile"

const rows: { key: string; value: string; live?: boolean }[] = [
  { key: "role", value: profile.role },
  { key: "studying", value: "M.Sc. CS · University of Helsinki" },
  { key: "running", value: "helsinki-tram-mlops", live: true },
  { key: "researching", value: "retrieval for Finnish tax law" },
  { key: "building", value: "barmo.fi · side business" },
  { key: "based_in", value: profile.location },
  { key: "open_to", value: "ML / AI engineering roles" },
]

export function TerminalTile() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 text-zinc-300 shadow-xl shadow-black/10">
      <div className="flex items-center gap-1.5 border-b border-zinc-800 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
        <span className="ml-3 font-mono text-[11px] text-zinc-500">~/mohan</span>
      </div>
      <div className="flex-1 p-5 font-mono text-[12.5px] leading-6 sm:text-[13px]">
        <p>
          <span className="text-emerald-400">❯</span> <span className="text-zinc-100">mohan --now</span>
        </p>
        <dl className="mt-1">
          {rows.map((r) => (
            <div key={r.key} className="grid grid-cols-[5.75rem_1fr] gap-2 sm:grid-cols-[7.5rem_1fr]">
              <dt className="text-zinc-500">{r.key}</dt>
              <dd className="text-zinc-200">
                {r.value}
                {r.live && <span className="ml-2 text-emerald-400">● live</span>}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-2">
          <span className="text-emerald-400">❯</span> <span className="terminal-cursor inline-block h-4 w-2 translate-y-0.5 bg-zinc-300" aria-hidden />
        </p>
      </div>
    </div>
  )
}
