"use client"

import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="border-b border-zinc-800 bg-black/80 text-white backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="text-2xl font-bold text-blue-500">
          AutoPartHub
        </a>

        <div className="hidden gap-8 md:flex">
          <a href="/" className="text-zinc-300 hover:text-white">Home</a>
          <a href="/parts" className="text-zinc-300 hover:text-white">Parts</a>
          <a href="/sell" className="text-zinc-300 hover:text-white">Sell</a>
          <a href="/dashboard" className="text-zinc-300 hover:text-white">Dashboard</a>
          <a href="/ai-assistant" className="text-zinc-300 hover:text-white">AI Assistant</a>
        </div>

        <div className="hidden gap-3 md:flex">
          <a href="/login" className="rounded-lg border border-zinc-700 px-4 py-2 text-sm hover:bg-zinc-800">
            Login
          </a>

          <a href="/signup" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-500">
            Sign Up
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-zinc-700 px-3 py-2 text-sm md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="border-t border-zinc-800 bg-black px-6 py-5 md:hidden">
          <div className="grid gap-4">
            <a href="/" className="text-zinc-300 hover:text-white">Home</a>
            <a href="/parts" className="text-zinc-300 hover:text-white">Parts</a>
            <a href="/sell" className="text-zinc-300 hover:text-white">Sell</a>
            <a href="/dashboard" className="text-zinc-300 hover:text-white">Dashboard</a>
            <a href="/ai-assistant" className="text-zinc-300 hover:text-white">AI Assistant</a>

            <div className="mt-4 grid gap-3">
              <a href="/login" className="rounded-lg border border-zinc-700 px-4 py-2 text-center text-sm hover:bg-zinc-800">
                Login
              </a>

              <a href="/signup" className="rounded-lg bg-blue-600 px-4 py-2 text-center text-sm font-medium hover:bg-blue-500">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}