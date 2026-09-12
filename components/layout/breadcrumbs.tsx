import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/ui/json-ld";
import { defaultSeo } from "@/content/seo";
import { cn } from "@/lib/utils";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  /** Use on dark hero backgrounds (e.g. Ventures). */
  variant?: "light" | "dark";
  className?: string;
};

export function Breadcrumbs({
  items,
  variant = "light",
  className,
}: BreadcrumbsProps) {
  if (items.length === 0) return null;

  const isDark = variant === "dark";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href
        ? {
            item: item.href.startsWith("http")
              ? item.href
              : `${defaultSeo.siteUrl}${item.href}`,
          }
        : {}),
    })),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <nav aria-label="Breadcrumb" className={cn("mb-6", className)}>
        <ol className="flex flex-wrap items-center gap-1.5 text-[11px] uppercase tracking-[0.16em] sm:text-xs sm:tracking-[0.18em]">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
                {index > 0 ? (
                  <ChevronRight
                    className={cn(
                      "h-3 w-3 shrink-0",
                      isDark ? "text-[#b99a68]/60" : "text-[#a98345]/50",
                    )}
                    aria-hidden="true"
                  />
                ) : null}
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className={cn(
                      "font-medium transition-colors",
                      isDark
                        ? "text-[#d8c7ad]/75 hover:text-[#fffdf9]"
                        : "text-[#746d63] hover:text-[#8e6d3e]",
                    )}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    aria-current={isLast ? "page" : undefined}
                    className={cn(
                      "font-semibold",
                      isDark ? "text-[#b99a68]" : "text-[#8e6d3e]",
                    )}
                  >
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
