interface VehicleSectionProps {
  formData: {
    make: string
    model: string
    year: string
  }
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void
}

export default function VehicleSection({
  formData,
  onChange,
}: VehicleSectionProps) {
  return (
    <section className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
      <h2 className="text-2xl font-black">
        🚗 Vehicle Information
      </h2>

      <p className="mt-2 text-zinc-400">
        Tell buyers which vehicle this part fits.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        <input
          name="year"
          value={formData.year}
          onChange={onChange}
          placeholder="Year"
          className="rounded-xl border border-zinc-700 bg-black px-4 py-3 outline-none focus:border-blue-500"
        />

        <input
          name="make"
          value={formData.make}
          onChange={onChange}
          placeholder="Make"
          className="rounded-xl border border-zinc-700 bg-black px-4 py-3 outline-none focus:border-blue-500"
        />

        <input
          name="model"
          value={formData.model}
          onChange={onChange}
          placeholder="Model"
          className="rounded-xl border border-zinc-700 bg-black px-4 py-3 outline-none focus:border-blue-500"
        />
      </div>
    </section>
)
}