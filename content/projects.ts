export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: "developments" | "ventures" | "hospitality" | "logistics";
  categoryLabel: string;
  status?: string;
  location?: string;
  description?: string;
  role?: string;
  highlights?: string[];
  image: string;
  featured?: boolean;
  verified: boolean;
}

export const portfolioProjects: ProjectItem[] = [
  {
    id: "proj-1",
    slug: "renil-corporate-headquarters",
    title: "Renil Corporate Suite & Lounge",
    category: "developments",
    categoryLabel: "Developments",
    status: "Completed",
    location: "Corporate HQ",
    role: "Turnkey Design & Interior Execution",
    description:
      "A bespoke corporate environment showcasing warm luxury architectural arches, bespoke acoustic fluting, and ambient architectural illumination.",
    highlights: [
      "Custom architectural arch entrance wall",
      "Executive lounge with warm ambient cove lighting",
      "Private conference suites and brand showcase",
    ],
    image: "/images/portfolio-corporate-suite.png",
    featured: true,
    verified: true,
  },
  {
    id: "proj-2",
    slug: "renil-executive-lounge",
    title: "Executive Collaborative Lounge",
    category: "developments",
    categoryLabel: "Developments",
    status: "Completed",
    location: "Corporate Suite",
    role: "Architectural Interior & Spatial Design",
    description:
      "Modern minimalist executive reception and collaboration space engineered with custom banquette seating, ambient warm backlighting, and acoustic glass partitions.",
    highlights: [
      "Linear warm cove lighting integration",
      "Acoustic fluted acoustic wall paneling",
      "Seamless executive workspace connection",
    ],
    image: "/images/portfolio-executive-lounge.png",
    featured: true,
    verified: true,
  },
  {
    id: "proj-3",
    slug: "growth-stage-enterprise-investment",
    title: "Strategic Enterprise Growth Co.",
    category: "ventures",
    categoryLabel: "Ventures",
    status: "Active Portfolio",
    role: "Strategic Capital & Board Mentorship",
    description:
      "Strategic investment in high-conviction scalable enterprise, providing structural growth capital, operational guidance, and strategic alliance access.",
    highlights: [
      "Bespoke equity structure",
      "Cross-vertical operational alignment",
      "Governance & scaling framework",
    ],
    image: "/images/portfolio-ventures-growth.png",
    featured: true,
    verified: false, // Marked as placeholder per spec until verified
  },
  {
    id: "proj-4",
    slug: "signature-lifestyle-destination",
    title: "Curated Hospitality Destination",
    category: "hospitality",
    categoryLabel: "Hospitality",
    status: "Concept & Planning",
    role: "Lead Developer & Hospitality Operator",
    description:
      "Premium dining and lifestyle space designed around thoughtful service rituals, refined culinary concepts, and warm architectural design.",
    highlights: [
      "Signature culinary concept development",
      "High-touch customer experience model",
      "Strategic urban destination",
    ],
    image: "/images/portfolio-hospitality-destination.png",
    featured: false,
    verified: false, // Marked as placeholder per spec until verified
  },
  {
    id: "proj-5",
    slug: "regional-fulfillment-network",
    title: "Regional Logistics Network Hub",
    category: "logistics",
    categoryLabel: "Logistics",
    status: "Feasibility & Network Scoping",
    role: "Logistics Infrastructure Operator",
    description:
      "High-efficiency distribution corridor connecting regional commercial producers with priority market hubs through integrated route optimization.",
    highlights: [
      "Strategic transit hub connectivity",
      "High-reliability distribution SLA",
      "Scalable fleet & hub architecture",
    ],
    image: "/images/portfolio-logistics-hub.png",
    featured: false,
    verified: false, // Marked as placeholder per spec until verified
  },
];
