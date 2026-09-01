"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Code2 as Github, MessageCircle as Twitter, Briefcase as Linkedin, ExternalLink } from 'lucide-react';
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/Reveal";
import { BRAND } from "@/lib/data";
type socialLinks = any;
const socialLinks: any = [];
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";

const CONTACT_METHODS = [
  {
    icon: Mail,
    label: "contact.methods.email.label",
    value: BRAND.email,
    href: `mailto:${BRAND.email}`,
  },
  {
    icon: MapPin,
    label: "contact.methods.location.label",
    value: BRAND.location,
    href: null,
  },
];

const SOCIAL_ICON_MAP: Record<string, React.ElementType> = {
  GitHub: Github,
  Twitter: Twitter,
  LinkedIn: Linkedin,
};

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

function validateForm(data: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required";
  else if (data.name.trim().length < 2) errors.name = "Name must be at least 2 characters";
  if (!data.email.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Please enter a valid email";
  if (!data.subject.trim()) errors.subject = "Subject is required";
  else if (data.subject.trim().length < 4) errors.subject = "Subject must be at least 4 characters";
  if (!data.message.trim()) errors.message = "Message is required";
  else if (data.message.trim().length < 20) errors.message = "Message must be at least 20 characters";
  return errors;
}

export default function ContactPage() {
  const t = useTranslations();

  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const newErrors = validateForm({ ...form, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof FormErrors] }));
    }
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const newErrors = validateForm(form);
    setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof FormErrors] }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const allTouched = { name: true, email: true, subject: true, message: true };
    setTouched(allTouched);
    const newErrors = validateForm(form);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    setSubmitting(true);
    await new Promise((res) => setTimeout(res, 1400));
    setSubmitting(false);
    setSubmitted(true);
  }

  function handleReset() {
    setForm({ name: "", email: "", subject: "", message: "" });
    setErrors({});
    setTouched({});
    setSubmitted(false);
  }

  const inputBase =
    "w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] outline-none transition-all duration-200 focus:ring-2 focus:ring-[var(--brand-accent)]/60 focus:border-[var(--brand-accent)]";
  const inputNormal = "border-white/10 hover:border-white/20";
  const inputError = "border-red-500/60 focus:ring-red-500/40 focus:border-red-500";

  return (
    <main className="min-h-screen bg-[var(--background)] pt-28 pb-24">
      {/* Page header */}
      <Reveal>
        <section className="mx-auto max-w-6xl px-6 mb-16 text-center">
          <motion.span
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            className="inline-block mb-4 rounded-full border border-[var(--brand-accent)]/30 bg-[var(--brand-accent)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--brand-accent)]"
          >
            {t("contact.eyebrow")}
          </motion.span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--foreground)] text-balance leading-tight">
            {t("contact.heading")}
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-base sm:text-lg text-[var(--muted-foreground)] leading-relaxed text-pretty">
            {t("contact.subheading")}
          </p>
        </section>
      </Reveal>

      {/* Two-column layout */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">

          {/* LEFT COLUMN — contact info + social + decorative card */}
          <div className="lg:col-span-2 flex flex-col gap-8">

            {/* Decorative animated gradient card */}
            <Reveal>
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[var(--card)] p-8 shadow-[0_2px_4px_rgba(0,0,0,0.08),0_16px_48px_-12px_rgba(0,0,0,0.28)]">
                {/* Animated gradient orb */}
                <motion.div
                  className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-[var(--brand-accent)]/20 blur-3xl"
                  animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-purple-500/15 blur-2xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
                <div className="relative z-10">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-accent)]/15 border border-[var(--brand-accent)]/25">
                    <Mail className="h-5 w-5 text-[var(--brand-accent)]" aria-hidden="true" />
                  </div>
                  <h2 className="text-xl font-bold text-[var(--foreground)] mb-2">
                    {t("contact.card.heading")}
                  </h2>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                    {t("contact.card.body")}
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Contact methods */}
            <Reveal delay={0.08}>
              <div className="flex flex-col gap-4">
                {CONTACT_METHODS.map((method) => {
                  const Icon = method.icon;
                  const inner = (
                    <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-[var(--card)] px-5 py-4 transition-all duration-200 hover:border-[var(--brand-accent)]/30 hover:bg-white/5 shadow-[0_1px_2px_rgba(0,0,0,0.06),0_4px_12px_-4px_rgba(0,0,0,0.18)]">
                      <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-accent)]/10 border border-[var(--brand-accent)]/20">
                        <Icon className="h-4 w-4 text-[var(--brand-accent)]" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-[var(--muted-foreground)]">
                          {t(method.label)}
                        </p>
                        <p className="text-sm font-semibold text-[var(--foreground)] mt-0.5">{method.value}</p>
                      </div>
                      {method.href && (
                        <ExternalLink className="ml-auto h-3.5 w-3.5 text-[var(--muted-foreground)]" aria-hidden="true" />
                      )}
                    </div>
                  );
                  return method.href ? (
                    <a key={method.label} href={method.href} className="block group">
                      {inner}
                    </a>
                  ) : (
                    <div key={method.label}>{inner}</div>
                  );
                })}
              </div>
            </Reveal>

            {/* Social links */}
            <Reveal delay={0.14}>
              <div className="rounded-2xl border border-white/10 bg-[var(--card)] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.06),0_4px_12px_-4px_rgba(0,0,0,0.18)]">
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted-foreground)] mb-4">
                  {t("contact.social.heading")}
                </p>
                <motion.ul
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-col gap-3"
                >
                  {socialLinks.map((link) => {
                    const Icon = SOCIAL_ICON_MAP[link.platform];
                    return (
                      <motion.li key={link.platform} variants={fadeInUp}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-[var(--foreground)] transition-all duration-200 hover:bg-[var(--brand-accent)]/10 hover:text-[var(--brand-accent)] group"
                        >
                          {Icon && (
                            <Icon className="h-4 w-4 text-[var(--muted-foreground)] group-hover:text-[var(--brand-accent)] transition-colors duration-200" aria-hidden="true" />
                          )}
                          <span className="font-medium">{link.platform}</span>
                          <span className="ml-auto text-xs text-[var(--muted-foreground)]">{link.handle}</span>
                        </a>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </div>
            </Reveal>
          </div>

          {/* RIGHT COLUMN — contact form */}
          <div className="lg:col-span-3">
            <Reveal>
              <div className="rounded-2xl border border-white/10 bg-[var(--card)] p-8 sm:p-10 shadow-[0_2px_4px_rgba(0,0,0,0.08),0_16px_48px_-12px_rgba(0,0,0,0.28)]">
                {submitted ? (
                  <motion.div
                    variants={scaleIn}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center justify-center py-12 text-center gap-5"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-500/30">
                      <CheckCircle className="h-8 w-8 text-emerald-400" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">
                        {t("contact.success.heading")}
                      </h3>
                      <p className="text-sm text-[var(--muted-foreground)] leading-relaxed max-w-xs mx-auto">
                        {t("contact.success.body")}
                      </p>
                    </div>
                    <button
                      onClick={handleReset}
                      className="mt-2 rounded-xl border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-medium text-[var(--foreground)] transition-all duration-200 hover:bg-[var(--brand-accent)]/10 hover:border-[var(--brand-accent)]/30 hover:text-[var(--brand-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]"
                    >
                      {t("contact.success.reset")}
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-[var(--foreground)] mb-1">
                        {t("contact.form.heading")}
                      </h2>
                      <p className="text-sm text-[var(--muted-foreground)]">
                        {t("contact.form.subheading")}
                      </p>
                    </div>

                    <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                      {/* Name + Email row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Name */}
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                            {t("contact.form.nameLabel")} <span className="text-red-400">*</span>
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            value={form.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder={t("contact.form.namePlaceholder")}
                            aria-invalid={!!errors.name}
                            aria-describedby={errors.name ? "name-error" : undefined}
                            className={`${inputBase} ${errors.name ? inputError : inputNormal}`}
                          />
                          {errors.name && (
                            <p id="name-error" role="alert" className="flex items-center gap-1.5 text-xs text-red-400 mt-0.5">
                              <AlertCircle className="h-3 w-3 flex-shrink-0" aria-hidden="true" />
                              {errors.name}
                            </p>
                          )}
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                            {t("contact.form.emailLabel")} <span className="text-red-400">*</span>
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            value={form.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder={t("contact.form.emailPlaceholder")}
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? "email-error" : undefined}
                            className={`${inputBase} ${errors.email ? inputError : inputNormal}`}
                          />
                          {errors.email && (
                            <p id="email-error" role="alert" className="flex items-center gap-1.5 text-xs text-red-400 mt-0.5">
                              <AlertCircle className="h-3 w-3 flex-shrink-0" aria-hidden="true" />
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Subject */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                          {t("contact.form.subjectLabel")} <span className="text-red-400">*</span>
                        </label>
                        <input
                          id="subject"
                          name="subject"
                          type="text"
                          value={form.subject}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder={t("contact.form.subjectPlaceholder")}
                          aria-invalid={!!errors.subject}
                          aria-describedby={errors.subject ? "subject-error" : undefined}
                          className={`${inputBase} ${errors.subject ? inputError : inputNormal}`}
                        />
                        {errors.subject && (
                          <p id="subject-error" role="alert" className="flex items-center gap-1.5 text-xs text-red-400 mt-0.5">
                            <AlertCircle className="h-3 w-3 flex-shrink-0" aria-hidden="true" />
                            {errors.subject}
                          </p>
                        )}
                      </div>

                      {/* Message */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                          {t("contact.form.messageLabel")} <span className="text-red-400">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={6}
                          value={form.message}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder={t("contact.form.messagePlaceholder")}
                          aria-invalid={!!errors.message}
                          aria-describedby={errors.message ? "message-error" : undefined}
                          className={`${inputBase} resize-none ${errors.message ? inputError : inputNormal}`}
                        />
                        <div className="flex items-start justify-between gap-2">
                          {errors.message ? (
                            <p id="message-error" role="alert" className="flex items-center gap-1.5 text-xs text-red-400 mt-0.5">
                              <AlertCircle className="h-3 w-3 flex-shrink-0" aria-hidden="true" />
                              {errors.message}
                            </p>
                          ) : (
                            <span />
                          )}
                          <span className="text-xs text-[var(--muted-foreground)] mt-0.5 flex-shrink-0">
                            {form.message.length}/500
                          </span>
                        </div>
                      </div>

                      {/* Submit */}
                      <motion.button
                        type="submit"
                        disabled={submitting}
                        whileHover={{ scale: submitting ? 1 : 1.02 }}
                        whileTap={{ scale: submitting ? 1 : 0.98 }}
                        className="flex items-center justify-center gap-2.5 rounded-xl bg-[var(--brand-accent)] px-8 py-3.5 text-sm font-semibold text-[var(--brand-accent-foreground)] shadow-[0_2px_8px_rgba(0,0,0,0.2)] transition-all duration-200 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {submitting ? (
                          <>
                            <motion.span
                              className="h-4 w-4 rounded-full border-2 border-current border-t-transparent"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                            />
                            {t("contact.form.sending")}
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4" aria-hidden="true" />
                            {t("contact.form.submit")}
                          </>
                        )}
                      </motion.button>

                      <p className="text-xs text-[var(--muted-foreground)] text-center leading-relaxed">
                        {t("contact.form.disclaimer")}
                      </p>
                    </form>
                  </>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}