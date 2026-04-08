"use client";

import { useState, useLayoutEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { scrollViewport, scrollTransition } from "@/lib/scrollAnimations";

const steps = [
  {
    num: "01",
    title: "Discovery & Strategy",
    description:
      "Every successful product starts with clarity. We dive deep into your business model, target audience, and long-term vision to define a strong foundation. Our team works closely with you to identify opportunities, challenges, and the best technical approach.",
    bullets: [
      "In-depth business and product analysis",
      "Market research & competitor insights",
      "Define project scope, goals, and KPIs",
      "Recommend the right tech stack",
      "Build a clear and actionable product roadmap",
    ],
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "We craft intuitive, user-centric designs that not only look modern but also deliver seamless experiences. Our design process focuses on usability, engagement, and conversion, ensuring your product stands out in a competitive market.",
    bullets: [
      "User journey mapping & wireframing",
      "High-fidelity UI/UX design",
      "Design systems and scalable components",
      "Mobile-first and responsive design",
      "Continuous feedback and iteration",
    ],
  },
  {
    num: "03",
    title: "Development",
    description:
      "This is where ideas turn into reality. Our engineers build robust, scalable, and high-performance applications using modern frameworks and clean architecture principles. We ensure your product is future-ready from day one.",
    bullets: [
      "Frontend and backend development",
      "Scalable architecture & clean code practices",
      "AI integration and automation systems",
      "API development and third-party integrations",
    ],
  },
  {
    num: "04",
    title: "Testing & Quality Assurance",
    description:
      "Quality is at the core of everything we build. We conduct thorough testing to ensure your product performs flawlessly across all devices and environments, minimizing risks before launch.",
    bullets: [
      "Functional and usability testing",
      "Performance and load testing",
      "Security and vulnerability checks",
      "Bug tracking and resolution",
      "Cross-browser and cross-device testing",
    ],
  },
  {
    num: "05",
    title: "Launch & Deployment",
    description:
      "We ensure a smooth and reliable launch process with zero downtime. From infrastructure setup to final deployment, we make sure your product is fully optimized and ready for real users.",
    bullets: [
      "Cloud deployment (AWS, GCP, DigitalOcean)",
      "CI/CD pipeline setup for automation",
      "Server configuration and optimization",
      "Real-time monitoring and logging",
      "Go-live support and final checks",
    ],
  },
  {
    num: "06",
    title: "Support & Scaling",
    description:
      "Our partnership doesn\u2019t end at launch. We continuously support your growth by improving performance, adding new features, and scaling your system as your user base expands.",
    bullets: [
      "Ongoing maintenance and updates",
      "Performance monitoring & optimization",
      "Feature enhancements and iteration",
      "Infrastructure scaling and cost optimization",
      "Long-term technical partnership",
    ],
  },
] as const;

const sliceEase = [0.22, 1, 0.36, 1] as const;

function StepPanelBody({ step }: { step: (typeof steps)[number] }) {
  return (
    <>
      <p className="how-we-work-panel-desc">{step.description}</p>
      <p className="how-we-work-panel-what">What we do:</p>
      <ul className="how-we-work-panel-list">
        {step.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </>
  );
}

export default function HowWeWork() {
  const [openIndex, setOpenIndex] = useState(0);
  const [isLg, setIsLg] = useState(false);
  /** When false on desktop, body doesn’t overflow — avoid trapping wheel on a non-scrollable region */
  const [panelBodyScrollNeeded, setPanelBodyScrollNeeded] = useState(true);
  const panelBodyRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const sync = () => setIsLg(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useLayoutEffect(() => {
    if (!isLg) return;
    const el = panelBodyRef.current;
    if (!el) return;
    const measure = () => {
      setPanelBodyScrollNeeded(el.scrollHeight > el.clientHeight + 2);
    };
    measure();
    const ro = new ResizeObserver(() => {
      requestAnimationFrame(measure);
    });
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [isLg, openIndex]);

  return (
    <section
      id="how-we-work"
      className="section-container py-12 md:py-16 flex flex-col items-center"
    >
      <div className="how-we-work-inner w-full max-w-[var(--content-max-width)] mx-auto flex flex-col gap-8 md:gap-10">
        <motion.header
          className="text-center max-w-3xl mx-auto px-2 flex flex-col gap-3"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollViewport}
          transition={scrollTransition}
        >
          <h2 className="project-section-title">How We Work</h2>
          <p className="how-we-work-subtitle">
            A transparent, step-by-step process to turn your ideas into scalable
            digital products
          </p>
        </motion.header>

        <motion.div
          className="how-we-work-track"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollViewport}
          transition={{ ...scrollTransition, delay: 0.06 }}
        >
          {steps.map((step, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={step.num}
                className={`how-we-work-panel ${isOpen ? "how-we-work-panel--open" : ""}`}
                onClick={() => setOpenIndex(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setOpenIndex(i);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                aria-controls={`how-we-work-content-${i}`}
                id={`how-we-work-trigger-${i}`}
              >
                <div className="how-we-work-panel-head">
                  <span className="how-we-work-panel-num">{step.num}</span>
                  <span className="how-we-work-panel-title">{step.title}</span>
                </div>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      ref={panelBodyRef}
                      key={`how-we-body-${step.num}`}
                      className={`how-we-work-panel-body${
                        isLg && !panelBodyScrollNeeded
                          ? " how-we-work-panel-body--no-inner-scroll"
                          : ""
                      }`}
                      id={`how-we-work-content-${i}`}
                      role="region"
                      aria-labelledby={`how-we-work-trigger-${i}`}
                      initial={
                        isLg
                          ? {
                              clipPath: "inset(0 100% 0 0)",
                              opacity: 0.98,
                            }
                          : false
                      }
                      animate={
                        isLg
                          ? {
                              clipPath: "inset(0 0% 0 0)",
                              opacity: 1,
                            }
                          : { opacity: 1 }
                      }
                      exit={
                        isLg
                          ? {
                              clipPath: "inset(0 0 0 100%)",
                              opacity: 0.98,
                            }
                          : { opacity: 1 }
                      }
                      transition={{
                        clipPath: {
                          duration: isLg ? 0.72 : 0,
                          ease: sliceEase,
                        },
                        opacity: { duration: isLg ? 0.35 : 0 },
                      }}
                    >
                      <StepPanelBody step={step} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
