"use client"

import { useState } from "react"
import axios from "axios"

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      setLoading(true)

      const response = await axios.post(
        "http://127.0.0.1:8000/auth/login",
        formData
      )

      localStorage.setItem("token", response.data.access_token)
      localStorage.setItem("user", JSON.stringify(response.data.user))

      alert("Login successful!")
    } catch (error: any) {
      console.error(error)
      alert(error?.response?.data?.detail || "Login failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="w-full max-w-md rounded-3xl border border-zinc-800 bg-zinc-950 p-8 shadow-2xl">
        <h1 className="mb-2 text-4xl font-black">
          Welcome Back
        </h1>

        <p className="mb-8 text-zinc-400">
          Login to your AutoPartHub account
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
            className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 outline-none focus:border-blue-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
            className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 outline-none focus:border-blue-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold hover:bg-blue-500"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </main>
  )
}