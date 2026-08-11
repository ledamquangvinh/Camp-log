import Image from "next/image";
import { Campsite } from "../lib/definitions"
import Link from "next/link";

export type CardProp = {
  campsite: Campsite;
}

export default function Card({ campsite }: CardProp) {

  return (
    <div className="grid justify-items-center py-3">
      <h1>{campsite.name}</h1>
      <p>{campsite.location}</p>
      <Image src={campsite.coverImage} alt={campsite.name} width={300} height={300}/>
      <Link href={`/campsites/${campsite.slug}`} className="bg-lime-300 hover:bg-teal-400">Read More</Link>
    </div>
  )
}