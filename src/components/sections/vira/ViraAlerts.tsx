"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/vira/SectionHeader";
import TelegramCta from "@/components/vira/TelegramCta";
import { viraAlertTypes } from "@/content/vira";
import { scrollViewport, staggerContainer, staggerItem } from "@/lib/scrollAnimations";

const icons: Record<(typeof viraAlertTypes)[number]["icon"], string> = {
  whale: "🐋",
  reversal: "🔄",
  bullish: "📈",
  bearish: "📉",
  volatility: "⚡",
  liquidation: "💥",
  news: "📰",
  condition: "📊",
};

export default function ViraAlerts() {
  return (
    <section id="alerts" className="section-container py-12 md:py-16 flex flex-col items-center gap-10">
      <SectionHeader
        title="Information When It Matters."
        description="Markets move quickly. Vira AI delivers important Bitcoin market events directly to Telegram so traders don't have to constantly watch the charts."
      />

      <motion.div
        className="vira-alert-grid w-full"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={scrollViewport}
      >
        {viraAlertTypes.map((alert) => (
          <motion.div key={alert.label} variants={staggerItem} className="vira-alert-chip">
            <span aria-hidden className="text-xl">
              {icons[alert.icon]}
            </span>
            <span>{alert.label}</span>
          </motion.div>
        ))}
      </motion.div>

      <TelegramCta>Get Alerts on Telegram</TelegramCta>
    </section>
  );
}
