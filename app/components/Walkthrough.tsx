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

type Tab = "props" | "sens" | "cmp";

const tabs: { id: Tab; label: string }[] = [
  { id: "props", label: "Properties" },
  { id: "sens", label: "Scenario Lab" },
  { id: "cmp", label: "Compare" },
];

const sideItems: { id: Tab | "_"; label: string }[] = [
  { id: "props", label: "Properties" },
  { id: "sens", label: "Scenario Lab" },
  { id: "_", label: "Auction Lab" },
  { id: "_", label: "Loan Calculator" },
  { id: "cmp", label: "Comparison" },
  { id: "_", label: "Account" },
];

const HomeIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1z" />
  </svg>
);
const BuildingIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="4" y="3" width="16" height="18" rx="1.5" />
    <path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01" />
    <path d="M10 21v-4h4v4" />
  </svg>
);
type PropId = "sri" | "mont";

interface WalkPropCard {
  id: PropId;
  name: string;
  meta: string;
  icon: "home" | "building";
  yield_: number;
  actualCost: string;
  rental: string;
  cashflow: string;
  dscr: string;
  pills: string[];
}

const dashCards: WalkPropCard[] = [
  {
    id: "sri",
    name: "Sri Petaling Condo",
    meta: "968 sqft · Residential · Subsale",
    icon: "home",
    yield_: 4.6,
    actualCost: "RM 558,400",
    rental: "RM 2,300",
    cashflow: "+RM 285",
    dscr: "1.18×",
    pills: ["Cash-flow +"],
  },
  {
    id: "mont",
    name: "Mont Kiara Suite",
    meta: "1,800 sqft · Commercial · Subsale",
    icon: "building",
    yield_: 6.4,
    actualCost: "RM 1,178,000",
    rental: "RM 6,500",
    cashflow: "+RM 1,240",
    dscr: "1.38×",
    pills: ["Cash-flow +", "High DSCR"],
  },
];

interface PropertyDetail {
  upfront: Array<{ label: string; value: string }>;
  total: string;
  kpis: Array<{ label: string; value: string; pos?: boolean }>;
  chart: number[];
  note: { lead: string; body: string };
}

const propertyDetails: Record<PropId, PropertyDetail> = {
  sri: {
    upfront: [
      { label: "Purchase price", value: "RM 530,000" },
      { label: "Stamp duty (MOT)", value: "RM 11,400" },
      { label: "Legal fees (MOT)", value: "RM 5,200" },
      { label: "Disbursement fees", value: "RM 850" },
      { label: "Valuation fee", value: "RM 700" },
      { label: "Stamp duty (loan)", value: "RM 4,500" },
      { label: "Legal fees (loan)", value: "RM 5,750" },
    ],
    total: "RM 558,400",
    kpis: [
      { label: "Real Rental Yield", value: "+4.6%", pos: true },
      { label: "IRR", value: "+9.2%", pos: true },
      { label: "Monthly Cash Flow", value: "RM 285", pos: true },
      { label: "Cash-on-Cash", value: "4.2%", pos: true },
    ],
    chart: [38, 42, 40, 46, 44, 50, 48, 52, 50, 56, 54, 60],
    note: {
      lead: "90% LTV residential loan.",
      body: "Modest cash flow, steady tenant profile. Stays positive even with −10% rent.",
    },
  },
  mont: {
    upfront: [
      { label: "Purchase price", value: "RM 1,050,000" },
      { label: "Stamp duty (MOT)", value: "RM 41,500" },
      { label: "Legal fees (MOT)", value: "RM 9,800" },
      { label: "Disbursement fees", value: "RM 1,400" },
      { label: "Valuation fee", value: "RM 1,200" },
      { label: "Stamp duty (loan)", value: "RM 6,300" },
      { label: "Legal fees (loan)", value: "RM 7,800" },
    ],
    total: "RM 1,178,000",
    kpis: [
      { label: "Real Rental Yield", value: "+6.4%", pos: true },
      { label: "IRR", value: "+14.8%", pos: true },
      { label: "Monthly Cash Flow", value: "RM 1,240", pos: true },
      { label: "Cash-on-Cash", value: "5.8%", pos: true },
    ],
    chart: [55, 68, 64, 78, 70, 84, 76, 88, 80, 92, 86, 95],
    note: {
      lead: "70% LTV commercial loan, higher MOT.",
      body: "Bigger upfront, stronger cash flow. Commercial rent premium covers the lower leverage.",
    },
  },
};

interface DashCardProps {
  card: WalkPropCard;
  trigger: unknown;
  selected: boolean;
  onSelect: () => void;
}

const DashPropertyCard = ({ card, trigger, selected, onSelect }: DashCardProps) => (
  <button
    type="button"
    className={"walk-pcard" + (selected ? " is-best" : " is-muted")}
    onClick={onSelect}
    aria-pressed={selected}
  >
    <div className="walk-pcard-head">
      <span className="walk-pcard-icon">{card.icon === "home" ? <HomeIcon /> : <BuildingIcon />}</span>
      <div className="walk-pcard-title">
        <div className="walk-pcard-name">{card.name}</div>
        <div className="walk-pcard-meta">{card.meta}</div>
      </div>
      {selected && <span className="walk-pcard-active">Viewing</span>}
    </div>
    <div className="walk-pcard-yield">
      <small>Real Rental Yield</small>
      <b><CountVal to={card.yield_} decimals={1} prefix="+" suffix="%" trigger={trigger} /></b>
    </div>
    <div className="walk-pcard-grid">
      <div><small>Actual Cost</small><b>{card.actualCost}</b></div>
      <div><small>Monthly Rental</small><b>{card.rental}</b></div>
      <div><small>Cash Flow</small><b className="pos">{card.cashflow}</b></div>
      <div><small>DSCR</small><b>{card.dscr}</b></div>
    </div>
    <div className="walk-pcard-pills">
      {card.pills.map((p) => <span key={p} className="walk-pcard-pill">{p}</span>)}
    </div>
  </button>
);

const parseKpi = (value: string): { num: number; prefix: string; suffix: string; decimals: number } => {
  const m = value.match(/^([^\d-]*)(-?[\d,]+(?:\.\d+)?)(.*)$/);
  if (!m) return { num: 0, prefix: value, suffix: "", decimals: 0 };
  const prefix = m[1];
  const numStr = m[2].replace(/,/g, "");
  const suffix = m[3];
  const decimals = numStr.includes(".") ? (numStr.split(".")[1]?.length ?? 0) : 0;
  return { num: parseFloat(numStr), prefix, suffix, decimals };
};

const AnimatedKpi = ({ value, trigger }: { value: string; trigger: unknown }) => {
  const { num, prefix, suffix, decimals } = parseKpi(value);
  return <CountVal to={num} prefix={prefix} suffix={suffix} decimals={decimals} trigger={trigger} />;
};

const Walkthrough = () => {
  const ref = useReveal<HTMLElement>();
  const [tab, setTab] = useState<Tab>("props");
  const [selectedId, setSelectedId] = useState<PropId>("mont");

  const selectedCard = dashCards.find((c) => c.id === selectedId) ?? dashCards[0];
  const selectedDetail = propertyDetails[selectedId];
  const chartPeak = Math.max(...selectedDetail.chart);
  const detailTrigger = `${tab}-${selectedId}`;

  const slug = selectedId === "sri" ? "sri-petaling-condo" : "mont-kiara-suite";
  const url =
    tab === "props" ? `workspace.ruma.app / properties / ${slug}`
    : tab === "sens" ? "workspace.ruma.app / lab / sri-petaling-condo"
    : "workspace.ruma.app / compare";

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
          <div className="url">{url}</div>
          <div className="who"><b>AJ</b> Ajile</div>
        </div>

        <div className="walk-app">
          <aside className="walk-side">
            <div className="walk-side-section">Ruma</div>
            {sideItems.map((item, i) => (
              <a
                key={i}
                className={item.id !== "_" && item.id === tab ? "is-active" : ""}
              >
                <span className="dot" />{item.label}
              </a>
            ))}
          </aside>

          <div className="walk-main">
            {/* PROPERTIES */}
            <div className={"walk-panel walk-panel-props" + (tab === "props" ? " is-active" : "")}>
              <div className="walk-crumbs">Properties / <b>{selectedCard.name}</b></div>
              <div className="walk-dash-head">
                <div className="walk-dash-title">
                  <h3>Properties</h3>
                  <span className="walk-count">6 active</span>
                </div>
              </div>
              <div className="walk-pcard-grid-outer">
                {dashCards.map((card) => (
                  <DashPropertyCard
                    key={card.id}
                    card={card}
                    trigger={tab}
                    selected={card.id === selectedId}
                    onSelect={() => setSelectedId(card.id)}
                  />
                ))}
              </div>

              <div className="walk-detail">
                <div className="walk-block">
                  <div className="walk-detail-head">
                    <h6>Upfront costs</h6>
                    <span className="walk-detail-sub">{selectedCard.meta.split(" · ")[1]} · {selectedCard.meta.split(" · ")[2]}</span>
                  </div>
                  <ul className="walk-stack">
                    {selectedDetail.upfront.map((row) => (
                      <li key={row.label}><span>{row.label}</span><strong>{row.value}</strong></li>
                    ))}
                  </ul>
                  <div className="walk-total">
                    <span>Total actual cost</span><b>{selectedDetail.total}</b>
                  </div>
                </div>
                <div className="walk-detail-right">
                  <div className="walk-block">
                    <h6>Key metrics</h6>
                    <div className="walk-kpis">
                      {selectedDetail.kpis.map((k) => (
                        <div key={k.label} className={"walk-kpi" + (k.pos ? " pos" : "")}>
                          <small>{k.label}</small>
                          <b><AnimatedKpi value={k.value} trigger={detailTrigger} /></b>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="walk-block">
                    <div className="walk-detail-head">
                      <h6>Cashflow · 12 mo</h6>
                      <span className="walk-detail-sub">RM, net of mortgage</span>
                    </div>
                    <div className="walk-chart">
                      {selectedDetail.chart.map((h, i) => (
                        <div
                          key={`${selectedId}-${i}`}
                          className={"walk-chart-bar" + (h === chartPeak ? " is-peak" : "")}
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="walk-note">
                    <b>{selectedDetail.note.lead}</b> {selectedDetail.note.body}
                  </div>
                </div>
              </div>
            </div>

            {/* SCENARIO LAB */}
            <div className={"walk-panel" + (tab === "sens" ? " is-active" : "")}>
              <div className="walk-crumbs-wrap">
                <div className="walk-crumbs">Scenario Lab / <b>Sri Petaling Condo</b></div>
                <span className="walk-deal-roi">IRR +3.4% – +14.8%</span>
              </div>
              <div className="walk-panel-grid">
                <div className="walk-block">
                  <h6>Scenario inputs</h6>
                  <div className="walk-sens">
                    <div className="walk-sens-row">
                      <span>Rent expectation</span>
                      <div className="walk-sens-range">
                        <div className="walk-sens-track">
                          <div className="walk-sens-fill" style={{ left: tab === "sens" ? "12%" : "50%", right: tab === "sens" ? "22%" : "50%" }} />
                          <span className="walk-sens-handle" style={{ left: tab === "sens" ? "12%" : "50%" }} />
                          <span className="walk-sens-handle" style={{ left: tab === "sens" ? "78%" : "50%" }} />
                        </div>
                      </div>
                      <b>RM 2.4k–3.2k</b>
                    </div>
                    <div className="walk-sens-row">
                      <span>Annual appreciation</span>
                      <div className="walk-sens-range">
                        <div className="walk-sens-track">
                          <div className="walk-sens-fill" style={{ left: tab === "sens" ? "25%" : "50%", right: tab === "sens" ? "35%" : "50%" }} />
                          <span className="walk-sens-handle" style={{ left: tab === "sens" ? "25%" : "50%" }} />
                          <span className="walk-sens-handle" style={{ left: tab === "sens" ? "65%" : "50%" }} />
                        </div>
                      </div>
                      <b>2.0–6.5%</b>
                    </div>
                    <div className="walk-sens-row">
                      <span>Holding period</span>
                      <div className="walk-sens-range">
                        <div className="walk-sens-track">
                          <div className="walk-sens-fill" style={{ left: tab === "sens" ? "20%" : "50%", right: tab === "sens" ? "15%" : "50%" }} />
                          <span className="walk-sens-handle" style={{ left: tab === "sens" ? "20%" : "50%" }} />
                          <span className="walk-sens-handle" style={{ left: tab === "sens" ? "85%" : "50%" }} />
                        </div>
                      </div>
                      <b>3–10 yrs</b>
                    </div>
                    <div className="walk-sens-row">
                      <span>Vacancy rate</span>
                      <div className="walk-sens-range">
                        <div className="walk-sens-track">
                          <div className="walk-sens-fill" style={{ left: tab === "sens" ? "5%" : "50%", right: tab === "sens" ? "65%" : "50%" }} />
                          <span className="walk-sens-handle" style={{ left: tab === "sens" ? "5%" : "50%" }} />
                          <span className="walk-sens-handle" style={{ left: tab === "sens" ? "35%" : "50%" }} />
                        </div>
                      </div>
                      <b>2–8%</b>
                    </div>
                  </div>
                </div>
                <div className="walk-aside">
                  <div className="walk-block">
                    <h6>IRR range</h6>
                    <div className="walk-kpis">
                      <div className="walk-kpi pos"><small>IRR low</small><b><CountVal to={3.4} decimals={1} prefix="+" suffix="%" trigger={tab} /></b></div>
                      <div className="walk-kpi pos"><small>IRR high</small><b><CountVal to={14.8} decimals={1} prefix="+" suffix="%" trigger={tab} /></b></div>
                    </div>
                    <div className="walk-dist">
                      <div className="walk-dist-track" />
                      <div
                        className="walk-dist-fill"
                        style={{ left: tab === "sens" ? "18%" : "50%", right: tab === "sens" ? "18%" : "50%" }}
                      />
                      <div className="walk-dist-mark" style={{ left: tab === "sens" ? "18%" : "50%" }}><span>Low</span></div>
                      <div className="walk-dist-mark" style={{ left: tab === "sens" ? "82%" : "50%" }}><span>High</span></div>
                    </div>
                  </div>
                  <div className="walk-note">
                    Even at <b>−10% rent</b> and <b>+1% rates</b>, this deal stays cashflow-positive.
                  </div>
                </div>
              </div>
            </div>

            {/* COMPARE */}
            <div className={"walk-panel" + (tab === "cmp" ? " is-active" : "")}>
              <div className="walk-crumbs">Comparison</div>
              <div className="walk-block walk-block-cmp">
                <div className="walk-cmp-head">
                  <h6>4 properties side by side</h6>
                </div>
                <div className="walk-cmp-scroll">
                  <table className="walk-cmp">
                    <thead>
                      <tr className="walk-cmp-name">
                        <th></th>
                        <th>Cyberjaya Townhouse</th>
                        <th>Setapak Apartment</th>
                        <th>Sri Petaling Condo</th>
                        <th className="is-best">Mont Kiara Suite</th>
                      </tr>
                      <tr className="walk-cmp-meta">
                        <th></th>
                        <th>1,420 sqft · Residential</th>
                        <th>820 sqft · Residential</th>
                        <th>968 sqft · Residential</th>
                        <th className="is-best">1,800 sqft · Commercial</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>Real Rental Yield</th>
                        <td>3.1%</td>
                        <td>4.0%</td>
                        <td>4.6%</td>
                        <td className="is-best">6.4%</td>
                      </tr>
                      <tr>
                        <th>IRR</th>
                        <td>+4.2%</td>
                        <td>+7.5%</td>
                        <td>+9.2%</td>
                        <td className="is-best">+14.8%</td>
                      </tr>
                      <tr>
                        <th>Cash-on-Cash</th>
                        <td className="is-neg">−0.8%</td>
                        <td>3.2%</td>
                        <td className="is-pos">4.2%</td>
                        <td className="is-best is-pos">5.8%</td>
                      </tr>
                      <tr>
                        <th>Monthly Cash Flow</th>
                        <td className="is-neg">−RM 280</td>
                        <td>+RM 85</td>
                        <td className="is-pos">+RM 285</td>
                        <td className="is-best is-pos">+RM 1,240</td>
                      </tr>
                      <tr>
                        <th>DSCR</th>
                        <td className="is-neg">0.95×</td>
                        <td>1.08×</td>
                        <td>1.18×</td>
                        <td className="is-best">1.38×</td>
                      </tr>
                      <tr>
                        <th>Payback Period</th>
                        <td className="is-neg">—</td>
                        <td>22 yrs</td>
                        <td>14 yrs</td>
                        <td className="is-best">8 yrs</td>
                      </tr>
                    </tbody>
                  </table>
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
