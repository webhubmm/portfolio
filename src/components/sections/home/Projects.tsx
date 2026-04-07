"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { scrollViewport, scrollTransition } from "@/lib/scrollAnimations";
import successStory1 from "@/assets/images/success-story-1.png";
import successStory2 from "@/assets/images/success-story-2.png";
import successStory3 from "@/assets/images/success-story-3.png";
import successStory4 from "@/assets/images/success-story-4.png";

const successStories = [
  {
    image: successStory1,
    imageAlt: "VirtuLearn International",
    title: "VirtuLearn International",
    subtitle:
      "AI-Powered Multilingual Learning Management System (LMS) for Global Education",
    content:
      "VirtuLearn International is a scalable, multilingual Learning Management System (LMS) designed to help global learners master new languages through structured courses, interactive lessons, and AI-enhanced learning experiences. Built with modern education technology, the platform supports content localization, user engagement, and seamless scalability for institutions and edtech startups.",
    url: "https://virtulearn.international/",
  },
  {
    image: successStory2,
    imageAlt: "Sports Empire",
    title: "Sports Empire",
    subtitle: "SaaS-Based Sports Venue Management & Booking System",
    content:
      "Sports Empire is a powerful SaaS management platform that enables sports venue owners to efficiently manage courts, tables, bookings, schedules, and daily operations. With real-time booking systems, automated scheduling, and analytics dashboards, the platform improves operational efficiency and enhances customer experience for sports businesses.",
    url: "https://sports-empire.com/",
  },
  {
    image: successStory3,
    imageAlt: "Chin Dictionary App",
    title: "Chin Dictionary App",
    subtitle:
      "Fast, Reliable, and User-Centric Multilingual Dictionary Platform",
    content:
      "The Chin Dictionary App is a high-performance, user-friendly dictionary platform built for speed, accuracy, and accessibility. Designed with a strong focus on usability and scalability, it delivers seamless word search, multilingual support, and optimized performance—empowering users with a reliable language tool anytime, anywhere.",
    url:
      "https://play.google.com/store/apps/details?id=com.htetmyat2026.engchinmyanmardictionary",
  },
  {
    image: successStory4,
    imageAlt: "Nexora Trading Platform",
    title: "Nexora Trading Platform",
    subtitle:
      "Secure, Scalable, and High-Performance Trading Platform",
    content:
      "Nexora is a next-generation trading platform built with advanced technology, focusing on security, performance, and user experience. Designed for modern traders, it offers real-time data processing, secure transactions, and an intuitive interface—delivering a robust and scalable fintech solution.",
    url: "http://nexora-bit.live/",
  },
];

const slideEase = [0.22, 1, 0.36, 1] as const;

/** 3D tilt follows pointer — entire story row acts as one card */
function ParallaxStoryCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({
    transform:
      "perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
  });

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const maxTilt = 7;
    const rotateY = (px - 0.5) * 2 * maxTilt;
    const rotateX = (0.5 - py) * 2 * maxTilt;
    setTilt({
      transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.008, 1.008, 1)`,
    });
  }, []);

  const handleLeave = useCallback(() => {
    setTilt({
      transform:
        "perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    });
  }, []);

  return (
    <div
      ref={ref}
      className="project-story-parallax-outer w-full"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div
        className={`project-story-parallax-inner transition-transform duration-200 ease-out will-change-transform ${className ?? ""}`}
        style={tilt}
      >
        {children}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-container py-12 md:py-16 flex flex-col items-center">
      <div className="w-full flex flex-col items-center gap-12 md:gap-16">
        <motion.h2
          className="project-section-title"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollViewport}
          transition={scrollTransition}
        >
          Our Latest <span className="text-secondary">Success stories</span>
        </motion.h2>

        <div className="project-story-stack w-full flex flex-col gap-16 md:gap-24">
          {successStories.map((item, index) => {
            const reverse = index % 2 === 1;
            const slideFromLeft = !reverse;
            const mediaX = slideFromLeft ? -56 : 56;
            const copyX = slideFromLeft ? 56 : -56;

            return (
              <article key={item.title} className="project-story-article w-full">
                <ParallaxStoryCard
                  className={`project-story-row ${reverse ? "project-story-row--reverse" : ""}`}
                >
                  <h3 className="project-story-title project-story-title--mobile-only md:hidden order-1 text-center">
                    {item.title}
                  </h3>
                  <p className="project-story-subtitle md:hidden order-2 text-center px-1">
                    {item.subtitle}
                  </p>

                  <motion.div
                    className="project-story-media order-3 md:order-none"
                    initial={{ opacity: 0, x: mediaX }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={scrollViewport}
                    transition={{
                      duration: 0.65,
                      ease: slideEase,
                      delay: 0.05,
                    }}
                  >
                    <div className="project-story-image-frame">
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 899px) 100vw, 60vw"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    className="project-story-copy order-4 md:order-none"
                    initial={{ opacity: 0, x: copyX }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={scrollViewport}
                    transition={{
                      duration: 0.65,
                      ease: slideEase,
                      delay: 0.12,
                    }}
                  >
                    <h3 className="project-story-title hidden md:block">
                      {item.title}
                    </h3>
                    <p className="project-story-subtitle hidden md:block">
                      {item.subtitle}
                    </p>
                    <p className="project-story-text">{item.content}</p>
                    <Link
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-story-visit-btn mt-2 inline-flex w-fit"
                    >
                      <span className="project-story-visit-btn-label">
                        Visit website
                      </span>
                    </Link>
                  </motion.div>
                </ParallaxStoryCard>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
