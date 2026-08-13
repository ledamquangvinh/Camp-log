import Link from "next/link";
import Card from "./ui/Card";
import { fetchCampsites } from "./lib/data";
import Hero from "./ui/Hero";

export default async function Home() {
  const camps = await fetchCampsites();
  return (
    <div>
      <Hero />
      <div className="grid justify-items-center mt-5">
        {camps.slice(0,2).map((camp) => (
          <Card key={camp.id} campsite={camp} />
        ))}

        <Link
          href={"/campsites"}
          className="rounded-lg bg-emerald-600 px-6 py-3 font-medium text-white transition hover:bg-emerald-700 mt-5"
        >
          View More
        </Link>
      </div>
    </div>
  );
}
