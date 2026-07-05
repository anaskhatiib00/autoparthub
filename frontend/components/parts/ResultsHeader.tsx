interface ResultsHeaderProps {
  total: number
  searchSummary: string
  sort: string
  onSortChange: (value: string) => void
}

export default function ResultsHeader({
  total,
  searchSummary,
  sort,
  onSortChange,
}: ResultsHeaderProps) {
  return (
    <div className="mb-6 flex flex-col gap-4 rounded-3xl border border-zinc-800 bg-zinc-950 p-5 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-sm text-zinc-500">
          Showing
        </p>

        <h2 className="text-2xl font-black">
          {total} {total === 1 ? "part" : "parts"}
        </h2>

        {searchSummary && (
          <p className="mt-1 text-sm text-zinc-400">
            For: {searchSummary}
          </p>
        )}
      </div>

      <div className="flex items-center gap-3">
        <span className="text-sm text-zinc-400">
          Sort
        </span>

        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value)}
          className="rounded-xl border border-zinc-700 bg-black px-4 py-3 text-sm text-zinc-300 outline-none focus:border-blue-500"
        >
          <option value="newest">Newest</option>
          <option value="price_low">Price Low to High</option>
          <option value="price_high">Price High to Low</option>
        </select>
      </div>
    </div>
  )
}