"use client";

import { motion } from "framer-motion";
import { scrollTransition, scrollViewport } from "@/lib/scrollAnimations";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  onDark?: boolean;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  description,
  align = "center",
  onDark = false,
  className = "",
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <motion.header
      className={cn(
        "flex flex-col gap-4 max-w-5xl",
        centered ? "mx-auto text-center items-center" : "items-start text-left",
        className
      )}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={scrollViewport}
      transition={scrollTransition}
    >
      {label ? (
        <span className={cn("vira-section-label", onDark && "vira-section-label--on-dark")}>
          {label}
        </span>
      ) : null}
      <h2
        className={cn(
          "vira-section-title",
          onDark && "vira-section-title--on-dark",
          !centered && "vira-section-title--left"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "text-content",
            onDark ? "text-white/85" : "text-on-white",
            centered ? "text-center" : "text-left"
          )}
        >
          {description}
        </p>
      ) : null}
    </motion.header>
  );
}
