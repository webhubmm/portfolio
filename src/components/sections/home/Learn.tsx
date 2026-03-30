"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { scrollViewport, scrollTransition } from "@/lib/scrollAnimations";
import learningImg from "@/assets/images/learning.png";

export default function Learn() {
  return (
    <section id="learn" className="section-container py-12 md:py-16 flex flex-col items-center">
      <div className="w-full flex flex-col items-center gap-10">
        {/* Title */}
        <motion.h2
          className="learn-section-title"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollViewport}
          transition={scrollTransition}
        >
          TEACHING THE NEXT GENERATION
        </motion.h2>

        {/* Column list: image (full container width), then subtitle, content, button */}
        <motion.div
          className="w-full flex flex-col items-center gap-8"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollViewport}
          transition={{ ...scrollTransition, delay: 0.08 }}
        >
          {/* Image: full width of section container */}
          <div className="learn-section-image-wrap w-full">
            <Image
              src={learningImg}
              alt="Learning"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>

          {/* Subtitle, content, button */}
          <div className="flex flex-col items-center gap-6 text-center w-full max-w-2xl">
            <h3 className="learn-section-subtitle">
              For over 4 years we&apos;ve shared practical web dev tutorials
            </h3>
            <p className="learn-section-content">
              The same expertise we bring to client projects.
            </p>
            <Link
              href="https://www.youtube.com/@webhubmyanmar1213"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-primary whitespace-nowrap inline-flex"
            >
              Our youtube channel
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
