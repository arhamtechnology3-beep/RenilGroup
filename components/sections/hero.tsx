"use client";

import React from "react";
import { ScrollLockedVideoHero } from "@/components/ui/scroll-locked-video-hero";

export function Hero() {
  return (
    <ScrollLockedVideoHero
      videoSrc="/video/renil-hero.mp4"
      posterSrc="/images/hero-arch-wall.png"
      eyebrow="RENIL GROUPS • WE GROW TOGETHER"
      title={
        <>
          Building businesses. <br />
          <span className="italic font-normal text-[#d8c7ad] gold-gradient-text">
            Creating value.
          </span>
        </>
      }
      subtitle="A growing business group with an entrepreneurial mindset — bringing together investment opportunities, development, hospitality and logistics under one vision."
      revealedTitle={
        <>
          One Vision. <br />
          <span className="italic font-normal text-[#d8c7ad] gold-gradient-text">
            Multiple Avenues For Growth.
          </span>
        </>
      }
      revealedSubtitle="Where opportunity becomes valuable when vision is matched with execution across Ventures, Developments, Hospitality, and Logistics."
      scrollHint="SCROLL TO EXPLORE"
      primaryCtaText="Present Your Business"
      primaryCtaHref="/submit-your-business"
      secondaryCtaText="Explore Our Businesses"
      secondaryCtaHref="/businesses"
    />
  );
}
