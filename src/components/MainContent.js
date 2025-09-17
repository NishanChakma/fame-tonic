"use client";
import { useState } from "react";

export default function MainContent() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="flex justify-between items-center p-5 bg-black">
        <div className="text-2xl font-bold uppercase tracking-wide text-white shadow-lg">
          fame tonicss
        </div>
        <nav className={`flex gap-5 ${isOpen ? "block" : "hidden"} md:flex`}>
          <ul className="flex gap-5">
            <li>
              <a href="#about" className="hover:text-red-500">
                About ussss
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-red-500">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div
          className="md:hidden flex flex-col gap-2 cursor-pointer"
          onClick={toggleMenu}
        >
          <div className="w-6 h-1 bg-white"></div>
          <div className="w-6 h-1 bg-white"></div>
          <div className="w-6 h-1 bg-white"></div>
        </div>
      </header>

      <section className="flex-grow p-10 text-center">
        <h1 className="text-4xl font-bold">Welcome to Fame Tonic</h1>
      </section>
    </div>
  );
}
