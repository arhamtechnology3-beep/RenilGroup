import { Hero } from "@/components/sections/hero";
import { Intro } from "@/components/sections/intro";
import { EcosystemMarquee } from "@/components/sections/ecosystem-marquee";
import { BusinessBento } from "@/components/sections/business-bento";
import { FounderFeature } from "@/components/sections/founder-feature";
import { StoryTimeline } from "@/components/sections/story-timeline";
import { WhyRenil } from "@/components/sections/why-renil";
import { PartnershipCalculator } from "@/components/sections/partnership-calculator";
import { Testimonials } from "@/components/sections/testimonials";
import { PortfolioPreview } from "@/components/sections/portfolio-preview";
import { FinalCta } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Intro />
      <EcosystemMarquee />
      <BusinessBento />
      <FounderFeature />
      <StoryTimeline />
      <WhyRenil />
      <PartnershipCalculator />
      <Testimonials />
      <PortfolioPreview />
      <FinalCta showIndex />
    </div>
  );
}
