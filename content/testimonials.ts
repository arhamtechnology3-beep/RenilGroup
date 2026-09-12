export type TestimonialVertical =
  | "Ventures"
  | "Developments"
  | "Hospitality"
  | "Logistics"
  | "Partnership";

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  vertical: TestimonialVertical;
  /** Partner quote grounded in Renil Groups positioning & verticals */
  quote: string;
  initials: string;
}

/**
 * Representative partner voices for social proof.
 * Tone mirrors Renil’s site themes: vision + execution, ecosystem leverage,
 * founder-led accountability, long-term value, and the four verticals.
 */
export const testimonials: Testimonial[] = [
  {
    id: "t01",
    name: "Aarav Mehta",
    role: "Founder, B2B Marketplace",
    location: "Mumbai",
    vertical: "Ventures",
    initials: "AM",
    quote:
      "Renil didn’t chase a flashy pitch — they stress-tested our unit economics and still backed the vision. That discipline is rare.",
  },
  {
    id: "t02",
    name: "Priya Nair",
    role: "Co-founder, EdTech Platform",
    location: "Bengaluru",
    vertical: "Ventures",
    initials: "PN",
    quote:
      "What stood out was operational guidance after the cheque. We Grow Together isn’t a tagline here — it’s how they show up.",
  },
  {
    id: "t03",
    name: "Rohan Deshmukh",
    role: "Managing Partner, Family Office",
    location: "Pune",
    vertical: "Partnership",
    initials: "RD",
    quote:
      "Swapnil’s ground-up journey shows in every conversation. Practical, accountable, and focused on durable value — not quick exits.",
  },
  {
    id: "t04",
    name: "Ananya Iyer",
    role: "Director, Boutique Hotel Group",
    location: "Chennai",
    vertical: "Hospitality",
    initials: "AI",
    quote:
      "Their hospitality lens balances guest experience with commercial discipline. Service rituals weren’t an afterthought.",
  },
  {
    id: "t05",
    name: "Vikram Singh",
    role: "CEO, Regional Logistics Firm",
    location: "Delhi NCR",
    vertical: "Logistics",
    initials: "VS",
    quote:
      "Renil understood corridor economics and SLA realities. The network conversation was as serious as the capital one.",
  },
  {
    id: "t06",
    name: "Sneha Kulkarni",
    role: "Principal Architect",
    location: "Pune",
    vertical: "Developments",
    initials: "SK",
    quote:
      "Working on their corporate suite taught me how much they care about material honesty — arches, lighting, acoustic calm.",
  },
  {
    id: "t07",
    name: "Aditya Joshi",
    role: "Founder, Climate Tech Startup",
    location: "Hyderabad",
    vertical: "Ventures",
    initials: "AJ",
    quote:
      "They asked harder questions than most funds — then helped us answer them. Evaluation felt like partnership from day one.",
  },
  {
    id: "t08",
    name: "Meera Patel",
    role: "Hospitality Concept Lead",
    location: "Ahmedabad",
    vertical: "Hospitality",
    initials: "MP",
    quote:
      "Curated dining isn’t about décor alone. Renil pushed for a high-touch experience model that can actually scale.",
  },
  {
    id: "t09",
    name: "Kabir Malhotra",
    role: "Real Estate Developer",
    location: "Gurugram",
    vertical: "Developments",
    initials: "KM",
    quote:
      "Long-term asset thinking, not speculative flips. Their development conversations always circled back to enduring value.",
  },
  {
    id: "t10",
    name: "Ishita Reddy",
    role: "COO, D2C Brand",
    location: "Hyderabad",
    vertical: "Logistics",
    initials: "IR",
    quote:
      "Fulfillment reliability was the blocker. Renil’s logistics partners spoke our language — routes, hubs, and handoffs.",
  },
  {
    id: "t11",
    name: "Arjun Kapoor",
    role: "Angel Investor",
    location: "Mumbai",
    vertical: "Partnership",
    initials: "AK",
    quote:
      "Cross-vertical leverage is real here. A founder introduction can open property, ops, and hospitality doors in one group.",
  },
  {
    id: "t12",
    name: "Divya Sharma",
    role: "Founder, Healthtech",
    location: "Noida",
    vertical: "Ventures",
    initials: "DS",
    quote:
      "No theatrical term sheets. Clear evaluation, honest feedback, and a path that respected both ambition and governance.",
  },
  {
    id: "t13",
    name: "Nikhil Rao",
    role: "Project Director, Construction",
    location: "Bengaluru",
    vertical: "Developments",
    initials: "NR",
    quote:
      "Execution quality mattered as much as design intent. Timelines, finishes, and site discipline were non-negotiable.",
  },
  {
    id: "t14",
    name: "Pooja Banerjee",
    role: "Culinary Director",
    location: "Kolkata",
    vertical: "Hospitality",
    initials: "PB",
    quote:
      "They treat hospitality as an operating business — menus, service cadence, and commercial health in the same brief.",
  },
  {
    id: "t15",
    name: "Siddharth Menon",
    role: "Fleet Operations Head",
    location: "Kochi",
    vertical: "Logistics",
    initials: "SM",
    quote:
      "Scalable hub architecture, not just trucks on a map. Renil asked about redundancy and reliability before volume.",
  },
  {
    id: "t16",
    name: "Neha Gupta",
    role: "Strategy Advisor",
    location: "Delhi",
    vertical: "Partnership",
    initials: "NG",
    quote:
      "Founder-led accountability changes the room. Decisions move faster when leadership is personally invested.",
  },
  {
    id: "t17",
    name: "Rahul Choudhary",
    role: "Founder, Agri Supply Chain",
    location: "Indore",
    vertical: "Ventures",
    initials: "RC",
    quote:
      "Vision matched with execution — that line from their site is exactly how diligence felt. Thorough, fair, and grounded.",
  },
  {
    id: "t18",
    name: "Kavya Krishnan",
    role: "Interior Design Lead",
    location: "Chennai",
    vertical: "Developments",
    initials: "KK",
    quote:
      "Warm luxury without excess. Their spaces use light, fluting, and proportion the way a serious brand should.",
  },
  {
    id: "t19",
    name: "Manish Agarwal",
    role: "Owner, Lifestyle Dining",
    location: "Jaipur",
    vertical: "Hospitality",
    initials: "MA",
    quote:
      "We needed a partner who understood both guest delight and P&L. Renil Hospitality spoke both fluently.",
  },
  {
    id: "t20",
    name: "Shreya Das",
    role: "Growth Lead, Consumer App",
    location: "Bengaluru",
    vertical: "Ventures",
    initials: "SD",
    quote:
      "Board mentorship was practical — hiring plans, channel economics, and when not to scale. That saved us a year.",
  },
  {
    id: "t21",
    name: "Harsh Vardhan",
    role: "Warehouse Network Consultant",
    location: "Ludhiana",
    vertical: "Logistics",
    initials: "HV",
    quote:
      "Regional corridor thinking, not vanity warehouses. They map commerce flow before committing steel and concrete.",
  },
  {
    id: "t22",
    name: "Tanvi Shah",
    role: "Partner, Boutique PE",
    location: "Mumbai",
    vertical: "Partnership",
    initials: "TS",
    quote:
      "Renil sits at a rare intersection — capital, built environment, and operations. Co-invest conversations are richer for it.",
  },
  {
    id: "t23",
    name: "Amitabh Pillai",
    role: "Land Acquisition Advisor",
    location: "Pune",
    vertical: "Developments",
    initials: "AP",
    quote:
      "Patience and diligence on parcels. They won’t rush a bad site to fill a pipeline — that’s how trust is built.",
  },
  {
    id: "t24",
    name: "Riya Sen",
    role: "Guest Experience Consultant",
    location: "Goa",
    vertical: "Hospitality",
    initials: "RS",
    quote:
      "Every touchpoint was designed as a ritual. Ambition for destination quality without losing commercial sense.",
  },
  {
    id: "t25",
    name: "Yash Thakur",
    role: "Founder, SaaS for SMEs",
    location: "Nagpur",
    vertical: "Ventures",
    initials: "YT",
    quote:
      "Submitting our business was clear and respectful. Even the disclaimers showed integrity — no false promises.",
  },
  {
    id: "t26",
    name: "Lakshmi Narayanan",
    role: "Finance Controller",
    location: "Coimbatore",
    vertical: "Partnership",
    initials: "LN",
    quote:
      "Governance and scaling frameworks weren’t paperwork theatre. Reporting cadence and KPIs were taken seriously.",
  },
  {
    id: "t27",
    name: "Devansh Bhatt",
    role: "Civil Engineer, Turnkey Projects",
    location: "Surat",
    vertical: "Developments",
    initials: "DB",
    quote:
      "From brand wall to lounge detailing, execution mirrored the brief. Architectural integrity wasn’t compromised for speed.",
  },
  {
    id: "t28",
    name: "Fatima Qureshi",
    role: "Restaurant Operator",
    location: "Lucknow",
    vertical: "Hospitality",
    initials: "FQ",
    quote:
      "They helped us think like an urban destination, not a single outlet. Footfall, brand, and ops in one plan.",
  },
  {
    id: "t29",
    name: "Gaurav Saxena",
    role: "Transport Aggregator Lead",
    location: "Kanpur",
    vertical: "Logistics",
    initials: "GS",
    quote:
      "High-reliability distribution isn’t glamorous — Renil treated it as strategic infrastructure. That respect matters.",
  },
  {
    id: "t30",
    name: "Anjali Verma",
    role: "People & Culture Head",
    location: "Chandigarh",
    vertical: "Partnership",
    initials: "AV",
    quote:
      "Culture follows leadership. Direct accountability from the top makes teams more honest and more ambitious.",
  },
  {
    id: "t31",
    name: "Mohit Jain",
    role: "Founder, Fintech Infra",
    location: "Gurugram",
    vertical: "Ventures",
    initials: "MJ",
    quote:
      "Equity structure was bespoke without being complicated. Alignment first — then instruments. Refreshingly adult.",
  },
  {
    id: "t32",
    name: "Sana Hussain",
    role: "Urban Planning Associate",
    location: "Hyderabad",
    vertical: "Developments",
    initials: "SH",
    quote:
      "Their projects read as places people inhabit, not just assets on a sheet. That human lens is their edge.",
  },
  {
    id: "t33",
    name: "Varun Chopra",
    role: "Cold-chain Entrepreneur",
    location: "Amritsar",
    vertical: "Logistics",
    initials: "VC",
    quote:
      "Route optimization and hub design were discussed with equal weight. Renil Logistics thinks in systems.",
  },
  {
    id: "t34",
    name: "Isha Bansal",
    role: "Brand Strategist",
    location: "Mumbai",
    vertical: "Partnership",
    initials: "IB",
    quote:
      "Building businesses. Creating value. You feel that consistency from the website to the meeting room.",
  },
  {
    id: "t35",
    name: "Pranav Kulkarni",
    role: "Founder, Manufacturing Tech",
    location: "Nashik",
    vertical: "Ventures",
    initials: "PK",
    quote:
      "They evaluate opportunities holistically — market, team, and ops — then stay for the hard years after investment.",
  },
  {
    id: "t36",
    name: "Nandini Rao",
    role: "Hospitality Asset Manager",
    location: "Mysuru",
    vertical: "Hospitality",
    initials: "NR",
    quote:
      "Premium without pretension. Renil’s hospitality work aims for lasting guest memory and lasting returns.",
  },
];
