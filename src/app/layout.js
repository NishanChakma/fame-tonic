import "./globals.css";
import Banner from "@/components/Banner"; // These can be client or server components
import Header from "@/components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-arp="">
      <body className="bg-black text-white font-sans">
        <Banner />
        <Header />
        {/* <main>{children}</main> */}
      </body>
    </html>
  );
}
