import Navbar from "@/components/Navbar"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

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

            <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-950/90 p-5 shadow-2xl">
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold">Search parts</h2>
                  <p className="text-sm text-zinc-500">
                    Start with vehicle details like Car-Part.com, but cleaner.
                  </p>
                </div>

                <span className="hidden rounded-full bg-blue-600/15 px-4 py-2 text-sm text-blue-300 sm:block">
                  AI-ready search
                </span>
              </div>

              <form action="/parts" className="grid gap-3 md:grid-cols-6">
                <select
                  name="year"
                  className="rounded-xl border border-zinc-700 bg-black px-4 py-3 text-zinc-300 outline-none focus:border-blue-500 md:col-span-1"
                >
                  <option value="">Year</option>
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
                  <option>2021</option>
                  <option>2020</option>
                  <option>2019</option>
                  <option>2018</option>
                </select>

                <select
                  name="make"
                  className="rounded-xl border border-zinc-700 bg-black px-4 py-3 text-zinc-300 outline-none focus:border-blue-500 md:col-span-1"
                >
                  <option value="">Make</option>
                  <option>Toyota</option>
                  <option>Honda</option>
                  <option>Ford</option>
                  <option>BMW</option>
                  <option>Mercedes-Benz</option>
                </select>

                <select
                  name="model"
                  className="rounded-xl border border-zinc-700 bg-black px-4 py-3 text-zinc-300 outline-none focus:border-blue-500 md:col-span-1"
                >
                  <option value="">Model</option>
                  <option>Camry</option>
                  <option>Civic</option>
                  <option>F-150</option>
                  <option>3 Series</option>
                  <option>C-Class</option>
                </select>

                <input
                  name="part"
                  placeholder="Part name"
                  className="rounded-xl border border-zinc-700 bg-black px-4 py-3 text-zinc-300 outline-none focus:border-blue-500 md:col-span-2"
                />

                <input
                  name="location"
                  placeholder="ZIP / City"
                  className="rounded-xl border border-zinc-700 bg-black px-4 py-3 text-zinc-300 outline-none focus:border-blue-500 md:col-span-1"
                />

                <button className="rounded-xl bg-blue-600 px-5 py-3 font-bold hover:bg-blue-500 md:col-span-6">
                  Search inventory
                </button>
              </form>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
                <p className="text-3xl font-black text-blue-500">120K+</p>
                <p className="mt-1 text-sm text-zinc-400">Parts searchable</p>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
                <p className="text-3xl font-black text-blue-500">Fast</p>
                <p className="mt-1 text-sm text-zinc-400">Vehicle-based search</p>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
                <p className="text-3xl font-black text-blue-500">AI</p>
                <p className="mt-1 text-sm text-zinc-400">Smart part assistance</p>
              </div>
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

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10">
          <h2 className="text-3xl font-black md:text-4xl">
            Built for real auto parts workflows
          </h2>
          <p className="mt-3 max-w-2xl text-zinc-400">
            Simple for buyers, organized for sellers, and structured for
            production growth.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
            <h3 className="text-xl font-bold">Vehicle-first search</h3>
            <p className="mt-3 text-zinc-400">
              Buyers start with year, make, model, part, and location.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
            <h3 className="text-xl font-bold">Seller inventory tools</h3>
            <p className="mt-3 text-zinc-400">
              Sellers can add, edit, delete, and manage their listings.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
            <h3 className="text-xl font-bold">AI-assisted matching</h3>
            <p className="mt-3 text-zinc-400">
              Natural language search helps users describe what they need.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}