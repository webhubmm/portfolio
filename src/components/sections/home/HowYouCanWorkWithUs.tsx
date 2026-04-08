"use client";

import { motion } from "framer-motion";
import { scrollViewport, scrollTransition } from "@/lib/scrollAnimations";

const models = [
  {
    title: "Fixed Price Model",
    tagline: "Best for well-defined projects with clear requirements",
    body: "If you already have a clear vision, scope, and timeline, the fixed price model is the perfect choice. We agree on a defined budget and deliverables upfront, ensuring transparency and predictability throughout the project.",
    bullets: [
      "Clear scope, timeline, and cost",
      "No hidden fees or surprises",
      "Ideal for MVPs and small-to-medium projects",
      "Structured delivery with milestone tracking",
    ],
  },
  {
    title: "Dedicated Team",
    tagline: "Best for long-term projects and scaling startups",
    body: "Extend your team with our skilled engineers, designers, and product experts. The dedicated team model gives you full control and flexibility while we handle execution, management, and continuous delivery.",
    bullets: [
      "Full-time, committed team members",
      "Flexible scaling based on your needs",
      "Direct communication and collaboration",
      "Perfect for startups and growing SaaS products",
    ],
  },
  {
    title: "Hourly Pricing",
    tagline: "Best for evolving projects and ongoing improvements",
    body: "For projects where requirements may change over time, our hourly model provides maximum flexibility. You only pay for the time and resources used, making it ideal for continuous development and support.",
    bullets: [
      "Flexible scope and quick adjustments",
      "Pay-as-you-go model",
      "Ideal for maintenance, updates, and iterations",
      "Fast turnaround for small tasks and improvements",
    ],
  },
] as const;

export default function HowYouCanWorkWithUs() {
  return (
    <section
      id="work-with-us"
      className="section-container py-12 md:py-16 flex flex-col items-center"
    >
      <div className="engagement-section-inner w-full max-w-[var(--content-max-width)] mx-auto flex flex-col items-center gap-8 md:gap-10">
        <motion.header
          className="text-center max-w-3xl mx-auto px-1 flex flex-col gap-3"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollViewport}
          transition={scrollTransition}
        >
          <h2 className="project-section-title">
            How You Can <span className="text-secondary">Work With Us</span>
          </h2>
          <p className="engagement-section-subtitle">
            Flexible engagement models designed to fit your project, budget, and growth stage
          </p>
        </motion.header>

        <motion.div
          className="engagement-models-card w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollViewport}
          transition={{ ...scrollTransition, delay: 0.06 }}
        >
          {models.map((item, index) => (
            <article
              key={item.title}
              className={`engagement-model-item ${index > 0 ? "engagement-model-item--divider" : ""}`}
            >
              <h3 className="engagement-model-title">{item.title}</h3>
              <p className="engagement-model-tagline">{item.tagline}</p>
              <div className="engagement-model-copy">
                <p className="engagement-model-body">{item.body}</p>
                <p className="engagement-model-why-label">Why choose this:</p>
                <ul className="engagement-model-list">
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
