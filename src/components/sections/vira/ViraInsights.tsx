"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/vira/SectionHeader";
import TelegramCta from "@/components/vira/TelegramCta";
import { viraMarketSignal, viraTrendReversal, viraWhaleAlert } from "@/content/vira";
import { scrollViewport, staggerContainer, staggerItem } from "@/lib/scrollAnimations";

function Consensus({ bullish, total }: { bullish: number; total: number }) {
  return (
    <div className="flex gap-1.5" aria-hidden>
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`vira-consensus-dot ${i < bullish ? "vira-consensus-dot--on" : ""}`}
        />
      ))}
    </div>
  );
}

export default function ViraInsights() {
  const signal = viraMarketSignal;
  const whale = viraWhaleAlert;
  const trend = viraTrendReversal;

  return (
    <>
      <section className="section-container py-12 md:py-16 flex flex-col items-center gap-10">
        <SectionHeader
          title="Don't Just Get a Signal. Understand Why."
          description="Vira AI explains the factors behind its market assessment so traders can evaluate the information instead of blindly following a BUY or SELL label."
        />

        <motion.article
          className="vira-insight-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollViewport}
        >
          <h3 className="font-subtitle text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-white">
            {signal.title}
          </h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="vira-stat-tile">
              <span className="vira-stat-label">Signal</span>
              <span className="vira-stat-value vira-signal-bullish">{signal.signal}</span>
            </div>
            <div className="vira-stat-tile">
              <span className="vira-stat-label">Confidence</span>
              <span className="vira-stat-value">{signal.confidence}%</span>
            </div>
            <div className="vira-stat-tile">
              <span className="vira-stat-label">Time Horizon</span>
              <span className="vira-stat-value">{signal.timeHorizon}</span>
            </div>
          </div>
          <p className="vira-stat-label">Why?</p>
          <div>
            {signal.factors.map((factor) => (
              <div key={factor.label} className="vira-factor-row">
                <span className="vira-factor-label">{factor.label}</span>
                <span className="vira-factor-value">{factor.value}</span>
              </div>
            ))}
            <div className="vira-factor-row">
              <span className="vira-factor-label">Risk</span>
              <span className="vira-factor-value">{signal.risk}</span>
            </div>
            <div className="vira-factor-row">
              <span className="vira-factor-label">Agent Consensus</span>
              <span className="vira-factor-value">
                {signal.agentConsensus.bullish} / {signal.agentConsensus.total} Bullish
              </span>
            </div>
          </div>
          <Consensus bullish={signal.agentConsensus.bullish} total={signal.agentConsensus.total} />
          <p className="text-sm text-white">
            Signals are probabilistic market assessments, not guarantees.
          </p>
        </motion.article>
      </section>

      <section id="whale" className="section-container py-12 md:py-16 flex flex-col items-center gap-10">
        <SectionHeader
          title="See What the Whales Are Doing."
          description="Large transactions can provide useful context about market activity. Vira AI monitors significant whale movements and turns unusual activity into real-time alerts."
        />

        <motion.article
          className="vira-insight-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollViewport}
        >
          <h3 className="font-subtitle text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-white">
            🐋 {whale.title}
          </h3>
          <p className="font-subtitle text-3xl md:text-4xl font-extrabold text-white">{whale.amount}</p>
          <div>
            <div className="vira-factor-row">
              <span className="vira-factor-label">Estimated Value</span>
              <span className="vira-factor-value">{whale.estimatedValue}</span>
            </div>
            <div className="vira-factor-row">
              <span className="vira-factor-label">Activity</span>
              <span className="vira-factor-value">{whale.activity}</span>
            </div>
            <div className="vira-factor-row">
              <span className="vira-factor-label">Market Context</span>
              <span className="vira-factor-value">{whale.marketContext}</span>
            </div>
            <div className="vira-factor-row">
              <span className="vira-factor-label">Alert Level</span>
              <span className="vira-factor-value">{whale.alertLevel}</span>
            </div>
          </div>
          <p className="text-sm text-white">
            Whale activity is context, not a prediction that Bitcoin will rise or fall.
          </p>
          <TelegramCta variant="light" className="self-start">
            Get Whale Alerts on Telegram
          </TelegramCta>
        </motion.article>
      </section>

      <section className="section-container py-12 md:py-16 flex flex-col items-center gap-10">
        <SectionHeader
          title="Detect Potential Trend Changes Earlier."
          description="Vira AI monitors changes across technical, market and behavioral signals to identify conditions that may indicate a potential trend reversal."
        />

        <motion.article
          className="vira-insight-card"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          <h3 className="font-subtitle text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-white">
            {trend.title}
          </h3>
          <motion.div variants={staggerItem}>
            <div className="vira-factor-row">
              <span className="vira-factor-label">Previous Trend</span>
              <span className="vira-factor-value">{trend.previousTrend}</span>
            </div>
            <div className="vira-factor-row">
              <span className="vira-factor-label">Current Conditions</span>
              <span className="vira-factor-value">{trend.currentConditions}</span>
            </div>
            <div className="vira-factor-row">
              <span className="vira-factor-label">Technical</span>
              <span className="vira-factor-value">{trend.technical}</span>
            </div>
            <div className="vira-factor-row">
              <span className="vira-factor-label">Momentum</span>
              <span className="vira-factor-value">{trend.momentum}</span>
            </div>
            <div className="vira-factor-row">
              <span className="vira-factor-label">Whale Activity</span>
              <span className="vira-factor-value">{trend.whaleActivity}</span>
            </div>
            <div className="vira-factor-row">
              <span className="vira-factor-label">AI Assessment</span>
              <span className="vira-factor-value">{trend.aiAssessment}</span>
            </div>
            <div className="vira-factor-row">
              <span className="vira-factor-label">Risk</span>
              <span className="vira-factor-value">{trend.risk}</span>
            </div>
          </motion.div>
          <TelegramCta variant="light" className="self-start">
            Monitor BTC Trends
          </TelegramCta>
        </motion.article>
      </section>
    </>
  );
}
