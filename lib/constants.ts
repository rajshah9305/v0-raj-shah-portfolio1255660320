/**
 * Application Constants
 */

// Color palette
export const COLORS = {
  primary: "#e07a3c",
  background: "#0d0d0d",
  card: "#1a1a1a",
  border: "#333333",
  foreground: "#faf6f1",
} as const;

// Breakpoints (mobile-first)
export const BREAKPOINTS = {
  xs: 320,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

// Message templates
export const MESSAGES = {
  FORM_SUCCESS: "Message sent successfully!",
  FORM_ERROR: "Failed to send message. Please try again.",
  LOADING: "Loading...",
  ERROR: "An error occurred. Please try again.",
} as const;
