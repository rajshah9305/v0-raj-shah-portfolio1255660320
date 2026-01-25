"use client";

import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { LoadingSpinner } from "./spinner";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  loadingText?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  asChild?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary hover:bg-primary/90 text-background font-semibold shadow-lg shadow-primary/20",
  secondary:
    "bg-secondary hover:bg-secondary/80 text-foreground border border-border",
  ghost:
    "hover:bg-white/10 text-foreground",
  outline:
    "border-2 border-foreground text-foreground hover:bg-foreground/10",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm rounded-md",
  md: "px-4 py-2.5 text-base rounded-lg",
  lg: "px-6 py-3.5 text-lg rounded-lg",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading = false,
      loadingText,
      icon,
      iconPosition = "left",
      fullWidth = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={disabled || isLoading}
        className={cn(
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && "w-full",
          "inline-flex items-center justify-center gap-2",
          "font-mono tracking-normal",
          "transition-all duration-300",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
        )}
        {...(props as any)}
      >
        {isLoading ? (
          <>
            <LoadingSpinner />
            {loadingText && <span>{loadingText}</span>}
          </>
        ) : (
          <>
            {icon && iconPosition === "left" && <span>{icon}</span>}
            {children}
            {icon && iconPosition === "right" && <span>{icon}</span>}
          </>
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button };
