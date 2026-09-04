"use client";

import { motion } from "framer-motion";
import TelegramCta from "@/components/vira/TelegramCta";
import { VIRA_TELEGRAM_HANDLE } from "@/lib/vira";
import { scrollTransition, scrollViewport } from "@/lib/scrollAnimations";

export default function ViraFinalCta() {
  return (
    <section className="section-container py-12 md:py-16 flex flex-col items-center">
      <motion.div
        className="about-container w-full px-6 py-14 md:px-10 md:py-20 flex flex-col items-center gap-6 text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={scrollViewport}
        transition={scrollTransition}
      >
        <h2 className="vira-section-title vira-section-title--on-dark max-w-4xl">
          Stop Watching Everything. Start Understanding What Matters.
        </h2>
        <p className="about-content-text !pt-0">
          Get AI-powered Bitcoin market intelligence, whale alerts and real-time market signals
          directly on Telegram.
        </p>
        <TelegramCta variant="light">Try Vira AI Free</TelegramCta>
        <p className="text-white/80 font-medium">{VIRA_TELEGRAM_HANDLE}</p>
        <p className="vira-disclaimer">
          Vira AI provides informational and AI-generated market analysis only. Cryptocurrency
          trading involves substantial risk. Past performance does not guarantee future results.
        </p>
      </motion.div>
    </section>
  );
}
