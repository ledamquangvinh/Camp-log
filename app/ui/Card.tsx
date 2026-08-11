import Image from "next/image";
import { Campsite } from "../lib/definitions";
import Link from "next/link";

export type CardProp = {
  campsite: Campsite;
};

export default function Card({ campsite }: CardProp) {
  return (
    <div className="w-72 overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl m-5">
      <Image
        src={campsite.coverImage}
        alt={campsite.name}
        width={300}
        height={220}
        className="h-52 w-full object-cover"
      />

      <div className="space-y-3 p-5">
        <div>
          <h2 className="text-xl font-bold text-emerald-900">
            {campsite.name}
          </h2>

          <p className="text-sm text-gray-500">📍 {campsite.location}</p>
        </div>

        <Link
          href={`/campsites/${campsite.slug}`}
          className="block rounded-lg bg-emerald-600 py-2 text-center font-medium text-white transition-all duration-200 hover:bg-emerald-700"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
