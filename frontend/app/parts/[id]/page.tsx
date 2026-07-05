"use client"

import Navbar from "@/components/Navbar"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"

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
  seller_id: number
}

interface Seller {
  id: number
  full_name: string
  email: string
  role: string
}

export default function PartDetailsPage() {
  const params = useParams()
  const partId = params.id

  const [part, setPart] = useState<Part | null>(null)
  const [seller, setSeller] = useState<Seller | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPart()
  }, [])

  const fetchPart = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/parts/${partId}`
      )

      setPart(response.data)

      const sellerResponse = await axios.get(
        `http://127.0.0.1:8000/auth/seller/${response.data.seller_id}`
      )

      setSeller(sellerResponse.data)
    } catch (error) {
      console.error(error)
      alert("Failed to load part")
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-black text-white">
        <Navbar />
        <div className="px-6 py-10">Loading part...</div>
      </main>
    )
  }

  if (!part) {
    return (
      <main className="min-h-screen bg-black text-white">
        <Navbar />
        <div className="px-6 py-10">Part not found.</div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="px-6 py-10">
        <div className="mx-auto max-w-7xl">
          <a
            href="/parts"
            className="mb-8 inline-flex text-sm text-blue-400 hover:text-blue-300"
          >
            ← Back to results
          </a>

          <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
            <div>
              <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950">
                <img
                  src={
                    part.image_url ||
                    "https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=1200&auto=format&fit=crop"
                  }
                  alt={part.title}
                  className="h-[480px] w-full object-cover"
                />
              </div>

              <div className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
                <h2 className="text-2xl font-black">Description</h2>
                <p className="mt-4 leading-8 text-zinc-400">
                  {part.description || "No description provided."}
                </p>
              </div>
            </div>

            <aside className="h-fit rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
              <span className="rounded-full bg-blue-600/20 px-4 py-2 text-sm text-blue-400">
                {part.category}
              </span>

              <h1 className="mt-6 text-4xl font-black">
                {part.title}
              </h1>

              <p className="mt-3 text-zinc-400">
                {part.year} {part.make} {part.model}
              </p>

              <div className="mt-6 border-t border-zinc-800 pt-6">
                <p className="text-sm text-zinc-500">Price</p>
                <p className="text-4xl font-black text-blue-500">
                  ${part.price}
                </p>
              </div>

              <div className="mt-6 grid gap-4">
                <div className="rounded-2xl bg-black p-4">
                  <p className="text-sm text-zinc-500">Condition</p>
                  <p className="mt-1 font-semibold capitalize">
                    {part.condition}
                  </p>
                </div>

                <div className="rounded-2xl bg-black p-4">
                  <p className="text-sm text-zinc-500">Vehicle</p>
                  <p className="mt-1 font-semibold">
                    {part.year} {part.make} {part.model}
                  </p>
                </div>

                <div className="rounded-2xl bg-black p-5">
                  <p className="text-sm text-zinc-500">Seller</p>

                  <p className="mt-2 text-lg font-bold">
                    {seller?.full_name || "Loading seller..."}
                  </p>

                  <p className="text-sm font-medium text-green-400">
                    Verified Seller
                  </p>

                  <p className="mt-2 text-sm text-zinc-500">
                    Seller #{seller?.id || part.seller_id}
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-3">
                <button className="rounded-xl bg-blue-600 py-3 font-semibold hover:bg-blue-500">
                  Contact Seller
                </button>

                <a
                  href="/ai-assistant"
                  className="rounded-xl border border-zinc-700 py-3 text-center font-semibold hover:bg-zinc-900"
                >
                  Ask AI About Compatibility
                </a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  )
}