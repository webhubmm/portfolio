"use client";

import {
  useState,
  useEffect,
  useMemo,
  useCallback,
  type ReactNode,
} from "react";
import { motion } from "framer-motion";

type TitlePart = { text: string; accent?: boolean };

const heroTitleLines: TitlePart[][] = [
  [
    { text: "Innovative " },
    { text: "Software Solutions", accent: true },
    { text: " for Businesses and Startups" },
  ],
  [
    { text: "From Idea to Launch — We Turn " },
    { text: "Vision", accent: true },
    { text: " into High-Performance Products" },
  ],
  [
    { text: "Build " },
    { text: "Scalable Digital Products", accent: true },
    { text: " That Actually Grow Your Business" },
  ],
];

/** Time each full line stays on screen after typing finishes */
const HERO_HOLD_MS = 6000;
/** Milliseconds per character while typing in */
const HERO_TYPE_CHAR_MS = 38;
/** Milliseconds per character while deleting (fast) */
const HERO_DELETE_CHAR_MS = 10;
const HERO_AFTER_DELETE_MS = 380;

const heroTitleMinHeightClass = "min-h-[9rem] md:min-h-[7.5rem]";

function lineLength(parts: TitlePart[]) {
  return parts.reduce((n, p) => n + p.text.length, 0);
}

function TypingHeroTitle() {
  const lineLengths = useMemo(
    () => heroTitleLines.map(lineLength),
    []
  );

  const [lineIndex, setLineIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting">("typing");

  const advanceLine = useCallback(() => {
    setLineIndex((i) => (i + 1) % heroTitleLines.length);
    setCharCount(0);
    setPhase("typing");
  }, []);

  useEffect(() => {
    const currentMax = lineLengths[lineIndex];

    if (phase === "typing") {
      if (charCount >= currentMax) {
        const t = window.setTimeout(() => setPhase("holding"), 80);
        return () => clearTimeout(t);
      }
      const id = window.setTimeout(() => {
        setCharCount((c) => Math.min(c + 1, currentMax));
      }, HERO_TYPE_CHAR_MS);
      return () => clearTimeout(id);
    }

    if (phase === "holding") {
      const t = window.setTimeout(() => setPhase("deleting"), HERO_HOLD_MS);
      return () => clearTimeout(t);
    }

    /* deleting */
    if (charCount <= 0) {
      const t = window.setTimeout(advanceLine, HERO_AFTER_DELETE_MS);
      return () => clearTimeout(t);
    }
    const id = window.setTimeout(() => {
      setCharCount((c) => Math.max(c - 1, 0));
    }, HERO_DELETE_CHAR_MS);
    return () => clearTimeout(id);
  }, [phase, charCount, lineIndex, lineLengths, advanceLine]);

  const renderLine = (parts: TitlePart[], count: number) => {
    let remaining = count;
    const nodes: ReactNode[] = [];
    parts.forEach((part, i) => {
      const take = Math.min(part.text.length, Math.max(remaining, 0));
      remaining -= take;
      if (take <= 0) return;
      const slice = part.text.slice(0, take);
      nodes.push(
        part.accent ? (
          <span key={i} className="text-secondary">
            {slice}
          </span>
        ) : (
          <span key={i}>{slice}</span>
        )
      );
    });
    return nodes;
  };

  return (
    <h1
      className={`text-main-title relative w-full mx-auto ${heroTitleMinHeightClass} text-center`}
      aria-live="polite"
    >
      <span className="inline-block max-w-full px-2 text-center">
        {renderLine(heroTitleLines[lineIndex], charCount)}
        <span className="hero-type-cursor" aria-hidden />
      </span>
    </h1>
  );
}

export default function Hero() {
  return (
    <section className="section-container py-20 flex flex-col items-center justify-center text-center">
      <div className="min-h-[90vh] flex flex-col items-center justify-center gap-8 md:gap-10 w-full">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <TypingHeroTitle />
        </motion.div>
      </div>
    </section>
  );
}
