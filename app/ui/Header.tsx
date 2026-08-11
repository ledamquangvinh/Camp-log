import { Menu, User } from 'lucide-react';
import Link from 'next/link';

export default function Header() {

  return (
    <header className='flex item-center justify-between p-4 bg-green-300 h-20'>
      <button type='button'>
        <Menu className='w-6 h-6'/>
      </button>

      <h1 className='text-xl'>Campsites</h1>

      <Link href={""}>
        <User/>
      </Link>
    </header>
  )
}