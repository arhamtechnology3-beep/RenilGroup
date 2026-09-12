"use client";

import { useEffect, useState } from "react";

const GATE_ID = "floater-gate";

/**
 * Shows floaters after the homepage “One vision / Multiple avenues” section
 * enters the upper viewport. On pages without the gate, always active.
 */
export function useFloaterGate() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const gate = document.getElementById(GATE_ID);

    if (!gate) {
      setActive(true);
      return;
    }

    const update = () => {
      const rect = gate.getBoundingClientRect();
      // Activate once the vision heading reaches the upper half of the screen
      setActive(rect.top <= window.innerHeight * 0.55);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return active;
}
