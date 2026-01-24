/**
 * Application Constants
 * Centralized configuration for the entire application
 */

// Animation timings (ms)
export const ANIMATION_TIMINGS = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500,
  DELAY_SHORT: 100,
  DELAY_MEDIUM: 200,
  DELAY_LONG: 400,
} as const;

// Z-index scale (enterprise-grade layering)
export const Z_INDEX = {
  BASE: 0,
  DROPDOWN: 10,
  STICKY: 20,
  FIXED: 30,
  MODAL_BACKDROP: 40,
  MODAL: 50,
  TOOLTIP: 60,
  NOTIFICATION: 70,
  DEBUGGER: 9999,
} as const;

// Breakpoints (mobile-first)
export const BREAKPOINTS = {
  xs: 320,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// Color palette (enterprise theme)
export const COLORS = {
  primary: '#e07a3c',
  primaryLight: '#f4a261',
  background: '#0d0d0d',
  card: '#1a1a1a',
  border: '#333333',
  foreground: '#faf6f1',
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
} as const;

// API response statuses
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
} as const;

// Local storage keys
export const STORAGE_KEYS = {
  THEME: 'raj-portfolio-theme',
  PREFERENCES: 'raj-portfolio-preferences',
  ANALYTICS: 'raj-portfolio-analytics',
} as const;

// Feature flags
export const FEATURES = {
  DARK_MODE: true,
  ANIMATIONS: true,
  ANALYTICS: true,
  ERROR_REPORTING: true,
} as const;

// Validation patterns
export const VALIDATION = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  URL: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
  PHONE: /^[\d\s\-\+\(\)]{10,}$/,
} as const;

// Message templates
export const MESSAGES = {
  FORM: {
    REQUIRED: 'This field is required',
    INVALID_EMAIL: 'Please enter a valid email address',
    INVALID_URL: 'Please enter a valid URL',
    SUCCESS: 'Message sent successfully!',
    ERROR: 'Failed to send message. Please try again.',
  },
  API: {
    LOADING: 'Loading...',
    ERROR: 'An error occurred. Please try again.',
    NO_DATA: 'No data available',
  },
} as const;

// Cache configuration
export const CACHE = {
  TTL_SHORT: 5 * 60 * 1000, // 5 minutes
  TTL_MEDIUM: 30 * 60 * 1000, // 30 minutes
  TTL_LONG: 24 * 60 * 60 * 1000, // 24 hours
} as const;

// Performance thresholds
export const PERF_THRESHOLD = {
  FCP: 1800, // First Contentful Paint (ms)
  LCP: 2500, // Largest Contentful Paint (ms)
  CLS: 0.1, // Cumulative Layout Shift
  FID: 100, // First Input Delay (ms)
} as const;
