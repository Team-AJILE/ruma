import { useEffect, useState } from "react";
import { useReveal } from "../hooks";
import "./walkthrough.css";

interface CountValProps {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  trigger?: unknown;
}

const CountVal = ({ to, prefix = "", suffix = "", decimals = 0, duration = 1100, trigger }: CountValProps) => {
  const [v, setV] = useState(0);
  useEffect(() => {
    let raf = 0;
    let start: number | null = null;
    const step = (t: number) => {
      if (start === null) start = t;
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(to * eased);
      if (p < 1) raf = requestAnimationFrame(step);
      else setV(to);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to, duration, trigger]);
  const display = decimals ? v.toFixed(decimals) : Math.round(v).toLocaleString();
  return <>{prefix}{display}{suffix}</>;
};

type Tab = "cost" | "sens" | "cmp";

const tabs: { id: Tab; label: string }[] = [
  { id: "cost", label: "Cost stack" },
  { id: "sens", label: "Scenario" },
  { id: "cmp", label: "Compare" },
];

const Walkthrough = () => {
  const ref = useReveal<HTMLElement>();
  const [tab, setTab] = useState<Tab>("cost");

  return (
    <section className="walkthrough r-container r-reveal" id="walkthrough" ref={ref}>
      <div className="walk-head">
        <div>
          <span className="r-eyebrow">Inside Ruma</span>
          <h2 className="walk-title">A workspace built for <em>real decisions.</em></h2>
        </div>
        <div className="walk-tabs" role="tablist">
          {tabs.map((t) => (
            <button
              key={t.id}
              className={"walk-tab" + (tab === t.id ? " is-active" : "")}
              onClick={() => setTab(t.id)}
            >{t.label}</button>
          ))}
        </div>
      </div>

      <div className="walk-frame">
        <div className="walk-bar">
          <div className="dots"><i /><i /><i /></div>
          <div className="url">workspace.ruma.app / properties / sri-petaling-condo</div>
          <div className="who"><b>AJ</b> Ajile</div>
        </div>

        <div className="walk-app">
          <aside className="walk-side">
            <div className="walk-side-section">Ruma</div>
            <a className="is-active"><span className="dot" />Properties</a>
            <a><span className="dot" />Scenario Lab</a>
            <a><span className="dot" />Auction Lab</a>
            <a><span className="dot" />Loan Calculator</a>
            <a><span className="dot" />Comparison</a>
            <a><span className="dot" />Account</a>
          </aside>

          <div className="walk-main">
            <div className="walk-crumbs">Properties / <b>Sri Petaling Condo</b></div>
            <div className="walk-deal">
              <div>
                <h3>Sri Petaling Condo</h3>
                <div className="walk-deal-meta">2 bd · 968 sqft · Kuala Lumpur · Tenure: leasehold</div>
              </div>
              <span className="walk-deal-roi">IRR <CountVal to={12.4} decimals={1} prefix="+" suffix="%" trigger={tab} /></span>
            </div>

            {/* COST */}
            <div className={"walk-panel" + (tab === "cost" ? " is-active" : "")}>
              <div className="walk-block">
                <h6>Upfront costs</h6>
                <ul className="walk-stack">
                  <li><span>Purchase price</span><strong>RM 640,000</strong></li>
                  <li><span>Stamp duty (MOT)</span><strong>RM 14,400</strong></li>
                  <li><span>Legal fees (MOT)</span><strong>RM 6,250</strong></li>
                  <li><span>Disbursement fees</span><strong>RM 1,050</strong></li>
                  <li><span>Valuation fee</span><strong>RM 800</strong></li>
                  <li><span>Stamp duty (loan)</span><strong>RM 2,000</strong></li>
                  <li><span>Legal fees (loan)</span><strong>RM 5,000</strong></li>
                </ul>
                <div className="walk-total">
                  <span>Total actual cost</span><b>RM 669,500</b>
                </div>
              </div>
              <div className="walk-aside">
                <div className="walk-block">
                  <h6>Key metrics</h6>
                  <div className="walk-kpis">
                    <div className="walk-kpi pos"><small>IRR</small><b><CountVal to={12.4} decimals={1} prefix="+" suffix="%" trigger={tab} /></b></div>
                    <div className="walk-kpi"><small>Real Rental Yield</small><b><CountVal to={5.6} decimals={1} suffix="%" trigger={tab} /></b></div>
                    <div className="walk-kpi"><small>Cap Rate</small><b><CountVal to={4.3} decimals={1} suffix="%" trigger={tab} /></b></div>
                    <div className="walk-kpi"><small>Monthly Cash Flow</small><b>RM <CountVal to={418} trigger={tab} /></b></div>
                  </div>
                </div>
                <div className="walk-note">
                  <b>Heads up:</b> stamp duty is calculated on the higher of price or valuation.
                  Ruma re-runs every dependent panel when you tweak this.
                </div>
              </div>
            </div>

            {/* SCENARIO */}
            <div className={"walk-panel" + (tab === "sens" ? " is-active" : "")}>
              <div className="walk-block">
                <h6>Scenario inputs</h6>
                <div className="walk-sens">
                  <div className="walk-sens-row">
                    <span>Rent</span>
                    <div className="walk-sens-bar"><i style={{ width: tab === "sens" ? "70%" : "0" }} /></div>
                    <b>+8.2%</b>
                  </div>
                  <div className="walk-sens-row">
                    <span>Vacancy</span>
                    <div className="walk-sens-bar"><i style={{ width: tab === "sens" ? "45%" : "0" }} /></div>
                    <b>−3.1%</b>
                  </div>
                  <div className="walk-sens-row">
                    <span>Interest rate</span>
                    <div className="walk-sens-bar"><i style={{ width: tab === "sens" ? "55%" : "0" }} /></div>
                    <b>−4.4%</b>
                  </div>
                  <div className="walk-sens-row">
                    <span>Capital growth</span>
                    <div className="walk-sens-bar"><i style={{ width: tab === "sens" ? "82%" : "0" }} /></div>
                    <b>+11.7%</b>
                  </div>
                </div>
              </div>
              <div className="walk-aside">
                <div className="walk-block">
                  <h6>Worst-case IRR</h6>
                  <div className="walk-kpis">
                    <div className="walk-kpi pos"><small>P10</small><b>+<CountVal to={3.4} decimals={1} suffix="%" trigger={tab} /></b></div>
                    <div className="walk-kpi pos"><small>P50</small><b>+<CountVal to={12.4} decimals={1} suffix="%" trigger={tab} /></b></div>
                  </div>
                </div>
                <div className="walk-note">
                  Even at <b>−10% rent</b> and <b>+1% rates</b>, this deal stays cashflow-positive.
                </div>
              </div>
            </div>

            {/* COMPARE */}
            <div className={"walk-panel" + (tab === "cmp" ? " is-active" : "")}>
              <div className="walk-block" style={{ padding: "1rem 0.5rem 0.5rem" }}>
                <table className="walk-cmp">
                  <thead>
                    <tr>
                      <th>Property</th><th>Yield</th><th>ROI</th><th>Cashflow</th><th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="is-best">
                      <td>Sri Petaling Condo</td><td>5.6%</td><td>+12.4%</td><td>RM 418</td><td><span className="pill">Best fit</span></td>
                    </tr>
                    <tr>
                      <td>Mont Kiara Suite</td><td>4.1%</td><td>+8.9%</td><td>RM 162</td><td></td>
                    </tr>
                    <tr>
                      <td>Cyberjaya Townhouse</td><td>4.8%</td><td>+9.7%</td><td>RM 240</td><td></td>
                    </tr>
                    <tr>
                      <td>Setapak Apartment</td><td>5.2%</td><td>+10.6%</td><td>RM 308</td><td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="walk-aside">
                <div className="walk-note">
                  Sorted by <b>ROI</b>. Switch the sort, or weight each KPI to match how
                  you score deals in your head.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Walkthrough;
