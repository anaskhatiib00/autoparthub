interface PhotoUploadProps {
  imageUrl: string
  uploading: boolean
  onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function PhotoUpload({
  imageUrl,
  uploading,
  onUpload,
}: PhotoUploadProps) {
  return (
    <section className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
      <h2 className="text-2xl font-black">
        📷 Photos
      </h2>

      <p className="mt-2 text-zinc-400">
        Upload clear photos so buyers can easily identify the part.
      </p>

      <label className="mt-8 flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-zinc-700 bg-black px-6 py-14 text-center transition hover:border-blue-500">
        <div className="text-5xl">📷</div>

        <p className="mt-4 text-lg font-semibold">
          Click to upload a photo
        </p>

        <p className="mt-2 text-sm text-zinc-500">
          JPG • PNG • WEBP
        </p>

        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={onUpload}
        />
      </label>

      {uploading && (
        <p className="mt-5 text-blue-400">
          Uploading...
        </p>
      )}

      {imageUrl && (
        <div className="mt-6">
          <img
            src={imageUrl}
            alt="Uploaded part"
            className="h-64 w-full rounded-2xl border border-zinc-800 object-cover"
          />
        </div>
      )}
    </section>
  )
}