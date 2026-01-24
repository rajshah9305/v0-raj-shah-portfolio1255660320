"use client";

import React from "react";
import { motion } from "framer-motion";

type BadgeVariant = "default" | "success" | "error" | "warning" | "info" | "primary";
type BadgeSize = "sm" | "md" | "lg";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  icon?: React.ReactNode;
  animated?: boolean;
  children: React.ReactNode;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-white/10 text-foreground",
  success: "bg-green-500/10 text-green-100 border border-green-500/30",
  error: "bg-red-500/10 text-red-100 border border-red-500/30",
  warning: "bg-yellow-500/10 text-yellow-100 border border-yellow-500/30",
  info: "bg-blue-500/10 text-blue-100 border border-blue-500/30",
  primary: "bg-primary/10 text-primary border border-primary/30",
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: "px-2 py-1 text-xs rounded-md",
  md: "px-3 py-1.5 text-sm rounded-lg",
  lg: "px-4 py-2 text-base rounded-lg",
};

export function Badge({
  variant = "default",
  size = "md",
  icon,
  animated = false,
  children,
  className = "",
  ...props
}: BadgeProps) {
  const badgeContent = (
    <div
      className={`
        inline-flex items-center justify-center gap-2 font-mono font-medium tracking-normal
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
        backdrop-blur-sm
      `}
      {...props}
    >
      {icon && <span>{icon}</span>}
      {children}
    </div>
  );

  return animated ? (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {badgeContent}
    </motion.div>
  ) : (
    badgeContent
  );
}

/**
 * Status Badge Component
 */
interface StatusBadgeProps {
  status: "active" | "inactive" | "pending" | "completed";
  label?: string;
}

export function StatusBadge({ status, label }: StatusBadgeProps) {
  const statusConfig = {
    active: { color: "text-green-400", bgColor: "bg-green-500/10", pulse: true },
    inactive: { color: "text-gray-400", bgColor: "bg-gray-500/10", pulse: false },
    pending: { color: "text-yellow-400", bgColor: "bg-yellow-500/10", pulse: true },
    completed: { color: "text-blue-400", bgColor: "bg-blue-500/10", pulse: false },
  };

  const config = statusConfig[status];

  return (
    <div className={`flex items-center gap-2 ${config.bgColor} px-3 py-1.5 rounded-lg`}>
      <motion.div
        className={`w-2 h-2 rounded-full ${config.color.replace("text", "bg")}`}
        animate={config.pulse ? { opacity: [1, 0.5, 1] } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <span className={`text-sm font-mono ${config.color}`}>
        {label || status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    </div>
  );
}

/**
 * Tag Component
 */
interface TagProps {
  label: string;
  onRemove?: () => void;
  variant?: "default" | "tech" | "category";
}

export function Tag({ label, onRemove, variant = "default" }: TagProps) {
  const variantClass = {
    default: "bg-white/5 text-foreground",
    tech: "bg-blue-500/10 text-blue-100",
    category: "bg-purple-500/10 text-purple-100",
  }[variant];

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-mono ${variantClass}`}
    >
      {label}
      {onRemove && (
        <button
          onClick={onRemove}
          className="ml-1 hover:text-red-400 transition-colors"
          aria-label={`Remove ${label}`}
        >
          ×
        </button>
      )}
    </motion.div>
  );
}
