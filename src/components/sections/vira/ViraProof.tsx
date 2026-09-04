"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/vira/SectionHeader";
import { viraPredictionHistory } from "@/content/vira";
import { scrollTransition, scrollViewport } from "@/lib/scrollAnimations";

const PAGE_SIZE = 5;

export default function ViraProof() {
  const rows = viraPredictionHistory.rows;
  const totalPages = Math.max(1, Math.ceil(rows.length / PAGE_SIZE));
  const [page, setPage] = useState(0);

  const visibleRows = useMemo(
    () => rows.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE),
    [page, rows]
  );

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
        <div className="vira-history-wrap">
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
              {visibleRows.map((row) => (
                <tr key={row.date}>
                  <td>{row.date}</td>
                  <td>{row.signal}</td>
                  <td>{row.confidence}</td>
                  <td>{row.horizon}</td>
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
              ))}
            </tbody>
          </table>
        </div>
        <nav className="vira-pagination" aria-label="Prediction history pages">
          <button
            type="button"
            className="vira-pagination-btn"
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
          >
            Prev
          </button>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              type="button"
              className={`vira-pagination-btn ${page === index ? "vira-pagination-btn--active" : ""}`}
              onClick={() => setPage(index)}
              aria-current={page === index ? "page" : undefined}
            >
              {index + 1}
            </button>
          ))}
          <button
            type="button"
            className="vira-pagination-btn"
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page >= totalPages - 1}
          >
            Next
          </button>
        </nav>
      </motion.div>
    </section>
  );
}
