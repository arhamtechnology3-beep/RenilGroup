"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { DesktopMegaNav } from "@/components/layout/mega-menu";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  const lightOnDark = !isScrolled && isHome;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-[background-color,border-color,box-shadow] duration-300 py-3.5 sm:py-4",
          isScrolled
            ? "bg-[#f8f5ee]/95 backdrop-blur-md border-b border-[#a98345]/15 shadow-sm"
            : isHome
              ? "bg-transparent border-b border-transparent"
              : "bg-[#f8f5ee]/90 backdrop-blur-sm border-b border-[#a98345]/15",
        )}
      >
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="group flex min-w-0 items-center gap-2.5 sm:gap-3"
          >
            <div className="relative h-9 w-8 shrink-0 transition-transform duration-300 group-hover:scale-105 sm:h-10 sm:w-9">
              <Image
                src="/logo/renil-crest-v2.png"
                alt="Renil Crest Logo"
                fill
                priority
                className={cn(
                  "object-contain",
                  lightOnDark ? "brightness-125 drop-shadow" : "",
                )}
              />
            </div>
            <div className="flex min-w-0 flex-col">
              <span
                className={cn(
                  "truncate font-serif text-base font-medium uppercase tracking-wider transition-colors sm:text-xl",
                  lightOnDark ? "text-[#fffdf9]" : "text-[#22201d]",
                )}
              >
                Renil Groups
              </span>
              <span
                className={cn(
                  "-mt-1 truncate text-[8px] font-semibold uppercase tracking-[0.2em] transition-colors sm:text-[9px]",
                  lightOnDark ? "text-[#d8c7ad]" : "text-[#8e6d3e]",
                )}
              >
                We Grow Together
              </span>
            </div>
          </Link>

          <DesktopMegaNav lightOnDark={lightOnDark} />

          <div className="hidden items-center gap-4 lg:flex">
            <ShimmerButton
              href="/submit-your-business"
              variant="primary"
              size="sm"
              showArrow
            >
              Present Your Business
            </ShimmerButton>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open mobile navigation menu"
            className={cn(
              "shrink-0 rounded-full border p-2 transition-colors lg:hidden",
              lightOnDark
                ? "border-white/20 text-white hover:bg-white/10"
                : "border-[#a98345]/20 text-[#22201d] hover:bg-[#a98345]/10",
            )}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        pathname={pathname}
      />
    </>
  );
}
