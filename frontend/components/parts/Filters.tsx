interface FiltersProps {
  filters: {
    year: string
    make: string
    model: string
    part: string
    category: string
    condition: string
  }
  onChange: (name: string, value: string) => void
  onApply: () => void
}

export default function Filters({
  filters,
  onChange,
  onApply,
}: FiltersProps) {
  return (
    <aside className="rounded-3xl border border-zinc-800 bg-zinc-950 p-5">
      <h2 className="text-xl font-bold">Filters</h2>

      <div className="mt-5 grid gap-4">
        {["part", "make", "model", "year", "category"].map((field) => (
          <input
            key={field}
            value={filters[field as keyof typeof filters]}
            onChange={(e) => onChange(field, e.target.value)}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            className="rounded-xl border border-zinc-700 bg-black px-4 py-3 outline-none focus:border-blue-500"
          />
        ))}

        <select
          value={filters.condition}
          onChange={(e) => onChange("condition", e.target.value)}
          className="rounded-xl border border-zinc-700 bg-black px-4 py-3 outline-none focus:border-blue-500"
        >
          <option value="">Condition</option>
          <option value="used">Used</option>
          <option value="new">New</option>
          <option value="refurbished">Refurbished</option>
        </select>

        <button
          onClick={onApply}
          className="rounded-xl bg-blue-600 px-5 py-3 font-semibold hover:bg-blue-500"
        >
          Apply Filters
        </button>
      </div>
    </aside>
  )
}