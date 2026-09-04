"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/vira/SectionHeader";
import {
  viraAboutFocus,
  viraAudience,
  viraRoadmapNext,
  viraRoadmapNow,
} from "@/content/vira";
import { scrollTransition, scrollViewport, staggerContainer, staggerItem } from "@/lib/scrollAnimations";

function FlowList({ steps }: { steps: readonly string[] }) {
  return (
    <div className="flex flex-col gap-1">
      {steps.map((step, index) => (
        <div key={step}>
          <p className="vira-compare-step">{step}</p>
          {index < steps.length - 1 ? (
            <p className="vira-compare-arrow" aria-hidden>
              ↓
            </p>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default function ViraStory() {
  return (
    <>
      <section className="section-container py-12 md:py-16 flex flex-col items-center gap-10">
        <SectionHeader title="Built for People Who Watch Bitcoin Closely." />
        <motion.div
          className="service-preview-grid w-full"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          {viraAudience.map((card) => (
            <motion.article key={card.title} variants={staggerItem} className="service-preview-card">
              <h3 className="service-preview-card-title service-row-title mb-3">{card.title}</h3>
              <p className="service-row-content">{card.body}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="section-container py-12 md:py-16 flex flex-col items-center gap-10">
        <SectionHeader
          title="Building the Intelligence Layer for Crypto Markets."
          description="Vira AI starts with Bitcoin. The long-term vision is to build an intelligent market analysis platform that helps traders understand crypto markets across assets, data sources and market conditions."
        />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.article
            className="vira-roadmap-col"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={scrollViewport}
            transition={scrollTransition}
          >
            <span className="vira-roadmap-kicker">Now</span>
            <FlowList steps={viraRoadmapNow} />
          </motion.article>
          <motion.article
            className="vira-roadmap-col vira-roadmap-col--next"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={scrollViewport}
            transition={{ ...scrollTransition, delay: 0.08 }}
          >
            <span className="vira-roadmap-kicker">Next</span>
            <FlowList steps={viraRoadmapNext} />
          </motion.article>
        </div>
      </section>

      <section className="section-container py-12 md:py-16 flex flex-col items-center">
        <div className="about-container w-full px-6 py-12 md:px-10 md:py-16">
          <SectionHeader
            onDark
            title="Built by Engineers Who Believe Trading Intelligence Should Be Transparent."
            description="Vira AI is an independent AI product focused on applying modern AI and data infrastructure to cryptocurrency market intelligence."
          />
          <motion.ul
            className="flex flex-wrap justify-center gap-3 mt-8 mb-8 list-none p-0"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
          >
            {viraAboutFocus.map((item) => (
              <motion.li key={item} variants={staggerItem} className="vira-section-label vira-section-label--on-dark">
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>
    </>
  );
}
