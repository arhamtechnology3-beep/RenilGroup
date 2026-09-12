"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { SectionHeader } from "@/components/ui/section-index";
import { cn } from "@/lib/utils";
import {
  Building2,
  Truck,
  UtensilsCrossed,
  Rocket,
  CheckCircle2,
  Circle,
  ArrowUpRight,
} from "lucide-react";

type VerticalId =
  | "ventures"
  | "developments"
  | "hospitality"
  | "logistics";

const verticals: {
  id: VerticalId;
  label: string;
  icon: React.ElementType;
}[] = [
  { id: "ventures", label: "Ventures", icon: Rocket },
  { id: "developments", label: "Developments", icon: Building2 },
  { id: "hospitality", label: "Hospitality", icon: UtensilsCrossed },
  { id: "logistics", label: "Logistics", icon: Truck },
];

const stages = [
  { id: "idea", label: "Idea", weight: 0.75 },
  { id: "early", label: "Early revenue", weight: 0.9 },
  { id: "growth", label: "Growth", weight: 1 },
  { id: "scale", label: "Scaling", weight: 1.05 },
] as const;

type StageId = (typeof stages)[number]["id"];

type SliderKey = "market" | "team" | "traction" | "alignment";

const sliders: {
  key: SliderKey;
  label: string;
  hint: string;
}[] = [
  {
    key: "market",
    label: "Market clarity",
    hint: "Clear problem, customer, and sustainable model",
  },
  {
    key: "team",
    label: "Team & execution",
    hint: "Committed founders with ground-level capability",
  },
  {
    key: "traction",
    label: "Traction signal",
    hint: "Customers, pipeline, pilots, or proven ops",
  },
  {
    key: "alignment",
    label: "Ecosystem fit",
    hint: "Synergy with capital, property, hospitality, or logistics",
  },
];

function scoreTier(score: number) {
  if (score >= 78) {
    return {
      label: "Strong fit to explore",
      tone: "text-[#8e6d3e]",
      bar: "bg-[#a98345]",
      summary:
        "Your inputs suggest meaningful alignment with how Renil evaluates opportunities. A formal submission is a sensible next step.",
    };
  }
  if (score >= 55) {
    return {
      label: "Promising — refine & discuss",
      tone: "text-[#746d63]",
      bar: "bg-[#b99a68]",
      summary:
        "There is potential. Strengthen clarity on model, team, or traction before or while you submit for review.",
    };
  }
  return {
    label: "Early — keep building",
    tone: "text-[#9b9184]",
    bar: "bg-[#d8c7ad]",
    summary:
      "Focus on a sharper problem definition, execution proof, and long-term value thesis before seeking partnership.",
  };
}

/**
 * Partnership Fit Calculator — interactive readiness tool for Renil Ventures /
 * ecosystem opportunities. UI pattern inspired by 21st.dev interactive pricing
 * calculators (toggles, live result card, feature checklist).
 */
export function PartnershipCalculator() {
  const [vertical, setVertical] = useState<VerticalId>("ventures");
  const [stage, setStage] = useState<StageId>("early");
  const [values, setValues] = useState<Record<SliderKey, number>>({
    market: 65,
    team: 70,
    traction: 50,
    alignment: 60,
  });
  const [capitalNeed, setCapitalNeed] = useState(50); // 0–100 maps to bands

  const stageWeight = stages.find((s) => s.id === stage)?.weight ?? 1;

  const { score, breakdown, tier, capitalLabel } = useMemo(() => {
    const raw =
      values.market * 0.28 +
      values.team * 0.28 +
      values.traction * 0.22 +
      values.alignment * 0.22;

    const adjusted = Math.round(
      Math.min(100, Math.max(0, raw * stageWeight)),
    );

    const capitalLabel =
      capitalNeed < 25
        ? "Under ₹50L / advisory-first"
        : capitalNeed < 50
          ? "₹50L – ₹2Cr range"
          : capitalNeed < 75
            ? "₹2Cr – ₹10Cr range"
            : "₹10Cr+ / strategic"

    const breakdown = [
      {
        label: "Business potential",
        ok: values.market >= 55,
        detail: "Problem, market, and model clarity",
      },
      {
        label: "People & execution",
        ok: values.team >= 55,
        detail: "Founder commitment and delivery capacity",
      },
      {
        label: "Traction / proof",
        ok: values.traction >= 45,
        detail: "Evidence the opportunity is real",
      },
      {
        label: "Opportunity fit",
        ok: values.alignment >= 50,
        detail: "Alignment with Renil’s ecosystem",
      },
      {
        label: "Stage readiness",
        ok: stage !== "idea" || adjusted >= 50,
        detail: stages.find((s) => s.id === stage)?.label ?? stage,
      },
    ];

    return {
      score: adjusted,
      breakdown,
      tier: scoreTier(adjusted),
      capitalLabel,
    };
  }, [values, stageWeight, stage, capitalNeed]);

  return (
    <section
      id="partnership-fit"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-32 section-bg-warm"
      aria-labelledby="calculator-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(169,131,69,0.07),_transparent_55%)]"
      />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="06"
          eyebrow="Partnership Fit"
          align="center"
          className="max-w-2xl mx-auto mb-10 sm:mb-14"
          titleId="calculator-heading"
          title={
            <>
              Check your fit.{" "}
              <span className="italic text-[#8e6d3e]">Before you submit.</span>
            </>
          }
          description="A quick readiness calculator based on how Renil evaluates opportunities — business potential, people & execution, and ecosystem fit across ventures, developments, hospitality, and logistics."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Controls */}
          <div className="lg:col-span-7 rounded-[1.75rem] border border-[#a98345]/25 bg-[#fffdf9] p-5 sm:p-8 shadow-[0_20px_50px_-36px_rgba(34,32,29,0.4)]">
            {/* Vertical toggle */}
            <p className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#a98345] mb-3">
              Which vertical feels closest?
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {verticals.map((v) => {
                const Icon = v.icon;
                const active = vertical === v.id;
                return (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setVertical(v.id)}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-medium transition-all",
                      active
                        ? "border-[#22201d] bg-[#201e1a] text-[#fffdf9] shadow-md"
                        : "border-[#a98345]/25 bg-[#f8f5ee] text-[#746d63] hover:border-[#a98345]/50",
                    )}
                  >
                    <Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
                    {v.label}
                  </button>
                );
              })}
            </div>

            {/* Stage pills */}
            <p className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#a98345] mb-3">
              Business stage
            </p>
            <div className="flex w-full flex-col gap-1 rounded-2xl border border-[#a98345]/20 bg-[#f8f5ee] p-1 mb-8 sm:inline-flex sm:w-auto sm:flex-row sm:flex-wrap sm:rounded-full">
              {stages.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setStage(s.id)}
                  className={cn(
                    "rounded-xl sm:rounded-full px-3.5 py-2.5 sm:py-2 text-xs font-medium transition-all text-left sm:text-center",
                    stage === s.id
                      ? "bg-[#fffdf9] text-[#22201d] shadow-sm border border-[#a98345]/30"
                      : "text-[#746d63] hover:text-[#22201d]",
                  )}
                >
                  {s.label}
                </button>
              ))}
            </div>

            {/* Sliders */}
            <div className="space-y-6">
              {sliders.map((s) => (
                <label key={s.key} className="block">
                  <div className="mb-2 flex items-end justify-between gap-3">
                    <div>
                      <span className="text-sm font-semibold text-[#22201d]">
                        {s.label}
                      </span>
                      <p className="text-xs text-[#9b9184] mt-0.5">{s.hint}</p>
                    </div>
                    <span className="font-serif text-lg text-[#8e6d3e] tabular-nums">
                      {values[s.key]}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={values[s.key]}
                    onChange={(e) =>
                      setValues((prev) => ({
                        ...prev,
                        [s.key]: Number(e.target.value),
                      }))
                    }
                    className="renil-range w-full"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={values[s.key]}
                    aria-label={s.label}
                  />
                </label>
              ))}

              <label className="block">
                <div className="mb-2 flex items-end justify-between gap-3">
                  <div>
                    <span className="text-sm font-semibold text-[#22201d]">
                      Capital / partnership ask
                    </span>
                    <p className="text-xs text-[#9b9184] mt-0.5">
                      Indicative range — not a commitment or valuation
                    </p>
                  </div>
                  <span className="text-xs font-medium text-[#8e6d3e] text-right max-w-[9rem]">
                    {capitalLabel}
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={capitalNeed}
                  onChange={(e) => setCapitalNeed(Number(e.target.value))}
                  className="renil-range w-full"
                  aria-label="Capital or partnership ask range"
                />
              </label>
            </div>
          </div>

          {/* Live result card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative rounded-[1.75rem] border-2 border-[#a98345]/40 bg-[#201e1a] text-[#fffdf9] p-6 sm:p-8 shadow-2xl overflow-hidden">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-20 right-0 w-56 h-56 bg-[#b99a68]/15 rounded-full blur-3xl"
              />

              <span className="inline-flex rounded-full border border-[#d8c7ad]/25 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.18em] font-semibold text-[#d8c7ad]">
                Live readiness score
              </span>

              <div className="mt-5 flex items-end gap-3">
                <span className="font-serif text-6xl sm:text-7xl leading-none tabular-nums text-[#fffdf9]">
                  {score}
                </span>
                <span className="pb-2 text-sm text-[#d8c7ad]/80">/ 100</span>
              </div>

              <p className={cn("mt-2 text-sm font-semibold", tier.tone.replace("text-[#8e6d3e]", "text-[#d8c7ad]").replace("text-[#746d63]", "text-[#d8c7ad]").replace("text-[#9b9184]", "text-[#b99a68]"))}>
                {tier.label}
              </p>

              <div className="mt-4 h-2 rounded-full bg-white/10 overflow-hidden">
                <div
                  className={cn("h-full rounded-full transition-all duration-500", tier.bar)}
                  style={{ width: `${score}%` }}
                />
              </div>

              <p className="mt-5 text-sm text-[#d8c7ad]/85 leading-relaxed">
                {tier.summary}
              </p>

              <ul className="mt-6 space-y-3 border-t border-[#d8c7ad]/15 pt-5">
                {breakdown.map((item) => (
                  <li key={item.label} className="flex items-start gap-2.5">
                    {item.ok ? (
                      <CheckCircle2 className="h-4 w-4 text-[#b99a68] shrink-0 mt-0.5" />
                    ) : (
                      <Circle className="h-4 w-4 text-[#d8c7ad]/35 shrink-0 mt-0.5" />
                    )}
                    <div>
                      <p className="text-sm text-[#fffdf9] font-medium">
                        {item.label}
                      </p>
                      <p className="text-xs text-[#d8c7ad]/60">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-4 rounded-xl border border-[#d8c7ad]/15 bg-white/5 px-3.5 py-3 text-xs text-[#d8c7ad]/80">
                <span className="text-[#b99a68] font-semibold uppercase tracking-wider text-[10px]">
                  Selected path
                </span>
                <p className="mt-1 capitalize">
                  {vertical} · {stages.find((s) => s.id === stage)?.label} ·{" "}
                  {capitalLabel}
                </p>
              </div>

              <div className="mt-7 flex flex-col gap-3">
                <ShimmerButton
                  href="/submit-your-business"
                  variant="primary"
                  size="md"
                  showArrow
                  className="w-full justify-center"
                >
                  Present Your Business
                </ShimmerButton>
                <Link
                  href="/businesses/ventures#process"
                  className="inline-flex items-center justify-center gap-1.5 text-xs uppercase tracking-[0.18em] font-semibold text-[#d8c7ad] hover:text-[#fffdf9] transition-colors"
                >
                  View evaluation process
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <p className="mt-4 text-[11px] text-[#9b9184] leading-relaxed text-center lg:text-left px-1">
              Indicative only. Subject to evaluation and internal assessment —
              no score guarantees investment or partnership.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
