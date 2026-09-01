export interface NavLink {
  label: string;
  href: string;
  key: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  href: string;
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export interface Experience {
  id: string;
  period: string;
  role: string;
  company: string;
  description: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  handle: string;
  url: string;
  description: string;
}

export const BRAND = {
  name: "Alex Morris",
  tagline: "Full-Stack Developer",
  email: "hello@alexmorris.dev",
  location: "San Francisco, CA",
} as const;

export const navLinks: NavLink[] = [
  { label: "Home", href: "/", key: "home" },
  { label: "Projects", href: "/projects", key: "projects" },
  { label: "About", href: "/about", key: "about" },
  { label: "Contact", href: "/contact", key: "contact" },
];