"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/images/logo.png";

const navLinks = [
  { href: "#about", label: "About Us" },
  { href: "#service", label: "Service" },
  { href: "#learn", label: "Learn" },
] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <div className="navbar-layout relative">
        {/* Logo - left */}
        <Link href="/" className="flex-shrink-0 z-10">
          <Image
            src={logo}
            alt="Logo"
            width={46}
            height={64.398}
            className="flex-shrink-0"
            priority
          />
        </Link>

        {/* Center links - desktop: truly centered in viewport (155px spacing) */}
        <nav className="hidden md:flex items-center gap-[155px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-primary hover:text-third text-base font-medium transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Primary button - right */}
        <div className="hidden md:block flex-shrink-0 z-10">
          <Link href="#contact" className="btn-base btn-primary inline-flex">
            Schedule a Meeting
          </Link>
        </div>

        {/* Mobile: hamburger / X toggle (always visible; X when menu open) */}
        <div className="flex md:hidden items-center relative z-[60]">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-primary hover:text-third p-2 focus:outline-none transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu: full screen, white, slide in from left */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="md:hidden fixed inset-y-0 left-0 w-full max-w-full min-h-screen bg-white z-40 flex flex-col pt-24 pb-8 px-6 shadow-xl"
          >
            <nav className="flex flex-col items-center justify-center flex-1 gap-8 text-center">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="text-primary hover:text-third py-3 text-2xl font-medium transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto pt-6 flex justify-center">
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="btn-base btn-primary inline-flex w-full max-w-xs justify-center"
              >
                Schedule a Meeting
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
