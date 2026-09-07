"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/vira/SectionHeader";
import { VIRA_MARKET_DEFAULTS } from "@/lib/viraMarket";
import { scrollTransition, scrollViewport } from "@/lib/scrollAnimations";
import type { ViraMarketOverview, ViraPredictionHistory } from "@/types/viraMarket";

type Props = {
  initialHistory: ViraPredictionHistory | null;
};

export default function ViraProof({ initialHistory }: Props) {
  const [history, setHistory] = useState<ViraPredictionHistory | null>(initialHistory);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const page = history?.page ?? 1;
  const totalPages = Math.max(1, history?.total_pages ?? 1);
  const rows = history?.items ?? [];

  async function goToPage(nextPage: number) {
    if (nextPage < 1 || nextPage > totalPages || nextPage === page || loading) return;
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams({
        symbol: VIRA_MARKET_DEFAULTS.symbol,
        timeframe: VIRA_MARKET_DEFAULTS.timeframe,
        page: String(nextPage),
        page_size: String(history?.page_size ?? VIRA_MARKET_DEFAULTS.pageSize),
      });
      const res = await fetch(`/api/vira/overview?${params.toString()}`);
      if (!res.ok) throw new Error("Failed to load history");
      const data = (await res.json()) as ViraMarketOverview;
      setHistory(data.prediction_history);
    } catch {
      setError("Unable to load this page of prediction history.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="history" className="section-container py-12 md:py-16 flex flex-col items-center gap-10">
      <SectionHeader
        title="Every Prediction Leaves a Record."
        description="Vira AI keeps a historical record of its market assessments so users can evaluate the system over time instead of relying on screenshots or isolated successful predictions."
      />

      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={scrollViewport}
        transition={scrollTransition}
      >
        <p className="text-sm text-subtitle font-medium mb-3 px-1">Prediction history</p>
        <div className={`vira-history-wrap ${loading ? "opacity-60" : ""}`}>
          <table className="vira-history-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Signal</th>
                <th>Confidence</th>
                <th>Time Horizon</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              {rows.length > 0 ? (
                rows.map((row) => (
                  <tr key={row.prediction_id}>
                    <td>{row.date}</td>
                    <td>{row.signal}</td>
                    <td>{row.confidence_pct}%</td>
                    <td>{row.time_horizon}</td>
                    <td>
                      <span
                        className={
                          row.result === "Correct" ? "vira-result-correct" : "vira-result-incorrect"
                        }
                      >
                        {row.result}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5}>Live prediction history is temporarily unavailable.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {error ? <p className="text-sm text-primary mt-3 text-center">{error}</p> : null}
        <nav className="vira-pagination" aria-label="Prediction history pages">
          <button
            type="button"
            className="vira-pagination-btn"
            onClick={() => goToPage(page - 1)}
            disabled={loading || !history?.has_prev}
          >
            Prev
          </button>
          {Array.from({ length: totalPages }).map((_, index) => {
            const pageNumber = index + 1;
            return (
              <button
                key={pageNumber}
                type="button"
                className={`vira-pagination-btn ${page === pageNumber ? "vira-pagination-btn--active" : ""}`}
                onClick={() => goToPage(pageNumber)}
                aria-current={page === pageNumber ? "page" : undefined}
                disabled={loading}
              >
                {pageNumber}
              </button>
            );
          })}
          <button
            type="button"
            className="vira-pagination-btn"
            onClick={() => goToPage(page + 1)}
            disabled={loading || !history?.has_next}
          >
            Next
          </button>
        </nav>
      </motion.div>
    </section>
  );
}
