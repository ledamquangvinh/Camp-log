import Link from "next/link";
import Card from "./ui/Card";
import Footer from "./ui/Footer";
import Header from "./ui/Header";

import { campsites } from "@/app/lib/campsites";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="grid justify-items-center">
        {campsites.map((camp) => (
          <Card key={camp.id} campsite={camp} />
        ))}

        <Link href={"/campsites"} className="bg-green-400">
          View More
        </Link>
      </div>

      <Footer />
    </div>
  );
}
