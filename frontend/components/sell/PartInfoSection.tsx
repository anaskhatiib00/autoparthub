interface PartInfoSectionProps {
  formData: {
    title: string
    category: string
    oem_number: string
    description: string
  }
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
}

export default function PartInfoSection({
  formData,
  onChange,
}: PartInfoSectionProps) {
  return (
    <section className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
      <h2 className="text-2xl font-black">
        📦 Part Information
      </h2>

      <p className="mt-2 text-zinc-400">
        Add the core details buyers need to understand the part.
      </p>

      <div className="mt-8 grid gap-5">
        <input
          name="title"
          value={formData.title}
          onChange={onChange}
          placeholder="Part name"
          className="rounded-xl border border-zinc-700 bg-black px-4 py-3 outline-none focus:border-blue-500"
        />

        <div className="grid gap-5 md:grid-cols-2">
          <input
            name="category"
            value={formData.category}
            onChange={onChange}
            placeholder="Category"
            className="rounded-xl border border-zinc-700 bg-black px-4 py-3 outline-none focus:border-blue-500"
          />

          <input
            name="oem_number"
            value={formData.oem_number}
            onChange={onChange}
            placeholder="OEM number"
            className="rounded-xl border border-zinc-700 bg-black px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        <textarea
          name="description"
          value={formData.description}
          onChange={onChange}
          placeholder="Describe the part, condition, donor vehicle, and important notes"
          className="min-h-32 rounded-xl border border-zinc-700 bg-black px-4 py-3 outline-none focus:border-blue-500"
        />
      </div>
    </section>
  )
}