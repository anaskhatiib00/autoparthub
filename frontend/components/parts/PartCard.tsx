interface Part {
  id: number
  title: string
  description: string
  category: string
  make: string
  model: string
  year: number
  price: number
  condition: string
  image_url: string
}

interface PartCardProps {
  part: Part
}

export default function PartCard({ part }: PartCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500">
      <div className="relative">
        <img
          src={
            part.image_url ||
            "https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=1200&auto=format&fit=crop"
          }
          alt={part.title}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <span className="absolute left-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
          {part.category}
        </span>
      </div>

      <div className="p-5">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-xl font-bold">
            {part.title}
          </h2>

          <span className="capitalize text-sm text-zinc-400">
            {part.condition}
          </span>
        </div>

        <p className="line-clamp-2 text-sm text-zinc-400">
          {part.description}
        </p>

        <div className="mt-4 rounded-xl bg-black p-3">
          <p className="text-sm text-zinc-500">
            Vehicle
          </p>

          <p className="font-semibold">
            {part.year} {part.make} {part.model}
          </p>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div>
            <p className="text-xs text-zinc-500">
              Price
            </p>

            <p className="text-2xl font-black text-blue-500">
              ${part.price}
            </p>
          </div>

          <a
            href={`/parts/${part.id}`}
            className="rounded-xl bg-blue-600 px-5 py-2 font-semibold transition hover:bg-blue-500"
          >
            View Part
          </a>
        </div>
      </div>
    </div>
  )
}