"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/vira/SectionHeader";
import { viraAnalysisCards } from "@/content/vira";
import { scrollViewport, staggerContainer, staggerItem } from "@/lib/scrollAnimations";

export default function ViraAnalyzes() {
  return (
    <section className="section-container py-12 md:py-16 flex flex-col items-center gap-10">
      <SectionHeader
        title="From Raw Market Data to Trading Intelligence."
        description="Vira AI combines multiple sources of market information before generating its analysis."
      />

      <motion.div
        className="service-preview-grid w-full"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={scrollViewport}
      >
        {viraAnalysisCards.map((card, index) => (
          <motion.article
            key={card.title}
            variants={staggerItem}
            className={`service-preview-card ${index === viraAnalysisCards.length - 1 ? "md:col-span-2" : ""}`}
          >
            <span className="text-subtitle text-left !text-2xl md:!text-3xl mb-3 block">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="service-preview-card-title service-row-title mb-3">{card.title}</h3>
            <p className="service-row-content">{card.body}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
