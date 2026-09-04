"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeader from "@/components/vira/SectionHeader";
import { viraFaq } from "@/content/vira";

export default function ViraFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-container py-12 md:py-16 flex flex-col items-center gap-10">
      <SectionHeader title="Questions, Answered Directly." />
      <div className="w-full max-w-3xl">
        {viraFaq.map((item, index) => {
          const open = openIndex === index;
          return (
            <div key={item.question} className="vira-faq-item">
              <button
                type="button"
                className="vira-faq-trigger"
                aria-expanded={open}
                onClick={() => setOpenIndex(open ? null : index)}
              >
                <span>{item.question}</span>
                <span aria-hidden className="text-third text-2xl leading-none">
                  {open ? "–" : "+"}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="vira-faq-answer">{item.answer}</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
