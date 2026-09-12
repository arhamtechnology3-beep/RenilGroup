"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ChevronDown, Sparkles } from "lucide-react";

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

function isFiniteDuration(d: number) {
  return Number.isFinite(d) && d > 0;
}

export function ScrollLockedVideoHero({
  videoSrc = "/video/renil-hero.mp4",
  posterSrc = "/images/hero-arch-wall.png",
  eyebrow = "RENIL GROUPS • WE GROW TOGETHER",
  title = "Building businesses. Creating value.",
  subtitle = "A growing business group with an entrepreneurial mindset — bringing together investment opportunities, development, hospitality and logistics under one vision.",
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

  const [isVideoReady, setIsVideoReady] = React.useState(false);

  const targetProgress = React.useRef(0);
  const currentProgress = React.useRef(0);
  const videoDuration = React.useRef(0);
  const pendingSeek = React.useRef<number | null>(null);
  const lastSeekAt = React.useRef(0);
  const scrollRange = React.useRef(1);
  const reducedMotion = React.useRef(false);

  const measureScrollRange = React.useCallback(() => {
    const container = containerRef.current;
    const sticky = stickyRef.current;
    if (!container || !sticky) return;
    // Use sticky pane height (svh-stable) — not window.innerHeight, which jumps on
    // mobile URL-bar show/hide and made scrub progress intermittent.
    const range = Math.max(1, container.offsetHeight - sticky.clientHeight);
    scrollRange.current = range;
  }, []);

  const readProgress = React.useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    measureScrollRange();
    const rect = container.getBoundingClientRect();
    const progress = clamp(-rect.top / scrollRange.current, 0, 1);
    targetProgress.current = progress;
  }, [measureScrollRange]);

  const syncVideoDuration = React.useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isFiniteDuration(video.duration)) {
      videoDuration.current = video.duration;
      setIsVideoReady(true);
      try {
        video.pause();
      } catch {
        /* ignore */
      }
    }
  }, []);

  // Video metadata — mobile Safari often fires before listeners attach, or
  // reports duration late. Cover multiple events + readyState.
  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const onMeta = () => syncVideoDuration();
    video.addEventListener("loadedmetadata", onMeta);
    video.addEventListener("durationchange", onMeta);
    video.addEventListener("loadeddata", onMeta);
    video.addEventListener("canplay", onMeta);

    if (video.readyState >= 1) syncVideoDuration();

    // Kick decode on iOS after a user-gesture-free muted load
    try {
      video.load();
    } catch {
      /* ignore */
    }

    const onSeeked = () => {
      const next = pendingSeek.current;
      const v = videoRef.current;
      if (next == null || !v || !isFiniteDuration(videoDuration.current)) return;
      pendingSeek.current = null;
      if (Math.abs(v.currentTime - next) > 0.04) {
        try {
          v.currentTime = next;
        } catch {
          /* ignore */
        }
      }
    };
    video.addEventListener("seeked", onSeeked);

    return () => {
      video.removeEventListener("loadedmetadata", onMeta);
      video.removeEventListener("durationchange", onMeta);
      video.removeEventListener("loadeddata", onMeta);
      video.removeEventListener("canplay", onMeta);
      video.removeEventListener("seeked", onSeeked);
    };
  }, [syncVideoDuration]);

  // Scroll + viewport listeners
  React.useEffect(() => {
    readProgress();
    const onScroll = () => readProgress();
    const onResize = () => {
      measureScrollRange();
      readProgress();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("orientationchange", onResize);
    window.visualViewport?.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
      window.visualViewport?.removeEventListener("resize", onResize);
    };
  }, [measureScrollRange, readProgress]);

  // RAF lerp + scrub
  React.useEffect(() => {
    let animId = 0;
    const isCoarse =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches;

    const updateFrame = (now: number) => {
      const lerp = reducedMotion.current ? 1 : isCoarse ? 0.22 : 0.15;
      currentProgress.current +=
        (targetProgress.current - currentProgress.current) * lerp;
      const p = currentProgress.current;

      const video = videoRef.current;
      const duration = videoDuration.current;

      if (
        video &&
        isFiniteDuration(duration) &&
        !reducedMotion.current
      ) {
        const targetTime = p * duration;
        const minDelta = isCoarse ? 0.08 : 0.03;
        const minInterval = isCoarse ? 50 : 16;

        if (Math.abs(video.currentTime - targetTime) > minDelta) {
          if (video.seeking) {
            pendingSeek.current = targetTime;
          } else if (now - lastSeekAt.current >= minInterval) {
            lastSeekAt.current = now;
            pendingSeek.current = null;
            try {
              const v = video as HTMLVideoElement & {
                fastSeek?: (t: number) => void;
              };
              if (typeof v.fastSeek === "function") v.fastSeek(targetTime);
              else video.currentTime = targetTime;
            } catch {
              pendingSeek.current = targetTime;
            }
          } else {
            pendingSeek.current = targetTime;
          }
        }

        const scale = 1 + p * (isCoarse ? 0.05 : 0.08);
        video.style.transform = `scale3d(${scale}, ${scale}, 1)`;
      }

      if (introContentRef.current) {
        const introOpacity = 1 - clamp((p - 0.03) / 0.32, 0, 1);
        introContentRef.current.style.opacity = String(introOpacity);
        introContentRef.current.style.transform = `translate3d(0, ${
          (1 - introOpacity) * -16
        }px, 0)`;
        introContentRef.current.style.pointerEvents =
          introOpacity < 0.12 ? "none" : "auto";
      }

      if (scrollHintRef.current) {
        scrollHintRef.current.style.opacity = String(
          clamp(1 - p * 4, 0, 1),
        );
      }

      if (revealedContentRef.current) {
        const revealOpacity = clamp((p - 0.42) / 0.28, 0, 1);
        revealedContentRef.current.style.opacity = String(revealOpacity);
        revealedContentRef.current.style.transform = `translate3d(0, ${
          (1 - revealOpacity) * 12
        }px, 0)`;
        revealedContentRef.current.style.pointerEvents =
          revealOpacity < 0.2 ? "none" : "auto";
      }

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
        // Extra scroll room for scrub; shorter on small phones
        "relative w-full bg-[#161513]",
        "h-[155svh] min-[400px]:h-[165svh] sm:h-[185svh] lg:h-[220svh]",
        className,
      )}
    >
      <div
        ref={stickyRef}
        style={{
          transform: "translate3d(0, 0, 0)",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
        }}
        // svh keeps sticky height stable when mobile browser chrome shows/hides
        className="sticky top-0 flex h-[100svh] w-full items-center justify-center overflow-hidden"
      >
        <Image
          src={posterSrc}
          alt="Renil Groups Visual Poster"
          fill
          priority
          sizes="100vw"
          className={cn(
            "object-cover object-center transition-opacity duration-500",
            isVideoReady ? "opacity-0 pointer-events-none" : "opacity-100",
          )}
        />

        <video
          ref={videoRef}
          src={videoSrc}
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          style={{
            transform: "scale3d(1, 1, 1)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
          className={cn(
            "absolute inset-0 h-full w-full object-cover object-center will-change-transform",
            isVideoReady ? "opacity-100" : "opacity-0",
          )}
        />

        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#161513]/95 via-[#161513]/55 to-[#161513]/80"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-1/3 left-1/2 h-[260px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b99a68]/15 blur-[90px] sm:h-[400px] sm:w-[500px] sm:blur-[140px] lg:h-[500px] lg:w-[700px]"
          aria-hidden="true"
        />

        {/* Intro */}
        <div
          ref={introContentRef}
          className="relative z-20 mx-auto flex w-full max-w-[1280px] flex-col items-center justify-center px-4 pb-[max(5.5rem,calc(env(safe-area-inset-bottom)+4.5rem))] pt-[max(4.5rem,calc(env(safe-area-inset-top)+3.5rem))] text-center will-change-transform sm:px-6 sm:pb-14 sm:pt-16 lg:px-8 lg:pt-8"
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#d8c7ad]/30 bg-black/45 px-3 py-1 shadow-md backdrop-blur-md sm:mb-5 sm:gap-2.5 sm:px-4 sm:py-1.5">
            <div className="relative h-3.5 w-3.5 sm:h-4 sm:w-4">
              <Image
                src="/logo/renil-crest-v2.png"
                alt="Renil Crest Logo"
                fill
                className="object-contain brightness-125"
              />
            </div>
            <span className="text-[8px] font-semibold uppercase tracking-[0.16em] text-[#d8c7ad] sm:text-[11px] sm:tracking-[0.22em]">
              {eyebrow}
            </span>
          </div>

          <h1 className="heading-display mb-3 max-w-5xl text-[clamp(1.85rem,7.2vw,5.5rem)] text-[#fffdf9] drop-shadow-md sm:mb-5 md:mb-6">
            {title}
          </h1>

          <p className="mb-5 max-w-[20rem] text-[13px] font-light leading-relaxed text-[#d8c7ad]/90 drop-shadow sm:mb-8 sm:max-w-xl sm:text-base md:mb-10 md:max-w-2xl md:text-lg lg:text-xl">
            {subtitle}
          </p>

          <div className="flex w-full max-w-sm flex-col items-stretch gap-2.5 px-1 sm:max-w-none sm:w-auto sm:flex-row sm:items-center sm:gap-4 sm:px-0 md:gap-5">
            <ShimmerButton
              href={primaryCtaHref}
              variant="primary"
              size="md"
              showArrow
              className="w-full py-3 text-xs shadow-xl sm:w-auto sm:py-3.5 sm:text-sm"
            >
              {primaryCtaText}
            </ShimmerButton>

            <ShimmerButton
              href={secondaryCtaHref}
              variant="outlineInverse"
              size="md"
              className="w-full py-3 text-xs sm:w-auto sm:py-3.5 sm:text-sm"
            >
              {secondaryCtaText}
            </ShimmerButton>
          </div>
        </div>

        {/* Revealed dock */}
        <div
          ref={revealedContentRef}
          style={{ opacity: 0 }}
          className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex flex-col items-center justify-end px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] text-center will-change-transform sm:px-6 sm:pb-5 lg:px-8 lg:pb-6"
        >
          <div className="pointer-events-auto flex w-full max-w-4xl flex-col items-center justify-between gap-3 rounded-2xl border border-[#d8c7ad]/30 bg-[#161513]/92 px-3.5 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.7)] backdrop-blur-2xl sm:flex-row sm:gap-4 sm:rounded-full sm:bg-[#161513]/85 sm:px-7 sm:py-3.5">
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <div className="mb-0.5 inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.22em] text-[#b99a68] sm:text-[10px] sm:tracking-[0.25em]">
                <Sparkles className="h-3 w-3 text-[#b99a68]" />
                <span>THE RENIL ECOSYSTEM</span>
              </div>
              <p className="font-serif text-[13px] tracking-tight text-[#fffdf9] sm:text-base md:text-lg">
                One Vision.{" "}
                <span className="font-normal italic text-[#d8c7ad]">
                  Multiple Avenues For Growth.
                </span>
              </p>
            </div>

            <div className="flex w-full flex-col items-stretch justify-center gap-2 sm:w-auto sm:flex-row sm:items-center sm:gap-3">
              <ShimmerButton
                href="/submit-your-business"
                variant="primary"
                size="sm"
                showArrow
                className="w-full px-4 py-2.5 text-xs font-medium shadow-md sm:w-auto sm:flex-initial sm:px-5"
              >
                Present Your Business
              </ShimmerButton>
              <ShimmerButton
                href="/businesses"
                variant="outlineInverse"
                size="sm"
                className="w-full px-4 py-2.5 text-xs font-medium sm:w-auto sm:flex-initial sm:px-5"
              >
                Explore Verticals
              </ShimmerButton>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          ref={scrollHintRef}
          className="pointer-events-none absolute bottom-[max(1rem,calc(env(safe-area-inset-bottom)+0.75rem))] left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1.5 text-[#d8c7ad]/70 transition-opacity duration-300 sm:bottom-7 sm:gap-2"
        >
          <span className="text-[8px] font-semibold uppercase tracking-[0.25em] sm:text-[10px] sm:tracking-[0.3em]">
            {scrollHint}
          </span>
          <ChevronDown className="h-3.5 w-3.5 animate-bounce text-[#b99a68] sm:h-4 sm:w-4" />
        </div>

        <div className="absolute right-0 bottom-0 left-0 z-30 h-[2.5px] bg-white/10 sm:h-[3px]">
          <div
            ref={progressBarRef}
            className="h-full w-full origin-left bg-gradient-to-r from-[#a98345] via-[#d8c7ad] to-[#b99a68] will-change-transform"
            style={{ transform: "scaleX(0)" }}
          />
        </div>
      </div>
    </div>
  );
}

export default ScrollLockedVideoHero;
