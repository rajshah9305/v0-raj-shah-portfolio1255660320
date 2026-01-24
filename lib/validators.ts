/**
 * Validation utilities for form handling
 */

const PATTERNS = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
};

export const validators = {
  email: (email: string): boolean => PATTERNS.EMAIL.test(email),
  required: (value: string): boolean => value.trim().length > 0,
  minLength: (value: string, length: number): boolean => value.length >= length,
};
