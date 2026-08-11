import Link from "next/link";
import { campsites } from "../lib/campsites";
import Card from "../ui/Card";
import Footer from "../ui/Footer";
import Header from "../ui/Header";

export default function CampsiteList() {
  return (
    <div>
      <Header />
      <div className="grid justify-items-center">
        <h1 className="text-3xl">All Campsites</h1>
        {campsites.map((camp) => (
          <Card key={camp.id} campsite={camp} />
        ))}
        <Link href={"/"} className="bg-emerald-300">
          Home Page
        </Link>
      </div>
      <Footer/>
    </div>
  );
}
