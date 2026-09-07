"use client";

import { motion } from "framer-motion";
import TelegramCta from "@/components/vira/TelegramCta";
import { displayValue, signalClassName } from "@/lib/viraMarket";
import type { ViraMarketOverview } from "@/types/viraMarket";

function Sparkline({ up }: { up: boolean }) {
  const color = up ? "#A3AFEF" : "#F2B8B8";
  const fillId = up ? "viraSparkFillUp" : "viraSparkFillDown";

  return (
    <svg className="vira-sparkline" viewBox="0 0 320 64" preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id={fillId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.35" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${fillId})`}
        d="M0 48 C 28 46, 40 42, 56 38 C 80 32, 96 44, 120 28 C 148 10, 168 22, 192 18 C 220 12, 240 30, 264 20 C 284 12, 300 16, 320 8 L 320 64 L 0 64 Z"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M0 48 C 28 46, 40 42, 56 38 C 80 32, 96 44, 120 28 C 148 10, 168 22, 192 18 C 220 12, 240 30, 264 20 C 284 12, 300 16, 320 8"
      />
    </svg>
  );
}

function Dashboard({ overview }: { overview: ViraMarketOverview | null }) {
  if (!overview) {
    return (
      <div className="vira-dashboard" aria-label="Bitcoin intelligence dashboard">
        <div className="vira-dashboard-inner flex flex-col gap-4 min-h-[280px] justify-center">
          <p className="vira-stat-label">Live market data</p>
          <p className="text-white font-medium">Market intelligence is temporarily unavailable.</p>
        </div>
      </div>
    );
  }

  const ticker = overview.ticker;
  const signal = overview.ai_market_signal;
  const consensus = signal.agent_consensus;
  const priceUp = ticker.change_pct_24h >= 0;
  const indicators = [
    { label: "RSI", value: displayValue(signal.rsi) },
    { label: "MACD", value: displayValue(signal.macd) },
    { label: "EMA 50", value: displayValue(signal.ema_50) },
    { label: "Volume", value: displayValue(signal.volume) },
  ];

  return (
    <div className="vira-dashboard" aria-label="Live Bitcoin intelligence dashboard">
      <div className="vira-dashboard-inner flex flex-col gap-5">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="vira-live-dot" aria-hidden />
            <span className="vira-stat-label">{ticker.pair}</span>
          </div>
          <p className="text-white font-subtitle text-4xl md:text-5xl font-extrabold leading-none tracking-tight">
            {ticker.price_display}
          </p>
          <p className={`mt-1 font-medium ${priceUp ? "vira-change-up" : "vira-change-down"}`}>
            {ticker.change_display}
          </p>
        </div>

        <Sparkline up={priceUp} />

        <div className="grid grid-cols-2 gap-3">
          <div className="vira-stat-tile col-span-2 sm:col-span-1">
            <span className="vira-stat-label">AI Market Signal</span>
            <span className={`vira-stat-value ${signalClassName(signal.signal)}`}>{signal.signal}</span>
          </div>
          <div className="vira-stat-tile">
            <span className="vira-stat-label">Confidence</span>
            <span className="vira-stat-value">{signal.confidence_pct}%</span>
            <div className="h-1.5 rounded-full bg-white/10 overflow-hidden mt-1">
              <div
                className="h-full rounded-full bg-fourth"
                style={{ width: `${Math.min(Math.max(signal.confidence_pct, 0), 100)}%` }}
              />
            </div>
          </div>
          <div className="vira-stat-tile">
            <span className="vira-stat-label">Market Regime</span>
            <span className="vira-stat-value">{displayValue(signal.market_regime)}</span>
          </div>
          <div className="vira-stat-tile">
            <span className="vira-stat-label">Risk</span>
            <span className="vira-stat-value">{displayValue(signal.risk)}</span>
          </div>
        </div>

        <div className="vira-stat-tile">
          <span className="vira-stat-label">Agent Consensus</span>
          <span className="vira-stat-value">{consensus.label}</span>
          <div className="flex gap-1.5 mt-1" aria-hidden>
            {Array.from({ length: consensus.total_votes }).map((_, i) => (
              <span
                key={i}
                className={`vira-consensus-dot ${
                  i < consensus.bullish_votes ? "vira-consensus-dot--on" : ""
                }`}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {indicators.map((item) => (
            <div key={item.label} className="vira-stat-tile py-2 px-3">
              <span className="vira-stat-label">{item.label}</span>
              <span className="text-white text-sm font-medium">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ViraHero({ overview }: { overview: ViraMarketOverview | null }) {
  return (
    <section className="relative overflow-hidden">
      <div className="vira-hero-grid" aria-hidden />
      <div className="section-container pt-12 pb-16 md:pt-16 md:pb-24 flex flex-col items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="vira-section-label">AI-Powered Bitcoin Market Intelligence</span>
            <h1 className="vira-hero-title vira-hero-title--left max-lg:!text-center">
              Understand Bitcoin Before You Make Your Move.
            </h1>
            <p className="text-content text-on-white max-w-xl lg:text-left">
              Vira AI analyzes market data, technical indicators, whale activity, market sentiment
              and other signals to help traders understand Bitcoin market conditions in real time.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <TelegramCta className="w-full sm:w-auto">Try Vira AI on Telegram</TelegramCta>
              <a href="#how-it-works" className="btn-base btn-secondary inline-flex w-full sm:w-auto">
                Explore the Intelligence
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <Dashboard overview={overview} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
