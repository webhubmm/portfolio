"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/vira/SectionHeader";
import { viraTrustPoints } from "@/content/vira";
import { scrollTransition, scrollViewport, staggerContainer, staggerItem } from "@/lib/scrollAnimations";

export default function ViraTrust() {
  return (
    <section id="product" className="section-container py-12 md:py-16 flex flex-col items-center">
      <div className="about-container relative overflow-hidden w-full px-6 pb-10 md:px-10 md:pb-0">
        <div className="relative z-10 flex flex-col items-center gap-8 text-center max-w-5xl mx-auto">
          <SectionHeader
            onDark
            label="Built for Traders"
            title="One Intelligence Layer for the Bitcoin Market."
            description="Instead of checking multiple charts, indicators, whale trackers and news sources separately, Vira AI brings market intelligence together into one system."
          />

          <motion.div
            className="about-value-rows w-full max-w-5xl mx-auto flex flex-col sm:flex-row sm:flex-wrap gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
          >
            {viraTrustPoints.map((point) => (
              <motion.div
                key={point.num}
                variants={staggerItem}
                className="about-value-card flex-1 min-w-[140px] sm:min-w-[30%]"
              >
                <span className="about-value-card-num">{point.num}</span>
                <h3 className="about-value-card-title !text-[clamp(1.05rem,2.4vw,1.65rem)] !px-2">
                  {point.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="about-counter-card mt-10 !py-10 !px-6 md:!px-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollViewport}
          transition={scrollTransition}
        >
          <p className="about-counter-label max-w-3xl mx-auto">
            Vira AI turns complex market data into simple, actionable intelligence — without asking
            traders to blindly follow an AI signal.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
