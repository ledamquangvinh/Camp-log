"use client";

import { Menu, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import MyMenu from "./MyMenu";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative flex h-16 items-center justify-between bg-gradient-to-r from-emerald-600 to-green-500 px-6 shadow-lg">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="rounded-lg p-2 text-white transition-all duration-200 hover:bg-white/20"
      >
        <Menu size={28} />
      </button>

      {open && <MyMenu />}

      <Link href="/" className="flex items-center gap-2">
        <h1 className="text-2xl font-bold tracking-wide text-white">
          Camp Log
        </h1>
      </Link>

      <Link
        href="/profile"
        className="rounded-full p-2 text-white transition-all duration-200 hover:bg-white/20"
      >
        <User size={26} />
      </Link>
    </header>
  );
}
