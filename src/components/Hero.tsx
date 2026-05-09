import { useEffect, useState } from "react";
import { navLinks } from "../data";
import "./hero.css";

const heights = [38, 56, 44, 70, 88, 64, 92, 78];
const peak = Math.max(...heights);

const HeroMock = () => {
  const [animated, setAnimated] = useState<number[]>(heights.map(() => 0));
  const [roi, setRoi] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setAnimated(heights), 200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    let raf = 0;
    let start: number | null = null;
    const target = 12.4;
    const step = (t: number) => {
      if (start === null) start = t;
      const p = Math.min(1, (t - start) / 1500);
      setRoi(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="hero-mock">
      <div className="mock-bar">
        <div className="mock-dots"><i /><i /><i /></div>
        <div className="mock-url">workspace.ruma.app / properties / sri-petaling-condo</div>
        <div className="mock-user">AJ</div>
      </div>

      <div className="mock-body">
        <div className="mock-card">
          <div className="mock-prop">
            <div className="mock-prop-name">Sri Petaling Condo</div>
            <div className="mock-prop-meta">2 bd · 968 sqft · KL</div>
          </div>
          <h6>Upfront costs</h6>
          <ul className="mock-stack">
            <li><span>Purchase price</span><strong>RM 640,000</strong></li>
            <li><span>Stamp duty</span><strong>RM 14,400</strong></li>
            <li><span>Legal fees</span><strong>RM 8,200</strong></li>
            <li><span>Disbursement</span><strong>RM 1,840</strong></li>
          </ul>
          <div className="mock-foot">
            <span>Total actual cost</span>
            <strong style={{ color: "var(--ink)" }}>RM 664,440</strong>
          </div>
        </div>

        <div className="mock-card">
          <h6>Key metrics</h6>
          <div className="mock-kpis">
            <div className="mock-kpi is-positive">
              <small>IRR</small>
              <b>+{roi.toFixed(1)}%</b>
            </div>
            <div className="mock-kpi">
              <small>Cap Rate</small>
              <b>5.6%</b>
            </div>
            <div className="mock-kpi">
              <small>Mortgage/mo</small>
              <b>RM 2,652</b>
            </div>
          </div>

          <h6 style={{ marginTop: "0.4rem" }}>Cashflow · 12 mo</h6>
          <div className="mock-chart">
            {animated.map((h, i) => (
              <div
                key={i}
                className={"bar" + (h === peak ? " is-peak" : "")}
                style={{ height: h + "%" }}
              />
            ))}
          </div>
          <div className="mock-foot">
            <span>Sensitivity: rent −10%</span>
            <strong style={{ color: "var(--positive)" }}>still positive</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

const heroPills = ["Scenario Lab", "Auction Lab", "Loan calculator"];

const TopNav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className="hero-nav" data-scrolled={scrolled || undefined}>
      <div className="hero-nav-inner r-container">
        <a href="#" className="hero-logo">
          <span className="hero-logo-mark">R</span>
          Ruma
        </a>
        <div className="hero-nav-links">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href}>{l.label}</a>
          ))}
        </div>
        <a href="#waitlist" className="hero-nav-cta">Get early access →</a>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <>
      <TopNav />
      <header className="hero r-container" data-layout="split">
        <div className="hero-body">
        <div className="hero-copy">
          <span className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            Launching soon · Malaysia
          </span>
          <h1 className="hero-headline">
            Compare, calculate, and <em>close smarter.</em>
          </h1>
          <p className="hero-sub">
            Estimate fees, stack loan offers, forecast returns, and choose the property
            that wins on yield & KPIs — without spreadsheets.
          </p>
          <div className="hero-actions">
            <a href="#waitlist" className="r-btn r-btn-primary">
              Join the waitlist <span className="r-arrow">↗</span>
            </a>
            <a href="#walkthrough" className="r-btn r-btn-secondary">
              See a 30-second preview
            </a>
          </div>
          <div className="hero-pills">
            {heroPills.map((p) => (
              <span key={p} className="hero-pill">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 6.2 5 8.7l4.5-5.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {p}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-mock-wrap">
          <HeroMock />
          <div className="hero-float">
            <small>Scenario IRR</small>
            <span className="v">+12.4%</span>
            <span className="vs">vs. market avg 7.2%</span>
          </div>
        </div>
      </div>
      </header>
    </>
  );
};

export default Hero;
