"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import client1 from "@/assets/images/client-1.png";
import client2 from "@/assets/images/client-2.png";
import client3 from "@/assets/images/client-3.png";

export default function Hero() {
  return (
    <section className="section-container py-20 flex flex-col items-center justify-center text-center">
      <div className="min-h-[90vh] flex flex-col items-center justify-center gap-8 md:gap-10 w-full">
        {/* Badge button: "What Others Say About Us ->" with client avatars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link href="#about" className="btn-badge inline-flex">
            <span className="flex items-center -space-x-4">
              <Image
                src={client1}
                alt="Client"
                width={32}
                height={32}
                className="hero-badge-avatar relative z-[1]"
              />
              <Image
                src={client2}
                alt="Client"
                width={32}
                height={32}
                className="hero-badge-avatar relative z-[2]"
              />
              <Image
                src={client3}
                alt="Client"
                width={32}
                height={32}
                className="hero-badge-avatar relative z-[3]"
              />
            </span>
            <span className="text-primary font-medium text-sm md:text-base">
              What Others Say About Us →
            </span>
          </Link>
        </motion.div>

        {/* Main title */}
        <motion.h1
          className="text-main-title w-full mx-auto"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Innovative Software Solutions for Businesses and Startups
        </motion.h1>

        {/* Primary button */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link href="#contact" className="btn-base btn-primary inline-flex">
            Book a Free Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
