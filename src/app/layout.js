import "./globals.css";
import Banner from "@/components/Banner"; // These can be client or server components
import { Figtree, Urbanist } from "next/font/google";

const figtree = Figtree({ subsets: ["latin"] });
const urbanist = Urbanist({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-arp="">
      <body
        className={`bg-black text-white font-sans ${figtree.className} ${urbanist.className}`}
      >
        <Banner />
        <main className="main-container">{children}</main>
      </body>
    </html>
  );
}
