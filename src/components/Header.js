import Image from "next/image";
import logo from "../public/images/logo.png";

export default function Header() {
  return (
    <header className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
      <div>
        <Image
          src={logo}
          alt="Phone Mockup"
          width={173}
          height={74}
          priority // 👈 This is the fix for LCP
          className="object-contain lg:h-[74px] lg:w-[173px] h-[46px] w-[107px]"
          draggable={false}
        />
      </div>
      <nav>
        <button className="hover:text-cyan-400 transition">About us</button>
        <button className="hover:text-cyan-400 transition">Contact</button>
      </nav>
      <button>☰</button>
    </header>
  );
}
