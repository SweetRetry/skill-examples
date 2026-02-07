import type { Transition, Variants } from "framer-motion"

/** Expressive — spring physics for cinematic feel */
export const expressiveSpring: Transition = {
  type: "spring",
  stiffness: 280,
  damping: 28,
  mass: 1,
}

/** Swiss — crisp expo-out for data-driven UI */
export const swissEase: Transition = {
  duration: 0.2,
  ease: [0.16, 1, 0.3, 1],
}

/** Cross-zone universal transition */
export const crossZone: Transition = {
  duration: 0.3,
  ease: [0.16, 1, 0.3, 1],
}

/** Stagger children — Expressive (0.06s) */
export const expressiveStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
}

/** Stagger children — Swiss (0.03s) */
export const swissStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03,
    },
  },
}

/** Fade-up child variant — Expressive */
export const fadeUpChild: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: expressiveSpring,
  },
}

/** Fade-up child variant — Swiss */
export const swissFadeChild: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: swissEase,
  },
}
