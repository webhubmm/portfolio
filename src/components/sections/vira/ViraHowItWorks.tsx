"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/vira/SectionHeader";
import { viraPipelineSteps } from "@/content/vira";
import { scrollTransition, scrollViewport } from "@/lib/scrollAnimations";

export default function ViraHowItWorks() {
  return (
    <section id="how-it-works" className="section-container py-12 md:py-16 flex flex-col items-center gap-10">
      <SectionHeader
        title="Multiple Signals. One Intelligence Layer."
        description="Vira AI doesn't rely on a single indicator. Different analysis components evaluate different parts of the market and combine their findings."
      />

      <motion.div
        className="about-container w-full px-6 py-8 md:px-10 md:py-10"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={scrollViewport}
        transition={scrollTransition}
      >
        <p className="vira-section-label vira-section-label--on-dark mb-6 mx-auto">
          Analysis pipeline
        </p>
        <div className="vira-pipeline">
          {viraPipelineSteps.map((step, index) => (
            <div key={step} className="contents lg:flex lg:flex-1 lg:min-w-0">
              <div className="vira-pipeline-step">
                <span className="vira-pipeline-node">{String(index + 1).padStart(2, "0")}</span>
                <span className="vira-pipeline-copy">{step}</span>
                {index < viraPipelineSteps.length - 1 ? (
                  <span className="vira-pipeline-line lg:hidden" aria-hidden />
                ) : null}
              </div>
              {index < viraPipelineSteps.length - 1 ? (
                <span className="vira-pipeline-connector hidden lg:block" aria-hidden />
              ) : null}
            </div>
          ))}
        </div>
      </motion.div>

      <p className="text-content text-on-white max-w-2xl">
        Signals are probabilistic market assessments, not guarantees. Vira AI does not claim to
        predict the future with certainty.
      </p>
    </section>
  );
}
