import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export default function NotFound() {
  return (
    <div className="pt-24 min-h-screen bg-[#f8f5ee] flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center py-20">
        <div className="relative h-16 w-16 mx-auto mb-6">
          <Image
            src="/logo/renil-crest-v2.png"
            alt="Renil Logo Crest"
            fill
            className="object-contain"
          />
        </div>
        <span className="section-eyebrow block mb-2">
          Error 404
        </span>
        <h1 className="heading-1 text-[#22201d] mb-4">
          Page Not Found
        </h1>
        <p className="text-sm text-[#746d63] mb-8 leading-relaxed">
          The requested corporate page could not be located. Please return to the
          main ecosystem overview.
        </p>
        <ShimmerButton href="/" variant="primary" size="md" showArrow>
          Return to Homepage
        </ShimmerButton>
      </div>
    </div>
  );
}
