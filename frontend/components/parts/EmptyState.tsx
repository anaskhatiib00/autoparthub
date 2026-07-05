export default function EmptyState() {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-10 text-center">
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/15 text-3xl">
        🔍
      </div>

      <h2 className="text-2xl font-black">
        No matching parts found
      </h2>

      <p className="mx-auto mt-3 max-w-md text-zinc-400">
        Try changing the year, make, model, or part name. You can also clear the filters and browse all listings.
      </p>

      <a
        href="/parts"
        className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 font-semibold hover:bg-blue-500"
      >
        Clear filters
      </a>
    </div>
  )
}