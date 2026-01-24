"use client";

import React from "react";
import { motion } from "framer-motion";

interface LoadingSkeletonProps {
  count?: number;
  type?: "card" | "text" | "avatar" | "line";
  className?: string;
}

export function LoadingSkeleton({
  count = 1,
  type = "card",
  className = "",
}: LoadingSkeletonProps) {
  const shimmerAnimation = {
    initial: { backgroundPosition: "200% 0" },
    animate: { backgroundPosition: "-200% 0" },
    transition: { duration: 2, repeat: Infinity as any, ease: "linear" as any },
  };

  const renderSkeleton = () => {
    switch (type) {
      case "avatar":
        return (
          <motion.div
            {...shimmerAnimation}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-card via-border to-card"
            style={{ backgroundSize: "200% 100%" }}
          />
        );

      case "text":
        return (
          <motion.div
            {...shimmerAnimation}
            className="w-full h-4 rounded-md bg-gradient-to-r from-card via-border to-card"
            style={{ backgroundSize: "200% 100%" }}
          />
        );

      case "line":
        return (
          <motion.div
            {...shimmerAnimation}
            className="w-full h-2 rounded-full bg-gradient-to-r from-card via-border to-card"
            style={{ backgroundSize: "200% 100%" }}
          />
        );

      case "card":
      default:
        return (
          <motion.div
            className="w-full h-64 rounded-lg bg-card border border-border overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              {...shimmerAnimation}
              className="w-full h-full bg-gradient-to-r from-card via-border to-card"
              style={{ backgroundSize: "200% 100%" }}
            />
          </motion.div>
        );
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index}>{renderSkeleton()}</div>
      ))}
    </div>
  );
}

/**
 * Premium loading spinner
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
