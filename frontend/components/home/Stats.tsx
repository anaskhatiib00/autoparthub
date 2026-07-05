const stats = [
  {
    value: "120K+",
    label: "Parts searchable",
  },
  {
    value: "Fast",
    label: "Vehicle-based search",
  },
  {
    value: "AI",
    label: "Smart part assistance",
  },
]

export default function Stats() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5"
        >
          <p className="text-3xl font-black text-blue-500">
            {stat.value}
          </p>

          <p className="mt-1 text-sm text-zinc-400">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  )
}