import { Link } from "react-router";
import { useReveal } from "../hooks";
import { pricingTiers } from "../data";
import "./pricing.css";

const Pricing = () => {
  const ref = useReveal<HTMLElement>();
  return (
    <section className="pricing r-container r-reveal" id="pricing" ref={ref}>
      <div className="pricing-head">
        <span className="r-eyebrow">Pricing</span>
        <h2>Free to start. <em>Pay only when you scale.</em></h2>
        <p>No credit card needed to join.</p>
      </div>
      <div className="pricing-grid">
        {pricingTiers.map((t) => (
          <article key={t.name} className={"tier" + (t.primary ? " is-primary" : "")}>
            {t.badge && <span className="tier-badge">{t.badge}</span>}
            <h4>{t.name}</h4>
            <div className="tier-price">
              {t.price}
              {t.cadence && <span className="tier-cadence">{t.cadence}</span>}
            </div>
            <p className="tier-desc">{t.desc}</p>
            <ul className="tier-features">
              {t.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <Link to="/waitlist" className="r-btn">{t.cta} <span className="r-arrow">↗</span></Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
