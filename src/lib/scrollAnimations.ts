/**
 * Shared scroll-triggered animation config for smooth, consistent reveal effects.
 * Used with Framer Motion whileInView across sections.
 */

export const scrollViewport = {
  once: true,
  amount: 0.15,
  margin: "0px 0px -80px 0px",
} as const;

export const scrollTransition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1] as const, // easeOutExpo-like, smooth
} as const;

/** Use with stagger: parent has variants with staggerChildren, children use child variant */
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
} as const;

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
} as const;
