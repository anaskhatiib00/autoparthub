"use client"

import Navbar from "@/components/Navbar"
import EmptyState from "@/components/parts/EmptyState"
import Filters from "@/components/parts/Filters"
import PartCard from "@/components/parts/PartCard"
import ResultsHeader from "@/components/parts/ResultsHeader"
import axios from "axios"
import { useEffect, useMemo, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"

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
  const router = useRouter()
  const searchParams = useSearchParams()

  const [parts, setParts] = useState<Part[]>([])
  const [loading, setLoading] = useState(true)
  const [sort, setSort] = useState("newest")

  const [filters, setFilters] = useState({
    year: searchParams.get("year") || "",
    make: searchParams.get("make") || "",
    model: searchParams.get("model") || "",
    part: searchParams.get("part") || "",
    category: searchParams.get("category") || "",
    condition: searchParams.get("condition") || "",
  })

  useEffect(() => {
    fetchParts()
  }, [searchParams])

  const fetchParts = async () => {
    try {
      setLoading(true)

      const response = await axios.get("http://127.0.0.1:8000/parts/", {
        params: {
          year: searchParams.get("year") || undefined,
          make: searchParams.get("make") || undefined,
          model: searchParams.get("model") || undefined,
          part: searchParams.get("part") || undefined,
          category: searchParams.get("category") || undefined,
          condition: searchParams.get("condition") || undefined,
        },
      })

      setParts(response.data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const handleFilterChange = (name: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const applyFilters = () => {
    const params = new URLSearchParams()

    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.set(key, value)
    })

    router.push(`/parts?${params.toString()}`)
  }

  const sortedParts = useMemo(() => {
    const copied = [...parts]

    if (sort === "price_low") {
      return copied.sort((a, b) => a.price - b.price)
    }

    if (sort === "price_high") {
      return copied.sort((a, b) => b.price - a.price)
    }

    return copied.sort((a, b) => b.id - a.id)
  }, [parts, sort])

  const searchSummary = [
    searchParams.get("year"),
    searchParams.get("make"),
    searchParams.get("model"),
    searchParams.get("part"),
  ]
    .filter(Boolean)
    .join(" • ")

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="px-6 py-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <h1 className="text-4xl font-black md:text-5xl">
              Browse Parts
            </h1>

            <p className="mt-3 text-zinc-400">
              Search inventory by vehicle, part, and condition.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
            <Filters
              filters={filters}
              onChange={handleFilterChange}
              onApply={applyFilters}
            />

            <div>
              <ResultsHeader
                total={sortedParts.length}
                searchSummary={searchSummary}
                sort={sort}
                onSortChange={setSort}
              />

              {loading ? (
                <p>Loading parts...</p>
              ) : sortedParts.length === 0 ? (
                <EmptyState />
              ) : (
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {sortedParts.map((part) => (
                    <PartCard key={part.id} part={part} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}