export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-10 text-center">
        <div className="mx-auto h-10 w-64 animate-pulse rounded bg-emerald-100" />
        <div className="mx-auto mt-3 h-5 w-80 animate-pulse rounded bg-gray-200" />
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="overflow-hidden rounded-2xl bg-white shadow-lg"
          >
            <div className="h-52 w-full animate-pulse bg-gray-200" />

            <div className="space-y-3 p-5">
              <div className="h-6 w-2/3 animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-1/2 animate-pulse rounded bg-gray-200" />
              <div className="h-10 w-full animate-pulse rounded bg-emerald-100" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}