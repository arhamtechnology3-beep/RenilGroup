export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  positioning: string;
  description: string;
  founder: {
    name: string;
    role: string;
  };
  contact: {
    email: string;
    phone: string;
    /** Digits only with country code — for wa.me links */
    whatsapp: string;
    /** Human-readable WhatsApp number */
    whatsappDisplay: string;
    address: string;
    verified: boolean;
  };
  social: {
    linkedin?: string;
    instagram?: string;
    facebook?: string;
    twitter?: string;
    youtube?: string;
  };
  navigation: {
    name: string;
    href: string;
    badge?: string;
  }[];
  venturesNav: {
    name: string;
    href: string;
  }[];
  disclaimers: {
    investment: string;
    submission: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Renil Groups",
  legalName: "Renil Groups Pvt. Ltd.",
  tagline: "WE GROW TOGETHER",
  positioning: "Building businesses. Creating value.",
  description:
    "A diversified corporate ecosystem bringing together investment opportunities, real estate development, hospitality, and logistics under one entrepreneurial vision.",
  founder: {
    name: "Swapnil Shinde",
    role: "Founder / Chief Executive Officer",
  },
  contact: {
    email: "contact@renilgroups.com", // Editable configuration placeholder per spec
    phone: "+91 72081 94497",
    whatsapp: "917208194497",
    whatsappDisplay: "+91 72081 94497",
    address: "Renil Groups Corporate Office, India",
    verified: false, // Explicitly tracked per spec rule: 'official address/phone to add later'
  },
  social: {
    linkedin: "https://linkedin.com/company/renil-groups",
    instagram: "https://www.instagram.com/renilgroups",
    facebook: "https://www.facebook.com/renilgroups",
    twitter: "https://x.com/renilgroups",
    youtube: "https://www.youtube.com/@renilgroups",
  },
  navigation: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Businesses", href: "/businesses" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ],
  venturesNav: [
    { name: "Overview", href: "/businesses/ventures" },
    { name: "What We Look For", href: "/businesses/ventures#what-we-look-for" },
    { name: "Process", href: "/businesses/ventures#process" },
    { name: "Submit Your Business", href: "/submit-your-business" },
  ],
  disclaimers: {
    investment:
      "Subject to evaluation and internal assessment. No single factor guarantees investment. Every opportunity is evaluated on its own merits.",
    submission:
      "Submission of a business idea, proposal, or pitch deck does not create any binding obligation, partnership, or investment guarantee.",
  },
};
