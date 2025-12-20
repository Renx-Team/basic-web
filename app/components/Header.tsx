'use client';

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="relative z-20 flex items-center justify-between border-b border-white/10 bg-black/30 px-6 py-4 backdrop-blur-xl md:px-12 md:py-6">
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/Logo.png"
          alt="Basic Service Logo"
          width={40}
          height={40}
          priority
          className="rounded-lg"
        />
        <span className="text-xl font-bold text-white">Basic Service</span>
      </Link>
      <nav className="hidden items-center gap-8 md:flex">
        <Link href="#services" className="text-gray-300 transition-all hover:text-[#5865F2] hover:scale-105">
          Services
        </Link>
        <Link href="#pricing" className="text-gray-300 transition-all hover:text-[#5865F2] hover:scale-105">
          Pricing
        </Link>
        <Link href="#about" className="text-gray-300 transition-all hover:text-[#5865F2] hover:scale-105">
          About
        </Link>
        <Link href="#contact" className="text-gray-300 transition-all hover:text-[#5865F2] hover:scale-105">
          Contact
        </Link>
      </nav>
      <button className="rounded-lg bg-[#5865F2] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#4752C4] hover:scale-105 active:scale-95 shadow-md shadow-[#5865F2]/20">
        Sign In
      </button>
    </header>
  );
}

