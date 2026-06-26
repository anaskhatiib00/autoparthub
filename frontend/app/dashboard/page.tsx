"use client"

import Navbar from "@/components/Navbar"
import axios from "axios"
import { useEffect, useState } from "react"

interface Part {
  id: number
  title: string
  make: string
  model: string
  year: number
  price: number
  condition: string
  category: string
}

export default function DashboardPage() {
  const [parts, setParts] = useState<Part[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMyParts()
  }, [])

  const fetchMyParts = async () => {
    try {
      const token = localStorage.getItem("token")

      const response = await axios.get("http://127.0.0.1:8000/parts/my-parts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      setParts(response.data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const deletePart = async (partId: number) => {
    try {
      const token = localStorage.getItem("token")

      await axios.delete(`http://127.0.0.1:8000/parts/${partId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      setParts(parts.filter((part) => part.id !== partId))
      alert("Part deleted")
    } catch (error) {
      console.error(error)
      alert("Failed to delete")
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="px-6 py-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-4xl font-black md:text-5xl">
                Seller Dashboard
              </h1>

              <p className="mt-3 text-zinc-400">
                Manage your listed parts
              </p>
            </div>

            <a
              href="/sell"
              className="w-fit rounded-xl bg-blue-600 px-5 py-3 font-semibold hover:bg-blue-500"
            >
              Add Part
            </a>
          </div>

          {loading ? (
            <p>Loading...</p>
          ) : parts.length === 0 ? (
            <p className="text-zinc-400">No parts listed yet.</p>
          ) : (
            <div className="overflow-x-auto rounded-3xl border border-zinc-800 bg-zinc-950">
              <table className="w-full min-w-[800px]">
                <thead className="border-b border-zinc-800 bg-zinc-900">
                  <tr>
                    <th className="px-6 py-4 text-left">Title</th>
                    <th className="px-6 py-4 text-left">Vehicle</th>
                    <th className="px-6 py-4 text-left">Category</th>
                    <th className="px-6 py-4 text-left">Condition</th>
                    <th className="px-6 py-4 text-left">Price</th>
                    <th className="px-6 py-4 text-left">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {parts.map((part) => (
                    <tr key={part.id} className="border-b border-zinc-800">
                      <td className="px-6 py-4">{part.title}</td>

                      <td className="px-6 py-4 text-zinc-400">
                        {part.year} {part.make} {part.model}
                      </td>

                      <td className="px-6 py-4">{part.category}</td>

                      <td className="px-6 py-4 capitalize">
                        {part.condition}
                      </td>

                      <td className="px-6 py-4 text-blue-400">
                        ${part.price}
                      </td>

                      <td className="flex gap-3 px-6 py-4">
                        <a
                          href={`/dashboard/edit/${part.id}`}
                          className="rounded-lg bg-zinc-800 px-4 py-2 text-sm hover:bg-zinc-700"
                        >
                          Edit
                        </a>

                        <button
                          onClick={() => deletePart(part.id)}
                          className="rounded-lg bg-red-600 px-4 py-2 text-sm hover:bg-red-500"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}