import Link from "next/link";

export default function Menu() {
  return (
    <div className="absolute left-4 top-16 w-56 rounded-xl border border-emerald-200/50 bg-emerald-100/70 backdrop-blur-md shadow-xl">
      <div className="p-4">
        <h2 className="mb-4 text-lg font-semibold text-emerald-900">Menu</h2>

        <nav className="flex flex-col gap-2">
          <Link
            href="/"
            className="rounded-lg px-3 py-2 text-emerald-900 transition-colors duration-200 hover:bg-emerald-200/60"
          >
            Home
          </Link>
          <Link
            href="/campsites"
            className="rounded-lg px-3 py-2 text-emerald-900 transition-colors duration-200 hover:bg-emerald-200/60"
          >
            Campsites
          </Link>

          <Link
            href="/about"
            className="rounded-lg px-3 py-2 text-emerald-900 transition-colors duration-200 hover:bg-emerald-200/60"
          >
            About Us
          </Link>
        </nav>
      </div>
    </div>
  );
}
