import Navbar from "@/components/Navbar"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-black" />

        <div className="relative mx-auto grid min-h-[85vh] max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
              Find Parts Fast
            </p>

            <h1 className="mb-6 text-5xl font-black leading-tight md:text-7xl">
              Find the right
              <span className="block text-blue-500">
                car parts
              </span>
              instantly.
            </h1>

            <p className="mb-10 max-w-xl text-lg text-zinc-400">
              Search OEM and aftermarket parts from trusted sellers.
              Powered by AI vehicle matching and smart search.
            </p>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 shadow-2xl">
              <div className="grid gap-4 md:grid-cols-4">
                <select className="rounded-xl border border-zinc-700 bg-black px-4 py-3 text-zinc-300 outline-none">
                  <option>Select Make</option>
                  <option>Toyota</option>
                  <option>Honda</option>
                  <option>BMW</option>
                  <option>Ford</option>
                </select>

                <select className="rounded-xl border border-zinc-700 bg-black px-4 py-3 text-zinc-300 outline-none">
                  <option>Select Model</option>
                  <option>Camry</option>
                  <option>Civic</option>
                  <option>F-150</option>
                </select>

                <select className="rounded-xl border border-zinc-700 bg-black px-4 py-3 text-zinc-300 outline-none">
                  <option>Select Year</option>
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
                  <option>2021</option>
                </select>

                <a
                  href="/parts"
                  className="rounded-xl bg-blue-600 px-4 py-3 text-center font-semibold hover:bg-blue-500"
                >
                  Search Parts
                </a>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 rounded-full bg-blue-600/20 blur-3xl" />

            <img
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1400&auto=format&fit=crop"
              alt="Car"
              className="relative rounded-3xl border border-zinc-800 shadow-2xl"
            />
          </div>
        </div>
      </section>
    </main>
  )
}