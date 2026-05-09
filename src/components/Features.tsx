import { useReveal } from "../hooks";
import { reasons, reasonIconSrc } from "../data";
import "./features.css";

const AuctionIcon = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--primary-ink)"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m14 13-7.5 7.5c-.83.83-2.17.83-3 0a2.12 2.12 0 0 1 0-3L11 10" />
    <path d="m16 16 6-6" />
    <path d="m8 8 6-6" />
    <path d="m9 7 8 8" />
    <path d="m21 11-8-8" />
    <path d="M3 21h18" />
  </svg>
);

const PdfIcon = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--primary-ink)"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
    <path d="M9 13h6" />
    <path d="M9 17h4" />
  </svg>
);

const renderIcon = (icon: string, src: string | undefined) => {
  if (icon === "auction") return <AuctionIcon />;
  if (icon === "pdf") return <PdfIcon />;
  return <img src={src} alt="" loading="lazy" />;
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
              <div className="feature-icon">
                {renderIcon(
                  r.icon,
                  r.icon === "auction" || r.icon === "pdf"
                    ? undefined
                    : reasonIconSrc[r.icon]
                )}
              </div>
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
