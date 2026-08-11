import { campsites } from "@/app/lib/campsites";
import Footer from "../../ui/Footer";
import Header from "../../ui/Header";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Undo2 } from "lucide-react";

export default async function CampsiteDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const campsite = campsites.find((camp) => camp.slug === slug);

  if (!campsite) {
    return notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <Link
        href="/campsites"
        className="mb-8 inline-flex items-center gap-2 rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-800 transition hover:bg-emerald-200"
      >
        <Undo2 size={20} />
        Back to Campsites
      </Link>

      <article>
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-emerald-900 md:text-5xl">
            {campsite.name}
          </h1>

          <p className="mt-3 text-lg leading-8 text-gray-600">
            {campsite.description}
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl shadow-xl">
          <Image
            src={campsite.coverImage}
            alt={campsite.name}
            width={1200}
            height={750}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </article>
    </main>
  );
}
