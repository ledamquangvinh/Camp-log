import Link from "next/link";
import Card from "./ui/Card";
import Footer from "./ui/Footer";
import Header from "./ui/Header";

import { campsites } from "@/app/lib/campsites";

export default function Home() {
  const camps = campsites.slice(0,2);
  return (
    <div>
      <div className="grid justify-items-center">
        {camps.map((camp) => (
          <Card key={camp.id} campsite={camp} />
        ))}

        <Link href={"/campsites"} className="rounded-lg bg-emerald-600 px-6 py-3 font-medium text-white transition hover:bg-emerald-700">
          View More
        </Link>
      </div>
    </div>
  );
}
