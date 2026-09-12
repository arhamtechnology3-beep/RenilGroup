import { businessVerticals } from "@/content/businesses";
import { siteConfig } from "@/content/site";

export type NavChild = {
  name: string;
  href: string;
  description?: string;
  badge?: string;
};

export type NavItem = {
  name: string;
  href: string;
  /** Wide panel mega menu (Businesses) */
  mega?: boolean;
  children?: NavChild[];
};

/**
 * Primary nav — only real routes.
 * Founder & Our Story live under About (not duplicated in the top bar).
 * Projects has no submenu (filters are on-page, not separate URLs).
 */
export const mainNavigation: NavItem[] = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "/about",
    children: [
      {
        name: "Group Overview",
        href: "/about",
        description: "Vision, belief, and how Renil Groups grows.",
      },
      {
        name: "Founder",
        href: "/founder",
        description: "Leadership and CEO message from Swapnil Shinde.",
      },
      {
        name: "Our Story",
        href: "/story",
        description: "From starting small to building an ecosystem.",
      },
    ],
  },
  {
    name: "Businesses",
    href: "/businesses",
    mega: true,
    children: businessVerticals.map((b) => ({
      name: b.name,
      href: b.href,
      description: b.shortDescription,
      badge: b.badge,
    })),
  },
  { name: "Projects", href: "/projects" },
  {
    name: "Contact",
    href: "/contact",
    children: [
      {
        name: "General Corporate",
        href: "/contact?type=general",
        description: "Media, ecosystem, and group inquiries.",
      },
      {
        name: "Ventures & Capital",
        href: "/contact?type=investment",
        description: "Investment and partnership conversations.",
      },
      {
        name: "Real Estate & Projects",
        href: "/contact?type=project",
        description: "Development and construction inquiries.",
      },
    ],
  },
];

export const venturesPortalLinks = siteConfig.venturesNav;
