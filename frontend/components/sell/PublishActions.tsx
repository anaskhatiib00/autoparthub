interface PublishActionsProps {
  publishing: boolean
}

export default function PublishActions({
  publishing,
}: PublishActionsProps) {
  return (
    <section className="sticky bottom-0 z-20 border-t border-zinc-800 bg-black/90 px-6 py-4 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-zinc-400">
          Review your listing before publishing.
        </p>

        <div className="flex gap-3">
          <button
            type="button"
            className="rounded-xl border border-zinc-700 px-5 py-3 font-semibold hover:bg-zinc-900"
          >
            Save Draft
          </button>

          <button
            type="submit"
            disabled={publishing}
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500 disabled:opacity-50"
          >
            {publishing ? "Publishing..." : "Publish Part"}
          </button>
        </div>
      </div>
    </section>
  )
}