import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center align-middle p-4">
      <div className="flex justify-center">
        <Image
          src="/logo.svg"
          alt="MiUDC logo"
          width={120}
          height={120}
        />
      </div>
      <div className="mb-6 text-center text-lg font-semibold">
        Creando puentes de conexión entre egresados y aspirantes.
      </div>
      <div className="w-full flex justify-center text-white">
        <Link
          className="bg-primary w-full font-extrabold p-3 rounded-full text-center"
          href="/"
        >
          Continuar
        </Link>
      </div>
    </div>
  );
}
