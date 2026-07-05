export default function SearchPanel() {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-950/90 p-5 shadow-2xl">
      <div className="mb-4">
        <h2 className="text-xl font-bold">Search parts</h2>
        <p className="text-sm text-zinc-500">
          Search by vehicle, part, and location.
        </p>
      </div>

      <form action="/parts" className="grid gap-3 md:grid-cols-6">
        <select name="year" className="rounded-xl border border-zinc-700 bg-black px-4 py-3 text-zinc-300 outline-none focus:border-blue-500">
          <option value="">Year</option>
          <option>2024</option>
          <option>2023</option>
          <option>2022</option>
          <option>2021</option>
          <option>2020</option>
          <option>2019</option>
          <option>2018</option>
        </select>

        <select name="make" className="rounded-xl border border-zinc-700 bg-black px-4 py-3 text-zinc-300 outline-none focus:border-blue-500">
          <option value="">Make</option>
          <option>Toyota</option>
          <option>Honda</option>
          <option>Ford</option>
          <option>BMW</option>
          <option>Mercedes-Benz</option>
        </select>

        <select name="model" className="rounded-xl border border-zinc-700 bg-black px-4 py-3 text-zinc-300 outline-none focus:border-blue-500">
          <option value="">Model</option>
          <option>Camry</option>
          <option>Civic</option>
          <option>F-150</option>
          <option>3 Series</option>
          <option>C-Class</option>
        </select>

        <input name="part" placeholder="Part name" className="rounded-xl border border-zinc-700 bg-black px-4 py-3 text-zinc-300 outline-none focus:border-blue-500 md:col-span-2" />

        <input name="location" placeholder="ZIP / City" className="rounded-xl border border-zinc-700 bg-black px-4 py-3 text-zinc-300 outline-none focus:border-blue-500" />

        <button className="rounded-xl bg-blue-600 px-5 py-3 font-bold hover:bg-blue-500 md:col-span-6">
          Search inventory
        </button>
      </form>
    </div>
  )
}