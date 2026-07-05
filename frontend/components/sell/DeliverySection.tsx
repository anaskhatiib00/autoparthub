interface DeliverySectionProps {
  formData: {
    location: string
    shipping_option: string
    warranty: string
  }
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void
}

export default function DeliverySection({
  formData,
  onChange,
}: DeliverySectionProps) {
  return (
    <section className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
      <h2 className="text-2xl font-black">
        🚚 Delivery & Warranty
      </h2>

      <p className="mt-2 text-zinc-400">
        Help buyers understand pickup, shipping, and warranty options.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        <input
          name="location"
          value={formData.location}
          onChange={onChange}
          placeholder="Location"
          className="rounded-xl border border-zinc-700 bg-black px-4 py-3 outline-none focus:border-blue-500"
        />

        <select
          name="shipping_option"
          value={formData.shipping_option}
          onChange={onChange}
          className="rounded-xl border border-zinc-700 bg-black px-4 py-3 outline-none focus:border-blue-500"
        >
          <option value="">Shipping option</option>
          <option value="pickup">Pickup only</option>
          <option value="shipping">Shipping available</option>
          <option value="both">Pickup and shipping</option>
        </select>

        <select
          name="warranty"
          value={formData.warranty}
          onChange={onChange}
          className="rounded-xl border border-zinc-700 bg-black px-4 py-3 outline-none focus:border-blue-500"
        >
          <option value="">Warranty</option>
          <option value="none">No warranty</option>
          <option value="30_days">30 days</option>
          <option value="90_days">90 days</option>
          <option value="6_months">6 months</option>
          <option value="1_year">1 year</option>
        </select>
      </div>
    </section>
  )
}