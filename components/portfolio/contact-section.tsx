"use client";

import React from "react"

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, MapPin, Mail } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/data";
import { slideInLeft, slideInRight, fadeInUp, staggerContainer, transitions } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast-notification";
import { validators } from "@/lib/validators";
import ErrorHandler from "@/lib/error-handler";
import { cn } from "@/lib/utils";

const socialLinks = SOCIAL_LINKS;

export function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { success, error: showError } = useToast();

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!validators.required(formState.name)) {
      newErrors.name = "Name is required";
    }

    if (!validators.email(formState.email)) {
      newErrors.email = "Valid email is required";
    }

    if (!validators.minLength(formState.message, 10)) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      showError("Please fix the errors below");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Success
      success("Message sent successfully! I'll get back to you soon.");
      setFormState({ name: "", email: "", message: "" });
      setErrors({});
    } catch (err) {
      const error = ErrorHandler.unknown(err);
      showError(ErrorHandler.getUserMessage(error));
      if (process.env.NODE_ENV === 'development') {
        console.error('Form submission error:', error);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div ref={containerRef} className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16">
        {/* Left side - Info */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={slideInLeft}
        >
          <p className="subtitle-primary mb-8">
            Every great story deserves a conversation. Whether you want to collaborate
            on an AI project, discuss the future of technology, or just say hello —
            I&apos;d love to hear from you.
          </p>

          {/* Location */}
          <div className="flex items-center gap-3 mb-8 text-foreground">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="font-mono text-sm tracking-normal">Calgary, Alberta, Canada</span>
          </div>

          {/* Social links */}
          <motion.div
            className="space-y-4"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                whileHover={{ x: 10, borderColor: "var(--primary)" }}
                className="group flex items-center gap-4 p-4 bg-card border border-border rounded-lg transition-all duration-300"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-secondary rounded-lg group-hover:bg-primary transition-colors duration-300">
                  <link.icon className="w-5 h-5 text-foreground group-hover:text-background transition-colors duration-300" />
                </div>

                <div>
                  <div className="font-mono text-xs text-foreground mb-0.5 tracking-normal">{link.name}</div>
                  <div className="text-foreground text-base group-hover:text-primary transition-colors">{link.handle}</div>
                </div>
                <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-primary">→</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right side - Form */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: slideInRight.hidden,
            visible: {
              ...slideInRight.visible,
              transition: { ...transitions.default, delay: 0.2 }
            }
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name-input" className="block text-label mb-2.5">
                Name
              </label>
              <input
                id="name-input"
                type="text"
                value={formState.name}
                onChange={(e) => {
                  setFormState(prev => ({ ...prev, name: e.target.value }));
                  if (errors.name) setErrors(prev => ({ ...prev, name: '' }));
                }}
                className={cn(
                  "w-full px-4 py-3.5 bg-card border rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background transition-all",
                  errors.name ? "border-red-500 focus:ring-red-500" : "border-border focus:ring-primary"
                )}
                placeholder="Enter your name"
                required
                aria-required="true"
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email-input" className="block text-label mb-2.5">
                Email
              </label>
              <input
                id="email-input"
                type="email"
                value={formState.email}
                onChange={(e) => {
                  setFormState(prev => ({ ...prev, email: e.target.value }));
                  if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
                }}
                className={cn(
                  "w-full px-4 py-3.5 bg-card border rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background transition-all",
                  errors.email ? "border-red-500 focus:ring-red-500" : "border-border focus:ring-primary"
                )}
                placeholder="your@email.com"
                required
                aria-required="true"
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message-input" className="block text-label mb-2.5">
                Message
              </label>
              <textarea
                id="message-input"
                value={formState.message}
                onChange={(e) => {
                  setFormState(prev => ({ ...prev, message: e.target.value }));
                  if (errors.message) setErrors(prev => ({ ...prev, message: '' }));
                }}
                rows={5}
                className={cn(
                  "w-full px-4 py-3.5 bg-card border rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background transition-all resize-none",
                  errors.message ? "border-red-500 focus:ring-red-500" : "border-border focus:ring-primary"
                )}
                placeholder="What's on your mind?"
                required
                aria-required="true"
              />
              {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              isLoading={isSubmitting}
              loadingText="Sending..."
              icon={isSubmitting ? undefined : <Send className="w-5 h-5" />}
              disabled={isSubmitting}
            >
              Send Message
            </Button>
          </form>
        </motion.div>
      </div >
    </div >
  );
}
