import React from "react";
import { cn } from "@/lib/utils";

type SectionIndexProps = {
  /** Display index, e.g. "01" */
  index: string;
  /** large watermark behind editorial headers */
  variant?: "watermark" | "caption" | "both";
  /** light sections use gold wash; dark sections use soft white */
  tone?: "light" | "dark";
  className?: string;
  captionClassName?: string;
};

/**
 * Dual numbering used on the About intro:
 * - watermark: oversized faint serif numeral behind content
 * - caption: smaller numeral for image footers / media planes
 */
export function SectionIndex({
  index,
  variant = "watermark",
  tone = "light",
  className,
  captionClassName,
}: SectionIndexProps) {
  const watermark = (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute select-none font-serif leading-none",
        "text-[8rem] sm:text-[10rem] lg:text-[11rem]",
        tone === "light" ? "text-[#a98345]/10" : "text-white/[0.07]",
        className,
      )}
    >
      {index}
    </span>
  );

  const caption = (
    <span
      aria-hidden
      className={cn(
        "font-serif text-3xl sm:text-4xl leading-none select-none",
        tone === "light" ? "text-[#a98345]/25" : "text-white/15",
        captionClassName,
      )}
    >
      {index}
    </span>
  );

  if (variant === "caption") return caption;
  if (variant === "both") {
    return (
      <>
        {watermark}
        {caption}
      </>
    );
  }
  return watermark;
}

type SectionHeaderProps = {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
  titleId?: string;
  children?: React.ReactNode;
};

/** Standard homepage section header with watermark numeral beside the title (About 01 motif). */
export function SectionHeader({
  index,
  eyebrow,
  title,
  description,
  tone = "light",
  align = "left",
  className,
  titleId,
  children,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "relative overflow-visible",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {/* Same placement as About 01 — large numeral beside / behind the title */}
      <SectionIndex
        index={index}
        tone={tone}
        className="-right-1 sm:-right-3 -top-6 sm:-top-10 lg:-top-12"
      />

      <div
        className={cn(
          "relative z-[1] inline-flex items-center gap-3 mb-4",
          align === "center" && "justify-center",
        )}
      >
        <span className="h-px w-8 sm:w-10 bg-[#a98345]" />
        <span
          className={cn(
            "section-eyebrow",
            tone === "dark" && "text-[#b99a68]",
          )}
        >
          {index} / {eyebrow}
        </span>
        {align === "center" && <span className="h-px w-8 sm:w-10 bg-[#a98345]" />}
      </div>

      <h2
        id={titleId}
        className={cn(
          "heading-2 relative z-[1]",
          tone === "light" ? "text-[#22201d]" : "text-[#fffdf9]",
          align === "center" && "mx-auto",
        )}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={cn(
            "mt-4 relative z-[1] max-w-2xl",
            tone === "light"
              ? "section-body"
              : "text-sm sm:text-base text-[#d8c7ad]/85 leading-relaxed",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}

      {children}
    </div>
  );
}
