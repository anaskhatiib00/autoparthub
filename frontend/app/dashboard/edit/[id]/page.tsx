"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"

export default function EditPartPage() {
  const params = useParams()
  const router = useRouter()

  const partId = params.id

  const [loading, setLoading] = useState(true)

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    make: "",
    model: "",
    year: "",
    price: "",
    condition: "",
    image_url: "",
  })

  useEffect(() => {
    fetchPart()
  }, [])

  const fetchPart = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/parts/${partId}`
      )

      const part = response.data

      setFormData({
        title: part.title || "",
        description: part.description || "",
        category: part.category || "",
        make: part.make || "",
        model: part.model || "",
        year: String(part.year || ""),
        price: String(part.price || ""),
        condition: part.condition || "",
        image_url: part.image_url || "",
      })
    } catch (error) {
      console.error(error)
      alert("Failed to load part")
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const token = localStorage.getItem("token")

      await axios.put(
        `http://127.0.0.1:8000/parts/${partId}`,
        {
          ...formData,
          year: Number(formData.year),
          price: Number(formData.price),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      alert("Part updated successfully")

      router.push("/dashboard")

    } catch (error: any) {
      console.error(error)

      alert(
        error?.response?.data?.detail ||
        "Failed to update part"
      )
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-black p-10 text-white">
        Loading...
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-black px-6 py-10 text-white">
      <div className="mx-auto max-w-3xl rounded-3xl border border-zinc-800 bg-zinc-950 p-8 shadow-2xl">
        <h1 className="text-4xl font-black">
          Edit Part
        </h1>

        <form
          onSubmit={handleSubmit}
          className="mt-8 grid gap-5"
        >
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            className="rounded-xl border border-zinc-700 bg-black px-4 py-3"
          />

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="rounded-xl border border-zinc-700 bg-black px-4 py-3"
          />

          <input
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            className="rounded-xl border border-zinc-700 bg-black px-4 py-3"
          />

          <div className="grid gap-5 md:grid-cols-3">
            <input
              name="make"
              value={formData.make}
              onChange={handleChange}
              placeholder="Make"
              className="rounded-xl border border-zinc-700 bg-black px-4 py-3"
            />

            <input
              name="model"
              value={formData.model}
              onChange={handleChange}
              placeholder="Model"
              className="rounded-xl border border-zinc-700 bg-black px-4 py-3"
            />

            <input
              name="year"
              value={formData.year}
              onChange={handleChange}
              placeholder="Year"
              className="rounded-xl border border-zinc-700 bg-black px-4 py-3"
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <input
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Price"
              className="rounded-xl border border-zinc-700 bg-black px-4 py-3"
            />

            <select
              name="condition"
              value={formData.condition}
              onChange={handleChange}
              className="rounded-xl border border-zinc-700 bg-black px-4 py-3"
            >
              <option value="used">Used</option>
              <option value="new">New</option>
              <option value="refurbished">
                Refurbished
              </option>
            </select>
          </div>

          <input
            name="image_url"
            value={formData.image_url}
            onChange={handleChange}
            placeholder="Image URL"
            className="rounded-xl border border-zinc-700 bg-black px-4 py-3"
          />

          <button className="rounded-xl bg-blue-600 py-3 font-semibold hover:bg-blue-500">
            Update Part
          </button>
        </form>
      </div>
    </main>
  )
}