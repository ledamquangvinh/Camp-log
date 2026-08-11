import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[500px] overflow-hidden">
      <Image
        src="/images/hero.JPG"
        alt="Camping in nature"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <h1 className="text-4xl font-bold md:text-6xl">Explore the Outdoors</h1>

        <p className="mt-4 max-w-xl text-lg text-gray-100">
          Follow our journey as we discover beautiful campsites, scenic roads,
          and peaceful places across Vietnam.
        </p>

        <Link
          href="/campsites"
          className="mt-8 rounded-lg bg-emerald-600 px-6 py-3 font-semibold transition hover:bg-emerald-700"
        >
          Explore Campsites
        </Link>
      </div>
    </section>
  );
}
