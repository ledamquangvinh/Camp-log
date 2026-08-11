import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-8 bg-gradient-to-r from-emerald-700 to-green-600 text-white shadow-inner">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">
        <div>
          <h2 className="text-xl font-semibold">About Camp Log</h2>

          <p className="mt-1 text-sm text-emerald-100">
            © 2026 Vinh Le. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#"
            className="rounded-full p-2 transition duration-200 hover:bg-white/20"
          >
            <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
          </a>

          <a
            href="#"
            className="rounded-full p-2 transition duration-200 hover:bg-white/20"
          >
            <Image src="/youtube.png" alt="YouTube" width={24} height={24} />
          </a>

          <a
            href="#"
            className="rounded-full p-2 transition duration-200 hover:bg-white/20"
          >
            <Image src="/tik-tok.png" alt="TikTok" width={24} height={24} />
          </a>

          <a
            href="#"
            className="rounded-full p-2 transition duration-200 hover:bg-white/20"
          >
            <Image
              src="/instagram.png"
              alt="Instagram"
              width={24}
              height={24}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
