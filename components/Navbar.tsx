"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const linkBaseStyles =
    "relative text-sm font-medium text-brand-black transition-all duration-200 hover:text-brand-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-8 pt-4 md:pt-6 transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <div
          className={`relative rounded-2xl border border-white/70 bg-white/80 px-5 sm:px-8 py-4 shadow-lg backdrop-blur-xl transition-all duration-300 ${
            isScrolled ? "md:py-3 shadow-xl" : "md:py-4"
          } ${isMenuOpen ? "rounded-b-none" : ""}`}
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-6 -top-px h-px bg-gradient-to-r from-brand-red via-brand-red/60 to-transparent"
          />

          <div className="flex items-center justify-between gap-4">
            {/* Logo + tagline */}
            <Link
              href="/"
              className="group flex items-center gap-3"
              aria-label="Aronika Financial Home"
            >
              <Image
                src="/logo.png"
                alt="Aronika Financial logo"
                width={140}
                height={36}
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
              
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className={`${linkBaseStyles} group`}>
                  {link.name}
                  <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-brand-red transition-transform duration-200 group-hover:scale-x-100" />
                </Link>
              ))}
              <Link
                href="#consultation"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-black to-brand-red px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Book Consultation
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 10h12m0 0-4-4m4 4-4 4"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden rounded-full border border-gray-200/70 p-2 text-brand-black transition-colors duration-200 hover:border-brand-red/70 hover:text-brand-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="flex h-5 w-6 flex-col justify-between">
                <span
                  className={`h-0.5 w-full bg-current transition-all duration-300 ${
                    isMenuOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-full bg-current transition-opacity duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-full bg-current transition-all duration-300 ${
                    isMenuOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden rounded-b-2xl border border-t-0 border-white/70 bg-white/90 shadow-lg transition-all duration-300 backdrop-blur-xl ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-4 px-6 py-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`${linkBaseStyles} py-2`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#consultation"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-full bg-gradient-to-r from-brand-black to-brand-red px-6 py-3 text-center text-sm font-semibold text-white shadow-md transition-all duration-200 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Book Consultation
            </Link>
            
          </div>
        </div>
      </div>
    </nav>
  );
}
