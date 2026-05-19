import type { ReactNode } from "react";
import { useReveal } from "../hooks";
import { reasons } from "../data";
import type { ReasonIcon } from "../data";
import "./features.css";

const iconSvgProps = {
  width: 36,
  height: 36,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "var(--primary-ink)",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

const BoxIcon = () => (
  <svg {...iconSvgProps}>
    <rect width="7" height="7" x="3" y="3" rx="1" />
    <rect width="7" height="7" x="14" y="3" rx="1" />
    <rect width="7" height="7" x="14" y="14" rx="1" />
    <rect width="7" height="7" x="3" y="14" rx="1" />
  </svg>
);

const SensitivityIcon = () => (
  <svg {...iconSvgProps}>
    <line x1="21" x2="14" y1="4" y2="4" />
    <line x1="10" x2="3" y1="4" y2="4" />
    <line x1="21" x2="12" y1="12" y2="12" />
    <line x1="8" x2="3" y1="12" y2="12" />
    <line x1="21" x2="16" y1="20" y2="20" />
    <line x1="12" x2="3" y1="20" y2="20" />
    <line x1="14" x2="14" y1="2" y2="6" />
    <line x1="8" x2="8" y1="10" y2="14" />
    <line x1="16" x2="16" y1="18" y2="22" />
  </svg>
);

const CompareIcon = () => (
  <svg {...iconSvgProps}>
    <path d="M3 3v18h18" />
    <path d="M18 17V9" />
    <path d="M13 17V5" />
    <path d="M8 17v-3" />
  </svg>
);

const CalculatorIcon = () => (
  <svg {...iconSvgProps}>
    <rect width="16" height="20" x="4" y="2" rx="2" />
    <line x1="8" x2="16" y1="6" y2="6" />
    <line x1="16" x2="16" y1="14" y2="18" />
    <path d="M16 10h.01" />
    <path d="M12 10h.01" />
    <path d="M8 10h.01" />
    <path d="M12 14h.01" />
    <path d="M8 14h.01" />
    <path d="M12 18h.01" />
    <path d="M8 18h.01" />
  </svg>
);

const AuctionIcon = () => (
  <svg {...iconSvgProps}>
    <path d="m14 13-7.5 7.5c-.83.83-2.17.83-3 0a2.12 2.12 0 0 1 0-3L11 10" />
    <path d="m16 16 6-6" />
    <path d="m8 8 6-6" />
    <path d="m9 7 8 8" />
    <path d="m21 11-8-8" />
    <path d="M3 21h18" />
  </svg>
);

const PdfIcon = () => (
  <svg {...iconSvgProps}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
    <path d="M9 13h6" />
    <path d="M9 17h4" />
  </svg>
);

const iconMap: Record<ReasonIcon, ReactNode> = {
  box: <BoxIcon />,
  sensitivity: <SensitivityIcon />,
  compare: <CompareIcon />,
  calculator: <CalculatorIcon />,
  auction: <AuctionIcon />,
  pdf: <PdfIcon />,
};

const Features = () => {
  const ref = useReveal<HTMLElement>();
  return (
    <section className="features r-container r-reveal" id="features" ref={ref}>
      <div className="features-head">
        <div>
          <span className="r-eyebrow">Why Ruma</span>
          <h2 className="features-title" style={{ marginTop: "1rem" }}>
            Modern deal intelligence
            <em>without the spreadsheet sprawl.</em>
          </h2>
        </div>
        <p className="features-lede">
          Ruma pulls every lever — fees, yields, loan costs, scenarios, auction bids — into
          a single workflow so you can vet a property, compare scenarios, and move toward
          closing with confidence.
        </p>
      </div>

      <div className="features-grid">
        {reasons.map((r, i) => (
          <article key={r.title} className="feature-card">
            <div className="feature-card-head">
              <div className="feature-icon">{iconMap[r.icon]}</div>
              <span className="feature-num">0{i + 1}</span>
            </div>
            <h4>{r.title}</h4>
            <p>{r.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Features;
