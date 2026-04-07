"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import creditImg from "@/assets/images/credit.png";
import badgeImg from "@/assets/images/badge.png";
import client1 from "@/assets/images/client-1.png";
import client2 from "@/assets/images/client-2.png";
import client3 from "@/assets/images/client-3.png";
import { scrollViewport, scrollTransition, staggerContainer, staggerItem } from "@/lib/scrollAnimations";

const counterItems = [
  { target: 97, suffix: "%" as const, label: "Satisfaction rate" },
  { target: 10, suffix: "+" as const, label: "Delivered projects" },
  { target: 5, suffix: "+" as const, label: "Years of experience" },
] as const;

const valueCards = [
  { num: "01", title: "Launch your MVP fast" },
  { num: "02", title: "Cost-efficient offshore team" },
  { num: "03", title: "AI & Blockchain expertise" },
  { num: "04", title: "End-to-end development" },
] as const;

function AnimatedStatNumber({
  target,
  suffix,
  label,
}: {
  target: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.35 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    let start: number | null = null;
    let frame = 0;
    const tick = (now: number) => {
      if (start === null) start = now;
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - t) ** 2;
      setDisplay(Math.round(eased * target));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, target]);

  return (
    <motion.div ref={ref} className="about-counter-item" variants={staggerItem}>
      <span className="about-counter-number">
        {display}
        {suffix}
      </span>
      <span className="about-counter-label">{label}</span>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="section-container py-12 md:py-16 flex flex-col items-center">
      <div className="about-container relative overflow-hidden w-full">
        <div className="absolute left-0 top-0 bottom-0 w-[40%] max-w-md pointer-events-none z-0 flex items-center">
          <Image
            src={creditImg}
            alt=""
            className="object-contain object-left w-full h-auto max-h-full opacity-80"
            width={400}
            height={500}
          />
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-[40%] max-w-md pointer-events-none z-0 flex items-center justify-end">
          <Image
            src={badgeImg}
            alt=""
            className="object-contain object-right w-full h-auto max-h-full opacity-80"
            width={400}
            height={500}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-8 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={scrollViewport}
            transition={scrollTransition}
          >
            <Link href="/#contact" className="btn-badge-about inline-flex">
              <svg width="24" height="24" viewBox="0 0 20 20" fill="none" className="shrink-0" aria-hidden>
                <path d="M10 1.66669C14.6024 1.66669 18.3334 5.39765 18.3334 10C18.3334 14.6024 14.6024 18.3334 10 18.3334C8.63299 18.3334 7.31265 18.0033 6.12983 17.3819L2.55451 18.3128C2.17594 18.4114 1.78911 18.1845 1.6905 17.8059C1.66001 17.6888 1.66001 17.5659 1.69048 17.4489L2.62077 13.8752C1.99769 12.6911 1.66669 11.369 1.66669 10C1.66669 5.39765 5.39765 1.66669 10 1.66669ZM11.0431 10.8334H7.29169L7.20688 10.8391C6.90182 10.8804 6.66669 11.1419 6.66669 11.4584C6.66669 11.7748 6.90182 12.0363 7.20688 12.0776L7.29169 12.0834H11.0431L11.1279 12.0776C11.433 12.0363 11.6681 11.7748 11.6681 11.4584C11.6681 11.1419 11.433 10.8804 11.1279 10.8391L11.0431 10.8334ZM12.7084 7.91669H7.29169L7.20688 7.92239C6.90182 7.96378 6.66669 8.22527 6.66669 8.54169C6.66669 8.8581 6.90182 9.1196 7.20688 9.16098L7.29169 9.16669H12.7084L12.7932 9.16098C13.0982 9.1196 13.3334 8.8581 13.3334 8.54169C13.3334 8.22527 13.0982 7.96378 12.7932 7.92239L12.7084 7.91669Z" fill="currentColor"/>
              </svg>
              <span>Have Questions? →</span>
            </Link>
          </motion.div>

          <motion.h2
            className="text-title text-white"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={scrollViewport}
            transition={{ ...scrollTransition, delay: 0.08 }}
          >
            Why WebHub Asia
          </motion.h2>

          <motion.p
            className="about-content-text"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={scrollViewport}
            transition={{ ...scrollTransition, delay: 0.12 }}
          >
            WebHub Asia exists to turn ideas into practical, scalable digital solutions that truly work for people. We saw too many businesses struggle with generic software that doesn&apos;t fit their real needs. So we chose a different path—building custom technology designed around each client&apos;s goals, users, and future growth. Beyond software, we believe in sharing knowledge through education and growing together through strong partnerships. Our mission is simple: empower businesses, teams, and communities across Asia with technology that solves problems, creates opportunities, and drives long-term impact—not just short-term results.
          </motion.p>

          <motion.div
            className="about-value-rows w-full max-w-5xl mx-auto mt-4 flex flex-col gap-5"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={scrollViewport}
            transition={{ ...scrollTransition, delay: 0.14 }}
          >
            <div className="flex flex-col sm:flex-row gap-5 w-full">
              <div className="about-value-card about-value-card--sm">
                <span className="about-value-card-num">{valueCards[0].num}</span>
                <h3 className="about-value-card-title">{valueCards[0].title}</h3>
              </div>
              <div className="about-value-card about-value-card--lg">
                <span className="about-value-card-num">{valueCards[1].num}</span>
                <h3 className="about-value-card-title">{valueCards[1].title}</h3>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-5 w-full">
              <div className="about-value-card about-value-card--lg">
                <span className="about-value-card-num">{valueCards[2].num}</span>
                <h3 className="about-value-card-title">{valueCards[2].title}</h3>
              </div>
              <div className="about-value-card about-value-card--sm">
                <span className="about-value-card-num">{valueCards[3].num}</span>
                <h3 className="about-value-card-title">{valueCards[3].title}</h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={scrollViewport}
            transition={{ ...scrollTransition, delay: 0.18 }}
          >
            <Link href="/#testimonial" className="btn-badge btn-badge--on-dark inline-flex">
              <span className="flex items-center -space-x-4">
                <Image
                  src={client1}
                  alt=""
                  width={32}
                  height={32}
                  className="hero-badge-avatar relative z-[1] border-[#A3AFEF]"
                />
                <Image
                  src={client2}
                  alt=""
                  width={32}
                  height={32}
                  className="hero-badge-avatar relative z-[2] border-[#A3AFEF]"
                />
                <Image
                  src={client3}
                  alt=""
                  width={32}
                  height={32}
                  className="hero-badge-avatar relative z-[3] border-[#A3AFEF]"
                />
              </span>
              <span className="text-white font-medium text-sm md:text-base">
                What Others Say About Us →
              </span>
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="w-full min-w-0 relative z-10 mt-12"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollViewport}
          transition={{ ...scrollTransition, delay: 0.22 }}
        >
          <motion.div
            className="about-counter-card"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
          >
            {counterItems.map((item) => (
              <AnimatedStatNumber
                key={item.label}
                target={item.target}
                suffix={item.suffix}
                label={item.label}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
