"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
//logos
import logo from "../../public/images/logo.png";
import nav from "../../public/images/nav.png";

export default function Header() {
  const [showNavItems, setshowNavItems] = useState(false);

  return (
    <div className="flex justify-between items-center md:items-start">
      {/* Logo */}
      <div className="flex-1 flex justify-center md:justify-start">
        <Image
          src={logo}
          alt="logo"
          className="w-[107.78px] h-[46.07px] md:w-[169.27px] md:h-[72.25px]"
        />
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-[30px] mr-[100px]">
        <Link
          href="/about"
          className="font-figtree text-[#A9A9A9] font-semibold text-lg whitespace-nowrap overflow-hidden text-ellipsis"
        >
          About Us
        </Link>
        <Link
          href="/contact"
          className="font-figtree text-[#A9A9A9] font-semibold text-lg whitespace-nowrap overflow-hidden text-ellipsis"
        >
          Contact
        </Link>
      </div>

      {/* Mobile Nav */}
      <div className="relative md:hidden">
        <Image
          src={nav}
          alt="nav"
          className="w-5 h-3"
          onClick={() => setshowNavItems((e) => !e)}
        />
        {showNavItems && (
          <div className="absolute top-5 right-0 flex flex-col bg-[#2e2b2b] p-2 space-y-2 rounded-md z-[999]">
            <Link
              href="/about"
              className="text-[#A9A9A9] font-semibold text-sm whitespace-nowrap overflow-hidden text-ellipsis"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-[#A9A9A9] font-semibold text-sm whitespace-nowrap overflow-hidden text-ellipsis"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
