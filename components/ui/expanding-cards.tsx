"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface CardItem {
  id: string | number;
  title: string;
  description: string;
  imgSrc: string;
  icon: React.ReactNode;
  linkHref: string;
}

interface ExpandingCardsProps extends React.HTMLAttributes<HTMLUListElement> {
  items: CardItem[];
  defaultActiveIndex?: number;
}

/**
 * Expanding accordion cards.
 * - Desktop hover / focus / click: expand only
 * - Mobile tap: expand only (never navigate from the card body)
 * - Navigation: only via the explicit "Explore Vertical" CTA when the card is active
 */
export const ExpandingCards = React.forwardRef<
  HTMLUListElement,
  ExpandingCardsProps
>(({ className, items, defaultActiveIndex = 0, ...props }, ref) => {
  const [activeIndex, setActiveIndex] = React.useState<number>(
    defaultActiveIndex,
  );
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.matchMedia("(min-width: 768px)").matches);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const gridStyle = React.useMemo(() => {
    if (isDesktop) {
      const columns = items
        .map((_, index) => (index === activeIndex ? "5fr" : "1fr"))
        .join(" ");
      return {
        gridTemplateColumns: columns,
        gridTemplateRows: "1fr",
      };
    }
    const rows = items
      .map((_, index) => (index === activeIndex ? "5fr" : "1fr"))
      .join(" ");
    return {
      gridTemplateRows: rows,
      gridTemplateColumns: "1fr",
    };
  }, [activeIndex, items, isDesktop]);

  const expandCard = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <ul
      className={cn(
        "w-full max-w-6xl gap-2 sm:gap-3",
        "grid",
        "h-[min(70dvh,520px)] sm:h-[560px] md:h-[500px]",
        "transition-[grid-template-columns,grid-template-rows] duration-500 ease-out",
        className,
      )}
      style={gridStyle}
      ref={ref}
      {...props}
    >
      {items.map((item, index) => {
        const isActive = activeIndex === index;

        return (
          <li
            key={item.id}
            role="button"
            aria-expanded={isActive}
            aria-controls={`expanding-card-panel-${item.id}`}
            className={cn(
              "group relative cursor-pointer overflow-hidden rounded-2xl border border-[#a98345]/30 bg-[#201e1a] text-white shadow-md",
              "md:min-w-[90px]",
              "min-h-0 min-w-0 transition-all duration-500 hover:border-[#b99a68]",
              "touch-manipulation select-none",
            )}
            data-active={isActive}
            tabIndex={0}
            onMouseEnter={() => {
              if (isDesktop) expandCard(index);
            }}
            onFocus={() => expandCard(index)}
            onClick={(e) => {
              // Never navigate from the card shell — expand only.
              // Links inside handle their own navigation with stopPropagation.
              if ((e.target as HTMLElement).closest("a")) return;
              e.preventDefault();
              expandCard(index);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                expandCard(index);
              }
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.imgSrc}
              alt=""
              aria-hidden={!isActive}
              className={cn(
                "pointer-events-none absolute inset-0 h-full w-full object-cover transition-all duration-500 ease-out",
                "scale-115 grayscale brightness-90",
                "group-data-[active=true]:scale-105 group-data-[active=true]:grayscale-0 group-data-[active=true]:brightness-100",
              )}
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#161513]/95 via-[#161513]/50 to-transparent transition-opacity duration-300"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-black/30 transition-colors duration-300 group-data-[active=true]:bg-black/15"
              aria-hidden
            />

            <article
              id={`expanding-card-panel-${item.id}`}
              className="absolute inset-0 z-10 flex flex-col justify-end gap-2 p-6"
            >
              {/* Collapsed label */}
              <div
                className={cn(
                  "pointer-events-none absolute bottom-12 left-8 hidden origin-left -rotate-90 whitespace-nowrap text-xs font-serif uppercase tracking-[0.25em] text-[#d8c7ad] transition-opacity duration-300 md:block",
                  isActive ? "opacity-0" : "opacity-100",
                )}
              >
                {item.title}
              </div>

              {/* Mobile collapsed title (horizontal) */}
              <div
                className={cn(
                  "pointer-events-none absolute inset-x-0 bottom-0 z-[1] p-3 md:hidden transition-opacity duration-300",
                  isActive ? "opacity-0" : "opacity-100",
                )}
              >
                <p className="truncate font-serif text-sm tracking-wide text-[#fffdf9]">
                  {item.title}
                </p>
              </div>

              {/* Active content — pointer-events only when expanded */}
              <div
                className={cn(
                  "flex flex-col gap-2 transition-opacity duration-300",
                  isActive
                    ? "pointer-events-auto opacity-100"
                    : "pointer-events-none opacity-0",
                )}
              >
                <div className="text-[#b99a68]">{item.icon}</div>
                <h3 className="heading-3 font-normal text-[#fffdf9]">
                  {item.title}
                </h3>
                <p className="mb-2 w-full max-w-md text-xs leading-relaxed text-[#d8c7ad]/90 sm:text-sm">
                  {item.description}
                </p>

                {item.linkHref ? (
                  <Link
                    href={item.linkHref}
                    onClick={(e) => {
                      // Allow navigation; don't let the card expand handler swallow it.
                      e.stopPropagation();
                    }}
                    onMouseDown={(e) => e.stopPropagation()}
                    className={cn(
                      "cta-attract mt-1 inline-flex w-fit items-center gap-2 rounded-full",
                      "border border-[#b99a68]/55 bg-[#b99a68]/15 px-4 py-2.5",
                      "text-xs font-semibold uppercase tracking-wider text-[#fffdf9]",
                      "backdrop-blur-sm transition-colors duration-300",
                      "hover:border-[#d8c7ad] hover:bg-[#a98345] hover:text-[#fffdf9]",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a98345]",
                    )}
                  >
                    <span>Explore Vertical</span>
                    <span className="cta-attract-arrow" aria-hidden>
                      →
                    </span>
                  </Link>
                ) : null}
              </div>
            </article>
          </li>
        );
      })}
    </ul>
  );
});

ExpandingCards.displayName = "ExpandingCards";
