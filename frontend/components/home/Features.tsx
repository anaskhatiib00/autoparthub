const features = [
  {
    title: "Vehicle-First Search",
    description:
      "Search by year, make, model, part, and location for accurate results.",
    icon: "🚗",
  },
  {
    title: "Verified Sellers",
    description:
      "Browse listings from trusted recyclers, dismantlers, and auto part businesses.",
    icon: "✅",
  },
  {
    title: "AI Part Assistant",
    description:
      "Describe the part you need in plain English and let AI identify it.",
    icon: "🤖",
  },
]

export default function Features() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-black">
            Why AutoPartHub?
          </h2>

          <p className="mt-4 text-zinc-400">
            Built for buyers who need parts fast and sellers who need simple inventory management.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500"
            >
              <div className="mb-5 text-5xl">
                {feature.icon}
              </div>

              <h3 className="mb-3 text-2xl font-bold">
                {feature.title}
              </h3>

              <p className="leading-7 text-zinc-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}