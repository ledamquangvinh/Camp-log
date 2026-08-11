import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between p-4 bg-green-300 h-20 mt-5">
      <div className="">
        <h1>About us</h1>
        <p>Copyright by Vinh Le</p>
      </div>

      <div className="flex items-center justify-between p-4">
        <button>
          <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        </button>

        <button>
          <Image src="/youtube.png" alt="youtube" width={24} height={24} />
        </button>

        <button>
          <Image src="/tik-tok.png" alt="tik-tok" width={24} height={24} />
        </button>

        <button>
          <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        </button>
      </div>
    </footer>
  );
}
