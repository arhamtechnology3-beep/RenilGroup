"use client";

import React from "react";
import {
  InteractiveHoverButton,
  type InteractiveHoverButtonProps,
} from "./interactive-hover-button";

export type ShimmerButtonProps = InteractiveHoverButtonProps;

/**
 * Site-wide CTA proxy — Interactive Hover Button (Magic UI / Dillion Verma).
 * Keeps existing ShimmerButton import paths working across the app.
 */
export function ShimmerButton(props: ShimmerButtonProps) {
  return <InteractiveHoverButton {...props} />;
}

export { InteractiveHoverButton };
export default InteractiveHoverButton;
