"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import {
  mainNavigation,
  venturesPortalLinks,
  type NavItem,
} from "@/content/navigation";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { cn } from "@/lib/utils";

type MegaMenuProps = {
  lightOnDark: boolean;
};

function pathMatches(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  const base = href.split("#")[0].split("?")[0];
  return pathname === base || pathname.startsWith(`${base}/`);
}

function NavLink({
  item,
  lightOnDark,
}: {
  item: Pick<NavItem, "name" | "href">;
  lightOnDark: boolean;
}) {
  const pathname = usePathname();
  const isActive = pathMatches(pathname, item.href);

  return (
    <Link
      href={item.href}
      className={cn(
        "relative py-1 text-xs font-medium uppercase tracking-widest transition-colors",
        lightOnDark
          ? isActive
            ? "font-semibold text-[#fffdf9]"
            : "text-[#fffdf9]/80 hover:text-[#fffdf9]"
          : isActive
            ? "font-semibold text-[#a98345]"
            : "text-[#22201d]/80 hover:text-[#a98345]",
      )}
    >
      {item.name}
      {isActive ? (
        <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-[#a98345]" />
      ) : null}
    </Link>
  );
}

function DropdownPanel({
  item,
  open,
  onClose,
}: {
  item: NavItem;
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  if (!item.children?.length) return null;

  return (
    <div
      className={cn(
        "absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 transition-all duration-200",
        open
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-1 opacity-0",
      )}
    >
      <div
        role="menu"
        className="min-w-[250px] rounded-2xl border border-[#a98345]/20 bg-[#fffdf9] p-2 shadow-[0_24px_60px_-28px_rgba(32,30,26,0.55)]"
      >
        {item.children.map((child) => {
          const active = pathMatches(pathname, child.href);
          return (
            <Link
              key={`${child.href}-${child.name}`}
              href={child.href}
              role="menuitem"
              onClick={onClose}
              className={cn(
                "block rounded-xl px-3.5 py-2.5 transition-colors",
                active
                  ? "bg-[#a98345]/10 text-[#8e6d3e]"
                  : "text-[#22201d] hover:bg-[#f8f5ee]",
              )}
            >
              <span className="block text-sm font-medium">{child.name}</span>
              {child.description ? (
                <span className="mt-0.5 block text-[11px] leading-snug text-[#746d63]">
                  {child.description}
                </span>
              ) : null}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function BusinessesMegaPanel({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const businesses = mainNavigation.find((n) => n.mega);
  if (!businesses?.children?.length) return null;

  return (
    <div
      className={cn(
        "absolute left-1/2 top-full z-50 w-[min(920px,calc(100vw-2rem))] -translate-x-1/2 pt-3 transition-all duration-200",
        open
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-1 opacity-0",
      )}
    >
      <div
        role="dialog"
        aria-label="Businesses menu"
        className="overflow-hidden rounded-3xl border border-[#a98345]/20 bg-[#fffdf9] shadow-[0_30px_80px_-36px_rgba(32,30,26,0.6)]"
      >
        <div className="flex items-center justify-between gap-4 border-b border-[#a98345]/15 bg-[#f8f5ee] px-5 py-3.5 sm:px-6">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#a98345]">
              Our Businesses
            </p>
            <p className="mt-0.5 text-sm text-[#746d63]">
              Four verticals under one group vision.
            </p>
          </div>
          <Link
            href="/businesses"
            onClick={onClose}
            className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#8e6d3e] transition-colors hover:text-[#22201d]"
          >
            View all
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-2 sm:p-4 lg:grid-cols-4">
          {businesses.children.map((child, index) => {
            const active = pathMatches(pathname, child.href);
            return (
              <Link
                key={child.href}
                href={child.href}
                onClick={onClose}
                className={cn(
                  "group/card rounded-2xl border p-4 transition-all duration-300",
                  active
                    ? "border-[#a98345] bg-[#f8f5ee] shadow-sm"
                    : "border-transparent hover:border-[#a98345]/30 hover:bg-[#f8f5ee]",
                )}
              >
                <span className="font-serif text-lg text-[#a98345]/70 transition-colors group-hover/card:text-[#a98345]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-1 font-serif text-base text-[#22201d]">
                  {child.name}
                </p>
                {child.badge ? (
                  <span className="mt-1.5 inline-block rounded-full border border-[#a98345]/25 bg-white/70 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#8e6d3e]">
                    {child.badge}
                  </span>
                ) : null}
                {child.description ? (
                  <p className="mt-2 line-clamp-3 text-[11px] leading-relaxed text-[#746d63]">
                    {child.description}
                  </p>
                ) : null}
                <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-[#8e6d3e] opacity-0 transition-all group-hover/card:opacity-100">
                  Explore
                  <ArrowUpRight className="h-3 w-3" />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="border-t border-[#a98345]/15 bg-[#201e1a] px-5 py-4 sm:px-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b99a68]">
                Renil Ventures Portal
              </p>
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1.5">
                {venturesPortalLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className="text-xs text-[#d8c7ad]/85 transition-colors hover:text-[#fffdf9]"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <ShimmerButton
              href="/submit-your-business"
              onClick={onClose}
              variant="primary"
              size="sm"
              showArrow
              className="w-full sm:w-auto"
            >
              Present Your Business
            </ShimmerButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DesktopMegaNav({ lightOnDark }: MegaMenuProps) {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setOpenKey(null), 140);
  };

  const open = (key: string) => {
    clearCloseTimer();
    setOpenKey(key);
  };

  useEffect(() => {
    setOpenKey(null);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenKey(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => () => clearCloseTimer(), []);

  return (
    <nav
      className="hidden items-center gap-x-5 lg:flex xl:gap-x-7"
      aria-label="Primary"
    >
      {mainNavigation.map((item) => {
        const hasMenu = Boolean(item.children?.length);
        const key = item.name;
        const isOpen = openKey === key;

        if (!hasMenu) {
          return (
            <NavLink key={item.href} item={item} lightOnDark={lightOnDark} />
          );
        }

        const childActive = item.children?.some((c) =>
          pathMatches(pathname, c.href),
        );
        const isActive =
          pathMatches(pathname, item.href) || Boolean(childActive);

        return (
          <div
            key={item.href}
            className="relative"
            onMouseEnter={() => open(key)}
            onMouseLeave={scheduleClose}
          >
            <Link
              href={item.href}
              aria-expanded={isOpen}
              aria-haspopup={item.mega ? "dialog" : "menu"}
              onFocus={() => open(key)}
              className={cn(
                "relative inline-flex items-center gap-1 py-1 text-xs font-medium uppercase tracking-widest transition-colors",
                lightOnDark
                  ? isActive
                    ? "font-semibold text-[#fffdf9]"
                    : "text-[#fffdf9]/80 hover:text-[#fffdf9]"
                  : isActive
                    ? "font-semibold text-[#a98345]"
                    : "text-[#22201d]/80 hover:text-[#a98345]",
              )}
            >
              {item.name}
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-200",
                  isOpen && "rotate-180",
                )}
                aria-hidden
              />
              {isActive ? (
                <span className="absolute bottom-0 left-0 right-4 h-[2px] rounded-full bg-[#a98345]" />
              ) : null}
            </Link>

            {item.mega ? (
              <BusinessesMegaPanel
                open={isOpen}
                onClose={() => setOpenKey(null)}
              />
            ) : (
              <DropdownPanel
                item={item}
                open={isOpen}
                onClose={() => setOpenKey(null)}
              />
            )}
          </div>
        );
      })}
    </nav>
  );
}
