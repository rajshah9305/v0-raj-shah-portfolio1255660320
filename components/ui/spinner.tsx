"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * Animated loading spinner
 */
export function LoadingSpinner() {
  return (
    <motion.div
      className="flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <svg
        className="w-8 h-8"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.2"
        />
        <motion.circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="2"
          strokeDasharray="31.4"
          initial={{ strokeDashoffset: 0, rotate: 0 }}
          animate={{ strokeDashoffset: -62.8, rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </motion.div>
  );
}
