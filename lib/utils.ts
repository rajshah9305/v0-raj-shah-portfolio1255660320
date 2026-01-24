/**
 * Utility Functions
 * Common utilities for the entire application
 */

import { VALIDATION, COLORS } from './constants';

/**
 * Validation utilities
 */
export const validators = {
  email: (email: string): boolean => VALIDATION.EMAIL.test(email),
  url: (url: string): boolean => VALIDATION.URL.test(url),
  phone: (phone: string): boolean => VALIDATION.PHONE.test(phone),
  required: (value: string): boolean => value.trim().length > 0,
  minLength: (value: string, length: number): boolean => value.length >= length,
  maxLength: (value: string, length: number): boolean => value.length <= length,
};

/**
 * Format utilities
 */
export const formatters = {
  /**
   * Format date to readable string
   */
  date: (date: Date | string, locale = 'en-US'): string => {
    return new Date(date).toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  },

  /**
   * Format date and time
   */
  dateTime: (date: Date | string, locale = 'en-US'): string => {
    return new Date(date).toLocaleString(locale, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  },

  /**
   * Format number with commas
   */
  number: (num: number, decimals = 0): string => {
    return num.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },

  /**
   * Format bytes to human readable
   */
  bytes: (bytes: number): string => {
    const units = ['B', 'KB', 'MB', 'GB'];
    let size = bytes;
    let unitIndex = 0;

    while (size >= 1024 && unitIndex < units.length - 1) {
      size /= 1024;
      unitIndex++;
    }

    return `${size.toFixed(2)} ${units[unitIndex]}`;
  },

  /**
   * Format duration (ms to readable time)
   */
  duration: (ms: number): string => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    if (hours > 0) return `${hours}h ${minutes % 60}m`;
    if (minutes > 0) return `${minutes}m ${seconds % 60}s`;
    return `${seconds}s`;
  },
};

/**
 * DOM utilities
 */
export const dom = {
  /**
   * Scroll to element smoothly
   */
  scrollToElement: (elementId: string, offset = 80): void => {
    const element = document.getElementById(elementId);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  },

  /**
   * Check if element is in viewport
   */
  isInViewport: (element: Element): boolean => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top < window.innerHeight &&
      rect.bottom > 0 &&
      rect.left < window.innerWidth &&
      rect.right > 0
    );
  },

  /**
   * Copy text to clipboard
   */
  copyToClipboard: async (text: string): Promise<boolean> => {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      return false;
    }
  },

  /**
   * Get scroll position
   */
  getScrollPosition: (): number => window.scrollY || document.documentElement.scrollTop,

  /**
   * Is mobile device
   */
  isMobile: (): boolean => {
    return typeof window !== 'undefined' && window.innerWidth < 768;
  },
};

/**
 * String utilities
 */
export const strings = {
  /**
   * Capitalize first letter
   */
  capitalize: (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  },

  /**
   * Convert to kebab case
   */
  toKebabCase: (str: string): string => {
    return str
      .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2')
      .toLowerCase();
  },

  /**
   * Convert to camel case
   */
  toCamelCase: (str: string): string => {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
        index === 0 ? word.toLowerCase() : word.toUpperCase()
      )
      .replace(/\s+/g, '');
  },

  /**
   * Truncate string
   */
  truncate: (str: string, length: number): string => {
    return str.length > length ? str.substring(0, length) + '...' : str;
  },

  /**
   * Generate slug
   */
  slug: (str: string): string => {
    return str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_]+/g, '-')
      .replace(/^-+|-+$/g, '');
  },
};

/**
 * Array utilities
 */
export const arrays = {
  /**
   * Chunk array into smaller arrays
   */
  chunk: <T,>(array: T[], size: number): T[][] => {
    const chunks: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  },

  /**
   * Remove duplicates
   */
  unique: <T,>(array: T[]): T[] => [...new Set(array)],

  /**
   * Flatten array
   */
  flatten: <T,>(array: any[]): T[] => {
    return array.reduce((acc: T[], val: any) => {
      return Array.isArray(val) ? acc.concat(arrays.flatten(val)) : acc.concat([val]);
    }, []);
  },

  /**
   * Shuffle array
   */
  shuffle: <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  },
};

/**
 * Object utilities
 */
export const objects = {
  /**
   * Deep clone object
   */
  clone: <T,>(obj: T): T => JSON.parse(JSON.stringify(obj)),

  /**
   * Deep merge objects
   */
  merge: <T extends Record<string, any>>(target: T, source: Partial<T>): T => {
    const result = { ...target };
    for (const key in source) {
      const sourceValue = source[key];
      const targetValue = result[key];

      if (sourceValue && typeof sourceValue === 'object' && !Array.isArray(sourceValue)) {
        result[key] = objects.merge(targetValue || {} as T, sourceValue as T) as any;
      } else {
        result[key] = sourceValue as any;
      }
    }
    return result;
  },

  /**
   * Pick specific keys from object
   */
  pick: <T extends Record<string, any>, K extends keyof T>(
    obj: T,
    keys: K[]
  ): Pick<T, K> => {
    const result: any = {};
    keys.forEach((key) => {
      result[key] = obj[key];
    });
    return result;
  },

  /**
   * Omit specific keys from object
   */
  omit: <T extends Record<string, any>, K extends keyof T>(
    obj: T,
    keys: K[]
  ): Omit<T, K> => {
    const result = { ...obj };
    keys.forEach((key) => {
      delete result[key];
    });
    return result;
  },
};

/**
 * Color utilities
 */
export const colors = {
  /**
   * Check if color is dark
   */
  isDark: (color: string): boolean => {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance < 0.5;
  },

  /**
   * Lighten color
   */
  lighten: (color: string, amount: number): string => {
    const usePound = color[0] === '#';
    const col = usePound ? color.slice(1) : color;
    const num = parseInt(col, 16);
    const r = Math.min(255, (num >> 16) + amount);
    const g = Math.min(255, ((num >> 8) & 0x00ff) + amount);
    const b = Math.min(255, (num & 0x0000ff) + amount);
    return (usePound ? '#' : '') + (0x1000000 + r * 0x10000 + g * 0x100 + b).toString(16).slice(1);
  },

  /**
   * Darken color
   */
  darken: (color: string, amount: number): string => {
    return colors.lighten(color, -amount);
  },
};

/**
 * Performance utilities
 */
export const performance = {
  /**
   * Debounce function
   */
  debounce: <T extends (...args: any[]) => any>(func: T, wait: number): ((...args: Parameters<T>) => void) => {
    let timeout: NodeJS.Timeout | null = null;
    return (...args: Parameters<T>) => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  },

  /**
   * Throttle function
   */
  throttle: <T extends (...args: any[]) => any>(func: T, limit: number): ((...args: Parameters<T>) => void) => {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  },

  /**
   * Memoize function
   */
  memoize: <T extends (...args: any[]) => any>(func: T): T => {
    const cache = new Map();
    return ((...args: Parameters<T>) => {
      const key = JSON.stringify(args);
      if (cache.has(key)) return cache.get(key);
      const result = func(...args);
      cache.set(key, result);
      return result;
    }) as T;
  },

  /**
   * Wait for condition
   */
  waitFor: async (condition: () => boolean, timeout = 5000): Promise<boolean> => {
    const startTime = Date.now();
    while (!condition()) {
      if (Date.now() - startTime > timeout) return false;
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    return true;
  },
};
