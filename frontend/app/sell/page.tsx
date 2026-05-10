"use client"

import { useState } from "react"
import axios from "axios"

export default function SellPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    make: "",
    model: "",
    year: "",
    price: "",
    condition: "used",
    image_url: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const token = localStorage.getItem("token")

    if (!token) {
      alert("Please login first")
      return
    }

    try {
      await axios.post(
        "http://127.0.0.1:8000/parts/",
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

      alert("Part published successfully!")
      window.location.href = "/parts"
    } catch (error: any) {
      console.error(error)
      alert(error?.response?.data?.detail || "Failed to publish part")
    }
  }

  return (
    <main className="min-h-screen bg-black px-6 py-10 text-white">
      <div className="mx-auto max-w-3xl rounded-3xl border border-zinc-800 bg-zinc-950 p-8 shadow-2xl">
        <h1 className="text-4xl font-black">Publish Your Part</h1>
        <p className="mt-2 text-zinc-400">List your part for buyers to find.</p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
          <input name="title" placeholder="Part title" required onChange={handleChange} className="rounded-xl border border-zinc-700 bg-black px-4 py-3" />

          <textarea name="description" placeholder="Description" onChange={handleChange} className="rounded-xl border border-zinc-700 bg-black px-4 py-3" />

          <input name="category" placeholder="Category" required onChange={handleChange} className="rounded-xl border border-zinc-700 bg-black px-4 py-3" />

          <div className="grid gap-5 md:grid-cols-3">
            <input name="make" placeholder="Make" required onChange={handleChange} className="rounded-xl border border-zinc-700 bg-black px-4 py-3" />
            <input name="model" placeholder="Model" required onChange={handleChange} className="rounded-xl border border-zinc-700 bg-black px-4 py-3" />
            <input name="year" placeholder="Year" required onChange={handleChange} className="rounded-xl border border-zinc-700 bg-black px-4 py-3" />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <input name="price" placeholder="Price" required onChange={handleChange} className="rounded-xl border border-zinc-700 bg-black px-4 py-3" />

            <select name="condition" onChange={handleChange} className="rounded-xl border border-zinc-700 bg-black px-4 py-3">
              <option value="used">Used</option>
              <option value="new">New</option>
              <option value="refurbished">Refurbished</option>
            </select>
          </div>

          <input name="image_url" placeholder="Image URL" onChange={handleChange} className="rounded-xl border border-zinc-700 bg-black px-4 py-3" />

          <button className="rounded-xl bg-blue-600 py-3 font-semibold hover:bg-blue-500">
            Publish Part
          </button>
        </form>
      </div>
    </main>
  )
}