"use client";

import { motion, type Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { MapPin, Mail, Calendar, ExternalLink, Code2 as Github, MessageCircle as Twitter, Briefcase as Linkedin } from 'lucide-react';
import { BRAND } from "@/lib/data";
type socialLinks = any;
const socialLinks: any = [];
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/motion";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

const EXPERIENCE = [
  {
    role: "Senior Full-Stack Engineer",
    company: "Vercel",
    period: "2022 — Present",
    description:
      "Leading frontend infrastructure for the Edge Network dashboard. Built real-time deployment pipelines and improved core web vitals across the platform by 40%.",
    tags: ["Next.js", "TypeScript", "Rust", "Edge Functions"],
  },
  {
    role: "Software Engineer",
    company: "Stripe",
    period: "2020 — 2022",
    description:
      "Developed payment flow components used by millions of merchants globally. Owned the Radar fraud-detection UI and reduced false-positive rates through better data visualization.",
    tags: ["React", "Go", "GraphQL", "D3.js"],
  },
  {
    role: "Frontend Engineer",
    company: "Linear",
    period: "2019 — 2020",
    description:
      "Joined as an early engineer and helped ship the first public release. Designed and built the keyboard-shortcut system and the real-time collaborative issue editor.",
    tags: ["React", "Electron", "WebSockets", "Figma"],
  },
  {
    role: "Junior Developer",
    company: "Freelance",
    period: "2017 — 2019",
    description:
      "Delivered 20+ client projects spanning e-commerce, SaaS dashboards, and marketing sites. Specialized in performance optimization and accessible UI patterns.",
    tags: ["Vue.js", "Node.js", "Shopify", "WordPress"],
  },
];

const SKILL_CATEGORIES = [
  {
    category: "Frontend",
    skills: [
      { name: "React / Next.js", level: 97 },
      { name: "TypeScript", level: 94 },
      { name: "CSS / Tailwind", level: 92 },
      { name: "Framer Motion", level: 85 },
      { name: "Three.js / WebGL", level: 70 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Go", level: 78 },
      { name: "PostgreSQL", level: 85 },
      { name: "Redis", level: 80 },
      { name: "GraphQL", level: 82 },
    ],
  },
  {
    category: "Infrastructure",
    skills: [
      { name: "Vercel / Edge", level: 95 },
      { name: "AWS", level: 75 },
      { name: "Docker", level: 80 },
      { name: "CI/CD Pipelines", level: 85 },
      { name: "Terraform", level: 65 },
    ],
  },
  {
    category: "Design",
    skills: [
      { name: "Figma", level: 88 },
      { name: "Design Systems", level: 90 },
      { name: "Motion Design", level: 78 },
      { name: "Brand Identity", level: 72 },
      { name: "Accessibility", level: 93 },
    ],
  },
];

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  GitHub: <Github className="h-5 w-5" aria-hidden="true" />,
  Twitter: <Twitter className="h-5 w-5" aria-hidden="true" />,
  LinkedIn: <Linkedin className="h-5 w-5" aria-hidden="true" />,
  Dribbble: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" />
    </svg>
  ),
};

const barVariant: Variants = {
  hidden: { scaleX: 0 },
  visible: (level: number) => ({
    scaleX: level / 100,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.1 },
  }),
};

export default function AboutPage() {
  const t = useTranslations();

  return (
    <main className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      {/* ── Hero / Bio Split ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-[hsl(var(--border))] py-24 md:py-32">
        {/* Subtle radial glow */}
        <div
          className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(ellipse at center, var(--accent) 0%, transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2"
          >
            {/* Left — Avatar */}
            <motion.div variants={slideInLeft} className="flex justify-center lg:justify-start">
              <div className="relative">
                {/* Accent ring */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[var(--accent)] to-transparent opacity-60 blur-sm" />
                <div className="relative h-56 w-56 overflow-hidden rounded-full border-2 border-[hsl(var(--border))] bg-[hsl(var(--card))] md:h-72 md:w-72">
                  <img
                    src="https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/7962ee5ccfab4fc1ae3e182cef243988.jpg"
                    alt={t("about.bio.avatarAlt")}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML =
                          '<div class="flex h-full w-full items-center justify-center text-6xl font-bold text-[var(--accent)]">AM</div>';
                      }
                    }}
                  />
                </div>
                {/* Status badge */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card))] px-4 py-1.5 text-xs font-medium text-[hsl(var(--foreground))] shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
                  <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-emerald-400" />
                  {t("about.bio.status")}
                </div>
              </div>
            </motion.div>

            {/* Right — Bio text */}
            <motion.div variants={slideInRight} className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
                  {t("about.bio.eyebrow")}
                </p>
                <h1 className="text-4xl font-bold tracking-tight text-[hsl(var(--foreground))] md:text-5xl">
                  {t("about.bio.heading")}
                </h1>
              </div>

              <p className="text-lg leading-relaxed text-[hsl(var(--muted-foreground))]">
                {t("about.bio.paragraph1")}
              </p>
              <p className="leading-relaxed text-[hsl(var(--muted-foreground))]">
                {t("about.bio.paragraph2")}
              </p>

              {/* Meta row */}
              <div className="flex flex-wrap gap-4 pt-2 text-sm text-[hsl(var(--muted-foreground))]">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
                  {BRAND.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
                  {BRAND.email}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
                  {t("about.bio.yearsExp")}
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Experience Timeline ───────────────────────────────────────── */}
      <Reveal>
        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-16">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
                {t("about.experience.eyebrow")}
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-[hsl(var(--foreground))] md:text-4xl">
                {t("about.experience.heading")}
              </h2>
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-[var(--accent)] via-[hsl(var(--border))] to-transparent md:block" />

              <div className="space-y-12">
                {EXPERIENCE.map((exp, i) => (
                  <Reveal key={exp.company} delay={i * 0.08}>
                    <div className="group relative grid grid-cols-1 gap-6 md:grid-cols-[200px_1fr] md:pl-10">
                      {/* Timeline dot */}
                      <div className="absolute -left-[5px] top-1.5 hidden h-2.5 w-2.5 rounded-full border-2 border-[var(--accent)] bg-[hsl(var(--background))] transition-all duration-300 group-hover:scale-150 group-hover:bg-[var(--accent)] md:block" />

                      {/* Period */}
                      <div className="flex items-start gap-2 md:flex-col md:gap-0">
                        <span className="text-sm font-semibold text-[var(--accent)]">
                          {exp.period}
                        </span>
                      </div>

                      {/* Content card */}
                      <div className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.08),0_8px_24px_-8px_rgba(0,0,0,0.2)] transition-all duration-300 group-hover:border-[var(--accent)]/40 group-hover:shadow-[0_4px_32px_-8px_rgba(0,0,0,0.3)]">
                        <div className="mb-3">
                          <h3 className="text-lg font-bold text-[hsl(var(--foreground))]">
                            {exp.role}
                          </h3>
                          <p className="text-sm font-medium text-[var(--accent)]">{exp.company}</p>
                        </div>
                        <p className="mb-4 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                          {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--background))] px-3 py-0.5 text-xs font-medium text-[hsl(var(--muted-foreground))]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── Skills Grid ──────────────────────────────────────────────── */}
      <Reveal>
        <section className="border-t border-[hsl(var(--border))] bg-[hsl(var(--card))] py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-16">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
                {t("about.skills.eyebrow")}
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-[hsl(var(--foreground))] md:text-4xl">
                {t("about.skills.heading")}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
              {SKILL_CATEGORIES.map((cat, ci) => (
                <Reveal key={cat.category} delay={ci * 0.1}>
                  <div className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.06),0_8px_24px_-8px_rgba(0,0,0,0.15)]">
                    <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-[var(--accent)]">
                      {cat.category}
                    </h3>
                    <div className="space-y-4">
                      {cat.skills.map((skill) => (
                        <div key={skill.name}>
                          <div className="mb-1.5 flex items-center justify-between">
                            <span className="text-sm font-medium text-[hsl(var(--foreground))]">
                              {skill.name}
                            </span>
                            <span className="text-xs text-[hsl(var(--muted-foreground))]">
                              {skill.level}%
                            </span>
                          </div>
                          {/* Bar track */}
                          <div className="h-1.5 w-full overflow-hidden rounded-full bg-[hsl(var(--border))]">
                            <motion.div
                              className="h-full origin-left rounded-full bg-[var(--accent)]"
                              variants={barVariant}
                              custom={skill.level}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true, margin: "-40px" }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── Social Links Row ─────────────────────────────────────────── */}
      <Reveal>
        <section className="border-t border-[hsl(var(--border))] py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
              {t("about.social.eyebrow")}
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-[hsl(var(--foreground))] md:text-4xl">
              {t("about.social.heading")}
            </h2>
            <p className="mx-auto mb-12 max-w-xl text-[hsl(var(--muted-foreground))]">
              {t("about.social.subheading")}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.platform}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.platform}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-3 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] px-6 py-4 text-sm font-medium text-[hsl(var(--foreground))] shadow-[0_1px_2px_rgba(0,0,0,0.06),0_4px_16px_-4px_rgba(0,0,0,0.15)] transition-colors duration-200 hover:border-[var(--accent)]/50 hover:text-[var(--accent)]"
                >
                  {SOCIAL_ICONS[link.platform] ?? (
                    <ExternalLink className="h-5 w-5" aria-hidden="true" />
                  )}
                  <span>{link.platform}</span>
                  <span className="text-xs text-[hsl(var(--muted-foreground))]">
                    {link.handle}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}