"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, AlertCircle, Info, X } from "lucide-react";

export type ToastType = "success" | "error" | "info" | "warning";

export interface Toast {
  id: string;
  message: string;
  type: ToastType;
  duration?: number;
}

interface ToastNotificationProps {
  toast: Toast;
  onClose: (id: string) => void;
}

const toastConfig: Record<ToastType, { bgColor: string; icon: React.ReactNode; textColor: string }> = {
  success: {
    bgColor: "bg-green-500/10",
    icon: <Check className="w-5 h-5 text-green-500" />,
    textColor: "text-green-100",
  },
  error: {
    bgColor: "bg-red-500/10",
    icon: <AlertCircle className="w-5 h-5 text-red-500" />,
    textColor: "text-red-100",
  },
  info: {
    bgColor: "bg-blue-500/10",
    icon: <Info className="w-5 h-5 text-blue-500" />,
    textColor: "text-blue-100",
  },
  warning: {
    bgColor: "bg-yellow-500/10",
    icon: <AlertCircle className="w-5 h-5 text-yellow-500" />,
    textColor: "text-yellow-100",
  },
};

function ToastNotification({ toast, onClose }: ToastNotificationProps) {
  const config = toastConfig[toast.type];

  useEffect(() => {
    if (toast.duration !== Infinity) {
      const timer = setTimeout(() => onClose(toast.id), toast.duration || 4000);
      return () => clearTimeout(timer);
    }
  }, [toast.id, toast.duration, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, x: 20 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      exit={{ opacity: 0, y: -20, x: 20 }}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg border border-white/10 ${config.bgColor} backdrop-blur-md`}
    >
      {config.icon}
      <p className={`text-sm font-medium ${config.textColor}`}>{toast.message}</p>
      <button
        onClick={() => onClose(toast.id)}
        className="ml-auto p-1 hover:bg-white/10 rounded transition-colors"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  );
}

/**
 * Toast Container Component
 * Use in layout or page wrapper
 */
interface ToastContainerProps {
  toasts: Toast[];
  onClose: (id: string) => void;
}

export function ToastContainer({ toasts, onClose }: ToastContainerProps) {
  return (
    <div className="fixed top-6 right-6 z-50 space-y-3 pointer-events-none">
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <div key={toast.id} className="pointer-events-auto">
            <ToastNotification toast={toast} onClose={onClose} />
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
}

/**
 * Hook for managing toasts
 */
export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (message: string, type: ToastType = "info", duration = 4000) => {
    const id = `${Date.now()}-${Math.random()}`;
    setToasts((prev) => [...prev, { id, message, type, duration }]);
    return id;
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const success = (message: string) => addToast(message, "success");
  const error = (message: string) => addToast(message, "error");
  const info = (message: string) => addToast(message, "info");
  const warning = (message: string) => addToast(message, "warning");

  return {
    toasts,
    addToast,
    removeToast,
    success,
    error,
    info,
    warning,
  };
}
