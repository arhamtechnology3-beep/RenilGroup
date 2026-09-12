"use client";

import React from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
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
 * Bundui / 21st.dev Scroll Progress Bar
 * https://21st.dev/@bundui/components/scroll-progress-bar
 */
export default function ScrollProgressBar({
  type = "circle",
  position = "bottom-right",
  color = "#a98345",
  strokeSize = 2,
  showPercentage = false,
  className,
}: ScrollProgressBarProps) {
  const { scrollYProgress } = useScroll();
  const scrollPercentage = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const [percentage, setPercentage] = React.useState(0);

  useMotionValueEvent(scrollPercentage, "change", (latest) => {
    setPercentage(Math.round(latest));
  });

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
          className="block h-full w-full"
          style={{
            backgroundColor: color,
            width: `${percentage}%`,
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
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              stroke={color}
              fill="none"
              strokeDashoffset="0"
              strokeWidth={strokeSize}
              style={{ pathLength: scrollYProgress }}
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
