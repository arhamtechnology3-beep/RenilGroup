"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ChevronDown, Play, Pause, Sparkles } from "lucide-react";

interface ScrollLockedVideoHeroProps {
  videoSrc?: string;
  posterSrc?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  subtitle?: string;
  revealedTitle?: React.ReactNode;
  revealedSubtitle?: string;
  scrollHint?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  className?: string;
}

function clamp(val: number, min: number, max: number) {
  return Math.min(Math.max(val, min), max);
}

export function ScrollLockedVideoHero({
  videoSrc = "/video/renil-hero.mp4",
  posterSrc = "/images/hero-arch-wall.png",
  eyebrow = "RENIL GROUPS • WE GROW TOGETHER",
  title = "Building businesses. Creating value.",
  subtitle = "A growing business group with an entrepreneurial mindset — bringing together investment opportunities, development, hospitality and logistics under one vision.",
  revealedTitle = "From Vision To Execution.",
  revealedSubtitle = "Four complementary verticals engineered for generational value creation and sustainable enterprise scale.",
  scrollHint = "SCROLL TO EXPLORE",
  primaryCtaText = "Present Your Business",
  primaryCtaHref = "/submit-your-business",
  secondaryCtaText = "Explore Our Businesses",
  secondaryCtaHref = "/businesses",
  className,
}: ScrollLockedVideoHeroProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const stickyRef = React.useRef<HTMLDivElement>(null);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const progressBarRef = React.useRef<HTMLDivElement>(null);
  const introContentRef = React.useRef<HTMLDivElement>(null);
  const revealedContentRef = React.useRef<HTMLDivElement>(null);
  const scrollHintRef = React.useRef<HTMLDivElement>(null);

  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [hasScrolled, setHasScrolled] = React.useState(false);

  // Target and current progress values for ultra-smooth lerp
  const targetProgress = React.useRef(0);
  const currentProgress = React.useRef(0);
  const videoDuration = React.useRef(0);
  const isSeeking = React.useRef(false);
  const pendingSeek = React.useRef<number | null>(null);

  // Video loaded setup
  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onLoadedData = () => {
      videoDuration.current = video.duration || 0;
      setIsVideoLoaded(true);
      // Ensure video is paused so scroll exclusively controls the playback time
      try {
        video.pause();
      } catch {}
    };

    video.addEventListener("loadeddata", onLoadedData);

    return () => {
      video.removeEventListener("loadeddata", onLoadedData);
    };
  }, []);

  // Native scroll tracking within the locked container
  React.useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollDist = containerRef.current.offsetHeight - window.innerHeight;
      if (scrollDist <= 0) return;

      const progress = clamp(-rect.top / scrollDist, 0, 1);
      targetProgress.current = progress;

      if (progress > 0.01) {
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth lerp frame loop (Hardware-accelerated, zero-flicker)
  React.useEffect(() => {
    let animId: number;

    const updateFrame = () => {
      // Lerp progress smoothly
      currentProgress.current +=
        (targetProgress.current - currentProgress.current) * 0.15;
      const p = currentProgress.current;

      // Video scrub synchronization (Instant seek without frame flashing)
      const video = videoRef.current;
      if (video && videoDuration.current > 0) {
        const targetTime = p * videoDuration.current;
        if (!video.seeking && Math.abs(video.currentTime - targetTime) > 0.03) {
          const v = video as HTMLVideoElement & { fastSeek?: (time: number) => void };
          if (typeof v.fastSeek === "function") {
            try {
              v.fastSeek(targetTime);
            } catch {
              video.currentTime = targetTime;
            }
          } else {
            video.currentTime = targetTime;
          }
        }

        // Scale transform from 1.0 to 1.08 with hardware compositing
        const scale = 1 + p * 0.08;
        video.style.transform = `scale3d(${scale}, ${scale}, 1)`;
      }

      // Initial intro text fade out as user scrolls (GPU translate3d + opacity, zero blur flicker)
      if (introContentRef.current) {
        const introOpacity = 1 - clamp((p - 0.04) / 0.36, 0, 1);
        introContentRef.current.style.opacity = String(introOpacity);
        introContentRef.current.style.transform = `translate3d(0, ${
          (1 - introOpacity) * -20
        }px, 0)`;
        introContentRef.current.style.pointerEvents =
          introOpacity < 0.1 ? "none" : "auto";
      }

      // Scroll hint visibility
      if (scrollHintRef.current) {
        const hintOpacity = clamp(1 - p * 3.5, 0, 1);
        scrollHintRef.current.style.opacity = String(hintOpacity);
      }

      // Secondary climax reveal text fade in (GPU translate3d + opacity, zero blur flicker)
      if (revealedContentRef.current) {
        const revealOpacity = clamp((p - 0.46) / 0.30, 0, 1);
        revealedContentRef.current.style.opacity = String(revealOpacity);
        revealedContentRef.current.style.transform = `translate3d(0, ${
          (1 - revealOpacity) * 14
        }px, 0)`;
        revealedContentRef.current.style.pointerEvents =
          revealOpacity < 0.2 ? "none" : "auto";
      }

      // Bottom progress bar
      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${p})`;
      }

      animId = requestAnimationFrame(updateFrame);
    };

    animId = requestAnimationFrame(updateFrame);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full h-[170vh] sm:h-[190vh] lg:h-[230vh] bg-[#161513]",
        className
      )}
    >
      {/* Sticky Fullscreen Locked Viewport with dynamic 100dvh */}
      <div
        ref={stickyRef}
        style={{
          transform: "translate3d(0, 0, 0)",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
        }}
        className="sticky top-0 h-[100dvh] w-full overflow-hidden flex items-center justify-center"
      >
        {/* Poster Image while Video Loads */}
        <Image
          src={posterSrc}
          alt="Renil Groups Visual Poster"
          fill
          priority
          className={cn(
            "object-cover object-center",
            isVideoLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
          )}
        />

        {/* Scroll-Locked Video with Continuous Scrubbing (Hardware-accelerated) */}
        <video
          ref={videoRef}
          src={videoSrc}
          muted
          playsInline
          loop={false}
          preload="auto"
          style={{
            transform: "scale3d(1, 1, 1)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
          className={cn(
            "absolute inset-0 w-full h-full object-cover object-center will-change-transform",
            isVideoLoaded ? "opacity-100" : "opacity-0"
          )}
        />

        {/* Cinematic Luxury Overlays */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#161513]/95 via-[#161513]/50 to-[#161513]/75 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] lg:w-[700px] h-[300px] sm:h-[400px] lg:h-[500px] bg-[#b99a68]/15 rounded-full blur-[100px] sm:blur-[140px]"
          aria-hidden="true"
        />

        {/* 1. Initial State: Headline, Copy & CTAs */}
        <div
          ref={introContentRef}
          className="relative z-20 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-8 md:pt-0 pb-16 sm:pb-12 text-center flex flex-col items-center justify-center will-change-transform"
        >
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 sm:gap-2.5 rounded-full border border-[#d8c7ad]/30 bg-black/45 px-3 py-1 sm:px-4 sm:py-1.5 backdrop-blur-md mb-3 sm:mb-5 md:mb-6 shadow-md">
            <div className="relative h-3.5 w-3.5 sm:h-4 sm:w-4">
              <Image
                src="/logo/renil-crest-v2.png"
                alt="Renil Crest Logo"
                fill
                className="object-contain brightness-125"
              />
            </div>
            <span className="text-[9px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.22em] font-semibold text-[#d8c7ad]">
              {eyebrow}
            </span>
          </div>

          {/* Headline */}
          <h1 className="heading-display text-[#fffdf9] max-w-5xl mb-3 sm:mb-5 md:mb-6 drop-shadow-md">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#d8c7ad]/90 max-w-md sm:max-w-xl md:max-w-2xl font-light leading-relaxed mb-6 sm:mb-8 md:mb-10 drop-shadow">
            {subtitle}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-4 md:gap-5 w-full sm:w-auto px-4 sm:px-0">
            <ShimmerButton
              href={primaryCtaHref}
              variant="primary"
              size="md"
              showArrow
              className="w-full sm:w-auto shadow-xl py-3 sm:py-3.5 text-xs sm:text-sm"
            >
              {primaryCtaText}
            </ShimmerButton>

            <ShimmerButton
              href={secondaryCtaHref}
              variant="outlineInverse"
              size="md"
              className="w-full sm:w-auto py-3 sm:py-3.5 text-xs sm:text-sm"
            >
              {secondaryCtaText}
            </ShimmerButton>
          </div>
        </div>

        {/* 2. Revealed Climax State: Sleek Executive Floating Dock */}
        <div
          ref={revealedContentRef}
          style={{ opacity: 0 }}
          className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-center justify-end px-3 sm:px-6 lg:px-8 pb-3 sm:pb-5 lg:pb-6 text-center will-change-transform pointer-events-none"
        >
          <div className="w-full max-w-4xl bg-[#161513]/90 sm:bg-[#161513]/85 backdrop-blur-2xl border border-[#d8c7ad]/30 rounded-2xl sm:rounded-full px-4 py-3 sm:px-7 sm:py-3.5 shadow-[0_20px_60px_rgba(0,0,0,0.7)] flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 pointer-events-auto">
            {/* Left: Tagline & Group Vision */}
            <div className="flex flex-col md:items-start items-center text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] uppercase tracking-[0.25em] font-bold text-[#b99a68] mb-0.5">
                <Sparkles className="h-3 w-3 text-[#b99a68]" />
                <span>THE RENIL ECOSYSTEM</span>
              </div>
              <p className="font-serif text-sm sm:text-base md:text-lg text-[#fffdf9] tracking-tight">
                One Vision. <span className="italic text-[#d8c7ad] font-normal">Multiple Avenues For Growth.</span>
              </p>
            </div>

            {/* Right: CTA Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center">
              <ShimmerButton
                href="/submit-your-business"
                variant="primary"
                size="sm"
                showArrow
                className="w-full sm:w-auto sm:flex-initial py-2.5 px-4 sm:px-5 text-xs font-medium shadow-md"
              >
                Present Your Business
              </ShimmerButton>
              <ShimmerButton
                href="/businesses"
                variant="outlineInverse"
                size="sm"
                className="w-full sm:w-auto sm:flex-initial py-2.5 px-4 sm:px-5 text-xs font-medium"
              >
                Explore Verticals
              </ShimmerButton>
            </div>
          </div>
        </div>

        {/* Scroll Indicator at Bottom */}
        <div
          ref={scrollHintRef}
          className="absolute left-1/2 bottom-4 sm:bottom-7 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 sm:gap-2 text-[#d8c7ad]/70 pointer-events-none transition-opacity duration-300"
        >
          <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] font-semibold">
            {scrollHint}
          </span>
          <ChevronDown className="h-3.5 w-3.5 sm:h-4 sm:w-4 animate-bounce text-[#b99a68]" />
        </div>

        {/* Bottom Scrub Progress Line (21st.dev signature element) */}
        <div className="absolute left-0 right-0 bottom-0 h-[2.5px] sm:h-[3px] bg-white/10 z-30">
          <div
            ref={progressBarRef}
            className="h-full w-full bg-gradient-to-r from-[#a98345] via-[#d8c7ad] to-[#b99a68] origin-left will-change-transform"
            style={{ transform: "scaleX(0)" }}
          />
        </div>
      </div>
    </div>
  );
}

export default ScrollLockedVideoHero;
