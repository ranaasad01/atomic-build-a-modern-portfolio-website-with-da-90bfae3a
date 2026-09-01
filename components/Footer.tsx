"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Code2 as Github, MessageCircle as Twitter, Briefcase as Linkedin } from 'lucide-react';
import { navLinks, BRAND } from "@/lib/data";
import { staggerContainer, fadeInUp } from "@/lib/motion";

const socialIcons = [
  {
    key: "github",
    href: "https://github.com/alexmorrow",
    icon: Github,
    label: "GitHub",
  },
  {
    key: "twitter",
    href: "https://twitter.com/alexmorrisdev",
    icon: Twitter,
    label: "Twitter / X",
  },
  {
    key: "linkedin",
    href: "https://linkedin.com/in/alexmorris",
    icon: Linkedin,
    label: "LinkedIn",
  },
];

export default function Footer() {
  const pathname = usePathname();
  const t = useTranslations();
  const navT = t.raw("nav") as Record<string, string>;

  function getLinkHref(href: string): string {
    if (href.startsWith("#")) {
      return pathname === "/" ? href : "/" + href;
    }
    return href;
  }

  function handleLinkClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) {
    if (href.startsWith("#") && pathname === "/") {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {/* Brand column */}
          <motion.div variants={fadeInUp} className="md:col-span-1">
            <Link
              href="/"
              className="inline-block text-[var(--foreground)] font-semibold text-lg tracking-tight hover:text-[var(--primary)] transition-colors duration-200 mb-4"
            >
              <span className="text-[var(--primary)]">{"{"}</span>
              {BRAND.name}
              <span className="text-[var(--primary)]">{"}"}</span>
            </Link>
            <p className="text-[var(--muted-foreground)] text-sm leading-relaxed mb-6 max-w-xs">
              {t("footer.tagline")}
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialIcons.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.key}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg text-[var(--muted-foreground)] hover:text-[var(--primary)] hover:bg-[var(--card)] border border-transparent hover:border-[var(--border)] transition-all duration-200"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Nav links */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-[var(--foreground)] text-sm font-semibold mb-4 uppercase tracking-widest">
              {t("footer.nav_heading")}
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={getLinkHref(link.href)}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-[var(--muted-foreground)] text-sm hover:text-[var(--primary)] transition-colors duration-200"
                  >
                    {navT[link.key] ?? link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact / CTA */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-[var(--foreground)] text-sm font-semibold mb-4 uppercase tracking-widest">
              {t("footer.contact_heading")}
            </h3>
            <p className="text-[var(--muted-foreground)] text-sm leading-relaxed mb-4">
              {t("footer.contact_body")}
            </p>
            <a
              href={`mailto:${BRAND.email}`}
              className="text-[var(--primary)] text-sm font-medium hover:text-[var(--accent)] transition-colors duration-200"
            >
              {BRAND.email}
            </a>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-[var(--muted-foreground)] text-xs">
            {t("footer.copyright")}
          </p>
          <p className="text-[var(--muted-foreground)] text-xs">
            {t("footer.built_with")}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}