import SearchPanel from "./SearchPanel"
import Stats from "./Stats"

export default function Hero() {
  return (
    <section className="border-b border-zinc-900 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.22),_transparent_35%),#000]">
      <div className="mx-auto grid min-h-[86vh] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-blue-400">
            Modern auto parts marketplace
          </p>

          <h1 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
            Find the right used auto part fast.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Search by vehicle, part, and location. Built for buyers who need
            answers quickly and sellers who need simple inventory tools.
          </p>

          <div className="mt-10">
            <SearchPanel />
          </div>

          <div className="mt-8">
            <Stats />
          </div>
        </div>

        <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-4 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1400&auto=format&fit=crop"
            alt="Auto parts shop"
            className="h-[420px] w-full rounded-[1.5rem] object-cover"
          />

          <div className="grid gap-3 p-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-black p-4">
              <p className="text-sm text-zinc-500">For buyers</p>
              <p className="mt-1 font-semibold">Search. Compare. Contact.</p>
            </div>

            <div className="rounded-2xl bg-black p-4">
              <p className="text-sm text-zinc-500">For sellers</p>
              <p className="mt-1 font-semibold">List parts in minutes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}