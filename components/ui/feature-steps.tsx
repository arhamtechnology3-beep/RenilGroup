"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export type FeatureStep = {
  step: string;
  title: string;
  content: string;
  image: string;
};

type FeatureStepsProps = {
  features: FeatureStep[];
  autoPlayInterval?: number;
  imageHeightClassName?: string;
  className?: string;
};

export function FeatureSteps({
  features,
  autoPlayInterval = 4500,
  imageHeightClassName = "h-[240px] sm:h-[320px] lg:h-[420px]",
  className,
}: FeatureStepsProps) {
  const reduceMotion = useReducedMotion();
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduceMotion || paused || features.length <= 1) return;

    const tickMs = 50;
    const increment = (100 * tickMs) / autoPlayInterval;
    const timer = window.setInterval(() => {
      setProgress((prev) => {
        if (prev + increment >= 100) {
          setCurrentFeature((i) => (i + 1) % features.length);
          return 0;
        }
        return prev + increment;
      });
    }, tickMs);

    return () => window.clearInterval(timer);
  }, [autoPlayInterval, features.length, paused, reduceMotion]);

  const selectFeature = (index: number) => {
    setCurrentFeature(index);
    setProgress(0);
  };

  return (
    <div
      className={cn("relative", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setPaused(false);
        }
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Steps */}
        <div className="order-2 md:order-1 space-y-3 sm:space-y-4">
          {features.map((feature, index) => {
            const isActive = index === currentFeature;
            const isComplete = index < currentFeature;

            return (
              <button
                key={feature.step}
                type="button"
                onClick={() => selectFeature(index)}
                className={cn(
                  "group relative w-full text-left rounded-2xl border px-4 py-4 sm:px-5 sm:py-5 transition-all duration-500",
                  isActive
                    ? "border-[#a98345]/45 bg-[#fffdf9] shadow-[0_18px_40px_-28px_rgba(34,32,29,0.45)]"
                    : "border-transparent bg-transparent hover:border-[#a98345]/20 hover:bg-[#fffdf9]/70"
                )}
                aria-current={isActive ? "step" : undefined}
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  <motion.div
                    animate={{
                      scale: isActive && !reduceMotion ? 1.08 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 320, damping: 22 }}
                    className={cn(
                      "relative mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-500",
                      isActive || isComplete
                        ? "border-[#a98345] bg-[#a98345] text-[#fffdf9]"
                        : "border-[#a98345]/30 bg-[#f8f5ee] text-[#8e6d3e]"
                    )}
                  >
                    {isComplete || isActive ? (
                      <Check className="h-4 w-4" strokeWidth={2.5} />
                    ) : (
                      <span className="font-serif text-sm">{index + 1}</span>
                    )}
                  </motion.div>

                  <div className="min-w-0 flex-1 pt-0.5">
                    <div className="flex items-baseline gap-2">
                      <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[#b99a68]">
                        {feature.step}
                      </span>
                    </div>
                    <h3
                      className={cn(
                        "mt-1 font-serif text-xl sm:text-2xl leading-snug transition-colors duration-300",
                        isActive ? "text-[#22201d]" : "text-[#746d63]"
                      )}
                    >
                      {feature.title}
                    </h3>
                    <motion.div
                      initial={false}
                      animate={{
                        height: isActive ? "auto" : 0,
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="mt-2 text-sm text-[#746d63] leading-relaxed max-w-md">
                        {feature.content}
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* Progress rail */}
                {isActive && !reduceMotion && (
                  <div className="absolute inset-x-4 bottom-0 h-[2px] overflow-hidden rounded-full bg-[#a98345]/15">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#a98345] to-[#b99a68]"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Image stage */}
        <div
          className={cn(
            "order-1 md:order-2 relative overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] border border-[#a98345]/25 bg-[#201e1a] shadow-[0_30px_80px_-40px_rgba(34,32,29,0.5)]",
            imageHeightClassName
          )}
          style={{ perspective: 1200 }}
        >
          <AnimatePresence mode="wait">
            {features.map(
              (feature, index) =>
                index === currentFeature && (
                  <motion.div
                    key={feature.image}
                    className="absolute inset-0"
                    initial={
                      reduceMotion
                        ? { opacity: 0 }
                        : { y: 80, opacity: 0, rotateX: -16, scale: 0.96 }
                    }
                    animate={{ y: 0, opacity: 1, rotateX: 0, scale: 1 }}
                    exit={
                      reduceMotion
                        ? { opacity: 0 }
                        : { y: -60, opacity: 0, rotateX: 12, scale: 0.98 }
                    }
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 560px"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#161513]/70 via-[#161513]/15 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                      <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#d8c7ad]">
                        {feature.step}
                      </span>
                      <p className="mt-1 font-serif text-lg sm:text-xl italic text-[#fffdf9]">
                        {feature.title}
                      </p>
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
