"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "@/components/vira/SectionHeader";
import TelegramCta from "@/components/vira/TelegramCta";
import { viraFreeFeatures } from "@/content/vira";
import { VIRA_TELEGRAM_HANDLE } from "@/lib/vira";
import { scrollTransition, scrollViewport, staggerContainer, staggerItem } from "@/lib/scrollAnimations";
import startPageImg from "@/assets/images/start-page.jpeg";

export default function ViraProduct() {
  return (
    <>
      <section className="section-container py-12 md:py-16 flex flex-col items-center gap-10">
        <SectionHeader
          title="Your AI Market Intelligence, Inside Telegram."
          description="No complicated setup. Open Telegram, start Vira AI and receive Bitcoin market intelligence directly where you already communicate."
        />

        <motion.div
          className="w-full flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollViewport}
          transition={scrollTransition}
        >
          <Image
            src={startPageImg}
            alt="Vira AI Telegram start screen"
            className="vira-telegram-shot"
            sizes="360px"
          />
          <TelegramCta>Start Free on Telegram</TelegramCta>
          <p className="text-content text-on-white">{VIRA_TELEGRAM_HANDLE}</p>
        </motion.div>
      </section>

      <section className="section-container py-12 md:py-16 flex flex-col items-center">
        <div className="engagement-models-card">
          <div className="flex flex-col items-center gap-6 max-w-xl mx-auto px-2 py-4">
            <SectionHeader
              title="Start With Vira AI for Free."
              description="Explore Bitcoin market intelligence before committing to a paid plan."
            />
            <motion.ul
              className="vira-check-list w-full"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={scrollViewport}
            >
              {viraFreeFeatures.map((feature) => (
                <motion.li key={feature} variants={staggerItem}>
                  <span className="vira-check-mark" aria-hidden>
                    ✓
                  </span>
                  {feature}
                </motion.li>
              ))}
            </motion.ul>
            <TelegramCta>Start Free</TelegramCta>
          </div>
        </div>
      </section>
    </>
  );
}
