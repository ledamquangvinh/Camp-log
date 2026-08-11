import Link from "next/link";
import { campsites } from "../lib/campsites";
import Card from "../ui/Card";
import Footer from "../ui/Footer";
import Header from "../ui/Header";

export default function CampsiteList() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-emerald-900">All Campsites</h1>

        <p className="mt-2 text-gray-600">
          Discover beautiful places to camp across Vietnam.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {campsites.map((camp) => (
          <Card key={camp.id} campsite={camp} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          href="/"
          className="rounded-lg bg-emerald-600 px-6 py-3 font-medium text-white transition hover:bg-emerald-700"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
