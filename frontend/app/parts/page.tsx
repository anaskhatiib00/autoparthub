"use client"

import axios from "axios"
import { useEffect, useState } from "react"

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

export default function PartsPage() {
  const [parts, setParts] = useState<Part[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchParts()
  }, [])

  const fetchParts = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/parts/"
      )

      setParts(response.data)

    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-black px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <h1 className="text-5xl font-black">
            Browse Parts
          </h1>

          <p className="mt-3 text-zinc-400">
            Find OEM and aftermarket parts from trusted sellers.
          </p>
        </div>

        {loading ? (
          <p>Loading parts...</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {parts.map((part) => (
              <div
                key={part.id}
                className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 shadow-xl"
              >
                <img
                  src={
                    part.image_url ||
                    "https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=1200&auto=format&fit=crop"
                  }
                  alt={part.title}
                  className="h-56 w-full object-cover"
                />

                <div className="p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="rounded-full bg-blue-600/20 px-3 py-1 text-xs text-blue-400">
                      {part.category}
                    </span>

                    <span className="text-sm text-zinc-400">
                      {part.condition}
                    </span>
                  </div>

                  <h2 className="mb-2 text-xl font-bold">
                    {part.title}
                  </h2>

                  <p className="mb-4 line-clamp-2 text-sm text-zinc-400">
                    {part.description}
                  </p>

                  <div className="mb-4 text-sm text-zinc-500">
                    {part.year} {part.make} {part.model}
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-black text-blue-500">
                      ${part.price}
                    </p>

                    <button className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold hover:bg-blue-500">
                      View Part
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}