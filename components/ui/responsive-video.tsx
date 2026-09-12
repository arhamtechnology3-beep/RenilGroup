"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResponsiveVideoProps {
  videoSrc: string;
  posterSrc: string;
  alt: string;
  className?: string;
  overlayOpacity?: string;
}

export function ResponsiveVideo({
  videoSrc,
  posterSrc,
  alt,
  className,
  overlayOpacity = "bg-black/40",
}: ResponsiveVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      {/* Poster image fallback while loading or if reduced motion is preferred */}
      <Image
        src={posterSrc}
        alt={alt}
        fill
        priority
        className={cn(
          "object-cover object-center transition-opacity duration-1000",
          isVideoLoaded && !prefersReducedMotion ? "opacity-0" : "opacity-100"
        )}
      />

      {/* Background Video */}
      {!prefersReducedMotion && (
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          onCanPlay={() => setIsVideoLoaded(true)}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000",
            isVideoLoaded ? "opacity-100" : "opacity-0"
          )}
        />
      )}

      {/* Cinematic Dark/Warm Overlay */}
      <div className={cn("absolute inset-0", overlayOpacity)} />
      <div className="absolute inset-0 bg-gradient-to-t from-[#201e1a] via-transparent to-[#201e1a]/40" />

      {/* Discreet Video Control Bar */}
      {isVideoLoaded && !prefersReducedMotion && (
        <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 backdrop-blur-md transition-opacity hover:bg-black/60">
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause background video" : "Play background video"}
            className="text-white/80 transition-colors hover:text-white"
          >
            {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
          </button>
          <span className="h-3 w-[1px] bg-white/20" />
          <button
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            className="text-white/80 transition-colors hover:text-white"
          >
            {isMuted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
          </button>
        </div>
      )}
    </div>
  );
}
