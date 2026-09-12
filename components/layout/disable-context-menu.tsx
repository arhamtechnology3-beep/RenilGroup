"use client";

import { useEffect } from "react";

/**
 * Blocks the browser context menu (right-click / long-press).
 * Uses capture so it wins over child handlers, and covers document + window.
 */
export function DisableContextMenu() {
  useEffect(() => {
    const block = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    const opts: AddEventListenerOptions = { capture: true };
    document.addEventListener("contextmenu", block, opts);
    window.addEventListener("contextmenu", block, opts);
    document.documentElement.addEventListener("contextmenu", block, opts);
    document.body?.addEventListener("contextmenu", block, opts);

    return () => {
      document.removeEventListener("contextmenu", block, opts);
      window.removeEventListener("contextmenu", block, opts);
      document.documentElement.removeEventListener("contextmenu", block, opts);
      document.body?.removeEventListener("contextmenu", block, opts);
    };
  }, []);

  return null;
}
