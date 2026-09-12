export interface BusinessVertical {
  id: string;
  slug: string;
  name: string;
  legalEntity: string;
  shortDescription: string;
  tagline: string;
  heroCopy: string;
  index: string;
  href: string;
  focusAreas: string[];
  keyHighlights: {
    title: string;
    description: string;
  }[];
  ctaText: string;
  ctaHref: string;
  badge: string;
  themeColor: string;
}

export const businessVerticals: BusinessVertical[] = [
  {
    id: "ventures",
    slug: "ventures",
    name: "Renil Ventures",
    legalEntity: "Renil Ventures Pvt. Ltd.",
    tagline: "Have a vision? Let’s build it together.",
    shortDescription:
      "Investment opportunities, business evaluation, strategic partnerships and growth-focused collaboration.",
    heroCopy:
      "The investment and strategic partnership arm of Renil Groups. We are open to hearing from entrepreneurs, business owners and project leaders who believe they have a strong opportunity worth exploring.",
    index: "01",
    href: "/businesses/ventures",
    badge: "Investment & Capital",
    themeColor: "from-amber-600/20 to-champagne/10",
    focusAreas: [
      "Early & Growth Stage Evaluation",
      "Strategic Business Partnerships",
      "Operational & Capital Collaboration",
      "Scalable Enterprise Models",
    ],
    keyHighlights: [
      {
        title: "Strategic Alignment",
        description:
          "Backing businesses with clear market demand and practical commercial models.",
      },
      {
        title: "Beyond Capital",
        description:
          "Providing the ecosystem, experience, and governance necessary to scale sustainably.",
      },
      {
        title: "Accountable Partnership",
        description:
          "Aligning interests through transparent execution, mentorship, and long-term horizons.",
      },
    ],
    ctaText: "Present Your Business",
    ctaHref: "/submit-your-business",
  },
  {
    id: "developments",
    slug: "developments",
    name: "Renil Developments",
    legalEntity: "Renil Developments Pvt. Ltd.",
    tagline: "Creating spaces. Building value.",
    shortDescription:
      "Real estate development, construction, project execution and the creation of long-term asset value.",
    heroCopy:
      "Represents the group’s development and construction-focused vertical, bringing precision engineering, architectural integrity, and enduring value to modern living and commercial spaces.",
    index: "02",
    href: "/businesses/developments",
    badge: "Real Estate & Construction",
    themeColor: "from-stone-600/20 to-sand/10",
    focusAreas: [
      "Residential & Commercial Developments",
      "End-to-End Construction Execution",
      "Architectural Integrity & Craftsmanship",
      "Long-Term Asset Value Creation",
    ],
    keyHighlights: [
      {
        title: "Execution Discipline",
        description:
          "Committed to rigorous engineering standards, timely milestones, and sustainable construction practices.",
      },
      {
        title: "Thoughtful Design",
        description:
          "Spaces crafted to elevate lifestyles and provide enduring commercial utility.",
      },
      {
        title: "Asset Longevity",
        description:
          "Building properties engineered for sustained value appreciation and community impact.",
      },
    ],
    ctaText: "Explore Developments",
    ctaHref: "/businesses/developments",
  },
  {
    id: "hospitality",
    slug: "hospitality",
    name: "Renil Hospitality",
    legalEntity: "Renil Hospitality Pvt. Ltd.",
    tagline: "Creating experiences with long-term value.",
    shortDescription:
      "Hospitality opportunities, experiences and ventures built around quality, service and long-term potential.",
    heroCopy:
      "Hospitality is about more than a place. It is about experience, service, consistency and the ability to create lasting customer relationships with commercial discipline.",
    index: "03",
    href: "/businesses/hospitality",
    badge: "Hospitality & Experiences",
    themeColor: "from-amber-700/20 to-gold/10",
    focusAreas: [
      "Curated Hospitality Concepts",
      "Service Excellence & Operations",
      "Customer Relationship Building",
      "Lifestyle Destination Partnerships",
    ],
    keyHighlights: [
      {
        title: "The Experience",
        description:
          "Crafting inviting environments where personalized service meets thoughtful ambience.",
      },
      {
        title: "Operational Rigor",
        description:
          "Pairing creative culinary and stay concepts with strict operational metrics.",
      },
      {
        title: "Sustainable Expansion",
        description:
          "Developing long-term destination value across strategic locations.",
      },
    ],
    ctaText: "Discover Hospitality",
    ctaHref: "/businesses/hospitality",
  },
  {
    id: "logistics",
    slug: "logistics",
    name: "Renil Logistics",
    legalEntity: "Renil Logistics Pvt. Ltd.",
    tagline: "Keeping business moving.",
    shortDescription:
      "Logistics-oriented opportunities and operational support that help businesses move, connect and grow.",
    heroCopy:
      "A logistics-focused vertical designed to explore opportunities around movement, connectivity and operational support, enabling businesses to scale friction-free.",
    index: "04",
    href: "/businesses/logistics",
    badge: "Logistics & Supply Network",
    themeColor: "from-zinc-700/20 to-champagne/10",
    focusAreas: [
      "Supply Chain & Distribution Networks",
      "Operational Support & Connectivity",
      "Movement of Goods & Cargo Facilitation",
      "Scalable Logistics Infrastructure",
    ],
    keyHighlights: [
      {
        title: "Connect",
        description:
          "Connecting businesses, people, and operational networks across critical hubs.",
      },
      {
        title: "Move",
        description:
          "Supporting the reliable flow of goods and commercial activity with precision.",
      },
      {
        title: "Grow",
        description:
          "Building resilient logistics solutions designed for sustained long-term volume.",
      },
    ],
    ctaText: "Explore Logistics",
    ctaHref: "/businesses/logistics",
  },
];
