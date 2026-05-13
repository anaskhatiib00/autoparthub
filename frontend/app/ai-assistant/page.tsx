"use client"

import axios from "axios"
import { useState } from "react"

export default function AIAssistantPage() {
  const [query, setQuery] = useState("")
  const [loading, setLoading] = useState(false)

  const [result, setResult] = useState<any>(null)

  const handleSearch = async () => {
    if (!query) return

    try {
      setLoading(true)

      const response = await axios.post(
        "http://127.0.0.1:8000/ai/part-search",
        {
          query,
        }
      )

      setResult(response.data)

    } catch (error) {
      console.error(error)
      alert("AI search failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-black px-6 py-10 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10">
          <h1 className="text-5xl font-black">
            AI Part Assistant
          </h1>

          <p className="mt-3 text-zinc-400">
            Describe the part you need naturally.
          </p>
        </div>

        {/* Search Box */}
        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl">
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Example: I need a left headlight for a 2018 Toyota Camry"
            className="h-36 w-full rounded-2xl border border-zinc-700 bg-black p-4 outline-none focus:border-blue-500"
          />

          <button
            onClick={handleSearch}
            disabled={loading}
            className="mt-5 rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500"
          >
            {loading ? "Analyzing..." : "Analyze Search"}
          </button>
        </div>

        {/* Results */}
        {result && (
          <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
            <h2 className="mb-6 text-3xl font-bold">
              AI Extracted Details
            </h2>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl bg-black p-5">
                <p className="text-sm text-zinc-500">
                  Make
                </p>

                <p className="mt-2 text-2xl font-bold">
                  {result.make || "Unknown"}
                </p>
              </div>

              <div className="rounded-2xl bg-black p-5">
                <p className="text-sm text-zinc-500">
                  Model
                </p>

                <p className="mt-2 text-2xl font-bold">
                  {result.model || "Unknown"}
                </p>
              </div>

              <div className="rounded-2xl bg-black p-5">
                <p className="text-sm text-zinc-500">
                  Year
                </p>

                <p className="mt-2 text-2xl font-bold">
                  {result.year || "Unknown"}
                </p>
              </div>

              <div className="rounded-2xl bg-black p-5">
                <p className="text-sm text-zinc-500">
                  Part
                </p>

                <p className="mt-2 text-2xl font-bold">
                  {result.part || "Unknown"}
                </p>
              </div>

              <div className="rounded-2xl bg-black p-5">
                <p className="text-sm text-zinc-500">
                  Side
                </p>

                <p className="mt-2 text-2xl font-bold">
                  {result.side || "Unknown"}
                </p>
              </div>

              <div className="rounded-2xl bg-black p-5">
                <p className="text-sm text-zinc-500">
                  Condition
                </p>

                <p className="mt-2 text-2xl font-bold">
                  {result.condition || "Unknown"}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}