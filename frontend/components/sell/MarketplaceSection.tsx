interface MarketplaceSectionProps {
  formData: {
    condition: string
    mileage: string
    price: string
  }

  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void
}

export default function MarketplaceSection({
  formData,
  onChange,
}: MarketplaceSectionProps) {
  return (
    <section className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
      <h2 className="text-2xl font-black">
        🏷 Marketplace Details
      </h2>

      <p className="mt-2 text-zinc-400">
        Information buyers usually compare before purchasing.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        <select
          name="condition"
          value={formData.condition}
          onChange={onChange}
          className="rounded-xl border border-zinc-700 bg-black px-4 py-3 outline-none focus:border-blue-500"
        >
          <option value="used">Used</option>
          <option value="new">New</option>
          <option value="refurbished">Refurbished</option>
        </select>

        <input
          name="mileage"
          value={formData.mileage}
          onChange={onChange}
          placeholder="Mileage"
          className="rounded-xl border border-zinc-700 bg-black px-4 py-3 outline-none focus:border-blue-500"
        />

        <input
          name="price"
          value={formData.price}
          onChange={onChange}
          placeholder="Price"
          className="rounded-xl border border-zinc-700 bg-black px-4 py-3 outline-none focus:border-blue-500"
        />
      </div>
    </section>
  )
}