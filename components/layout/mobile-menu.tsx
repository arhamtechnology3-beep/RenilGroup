"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ArrowRight, ChevronDown } from "lucide-react";
import { siteConfig } from "@/content/site";
import {
  mainNavigation,
  venturesPortalLinks,
} from "@/content/navigation";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

function pathMatches(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  const base = href.split("#")[0].split("?")[0];
  return pathname === base || pathname.startsWith(`${base}/`);
}

export function MobileMenu({ isOpen, onClose, pathname }: MobileMenuProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) setExpanded(null);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex flex-col bg-[#22201d]/95 backdrop-blur-xl transition-all duration-300 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      <div className="flex items-center justify-between border-b border-[#d8c7ad]/15 px-6 py-5">
        <Link href="/" onClick={onClose} className="flex items-center gap-3">
          <Image
            src="/logo/renil-crest-v2.png"
            alt="Renil Crest"
            width={32}
            height={32}
            className="h-8 w-auto object-contain brightness-110"
          />
          <span className="font-serif text-lg tracking-wider text-[#f8f5ee]">
            RENIL GROUPS
          </span>
        </Link>
        <button
          onClick={onClose}
          aria-label="Close navigation menu"
          className="rounded-full border border-[#d8c7ad]/20 p-2 text-[#d8c7ad] hover:bg-[#a98345]/10 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-8">
        <nav className="flex flex-col space-y-2" aria-label="Mobile primary">
          {mainNavigation.map((item) => {
            const isActive = pathMatches(pathname, item.href);
            const hasChildren = Boolean(item.children?.length);
            const isExpanded = expanded === item.name;

            if (!hasChildren) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    "flex items-center justify-between py-2 font-serif text-2xl tracking-wide transition-colors",
                    isActive
                      ? "text-[#b99a68]"
                      : "text-[#f8f5ee]/90 hover:text-[#b99a68]",
                  )}
                >
                  <span>{item.name}</span>
                  <ArrowRight className="h-4 w-4 opacity-50" />
                </Link>
              );
            }

            return (
              <div key={item.href} className="border-b border-[#d8c7ad]/10 pb-2">
                <div className="flex items-center gap-2">
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      "flex-1 py-2 font-serif text-2xl tracking-wide transition-colors",
                      isActive
                        ? "text-[#b99a68]"
                        : "text-[#f8f5ee]/90 hover:text-[#b99a68]",
                    )}
                  >
                    {item.name}
                  </Link>
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    aria-label={`${isExpanded ? "Collapse" : "Expand"} ${item.name} submenu`}
                    onClick={() =>
                      setExpanded(isExpanded ? null : item.name)
                    }
                    className="rounded-full border border-[#d8c7ad]/20 p-2 text-[#d8c7ad] hover:bg-[#a98345]/10 hover:text-white"
                  >
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        isExpanded && "rotate-180",
                      )}
                    />
                  </button>
                </div>

                {isExpanded ? (
                  <div className="mb-3 space-y-1 rounded-2xl border border-[#d8c7ad]/10 bg-[#161513]/60 p-3">
                    {item.children!.map((child) => (
                      <Link
                        key={`${child.href}-${child.name}`}
                        href={child.href}
                        onClick={onClose}
                        className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-[#a98345]/10"
                      >
                        <span className="block text-sm font-medium text-[#f8f5ee]">
                          {child.name}
                        </span>
                        {child.badge ? (
                          <span className="mt-0.5 block text-[10px] uppercase tracking-wider text-[#b99a68]">
                            {child.badge}
                          </span>
                        ) : null}
                        {child.description ? (
                          <span className="mt-1 block text-[11px] leading-snug text-[#d8c7ad]/65">
                            {child.description}
                          </span>
                        ) : null}
                      </Link>
                    ))}

                    {item.mega ? (
                      <div className="mt-2 border-t border-[#d8c7ad]/10 pt-3">
                        <p className="px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#b99a68]">
                          Ventures Portal
                        </p>
                        <div className="mt-1 space-y-1">
                          {venturesPortalLinks.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              onClick={onClose}
                              className="block rounded-lg px-3 py-2 text-sm text-[#d8c7ad]/85 hover:bg-[#a98345]/10 hover:text-white"
                            >
                              {link.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>
      </div>

      <div className="border-t border-[#d8c7ad]/15 p-6">
        <ShimmerButton
          href="/submit-your-business"
          onClick={onClose}
          variant="primary"
          size="lg"
          className="w-full"
          showArrow
        >
          Present Your Business
        </ShimmerButton>
        <p className="mt-3 text-center text-xs text-[#d8c7ad]/60">
          {siteConfig.tagline}
        </p>
      </div>
    </div>
  );
}
