"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/vira/SectionHeader";
import TelegramCta from "@/components/vira/TelegramCta";
import { displayValue, signalClassName } from "@/lib/viraMarket";
import { scrollViewport, staggerContainer, staggerItem } from "@/lib/scrollAnimations";
import type { ViraMarketOverview } from "@/types/viraMarket";

function Consensus({ bullish, total }: { bullish: number; total: number }) {
  return (
    <div className="flex gap-1.5" aria-hidden>
      {Array.from({ length: Math.max(total, 0) }).map((_, i) => (
        <span
          key={i}
          className={`vira-consensus-dot ${i < bullish ? "vira-consensus-dot--on" : ""}`}
        />
      ))}
    </div>
  );
}

export default function ViraInsights({ overview }: { overview: ViraMarketOverview | null }) {
  const analysis = overview?.market_analysis;
  const whale = overview?.whale_alert;
  const trend = overview?.trend_reversal;
  const why = analysis?.why;
  const consensus = why?.agent_consensus;

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
            BTC Market Analysis
          </h3>
          {analysis ? (
            <>
              <div className="grid grid-cols-3 gap-3">
                <div className="vira-stat-tile">
                  <span className="vira-stat-label">Signal</span>
                  <span className={`vira-stat-value ${signalClassName(analysis.signal)}`}>
                    {analysis.signal}
                  </span>
                </div>
                <div className="vira-stat-tile">
                  <span className="vira-stat-label">Confidence</span>
                  <span className="vira-stat-value">{analysis.confidence_pct}%</span>
                </div>
                <div className="vira-stat-tile">
                  <span className="vira-stat-label">Time Horizon</span>
                  <span className="vira-stat-value">{displayValue(analysis.time_horizon)}</span>
                </div>
              </div>
              <p className="vira-stat-label">Why?</p>
              <div>
                <div className="vira-factor-row">
                  <span className="vira-factor-label">Technical Trend</span>
                  <span className="vira-factor-value">{displayValue(why?.technical_trend)}</span>
                </div>
                <div className="vira-factor-row">
                  <span className="vira-factor-label">Whale Activity</span>
                  <span className="vira-factor-value">{displayValue(why?.whale_activity)}</span>
                </div>
                <div className="vira-factor-row">
                  <span className="vira-factor-label">Momentum</span>
                  <span className="vira-factor-value">{displayValue(why?.momentum)}</span>
                </div>
                <div className="vira-factor-row">
                  <span className="vira-factor-label">Market Sentiment</span>
                  <span className="vira-factor-value">{displayValue(why?.market_sentiment)}</span>
                </div>
                <div className="vira-factor-row">
                  <span className="vira-factor-label">Derivatives</span>
                  <span className="vira-factor-value">{displayValue(why?.derivatives)}</span>
                </div>
                <div className="vira-factor-row">
                  <span className="vira-factor-label">Risk</span>
                  <span className="vira-factor-value">{displayValue(why?.risk)}</span>
                </div>
                <div className="vira-factor-row">
                  <span className="vira-factor-label">Agent Consensus</span>
                  <span className="vira-factor-value">
                    {displayValue(consensus?.label)}
                  </span>
                </div>
              </div>
              {consensus ? (
                <Consensus bullish={consensus.bullish_votes} total={consensus.total_votes} />
              ) : null}
              <p className="text-sm text-white">
                {analysis.disclaimer ??
                  "Signals are probabilistic market assessments, not guarantees."}
              </p>
            </>
          ) : (
            <p className="text-white">Live market analysis is temporarily unavailable.</p>
          )}
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
            🐋 {whale?.title ?? "Whale Alert"}
          </h3>
          {whale ? (
            <>
              <p className="font-subtitle text-3xl md:text-4xl font-extrabold text-white">
                {whale.amount_display}
              </p>
              <div>
                <div className="vira-factor-row">
                  <span className="vira-factor-label">Estimated Value</span>
                  <span className="vira-factor-value">{whale.estimated_value_display}</span>
                </div>
                <div className="vira-factor-row">
                  <span className="vira-factor-label">Activity</span>
                  <span className="vira-factor-value">{whale.activity}</span>
                </div>
                <div className="vira-factor-row">
                  <span className="vira-factor-label">Market Context</span>
                  <span className="vira-factor-value">{whale.market_context}</span>
                </div>
                <div className="vira-factor-row">
                  <span className="vira-factor-label">Alert Level</span>
                  <span className="vira-factor-value">{whale.alert_level}</span>
                </div>
              </div>
              <p className="text-sm text-white">
                {whale.disclaimer ??
                  "Whale activity is context, not a prediction that Bitcoin will rise or fall."}
              </p>
            </>
          ) : (
            <p className="text-white">No recent whale alert is available.</p>
          )}
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
            {trend?.title ?? "BTC Trend Reversal"}
          </h3>
          {trend ? (
            <motion.div variants={staggerItem}>
              <div className="vira-factor-row">
                <span className="vira-factor-label">Previous Trend</span>
                <span className="vira-factor-value">{trend.previous_trend}</span>
              </div>
              <div className="vira-factor-row">
                <span className="vira-factor-label">Current Conditions</span>
                <span className="vira-factor-value">{trend.current_conditions}</span>
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
                <span className="vira-factor-value">{trend.whale_activity}</span>
              </div>
              <div className="vira-factor-row">
                <span className="vira-factor-label">AI Assessment</span>
                <span className="vira-factor-value">{trend.ai_assessment}</span>
              </div>
              <div className="vira-factor-row">
                <span className="vira-factor-label">Risk</span>
                <span className="vira-factor-value">{trend.risk}</span>
              </div>
            </motion.div>
          ) : (
            <p className="text-white">Live trend assessment is temporarily unavailable.</p>
          )}
          <TelegramCta variant="light" className="self-start">
            Monitor BTC Trends
          </TelegramCta>
        </motion.article>
      </section>
    </>
  );
}
