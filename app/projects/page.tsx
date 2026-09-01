"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowRight, ExternalLink, Code2 as Github, Eye } from 'lucide-react';
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/motion";

const PROJECTS = [
  {
    id: "1",
    title: "Horizon Dashboard",
    description: "A real-time analytics platform for SaaS businesses. Tracks revenue, churn, and user growth with interactive charts and customizable widgets.",
    image: "https://picsum.photos/seed/bf3f3b63c3b8/800/600",
    tags: ["Web", "React", "TypeScript", "Recharts", "Tailwind"],
    filter: "Web",
    featured: true,
    github: "https://github.com/alexmorris",
    live: "https://horizon.alexmorris.dev",
  },
  {
    id: "2",
    title: "Pulse Mobile",
    description: "A health and wellness tracking app for iOS and Android. Monitors sleep, activity, and nutrition with AI-powered insights and personalized goals.",
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/f1e38dd917934ea89444992ae06b5610.png",
    tags: ["Mobile", "React Native", "Expo", "Node.js"],
    filter: "Mobile",
    featured: true,
    github: "https://github.com/alexmorris",
    live: "https://pulse.alexmorris.dev",
  },
  {
    id: "3",
    title: "Forma Design System",
    description: "A comprehensive component library and design system built for scale. Includes 80+ components, dark mode support, and full accessibility compliance.",
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/8e718d34f1864261831ae7c07936d408.png",
    tags: ["Design", "Figma", "Storybook", "CSS"],
    filter: "Design",
    featured: false,
    github: "https://github.com/alexmorris",
    live: "https://forma.alexmorris.dev",
  },
  {
    id: "4",
    title: "Relay Messaging",
    description: "End-to-end encrypted messaging platform with real-time delivery, read receipts, and group channels. Built for teams that value privacy.",
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/669e4283bc05418ea1fb5252a619209d.jpg",
    tags: ["Web", "Next.js", "WebSockets", "PostgreSQL"],
    filter: "Web",
    featured: false,
    github: "https://github.com/alexmorris",
    live: "https://relay.alexmorris.dev",
  },
  {
    id: "5",
    title: "Wayfinder Travel",
    description: "A trip planning app that generates personalized itineraries using AI. Integrates with maps, booking APIs, and local event data.",
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/5605a49b7156405a9e31d8edd3513b8f.jpg",
    tags: ["Mobile", "Flutter", "Dart", "Firebase"],
    filter: "Mobile",
    featured: false,
    github: "https://github.com/alexmorris",
    live: "https://wayfinder.alexmorris.dev",
  },
  {
    id: "6",
    title: "Slate Brand Identity",
    description: "Full brand identity design for a fintech startup. Covers logo, typography, color system, motion guidelines, and a 60-page brand book.",
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/8292160d9d2946feb14ac9b7c1203fe1.jpg",
    tags: ["Design", "Figma", "Illustrator", "Branding"],
    filter: "Design",
    featured: false,
    github: "https://github.com/alexmorris",
    live: "https://slate.alexmorris.dev",
  },
  {
    id: "7",
    title: "Cartographer Maps",
    description: "An open-source mapping library for React with support for custom tile layers, GeoJSON overlays, and smooth pan/zoom animations.",
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/232e3e726748483dafcf1f3a419efe49.jpg",
    tags: ["Web", "TypeScript", "Canvas API", "Open Source"],
    filter: "Web",
    featured: false,
    github: "https://github.com/alexmorris",
    live: "https://cartographer.alexmorris.dev",
  },
  {
    id: "8",
    title: "Bloom E-Commerce",
    description: "A full-stack e-commerce platform for a sustainable fashion brand. Features product filtering, cart, Stripe checkout, and an admin dashboard.",
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/4d4673d0bd8e4bbb99b55b15d608cd42.jpg",
    tags: ["Web", "Next.js", "Stripe", "Prisma"],
    filter: "Web",
    featured: true,
    github: "https://github.com/alexmorris",
    live: "https://bloom.alexmorris.dev",
  },
  {
    id: "9",
    title: "Orbit UI Kit",
    description: "A Figma UI kit with 200+ components, auto-layout grids, and a token-based theming system. Used by 1,200+ designers worldwide.",
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/c5e7054995244d03a493f9224e7f14e7.png",
    tags: ["Design", "Figma", "UI Kit", "Tokens"],
    filter: "Design",
    featured: false,
    github: "https://github.com/alexmorris",
    live: "https://orbit.alexmorris.dev",
  },
];

const FILTERS = ["All", "Web", "Mobile", "Design"] as const;
type Filter = (typeof FILTERS)[number];

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25, ease: "easeOut" } },
};

const overlayContentVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.28, ease: "easeOut", delay: 0.05 } },
};

interface ProjectCardProps {
  project: (typeof PROJECTS)[number];
  index: number;
  t: ReturnType<typeof useTranslations>;
}

function ProjectCard({ project, index, t }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Reveal delay={index * 0.07}>
      <motion.article
        className={cn(
          "group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm",
          "shadow-[0_1px_2px_rgba(0,0,0,0.2),0_8px_24px_-8px_rgba(0,0,0,0.4)]",
          "transition-all duration-300 ease-out",
          project.featured && "ring-1 ring-[var(--accent)]/30",
        )}
        whileHover={{ y: -4, scale: 1.01 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        {project.featured && (
          <span className="absolute left-3 top-3 z-20 rounded-full bg-[var(--accent)] px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-black">
            {t("projects.featured")}
          </span>
        )}

        <div className="relative aspect-[16/10] w-full overflow-hidden bg-white/5">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />

          <AnimatePresence>
            {hovered && (
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/70 backdrop-blur-sm"
                variants={overlayVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <motion.div
                  className="flex flex-col items-center gap-3"
                  variants={overlayContentVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2 text-sm font-semibold text-black transition-opacity hover:opacity-90"
                  >
                    <Eye className="h-4 w-4" aria-hidden="true" />
                    {t("projects.viewProject")}
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                    {t("projects.viewCode")}
                  </a>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex flex-1 flex-col gap-3 p-5">
          <h3 className="text-base font-semibold leading-snug tracking-tight text-white">
            {project.title}
          </h3>
          <p className="flex-1 text-sm leading-relaxed text-white/60">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-white/50"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-3 border-t border-white/10 pt-3">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-[var(--accent)] transition-opacity hover:opacity-80"
            >
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              {t("projects.live")}
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-white/40 transition-colors hover:text-white/70"
            >
              <Github className="h-3.5 w-3.5" aria-hidden="true" />
              {t("projects.code")}
            </a>
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}

export default function ProjectsPage() {
  const t = useTranslations();
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filtered = useMemo(
    () =>
      activeFilter === "All"
        ? PROJECTS
        : PROJECTS.filter((p) => p.filter === activeFilter),
    [activeFilter],
  );

  const stats = [
    { value: "9", label: t("projects.stats.total") },
    { value: "4", label: t("projects.stats.featured") },
    { value: "3", label: t("projects.stats.categories") },
    { value: "12k+", label: t("projects.stats.users") },
  ];

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Reveal>
        <section className="relative overflow-hidden px-6 pb-16 pt-28 md:pt-36">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[var(--accent)]/8 blur-[120px]" />
          </div>

          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="mb-3 flex items-center gap-2"
            >
              <span className="h-px w-8 bg-[var(--accent)]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
                {t("projects.eyebrow")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
              className="mb-4 text-4xl font-bold tracking-tight text-white text-balance md:text-6xl"
            >
              {t("projects.hero.title")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.16 }}
              className="max-w-2xl text-lg leading-relaxed text-white/60 text-pretty"
            >
              {t("projects.hero.subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.26 }}
              className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-center"
                >
                  <div className="text-2xl font-bold tracking-tight text-[var(--accent)]">
                    {stat.value}
                  </div>
                  <div className="mt-0.5 text-xs text-white/50">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="px-6 pb-6">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-wrap gap-2" role="group" aria-label={t("projects.filterLabel")}>
              {FILTERS.map((filter) => (
                <motion.button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className={cn(
                    "rounded-full border px-5 py-2 text-sm font-medium transition-all duration-200",
                    activeFilter === filter
                      ? "border-[var(--accent)] bg-[var(--accent)] text-black shadow-[0_0_16px_rgba(var(--accent-rgb),0.35)]"
                      : "border-white/10 bg-white/5 text-white/60 hover:border-white/20 hover:text-white/80",
                  )}
                >
                  {filter}
                  <span className="ml-2 text-[11px] opacity-60">
                    {filter === "All"
                      ? PROJECTS.length
                      : PROJECTS.filter((p) => p.filter === filter).length}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <section className="px-6 pb-24 pt-6">
        <div className="mx-auto max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} t={t} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <p className="text-lg text-white/40">{t("projects.empty")}</p>
            </div>
          )}
        </div>
      </section>

      <Reveal>
        <section className="border-t border-white/10 px-6 py-20">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              {t("projects.cta.title")}
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-white/55 text-pretty">
              {t("projects.cta.subtitle")}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
              >
                {t("projects.cta.button")}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href="https://github.com/alexmorris"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                {t("projects.cta.github")}
              </a>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}