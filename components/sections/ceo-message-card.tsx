"use client";

import React from "react";
import { BorderBeam } from "@/components/ui/border-beam";
import { cn } from "@/lib/utils";

type CeoMessageCardProps = {
  quote: string;
  className?: string;
};

/** Founder-page CEO quote with a clear hover treatment. */
export function CeoMessageCard({ quote, className }: CeoMessageCardProps) {
  return (
    <div
      className={cn(
        "group/quote relative overflow-hidden rounded-2xl border border-[#a98345]/25 bg-[#fffdf9] p-[2px] shadow-sm",
        "transition-all duration-500 ease-out",
        "hover:-translate-y-1 hover:border-[#a98345]/60 hover:shadow-[0_22px_48px_-22px_rgba(142,109,62,0.55)]",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/quote:opacity-100"
        aria-hidden
      >
        <BorderBeam colorFrom="#fffdf9" colorTo="#a98345" duration={4} />
        <BorderBeam
          colorFrom="#b99a68"
          colorTo="#8e6d3e"
          duration={5.5}
          reverse
          className="opacity-90"
        />
      </div>

      <div className="relative z-[1] rounded-[0.9rem] border-l-[3px] border-l-[#a98345] bg-[#fffdf9] px-5 py-5 sm:px-6 sm:py-6 transition-colors duration-500 group-hover/quote:bg-white group-hover/quote:border-l-[#8e6d3e]">
        <span
          className="pointer-events-none absolute -top-2 right-3 select-none font-serif text-7xl leading-none text-[#a98345]/20 transition-all duration-500 group-hover/quote:scale-110 group-hover/quote:text-[#a98345]/45"
          aria-hidden="true"
        >
          “
        </span>

        <p className="relative mb-2 text-xs font-bold uppercase tracking-[0.22em] text-[#8e6d3e] transition-all duration-500 group-hover/quote:tracking-[0.28em] group-hover/quote:text-[#a98345]">
          CEO Message
        </p>

        <p className="relative font-serif text-xl italic leading-snug text-[#22201d] transition-colors duration-500 sm:text-2xl group-hover/quote:text-[#201e1a]">
          “{quote}”
        </p>

        <span
          className="mt-5 block h-px w-10 origin-left bg-[#a98345]/40 transition-all duration-500 group-hover/quote:w-32 group-hover/quote:bg-[#a98345]"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
