"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { MessageCircle, Phone, X } from "lucide-react";
import { siteConfig } from "@/content/site";
import { useFloaterGate } from "@/hooks/use-floater-gate";
import { cn } from "@/lib/utils";

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/** Bottom-right WhatsApp chat floater — activates with Contact Us after vision section */
export function WhatsAppFloater() {
  const gateActive = useFloaterGate();
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const phoneDisplay = siteConfig.contact.whatsappDisplay;
  const waUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    "Hello Renil Groups — I’d like to discuss a business opportunity.",
  )}`;

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onPointer = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        panelRef.current?.contains(target) ||
        toggleRef.current?.contains(target)
      ) {
        return;
      }
      setOpen(false);
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
    };
  }, [open]);

  useEffect(() => {
    if (!gateActive) setOpen(false);
  }, [gateActive]);

  return (
    <div
      className={cn(
        "pointer-events-none fixed z-[70] flex flex-col items-end gap-3 transition-all duration-500",
        gateActive
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-6 opacity-0",
      )}
      style={{
        bottom: "max(1.25rem, env(safe-area-inset-bottom, 0px))",
        right: "max(1rem, env(safe-area-inset-right, 0px))",
      }}
      aria-hidden={!gateActive}
    >
      <div
        id={panelId}
        ref={panelRef}
        role="dialog"
        aria-label="WhatsApp chat"
        aria-hidden={!open || !gateActive}
        className={cn(
          "pointer-events-auto w-[min(calc(100vw-2rem),20.5rem)] origin-bottom-right overflow-hidden rounded-2xl border border-[#a98345]/25 bg-[#fffdf9] shadow-[0_24px_60px_-20px_rgba(32,30,26,0.55)] transition-all duration-300",
          open && gateActive
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-3 scale-95 opacity-0",
        )}
      >
        <div className="flex items-center gap-3 bg-[#075E54] px-4 py-3.5 text-white">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366] shadow-md">
            <WhatsAppGlyph className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-serif text-base leading-tight">Renil Groups</p>
            <p className="text-[11px] text-white/75">WhatsApp · Online</p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-full p-1.5 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Close WhatsApp chat"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="space-y-3 bg-[#ECE5DD] px-4 py-4">
          <div className="max-w-[92%] rounded-2xl rounded-tl-sm bg-white px-3.5 py-3 shadow-sm">
            <p className="text-sm leading-relaxed text-[#3a3530]">
              Hello — welcome to{" "}
              <span className="font-medium text-[#22201d]">Renil Groups</span>.
              How can we help you grow today?
            </p>
            <p className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-medium text-[#075E54]">
              <Phone className="h-3 w-3" />
              {phoneDisplay}
            </p>
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_-12px_rgba(37,211,102,0.85)] transition hover:bg-[#1ebe57] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
          >
            <MessageCircle className="h-4 w-4" />
            Start WhatsApp chat
          </a>
        </div>
      </div>

      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        tabIndex={gateActive ? 0 : -1}
        className="pointer-events-auto relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_36px_-10px_rgba(37,211,102,0.75)] transition-transform duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
        aria-label={open ? "Close WhatsApp chat" : "Open WhatsApp chat"}
      >
        <span
          aria-hidden
          className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/35 [animation-duration:2.4s]"
        />
        {open ? (
          <X className="relative h-6 w-6" />
        ) : (
          <WhatsAppGlyph className="relative h-7 w-7" />
        )}
      </button>
    </div>
  );
}
