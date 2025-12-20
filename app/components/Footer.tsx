'use client';

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Discord Bots", href: "#services" },
      { name: "Custom Programming", href: "#services" },
      { name: "Server Design", href: "#services" },
      { name: "Premium Support", href: "#services" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Blog", href: "#blog" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "Refund Policy", href: "#refund" },
    ],
  };

  const socialLinks = [
    { icon: "mdi:discord", href: "#", label: "Discord" },
    { icon: "mdi:twitter", href: "#", label: "Twitter" },
    { icon: "mdi:instagram", href: "#", label: "Instagram" },
    { icon: "mdi:youtube", href: "#", label: "YouTube" },
    { icon: "mdi:github", href: "#", label: "GitHub" },
  ];

  return (
    <footer className="relative z-10 border-t border-white/10 bg-gradient-to-b from-black to-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 md:px-12 md:py-12">
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 sm:mb-6 inline-flex items-center gap-2 sm:gap-3">
              <Image
                src="/Logo.png"
                alt="Basic Service Logo"
                width={40}
                height={40}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg"
              />
              <span className="text-lg sm:text-xl font-bold text-white">Basic Service</span>
            </Link>
            <p className="mb-4 sm:mb-6 max-w-md text-sm sm:text-base text-gray-400">
              Professional Discord services to transform your server into an exceptional community. 
              From ready-made bots to custom programming and stunning designs.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="group flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-[#5865F2]/50 hover:bg-[#5865F2]/10 hover:scale-110 active:scale-95"
                >
                  <Icon icon={social.icon} width={18} height={18} className="sm:w-5 sm:h-5 text-gray-400 transition-colors group-hover:text-[#5865F2]" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="mb-3 sm:mb-4 text-base sm:text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base text-gray-400 transition-all hover:text-[#5865F2] hover:translate-x-1 active:translate-x-0"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-3 sm:mb-4 text-base sm:text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base text-gray-400 transition-all hover:text-[#5865F2] hover:translate-x-1 active:translate-x-0"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="mb-3 sm:mb-4 text-base sm:text-lg font-semibold text-white">Legal</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base text-gray-400 transition-all hover:text-[#5865F2] hover:translate-x-1 active:translate-x-0"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-10 md:mt-12 border-t border-white/10 pt-6 sm:pt-8">
          <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 md:flex-row md:justify-between">
            <p className="text-xs sm:text-sm text-center md:text-left text-gray-400">
              © {currentYear} Basic Service. All rights reserved.
            </p>
            <div className="flex items-center justify-center text-xs sm:text-sm text-gray-400">
              <span>Designed by Mousa</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
