/**
 * Advanced Animation Variants
 * Enterprise-grade Framer Motion animations for premium feel
 */

import { Variants, Transition } from 'framer-motion';

// Premium easing functions
const EASING = {
  SMOOTH: [0.22, 1, 0.36, 1],
  BOUNCE: [0.68, -0.55, 0.265, 1.55],
  ELASTIC: [0.175, 0.885, 0.32, 1.275],
  SHARP: [0.4, 0, 0.2, 1],
} as const;

// Enhanced transitions
export const transitions = {
  micro: { duration: 0.15, ease: EASING.SMOOTH } as Transition,
  short: { duration: 0.3, ease: EASING.SMOOTH } as Transition,
  normal: { duration: 0.5, ease: EASING.SMOOTH } as Transition,
  long: { duration: 0.8, ease: EASING.SMOOTH } as Transition,
  bounce: { duration: 0.6, ease: EASING.BOUNCE } as Transition,
} as const;

// Entrance animations
export const entranceAnimations = {
  slideInLeft: {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: transitions.normal,
    },
  } as Variants,

  slideInRight: {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: transitions.normal,
    },
  } as Variants,

  slideInUp: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: transitions.normal,
    },
  } as Variants,

  slideInDown: {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: transitions.normal,
    },
  } as Variants,

  zoomIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: transitions.normal,
    },
  } as Variants,

  zoomInRotate: {
    hidden: { opacity: 0, scale: 0.5, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: transitions.normal,
    },
  } as Variants,

  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: transitions.normal,
    },
  } as Variants,

  rotateIn: {
    hidden: { opacity: 0, rotate: -20 },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: transitions.normal,
    },
  } as Variants,
} as const;

// Hover animations
export const hoverAnimations = {
  scale: { scale: 1.05, transition: transitions.micro },
  scaleUp: { scale: 1.1, transition: transitions.micro },
  lift: { y: -8, transition: transitions.micro },
  glow: {
    boxShadow: '0 0 30px rgba(224, 122, 60, 0.5)',
    transition: transitions.micro,
  },
  rotate: { rotate: 5, transition: transitions.micro },
  shimmer: {
    backgroundPosition: '200% center',
    transition: transitions.normal,
  },
} as const;

// Stagger container for sequences
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
} as const;

// Stagger item
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.short,
  },
} as const;

// Pulse animation
export const pulse: Variants = {
  initial: { opacity: 1 },
  animate: {
    opacity: [1, 0.5, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
} as const;

// Bounce animation
export const bounce: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-5, 5, -5],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: EASING.BOUNCE,
    },
  },
} as const;

// Shimmer effect (loading state)
export const shimmer: Variants = {
  initial: { backgroundPosition: '-1000px 0' },
  animate: {
    backgroundPosition: '1000px 0',
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'linear',
    },
  },
} as const;

// Gradient animation
export const gradientShift: Variants = {
  initial: { backgroundPosition: '0% 50%' },
  animate: {
    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'linear',
    },
  },
} as const;

// Modal animations
export const modalBackdrop: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitions.short },
  exit: { opacity: 0, transition: transitions.short },
} as const;

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
} as const;

// Exit animations
export const exitAnimations = {
  slideOutLeft: {
    exit: {
      opacity: 0,
      x: -100,
      transition: transitions.short,
    },
  } as Variants,

  slideOutRight: {
    exit: {
      opacity: 0,
      x: 100,
      transition: transitions.short,
    },
  } as Variants,

  zoomOut: {
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: transitions.short,
    },
  } as Variants,
} as const;
