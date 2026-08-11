import { campsites } from "@/app/lib/campsites";
import Footer from "../../ui/Footer";
import Header from "../../ui/Header";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Undo2 } from 'lucide-react';

export default async function CampsiteDetail({ params }: {params: Promise<{ slug: string }>}) {
  const { slug } = await params;
  const campsite = campsites.find((camp) => camp.slug === slug);
  
  if (!campsite) {
    return notFound();
  }
  
  return (
    <div className="">
      <Header />
      <Link href={'/campsites'} className="flex bg-amber-400 w-20">
        <Undo2 />
        Return
      </Link>
      <h1>{campsite.name}</h1>
      <p>{campsite.description}</p>
      <Image src={campsite.coverImage} alt={campsite.name} width={800} height={500}/>
      
      <Footer />
    </div>
  );
}
