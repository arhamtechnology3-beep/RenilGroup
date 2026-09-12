import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/content/site";
import { businessVerticals } from "@/content/businesses";

type IconProps = { className?: string };

function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function XIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.227-8.662L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

function YouTubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const socialLinks = [
  {
    name: "LinkedIn",
    href: siteConfig.social.linkedin,
    icon: LinkedInIcon,
  },
  {
    name: "Instagram",
    href: siteConfig.social.instagram,
    icon: InstagramIcon,
  },
  {
    name: "Facebook",
    href: siteConfig.social.facebook,
    icon: FacebookIcon,
  },
  {
    name: "X",
    href: siteConfig.social.twitter,
    icon: XIcon,
  },
  {
    name: "YouTube",
    href: siteConfig.social.youtube,
    icon: YouTubeIcon,
  },
  {
    name: "WhatsApp",
    href: `https://wa.me/${siteConfig.contact.whatsapp}`,
    icon: WhatsAppIcon,
  },
] as const;

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const visibleSocial = socialLinks.filter((item) => Boolean(item.href));

  return (
    <footer className="relative bg-[#201e1a] text-[#f8f5ee] border-t border-[#a98345]/20 overflow-hidden">
      {/* Subtle Arch Glow on the Top of Footer */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-[#b99a68]/10 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative h-11 w-10">
                <Image
                  src="/logo/renil-crest-v2.png"
                  alt="Renil Groups Crest"
                  fill
                  className="object-contain brightness-125"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl tracking-wider uppercase text-[#fffdf9]">
                  Renil Groups
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#b99a68]">
                  {siteConfig.tagline}
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#d8c7ad]/80 max-w-sm leading-relaxed">
              {siteConfig.description}
            </p>

            {visibleSocial.length > 0 ? (
              <div>
                <span className="mb-3 block text-xs uppercase tracking-widest text-[#a98345] font-semibold">
                  Follow Us
                </span>
                <ul className="flex flex-wrap items-center gap-2.5">
                  {visibleSocial.map(({ name, href, icon: Icon }) => (
                    <li key={name}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={name}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#a98345]/30 bg-[#28251f] text-[#d8c7ad] transition-colors hover:border-[#b99a68] hover:bg-[#a98345]/15 hover:text-[#fffdf9]"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="pt-2">
              <span className="inline-block text-xs uppercase tracking-widest text-[#a98345] font-semibold">
                Founder-Led Leadership
              </span>
              <p className="text-sm font-medium text-[#f8f5ee]">
                {siteConfig.founder.name} —{" "}
                <span className="text-[#d8c7ad]/70">
                  {siteConfig.founder.role}
                </span>
              </p>
            </div>
          </div>

          {/* Business Verticals Column */}
          <div className="space-y-4">
            <h4 className="font-serif text-base tracking-wider uppercase text-[#b99a68]">
              Our Businesses
            </h4>
            <ul className="space-y-2.5 text-sm">
              {businessVerticals.map((b) => (
                <li key={b.id}>
                  <Link
                    href={b.href}
                    className="text-[#d8c7ad]/80 hover:text-[#fffdf9] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{b.name}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Navigation Column */}
          <div className="space-y-4">
            <h4 className="font-serif text-base tracking-wider uppercase text-[#b99a68]">
              Ecosystem
            </h4>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.navigation.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-[#d8c7ad]/80 hover:text-[#fffdf9] transition-colors"
                  >
                    {n.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/submit-your-business"
                  className="text-[#b99a68] font-medium hover:text-[#d8c7ad] transition-colors"
                >
                  Submit Your Business
                </Link>
              </li>
            </ul>
          </div>

          {/* Inquiries & Connect Column */}
          <div className="space-y-4">
            <h4 className="font-serif text-base tracking-wider uppercase text-[#b99a68]">
              Inquiries
            </h4>
            <ul className="space-y-2.5 text-sm text-[#d8c7ad]/80">
              <li>
                <Link
                  href="/contact?type=general"
                  className="hover:text-white transition-colors"
                >
                  General Corporate
                </Link>
              </li>
              <li>
                <Link
                  href="/contact?type=investment"
                  className="hover:text-white transition-colors"
                >
                  Ventures & Capital
                </Link>
              </li>
              <li>
                <Link
                  href="/contact?type=project"
                  className="hover:text-white transition-colors"
                >
                  Real Estate & Projects
                </Link>
              </li>
            </ul>

            <div className="pt-3">
              <span className="text-xs uppercase tracking-widest text-[#a98345] block mb-1 font-medium">
                Official Channels
              </span>
              <p className="text-xs text-[#d8c7ad]/60 italic">
                Verified address & direct line to be updated.
              </p>
            </div>
          </div>
        </div>

        {/* Investment Disclaimer Banner (Mandatory per Spec Section 14 & 26) */}
        <div className="rounded-2xl border border-[#a98345]/20 bg-[#28251f]/70 p-4 mb-10 text-xs text-[#d8c7ad]/70 leading-relaxed">
          <strong className="text-[#b99a68] font-medium">
            Important Notice:{" "}
          </strong>
          {siteConfig.disclaimers.investment} {siteConfig.disclaimers.submission}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#d8c7ad]/10 pt-8 flex flex-col gap-4 text-xs text-[#d8c7ad]/60">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {currentYear} Renil Groups Pvt. Ltd. All rights reserved.</p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:justify-end">
              <Link
                href="/privacy"
                className="hover:text-[#b99a68] transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-[#d8c7ad]/40" aria-hidden>
                •
              </span>
              <Link
                href="/terms"
                className="hover:text-[#b99a68] transition-colors"
              >
                Terms & Disclaimers
              </Link>
              <span className="text-[#d8c7ad]/40" aria-hidden>
                •
              </span>
              <Link
                href="/sitemap.xml"
                className="hover:text-[#b99a68] transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
          <p className="text-center sm:text-left">
            Design &amp; develop by{" "}
            <a
              href="https://www.arhamtechnology.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#b99a68] underline-offset-4 transition-colors hover:text-[#d8c7ad] hover:underline"
            >
              Arham Technology
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
