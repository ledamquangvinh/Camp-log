import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-5xl font-bold text-emerald-900">
        Campsite Not Found
      </h1>

      <p className="mt-4 max-w-md text-gray-600">
        We couldn’t find the campsite you’re looking for. It may have been
        removed, renamed, or the URL might be incorrect.
      </p>

      <Link
        href="/campsites"
        className="mt-8 rounded-lg bg-emerald-600 px-6 py-3 font-medium text-white transition hover:bg-emerald-700"
      >
        Back to Campsites
      </Link>
    </div>
  );
}