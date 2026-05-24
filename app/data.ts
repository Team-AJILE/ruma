export type ReasonIcon = "box" | "sensitivity" | "compare" | "calculator" | "auction" | "pdf";

export interface Reason {
  title: string;
  desc: string;
  icon: ReasonIcon;
}

export interface Step {
  n: string;
  title: string;
  desc: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface PricingTier {
  name: string;
  price: string;
  cadence: string;
  desc: string;
  features: string[];
  cta: string;
  primary: boolean;
  badge?: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export const reasons: Reason[] = [
  {
    title: "All-in-one evaluator",
    desc: "Price every cost, compare deals, and size your loan in a single, opinionated workflow.",
    icon: "box",
  },
  {
    title: "Scenario Lab",
    desc: "Stress-test rent, vacancy, growth, and rates — and see what your downside really looks like.",
    icon: "sensitivity",
  },
  {
    title: "Side-by-side comparison",
    desc: "Stack properties by yield, IRR, and other KPIs so the best value reveals itself.",
    icon: "compare",
  },
  {
    title: "Loan calculator",
    desc: "Estimate monthly payments and total interest before you commit.",
    icon: "calculator",
  },
  {
    title: "Auction Lab",
    desc: "Plan auction bids with IRR and cash-on-cash ceilings, market-value deltas, and full cost breakdowns.",
    icon: "auction",
  },
  {
    title: "Shareable PDF reports",
    desc: "Export branded, share-ready summaries for clients and co-investors in a click.",
    icon: "pdf",
  },
];

export const steps: Step[] = [
  {
    n: "01",
    title: "Drop in a property",
    desc: "Fill in price, location, and target rent. Ruma fetches sensible defaults for stamp duty, fees, and indicative rates.",
  },
  {
    n: "02",
    title: "Tune your assumptions",
    desc: "Adjust rent, vacancy, growth, and loan mix with sliders. Every panel — cashflow, ROI, repayment — updates live.",
  },
  {
    n: "03",
    title: "Compare and decide",
    desc: "Save scenarios, stack properties side-by-side, and export a share-ready summary for clients or co-investors.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "I used to keep three spreadsheets per deal. Ruma collapses them into one view and the sensitivity slider is the killer feature.",
    name: "Aida R.",
    role: "Buy-to-let investor, KL",
  },
  {
    quote:
      "It's the first tool that speaks Malaysian fees properly. Stamp duty, MOT, legal, valuation — all there, all editable.",
    name: "Daniel L.",
    role: "Property agent, Penang",
  },
  {
    quote:
      "I sent my first share-ready summary to a co-investor and closed in a week. The polish does a lot of work for you.",
    name: "Mei C.",
    role: "Portfolio investor, JB",
  },
];

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "Free",
    cadence: "",
    desc: "For first-time investors evaluating one property at a time.",
    features: [
      "Save up to 5 properties",
      "Loan calculator",
      "Compare properties side by side",
      "Base mortgage, legal, and stamp-duty calculators",
    ],
    cta: "Join the waitlist",
    primary: false,
  },
  {
    name: "Pro",
    price: "RM 27.99",
    cadence: "/ month",
    desc: "For active investors and agents running multiple deals at once.",
    features: [
      "Everything in Starter",
      "Save unlimited properties",
      "Scenario Lab — build and export scenarios",
      "Auction Lab — bid analysis with PDF export",
      "Import from Listing — auto-fill from text or screenshots",
      "Early access to new calculators",
    ],
    cta: "Join the waitlist",
    primary: true,
  },
];

export const faqs: Faq[] = [
  {
    q: "Is Ruma only for Malaysian properties?",
    a: "We're starting with Malaysia because the local fee stack (stamp duty, MOT, legal, valuation) is genuinely tricky and underserved by global tools. Other markets are on the roadmap once the Malaysian experience is rock-solid.",
  },
  {
    q: "Do I need to be a finance person to use it?",
    a: "No. Ruma ships sensible defaults for every assumption. If you want to go deeper, every number is editable and every formula is documented in plain English.",
  },
  {
    q: "How is this different from a spreadsheet?",
    a: "Spreadsheets are flexible but brittle. Ruma is a workflow: changes ripple through cashflow, repayment, and risk views automatically, and you can compare entire scenarios, not just cells, side by side.",
  },
  {
    q: "When does Ruma launch?",
    a: "We're targeting a public launch in summer 2026. Waitlist signups get the first invites in waves.",
  },
  {
    q: "Who's behind Ruma?",
    a: "Team AJILE, a small group of investors, engineers, and designers. Reach us anytime at inbox@ajile.team.",
  },
];

export const navLinks: NavLink[] = [
  { label: "Why Ruma", href: "#features" },
  { label: "Preview", href: "#walkthrough" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];
