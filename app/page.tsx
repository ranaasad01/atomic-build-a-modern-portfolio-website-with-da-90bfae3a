"use client";

import { motion, type Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowRight, Code2 as Github, Briefcase as Linkedin, MessageCircle as Twitter, Star, Sparkles, Code, Layout, Terminal, Activity, Mail, MapPin } from 'lucide-react';
import { Reveal } from "@/components/Reveal";
import { BRAND } from "@/lib/data";
type socialLinks = any;
const socialLinks: any = [];
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";

// ─── Inline data ────────────────────────────────────────────────────────────

const FEATURED_PROJECTS = [
  {
    id: "1",
    title: "Pulse Analytics",
    description:
      "Real-time data dashboard for SaaS companies. Tracks user behavior, revenue metrics, and churn signals in a single unified view.",
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/1197ea27bd0149a19004c53a7f4aab29.png",
    tags: ["Next.js", "TypeScript", "Recharts", "Supabase"],
    href: "/projects",
    accent: "from-violet-500/20 to-indigo-500/10",
  },
  {
    id: "2",
    title: "Terrain",
    description:
      "Collaborative 3D world-building tool for game designers. Built with WebGL and a custom node-based scripting engine.",
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/51dcb45747374e0981f0b22ecef72823.jpg",
    tags: ["WebGL", "React", "Node.js", "WebSockets"],
    href: "/projects",
    accent: "from-emerald-500/20 to-teal-500/10",
  },
  {
    id: "3",
    title: "Lumen CMS",
    description:
      "Headless content management system with a visual block editor, multi-locale support, and a GraphQL API.",
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/8ec3f2f9c31d4683a9ae51acc42f4e29.png",
    tags: ["GraphQL", "PostgreSQL", "React", "Rust"],
    href: "/projects",
    accent: "from-amber-500/20 to-orange-500/10",
  },
];

const SERVICES = [
  {
    icon: Layout,
    title: "Product Design",
    description:
      "From wireframes to polished interfaces. I design systems that are both beautiful and deeply functional.",
  },
  {
    icon: Code,
    title: "Full-Stack Engineering",
    description:
      "End-to-end development with React, Next.js, Node.js, and PostgreSQL. Scalable, tested, and maintainable.",
  },
  {
    icon: Terminal,
    title: "Developer Tooling",
    description:
      "CLIs, build pipelines, and internal tools that make engineering teams faster and happier.",
  },
  {
    icon: Activity,
    title: "Performance Audits",
    description:
      "Deep-dive analysis of Core Web Vitals, bundle size, and runtime bottlenecks with actionable fixes.",
  },
];

const TESTIMONIALS = [
  {
    id: "t1",
    quote:
      "Alex shipped our entire design system in six weeks. The quality was exceptional and the documentation made onboarding new engineers effortless.",
    name: "Priya Nair",
    role: "CTO, Fieldwork",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya%20Nair",
  },
  {
    id: "t2",
    quote:
      "Working with Alex felt like having a senior engineer and a product designer in one. He pushed back on bad ideas and delivered great ones.",
    name: "Marcus Webb",
    role: "Founder, Orbit Labs",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus%20Webb",
  },
  {
    id: "t3",
    quote:
      "Our dashboard went from a prototype to production in three months. Alex's attention to detail and communication made the whole process smooth.",
    name: "Sofia Reyes",
    role: "Head of Product, Stackline",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia%20Reyes",
  },
];

const STATS = [
  { value: "8+", label: "Years building" },
  { value: "40+", label: "Projects shipped" },
  { value: "18", label: "Happy clients" },
  { value: "99%", label: "On-time delivery" },
];

const SOCIAL_ICON_MAP: Record<string, React.ElementType> = {
  GitHub: Github,
  Twitter: Twitter,
  LinkedIn: Linkedin,
};

// ─── Hero choreography variants ──────────────────────────────────────────────

const heroHeading: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const heroSub: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.18 },
  },
};

const heroCta: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.34 },
  },
};

const heroGlow: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.1, ease: "easeOut", delay: 0.1 },
  },
};

// ─── Component ───────────────────────────────────────────────────────────────

export default function HomePage() {
  const t = useTranslations();

  return (
    <main className="overflow-x-hidden">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        id="home"
        className="relative min-h-[92vh] flex items-center justify-center px-6 pt-28 pb-20"
      >
        {/* Background glow */}
        <motion.div
          variants={heroGlow}
          initial="hidden"
          animate="visible"
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          aria-hidden="true"
        >
          <div className="h-[520px] w-[520px] rounded-full bg-[var(--brand-accent)]/10 blur-[120px]" />
        </motion.div>

        {/* Subtle grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <motion.div
            variants={heroSub}
            initial="hidden"
            animate="visible"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--brand-accent)]/30 bg-[var(--brand-accent)]/10 px-4 py-1.5 text-sm font-medium text-[var(--brand-accent)]"
          >
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            {t("hero.eyebrow")}
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={heroHeading}
            initial="hidden"
            animate="visible"
            className="text-balance text-5xl font-bold tracking-tight text-[var(--foreground)] sm:text-6xl md:text-7xl"
          >
            {t("hero.heading1")}
            <br />
            <span className="text-[var(--brand-accent)]">
              {t("hero.heading2")}
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={heroSub}
            initial="hidden"
            animate="visible"
            className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-[var(--muted-foreground)]"
          >
            {t("hero.sub")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={heroCta}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--brand-accent)] px-7 py-3 text-sm font-semibold text-[var(--brand-accent-fg)] shadow-[0_0_24px_-4px_var(--brand-accent)] transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_36px_-4px_var(--brand-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]"
            >
              {t("hero.cta.primary")}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-7 py-3 text-sm font-semibold text-[var(--foreground)] transition-all duration-300 hover:border-[var(--brand-accent)]/50 hover:bg-[var(--card)]/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]"
            >
              {t("hero.cta.secondary")}
            </Link>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={heroCta}
            initial="hidden"
            animate="visible"
            className="mt-10 flex items-center justify-center gap-5"
          >
            {socialLinks
              .filter((s) => SOCIAL_ICON_MAP[s.platform])
              .map((s) => {
                const Icon = SOCIAL_ICON_MAP[s.platform];
                return (
                  <a
                    key={s.platform}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.platform}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--muted-foreground)] transition-all duration-200 hover:border-[var(--brand-accent)]/50 hover:text-[var(--brand-accent)]"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                );
              })}
          </motion.div>
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────────────────────── */}
      <Reveal>
        <section
          aria-label={t("stats.label")}
          className="border-y border-[var(--border)] bg-[var(--card)] px-6 py-10"
        >
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-4">
            {STATS.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-bold tracking-tight text-[var(--foreground)]">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* ── Featured Projects ─────────────────────────────────────────────── */}
      <Reveal>
        <section id="projects" className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            {/* Section header */}
            <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[var(--brand-accent)]">
                  {t("projects.eyebrow")}
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
                  {t("projects.heading")}
                </h2>
              </div>
              <Link
                href="/projects"
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-[var(--muted-foreground)] transition-colors hover:text-[var(--brand-accent)]"
              >
                {t("projects.viewAll")}
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>

            {/* Project cards — asymmetric bento */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {FEATURED_PROJECTS.map((project, i) => (
                <motion.div
                  key={project.id}
                  variants={scaleIn}
                  className={`group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-[0_1px_2px_rgba(0,0,0,0.08),0_8px_24px_-8px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_32px_-8px_rgba(0,0,0,0.28)] ${i === 0 ? "md:col-span-2 lg:col-span-1" : ""}`}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.accent}`}
                    />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display =
                          "none";
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-semibold text-[var(--foreground)]">
                      {project.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--muted-foreground)]">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[var(--border)] bg-[var(--background)] px-2.5 py-0.5 text-xs font-medium text-[var(--muted-foreground)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    <Link
                      href={project.href}
                      className="group/link mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--brand-accent)] transition-colors hover:text-[var(--brand-accent)]/80"
                    >
                      {t("projects.caseStudy")}
                      <ArrowRight
                        className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </Reveal>

      {/* ── Services ─────────────────────────────────────────────────────── */}
      <Reveal>
        <section
          id="services"
          className="bg-[var(--card)] px-6 py-24 md:py-32"
        >
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-16 lg:grid-cols-[1fr_1.6fr]">
              {/* Left: copy */}
              <div className="flex flex-col justify-center">
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[var(--brand-accent)]">
                  {t("services.eyebrow")}
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
                  {t("services.heading")}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[var(--muted-foreground)]">
                  {t("services.sub")}
                </p>
                <Link
                  href="/about"
                  className="group mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-[var(--border)] px-6 py-2.5 text-sm font-semibold text-[var(--foreground)] transition-all duration-300 hover:border-[var(--brand-accent)]/50 hover:text-[var(--brand-accent)]"
                >
                  {t("services.cta")}
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>

              {/* Right: service grid */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="grid gap-4 sm:grid-cols-2"
              >
                {SERVICES.map((svc) => {
                  const Icon = svc.icon;
                  return (
                    <motion.div
                      key={svc.title}
                      variants={fadeInUp}
                      className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.06),0_4px_16px_-4px_rgba(0,0,0,0.12)] transition-all duration-300 hover:border-[var(--brand-accent)]/30 hover:shadow-[0_4px_24px_-4px_rgba(0,0,0,0.2)]"
                    >
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-accent)]/10">
                        <Icon
                          className="h-5 w-5 text-[var(--brand-accent)]"
                          aria-hidden="true"
                        />
                      </div>
                      <h3 className="text-base font-semibold text-[var(--foreground)]">
                        {svc.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">
                        {svc.description}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── Testimonials ─────────────────────────────────────────────────── */}
      <Reveal>
        <section id="testimonials" className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[var(--brand-accent)]">
                {t("testimonials.eyebrow")}
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
                {t("testimonials.heading")}
              </h2>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid gap-6 md:grid-cols-3"
            >
              {TESTIMONIALS.map((t_item) => (
                <motion.figure
                  key={t_item.id}
                  variants={fadeInUp}
                  className="flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7 shadow-[0_1px_2px_rgba(0,0,0,0.06),0_8px_24px_-8px_rgba(0,0,0,0.14)]"
                >
                  {/* Stars */}
                  <div className="mb-4 flex gap-1" aria-label="5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-[var(--brand-accent)] text-[var(--brand-accent)]"
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  <blockquote className="flex-1 text-sm leading-relaxed text-[var(--foreground)]">
                    {t_item.quote}
                  </blockquote>

                  <figcaption className="mt-6 flex items-center gap-3">
                    <img
                      src={t_item.avatar}
                      alt={t_item.name}
                      className="h-10 w-10 rounded-full border border-[var(--border)] object-cover"
                      onError={(e) => {
                        const el = e.currentTarget as HTMLImageElement;
                        el.style.display = "none";
                      }}
                    />
                    <div>
                      <p className="text-sm font-semibold text-[var(--foreground)]">
                        {t_item.name}
                      </p>
                      <p className="text-xs text-[var(--muted-foreground)]">
                        {t_item.role}
                      </p>
                    </div>
                  </figcaption>
                </motion.figure>
              ))}
            </motion.div>
          </div>
        </section>
      </Reveal>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <Reveal>
        <section
          id="contact"
          className="px-6 py-24 md:py-32"
        >
          <div className="mx-auto max-w-3xl">
            <div className="relative overflow-hidden rounded-3xl border border-[var(--brand-accent)]/20 bg-[var(--card)] p-12 text-center shadow-[0_1px_2px_rgba(0,0,0,0.06),0_16px_48px_-12px_rgba(0,0,0,0.22)]">
              {/* Glow */}
              <div
                className="pointer-events-none absolute inset-0 flex items-center justify-center"
                aria-hidden="true"
              >
                <div className="h-64 w-64 rounded-full bg-[var(--brand-accent)]/10 blur-[80px]" />
              </div>

              <div className="relative z-10">
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--brand-accent)]">
                  {t("cta.eyebrow")}
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
                  {t("cta.heading")}
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-[var(--muted-foreground)]">
                  {t("cta.sub")}
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-[var(--brand-accent)] px-8 py-3 text-sm font-semibold text-[var(--brand-accent-fg)] shadow-[0_0_24px_-4px_var(--brand-accent)] transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_36px_-4px_var(--brand-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    {t("cta.button")}
                  </Link>
                </div>

                <p className="mt-6 flex items-center justify-center gap-2 text-sm text-[var(--muted-foreground)]">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {BRAND.location}
                </p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}