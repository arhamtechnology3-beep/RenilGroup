"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ScrollProgressBarProps {
  type?: "circle" | "bar";
  position?: "top-right" | "bottom-right" | "top-left" | "bottom-left";
  color?: string;
  strokeSize?: number;
  showPercentage?: boolean;
  className?: string;
}

/**
 * Site-wide scroll progress. Uses native scroll metrics (not Framer useScroll)
 * so the home sticky video hero still advances the bar from the top of the page.
 */
export default function ScrollProgressBar({
  type = "circle",
  position = "bottom-right",
  color = "#a98345",
  strokeSize = 2,
  showPercentage = false,
  className,
}: ScrollProgressBarProps) {
  const barFillRef = React.useRef<HTMLSpanElement>(null);
  const circleRef = React.useRef<SVGCircleElement>(null);
  const [percentage, setPercentage] = React.useState(0);

  React.useEffect(() => {
    let raf = 0;

    const readProgress = () => {
      const scrollTop =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      return max > 0 ? Math.min(1, Math.max(0, scrollTop / max)) : 0;
    };

    const apply = () => {
      raf = 0;
      const p = readProgress();
      const pct = Math.round(p * 100);

      if (barFillRef.current) {
        barFillRef.current.style.transform = `scaleX(${p})`;
      }
      if (circleRef.current) {
        // r=30 → circumference ≈ 188.5
        const c = 2 * Math.PI * 30;
        circleRef.current.style.strokeDasharray = `${c}`;
        circleRef.current.style.strokeDashoffset = `${c * (1 - p)}`;
      }
      setPercentage((prev) => (prev === pct ? prev : pct));
    };

    const onScrollOrResize = () => {
      if (raf) return;
      raf = requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    // Home hero / images can change document height after paint
    const ro = new ResizeObserver(onScrollOrResize);
    ro.observe(document.documentElement);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      ro.disconnect();
    };
  }, [type]);

  if (type === "bar") {
    return (
      <div
        className={cn(
          "pointer-events-none fixed start-0 end-0 top-0 z-[60]",
          className,
        )}
        style={{ height: `${strokeSize + 2}px` }}
        aria-hidden="true"
      >
        <span
          ref={barFillRef}
          className="block h-full w-full origin-left will-change-transform"
          style={{
            backgroundColor: color,
            transform: "scaleX(0)",
          }}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "pointer-events-none fixed z-[55] flex items-center justify-center p-3",
        {
          "top-0 end-0": position === "top-right",
          "bottom-0 end-0": position === "bottom-right",
          "top-0 start-0": position === "top-left",
          "bottom-0 start-0": position === "bottom-left",
        },
        className,
      )}
      aria-hidden="true"
    >
      {percentage > 0 ? (
        <>
          <svg width="100" height="100" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="30"
              fill="none"
              stroke="rgba(169,131,69,0.25)"
              strokeWidth={strokeSize}
            />
            <circle
              ref={circleRef}
              cx="50"
              cy="50"
              r="30"
              fill="none"
              stroke={color}
              strokeWidth={strokeSize}
              transform="rotate(-90 50 50)"
            />
          </svg>
          {showPercentage ? (
            <span className="absolute text-sm font-medium text-[#8e6d3e]">
              {percentage}%
            </span>
          ) : null}
        </>
      ) : null}
    </div>
  );
}

export { ScrollProgressBar };
