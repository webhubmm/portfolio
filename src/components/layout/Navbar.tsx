"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/images/logo.png";

const navLinks = [
  { href: "#about", label: "About Us" },
  { href: "#service", label: "Service" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonial", label: "Testimonials" },
  { href: "#learn", label: "Learn" },
] as const;

const SCROLL_THRESHOLD = 10;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsAtTop(y <= SCROLL_THRESHOLD);
      if (y > lastScrollY.current && y > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
    }

    return () => {
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-out ${
        !isAtTop ? "bg-white shadow-sm" : "bg-transparent"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
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
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="link-nav-hover text-primary text-base font-medium"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Primary button - right */}
        <div className="hidden md:block flex-shrink-0 z-10">
          <a href="https://calendly.com/htetmyatsoe492/30min" target="_blank" rel="noopener noreferrer" className="btn-base btn-primary inline-flex">
            Schedule a Meeting
          </a>
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
            <nav className="flex flex-col items-center justify-center flex-1 gap-4 text-center">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="link-nav-hover text-primary py-2 text-2xl font-medium"
                >
                  {label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto pt-6 flex justify-center">
              <a
                href="https://calendly.com/htetmyatsoe492/30min"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="btn-base btn-primary inline-flex w-full max-w-xs justify-center"
              >
                Schedule a Meeting
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
