"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { scrollViewport, scrollTransition, staggerContainer, staggerItem } from "@/lib/scrollAnimations";
import successStory1 from "@/assets/images/success-story-1.png";
import successStory2 from "@/assets/images/success-story-2.png";

const successStories = [
  {
    image: successStory1,
    imageAlt: "VirtuLearn International",
    title: "VirtuLearn International",
    content:
      "A multilingual LMS platform enabling global learners to master languages through structured courses, interactive lessons, and scalable education technology.",
    cardBg: "#CDE3EB",
    blankImage: false,
  },
  {
    image: successStory2,
    imageAlt: "Sports Empire",
    title: "Sports Empire",
    content:
      "A SaaS management system empowering sports venue owners to manage courts, tables, bookings, schedules, and operations efficiently.",
    cardBg: "#4C504C",
    blankImage: false,
  },
  {
    image: null,
    imageAlt: "Chin Dictionary App",
    title: "Chin Dictionary App",
    content:
      "A reliable, user-friendly dictionary platform built with dedication, speed, and technical skill. WebHub Asia understood the vision and delivered an impressive product.",
    cardBg: "#161C3D",
    blankImage: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-container py-12 md:py-16 flex flex-col items-center">
      <div className="w-full flex flex-col items-center gap-10">
        {/* Section title: "Success stories" in secondary color */}
        <motion.h2
          className="project-section-title"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollViewport}
          transition={scrollTransition}
        >
          Our Latest <span className="text-secondary">Success stories</span>
        </motion.h2>

        {/* Two cards in one row */}
        <motion.div
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          {successStories.map((item, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className={`project-card project-card--${index + 1}`}
              style={{ backgroundColor: item.cardBg, height: "420px", minHeight: "420px" }}
            >
              <div className="project-card-image">
                {item.blankImage ? (
                  <div className="project-card-image-placeholder" />
                ) : (
                  <Image
                    src={item.image!}
                    alt={item.imageAlt}
                    fill
                    className="object-cover object-center w-full"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                )}
              </div>
              <div className="project-card-body">
                <h3 className="project-card-title">{item.title}</h3>
                <p className="project-card-text">{item.content}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
