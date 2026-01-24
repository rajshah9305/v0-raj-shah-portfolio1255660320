import { Variants, Transition } from "framer-motion";

/**
 * Transition presets for consistent animation timing
 */
export const transitions = {
  micro: { duration: 0.15, ease: [0.22, 1, 0.36, 1] } as Transition,
  short: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } as Transition,
  default: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } as Transition,
  normal: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } as Transition,
  long: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } as Transition,
  bounce: { duration: 0.6, ease: [0.68, -0.55, 0.265, 1.55] } as Transition,
} as const;

/**
 * Entrance animations - Use for initial page load
 */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.default,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transitions.default,
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.default,
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.default,
  },
};

export const slideInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.normal,
  },
};

export const slideInDown: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.normal,
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.default,
  },
};

export const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.normal,
  },
};

export const zoomInRotate: Variants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: transitions.normal,
  },
};

export const rotateIn: Variants = {
  hidden: { opacity: 0, rotate: -20 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: transitions.normal,
  },
};

/**
 * Container and stagger animations
 */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.short,
  },
};

/**
 * Hover animations
 */
export const hoverScale = {
  scale: 1.05,
  transition: transitions.micro,
};

export const hoverScaleUp = {
  scale: 1.1,
  transition: transitions.micro,
};

export const hoverLift = {
  y: -8,
  transition: transitions.micro,
};

export const hoverGlow = {
  boxShadow: "0 0 30px rgba(224, 122, 60, 0.5)",
  transition: transitions.micro,
};

export const hoverRotate = {
  rotate: 5,
  transition: transitions.micro,
};

/**
 * Looping animations
 */

export const bounce: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-5, 5, -5],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: [0.68, -0.55, 0.265, 1.55],
    },
  },
};

export const shimmer: Variants = {
  initial: { backgroundPosition: "-1000px 0" },
  animate: {
    backgroundPosition: "1000px 0",
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

export const gradientShift: Variants = {
  initial: { backgroundPosition: "0% 50%" },
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

/**
 * Modal animations
 */
export const modalBackdrop: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitions.short },
  exit: { opacity: 0, transition: transitions.short },
};

export const modalContent: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: transitions.normal,
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 20,
    transition: transitions.short,
  },
};

/**
 * Exit animations
 */
export const slideOutLeft: Variants = {
  exit: {
    opacity: 0,
    x: -100,
    transition: transitions.short,
  },
};

export const slideOutRight: Variants = {
  exit: {
    opacity: 0,
    x: 100,
    transition: transitions.short,
  },
};

export const zoomOut: Variants = {
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: transitions.short,
  },
};

/**
 * Backward compatibility exports
 */
export const defaultTransition = transitions.default;
export const slowTransition = transitions.long;
