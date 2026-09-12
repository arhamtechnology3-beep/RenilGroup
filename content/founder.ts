export interface FounderProfile {
  name: string;
  role: string;
  company: string;
  image: string;
  imageAlt: string;
  quote: string;
  bio: string[];
  principles: {
    title: string;
    description: string;
  }[];
  visionStatement: string;
}

export const founderProfile: FounderProfile = {
  name: "Swapnil Shinde",
  role: "Founder / Chief Executive Officer",
  company: "Renil Groups",
  image: "/images/founder.jpeg",
  imageAlt: "Swapnil Shinde, Founder & CEO of Renil Groups",
  quote:
    "Growth is not only about what we build for ourselves. It is also about the opportunities we create for others.",
  bio: [
    "Swapnil Shinde leads Renil Groups with an entrepreneurial outlook shaped by the journey from starting at the ground level to building a growing business ecosystem.",
    "His focus is on identifying high-potential opportunities, fostering resilient partnerships, and continuing to build diversified businesses with purpose, discipline, and integrity.",
    "Under his leadership, Renil Groups has expanded across strategic sectors including venture investments, real estate developments, hospitality experiences, and operational logistics.",
  ],
  principles: [
    {
      title: "Founder-Led Vision",
      description:
        "Direct personal commitment to the strategic direction, operational quality, and core values of every enterprise within the group.",
    },
    {
      title: "Entrepreneurial Thinking",
      description:
        "Approaching complex business challenges with agility, ground-level practicality, and an instinct for sustainable value creation.",
    },
    {
      title: "Long-Term Growth Horizon",
      description:
        "Prioritizing enduring relationships, generational asset building, and disciplined execution over short-term expediency.",
    },
  ],
  visionStatement:
    "To build a business ecosystem where people, ideas and opportunities can grow together.",
};
