import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { renderToReadableStream } from "react-dom/server";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, Meta, Links, ScrollRestoration, Scripts } from "react-router";
import { useState, useEffect, useRef } from "react";
async function handleRequest(request, responseStatusCode, responseHeaders, routerContext, _loadContext) {
  const stream = await renderToReadableStream(
    /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
    { signal: request.signal }
  );
  responseHeaders.set("Content-Type", "text/html");
  return new Response(stream, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "UTF-8"
      }), /* @__PURE__ */ jsx("link", {
        rel: "icon",
        type: "image/png",
        href: "/logo.png"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }), /* @__PURE__ */ jsx("meta", {
        name: "theme-color",
        content: "#0f0f0f"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function Root() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Layout,
  default: root
}, Symbol.toStringTag, { value: "Module" }));
const reasons = [
  {
    title: "All-in-one evaluator",
    desc: "Price every cost, compare deals, and size your loan in a single, opinionated workflow.",
    icon: "box"
  },
  {
    title: "Scenario Lab",
    desc: "Stress-test rent, vacancy, growth, and rates — and see what your downside really looks like.",
    icon: "sensitivity"
  },
  {
    title: "Side-by-side comparison",
    desc: "Stack properties by yield, IRR, and other KPIs so the best value reveals itself.",
    icon: "compare"
  },
  {
    title: "Loan calculator",
    desc: "Estimate monthly payments and total interest before you commit.",
    icon: "calculator"
  },
  {
    title: "Auction Lab",
    desc: "Plan auction bids with IRR and cash-on-cash ceilings, market-value deltas, and full cost breakdowns.",
    icon: "auction"
  },
  {
    title: "Shareable PDF reports",
    desc: "Export branded, share-ready summaries for clients and co-investors in a click.",
    icon: "pdf"
  }
];
const steps = [
  {
    n: "01",
    title: "Drop in a property",
    desc: "Fill in price, location, and target rent. Ruma fetches sensible defaults for stamp duty, fees, and indicative rates."
  },
  {
    n: "02",
    title: "Tune your assumptions",
    desc: "Adjust rent, vacancy, growth, and loan mix with sliders. Every panel — cashflow, ROI, repayment — updates live."
  },
  {
    n: "03",
    title: "Compare and decide",
    desc: "Save scenarios, stack properties side-by-side, and export a share-ready summary for clients or co-investors."
  }
];
const pricingTiers = [
  {
    name: "Starter",
    price: "Free",
    cadence: "",
    desc: "For first-time investors evaluating one property at a time.",
    features: [
      "Save up to 5 properties",
      "Loan calculator",
      "Compare properties side by side",
      "Base mortgage, legal, and stamp-duty calculators"
    ],
    cta: "Join the waitlist",
    primary: false
  },
  {
    name: "Pro",
    price: "RM 39",
    cadence: "/ month",
    desc: "For active investors and agents running multiple deals at once.",
    features: [
      "Everything in Starter",
      "Save unlimited properties",
      "Scenario Lab — build and export scenarios",
      "Auction Lab — bid analysis with PDF export",
      "Import from Listing — auto-fill from text or screenshots",
      "Early access to new calculators"
    ],
    cta: "Join the waitlist",
    primary: true
  }
];
const faqs = [
  {
    q: "Is Ruma only for Malaysian properties?",
    a: "We're starting with Malaysia because the local fee stack (stamp duty, MOT, legal, valuation) is genuinely tricky and underserved by global tools. Other markets are on the roadmap once the Malaysian experience is rock-solid."
  },
  {
    q: "Do I need to be a finance person to use it?",
    a: "No. Ruma ships sensible defaults for every assumption. If you want to go deeper, every number is editable and every formula is documented in plain English."
  },
  {
    q: "How is this different from a spreadsheet?",
    a: "Spreadsheets are flexible but brittle. Ruma is a workflow: changes ripple through cashflow, repayment, and risk views automatically, and you can compare entire scenarios, not just cells, side by side."
  },
  {
    q: "When does Ruma launch?",
    a: "We're targeting a public launch in summer 2026. Waitlist signups get the first invites in waves."
  },
  {
    q: "Who's behind Ruma?",
    a: "Team AJILE, a small group of investors, engineers, and designers. Reach us anytime at inbox@ajile.team."
  }
];
const navLinks = [
  { label: "Why Ruma", href: "#features" },
  { label: "Preview", href: "#walkthrough" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" }
];
const logo = "/assets/logo-BUvS-UFf.png";
const heroCards = [
  {
    name: "Sri Petaling Condo",
    meta: "968 sqft · Residential · Subsale",
    icon: "home",
    yield_: 4.6,
    actualCost: "RM 558,400",
    rental: "RM 2,300",
    cashflow: "+RM 285",
    dscr: "1.18×",
    pills: ["Cash-flow +"]
  },
  {
    name: "Mont Kiara Suite",
    meta: "1,800 sqft · Commercial · Subsale",
    icon: "building",
    yield_: 6.4,
    actualCost: "RM 1,178,000",
    rental: "RM 6,500",
    cashflow: "+RM 1,240",
    dscr: "1.38×",
    pills: ["Cash-flow +", "High DSCR"],
    best: true
  }
];
const HomeMarkIcon = () => /* @__PURE__ */ jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1z" }) });
const BuildingMarkIcon = () => /* @__PURE__ */ jsxs("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
  /* @__PURE__ */ jsx("rect", { x: "4", y: "3", width: "16", height: "18", rx: "1.5" }),
  /* @__PURE__ */ jsx("path", { d: "M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01" }),
  /* @__PURE__ */ jsx("path", { d: "M10 21v-4h4v4" })
] });
const PlusIcon = () => /* @__PURE__ */ jsx("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M12 5v14M5 12h14" }) });
const useCount = (to, duration = 1200, delay = 0) => {
  const [v, setV] = useState(0);
  useEffect(() => {
    let raf = 0;
    let start = null;
    const step = (t) => {
      if (start === null) start = t;
      const elapsed = t - start - delay;
      if (elapsed < 0) {
        raf = requestAnimationFrame(step);
        return;
      }
      const p = Math.min(1, elapsed / duration);
      setV(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(step);
      else setV(to);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to, duration, delay]);
  return v;
};
const HeroPropertyCard = ({ card, delay }) => {
  const y = useCount(card.yield_, 1300, delay);
  return /* @__PURE__ */ jsxs("article", { className: "mock-prop-card" + (card.best ? " is-best" : ""), children: [
    /* @__PURE__ */ jsxs("div", { className: "mock-prop-card-head", children: [
      /* @__PURE__ */ jsx("span", { className: "mock-prop-icon", children: card.icon === "home" ? /* @__PURE__ */ jsx(HomeMarkIcon, {}) : /* @__PURE__ */ jsx(BuildingMarkIcon, {}) }),
      /* @__PURE__ */ jsxs("div", { className: "mock-prop-card-title", children: [
        /* @__PURE__ */ jsx("div", { className: "mock-prop-name", children: card.name }),
        /* @__PURE__ */ jsx("div", { className: "mock-prop-meta", children: card.meta })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mock-yield", children: [
      /* @__PURE__ */ jsx("small", { children: "Real Rental Yield" }),
      /* @__PURE__ */ jsxs("b", { className: "mock-yield-val", children: [
        "+",
        y.toFixed(1),
        "%"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mock-prop-grid", children: [
      /* @__PURE__ */ jsxs("div", { className: "mock-prop-cell", children: [
        /* @__PURE__ */ jsx("small", { children: "Actual Cost" }),
        /* @__PURE__ */ jsx("b", { children: card.actualCost })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mock-prop-cell", children: [
        /* @__PURE__ */ jsx("small", { children: "Monthly Rental" }),
        /* @__PURE__ */ jsx("b", { children: card.rental })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mock-prop-cell", children: [
        /* @__PURE__ */ jsx("small", { children: "Cash Flow" }),
        /* @__PURE__ */ jsx("b", { className: "is-pos", children: card.cashflow })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mock-prop-cell", children: [
        /* @__PURE__ */ jsx("small", { children: "DSCR" }),
        /* @__PURE__ */ jsx("b", { children: card.dscr })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mock-pills", children: card.pills.map((p) => /* @__PURE__ */ jsx("span", { className: "mock-pill", children: p }, p)) })
  ] });
};
const HeroMock = () => {
  return /* @__PURE__ */ jsxs("div", { className: "hero-mock", children: [
    /* @__PURE__ */ jsxs("div", { className: "mock-bar", children: [
      /* @__PURE__ */ jsxs("div", { className: "mock-dots", children: [
        /* @__PURE__ */ jsx("i", {}),
        /* @__PURE__ */ jsx("i", {}),
        /* @__PURE__ */ jsx("i", {})
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mock-url", children: "workspace.ruma.app / properties" }),
      /* @__PURE__ */ jsx("div", { className: "mock-user", children: "AJ" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mock-dash", children: [
      /* @__PURE__ */ jsxs("div", { className: "mock-dash-head", children: [
        /* @__PURE__ */ jsxs("div", { className: "mock-dash-title", children: [
          /* @__PURE__ */ jsx("h6", { children: "Properties" }),
          /* @__PURE__ */ jsx("span", { className: "mock-count", children: "6 active" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mock-dash-tools", children: [
          /* @__PURE__ */ jsxs("span", { className: "mock-view", children: [
            "Simple ",
            /* @__PURE__ */ jsx("i", {})
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "mock-add", children: [
            /* @__PURE__ */ jsx(PlusIcon, {}),
            " Add property"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mock-prop-row", children: heroCards.map((card, i) => /* @__PURE__ */ jsx(HeroPropertyCard, { card, delay: i * 180 }, card.name)) })
    ] })
  ] });
};
const heroPills = ["Scenario Lab", "Auction Lab", "Loan calculator"];
const TopNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const closeMenu = () => setMenuOpen(false);
  return /* @__PURE__ */ jsxs(
    "nav",
    {
      className: "hero-nav",
      "data-scrolled": scrolled || void 0,
      "data-menu-open": menuOpen || void 0,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "hero-nav-inner r-container", children: [
          /* @__PURE__ */ jsx("a", { href: "#", className: "hero-logo", "aria-label": "Ruma", onClick: closeMenu, children: /* @__PURE__ */ jsx("img", { src: logo, alt: "Ruma", className: "hero-logo-img" }) }),
          /* @__PURE__ */ jsx("div", { className: "hero-nav-links", children: navLinks.map((l) => /* @__PURE__ */ jsx("a", { href: l.href, children: l.label }, l.label)) }),
          /* @__PURE__ */ jsx("a", { href: "#waitlist", className: "hero-nav-cta", onClick: closeMenu, children: "Get early access →" }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              className: "hero-nav-toggle",
              onClick: () => setMenuOpen((o) => !o),
              "aria-label": menuOpen ? "Close menu" : "Open menu",
              "aria-expanded": menuOpen,
              children: /* @__PURE__ */ jsx("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", "aria-hidden": "true", children: menuOpen ? /* @__PURE__ */ jsx("path", { d: "M6 6l12 12M6 18L18 6" }) : /* @__PURE__ */ jsx("path", { d: "M3 6h18M3 12h18M3 18h18" }) })
            }
          )
        ] }),
        menuOpen && /* @__PURE__ */ jsxs("div", { className: "hero-nav-mobile", children: [
          navLinks.map((l) => /* @__PURE__ */ jsx("a", { href: l.href, onClick: closeMenu, children: l.label }, l.label)),
          /* @__PURE__ */ jsx("a", { href: "#waitlist", className: "hero-nav-mobile-cta", onClick: closeMenu, children: "Get early access →" })
        ] })
      ]
    }
  );
};
const Hero = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(TopNav, {}),
    /* @__PURE__ */ jsx("header", { className: "hero r-container", "data-layout": "split", children: /* @__PURE__ */ jsxs("div", { className: "hero-body", children: [
      /* @__PURE__ */ jsxs("div", { className: "hero-copy", children: [
        /* @__PURE__ */ jsxs("span", { className: "hero-eyebrow", children: [
          /* @__PURE__ */ jsx("span", { className: "hero-eyebrow-dot" }),
          "Launching soon · Malaysia"
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "hero-headline", children: [
          "Compare, calculate, and ",
          /* @__PURE__ */ jsx("em", { children: "close smarter." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "hero-sub", children: "Estimate fees, stack loan offers, forecast returns, and choose the property that wins on yield & KPIs — without spreadsheets." }),
        /* @__PURE__ */ jsxs("div", { className: "hero-actions", children: [
          /* @__PURE__ */ jsxs("a", { href: "#waitlist", className: "r-btn r-btn-primary", children: [
            "Join the waitlist ",
            /* @__PURE__ */ jsx("span", { className: "r-arrow", children: "↗" })
          ] }),
          /* @__PURE__ */ jsx("a", { href: "#walkthrough", className: "r-btn r-btn-secondary", children: "See a preview" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "hero-pills", children: heroPills.map((p) => /* @__PURE__ */ jsxs("span", { className: "hero-pill", children: [
          /* @__PURE__ */ jsx("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M2.5 6.2 5 8.7l4.5-5.4", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }) }),
          p
        ] }, p)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hero-mock-wrap", children: [
        /* @__PURE__ */ jsx(HeroMock, {}),
        /* @__PURE__ */ jsxs("div", { className: "hero-float", children: [
          /* @__PURE__ */ jsx("small", { children: "Top Real Yield" }),
          /* @__PURE__ */ jsx("span", { className: "v", children: "+6.4%" }),
          /* @__PURE__ */ jsx("span", { className: "vs", children: "Mont Kiara Suite" })
        ] })
      ] })
    ] }) })
  ] });
};
function useReveal(threshold = 0.18) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}
const iconSvgProps = {
  width: 36,
  height: 36,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "var(--primary-ink)",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true
};
const BoxIcon = () => /* @__PURE__ */ jsxs("svg", { ...iconSvgProps, children: [
  /* @__PURE__ */ jsx("rect", { width: "7", height: "7", x: "3", y: "3", rx: "1" }),
  /* @__PURE__ */ jsx("rect", { width: "7", height: "7", x: "14", y: "3", rx: "1" }),
  /* @__PURE__ */ jsx("rect", { width: "7", height: "7", x: "14", y: "14", rx: "1" }),
  /* @__PURE__ */ jsx("rect", { width: "7", height: "7", x: "3", y: "14", rx: "1" })
] });
const SensitivityIcon = () => /* @__PURE__ */ jsxs("svg", { ...iconSvgProps, children: [
  /* @__PURE__ */ jsx("line", { x1: "21", x2: "14", y1: "4", y2: "4" }),
  /* @__PURE__ */ jsx("line", { x1: "10", x2: "3", y1: "4", y2: "4" }),
  /* @__PURE__ */ jsx("line", { x1: "21", x2: "12", y1: "12", y2: "12" }),
  /* @__PURE__ */ jsx("line", { x1: "8", x2: "3", y1: "12", y2: "12" }),
  /* @__PURE__ */ jsx("line", { x1: "21", x2: "16", y1: "20", y2: "20" }),
  /* @__PURE__ */ jsx("line", { x1: "12", x2: "3", y1: "20", y2: "20" }),
  /* @__PURE__ */ jsx("line", { x1: "14", x2: "14", y1: "2", y2: "6" }),
  /* @__PURE__ */ jsx("line", { x1: "8", x2: "8", y1: "10", y2: "14" }),
  /* @__PURE__ */ jsx("line", { x1: "16", x2: "16", y1: "18", y2: "22" })
] });
const CompareIcon = () => /* @__PURE__ */ jsxs("svg", { ...iconSvgProps, children: [
  /* @__PURE__ */ jsx("path", { d: "M3 3v18h18" }),
  /* @__PURE__ */ jsx("path", { d: "M18 17V9" }),
  /* @__PURE__ */ jsx("path", { d: "M13 17V5" }),
  /* @__PURE__ */ jsx("path", { d: "M8 17v-3" })
] });
const CalculatorIcon = () => /* @__PURE__ */ jsxs("svg", { ...iconSvgProps, children: [
  /* @__PURE__ */ jsx("rect", { width: "16", height: "20", x: "4", y: "2", rx: "2" }),
  /* @__PURE__ */ jsx("line", { x1: "8", x2: "16", y1: "6", y2: "6" }),
  /* @__PURE__ */ jsx("line", { x1: "16", x2: "16", y1: "14", y2: "18" }),
  /* @__PURE__ */ jsx("path", { d: "M16 10h.01" }),
  /* @__PURE__ */ jsx("path", { d: "M12 10h.01" }),
  /* @__PURE__ */ jsx("path", { d: "M8 10h.01" }),
  /* @__PURE__ */ jsx("path", { d: "M12 14h.01" }),
  /* @__PURE__ */ jsx("path", { d: "M8 14h.01" }),
  /* @__PURE__ */ jsx("path", { d: "M12 18h.01" }),
  /* @__PURE__ */ jsx("path", { d: "M8 18h.01" })
] });
const AuctionIcon = () => /* @__PURE__ */ jsxs("svg", { ...iconSvgProps, children: [
  /* @__PURE__ */ jsx("path", { d: "m14 13-7.5 7.5c-.83.83-2.17.83-3 0a2.12 2.12 0 0 1 0-3L11 10" }),
  /* @__PURE__ */ jsx("path", { d: "m16 16 6-6" }),
  /* @__PURE__ */ jsx("path", { d: "m8 8 6-6" }),
  /* @__PURE__ */ jsx("path", { d: "m9 7 8 8" }),
  /* @__PURE__ */ jsx("path", { d: "m21 11-8-8" }),
  /* @__PURE__ */ jsx("path", { d: "M3 21h18" })
] });
const PdfIcon = () => /* @__PURE__ */ jsxs("svg", { ...iconSvgProps, children: [
  /* @__PURE__ */ jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
  /* @__PURE__ */ jsx("path", { d: "M14 2v6h6" }),
  /* @__PURE__ */ jsx("path", { d: "M9 13h6" }),
  /* @__PURE__ */ jsx("path", { d: "M9 17h4" })
] });
const iconMap = {
  box: /* @__PURE__ */ jsx(BoxIcon, {}),
  sensitivity: /* @__PURE__ */ jsx(SensitivityIcon, {}),
  compare: /* @__PURE__ */ jsx(CompareIcon, {}),
  calculator: /* @__PURE__ */ jsx(CalculatorIcon, {}),
  auction: /* @__PURE__ */ jsx(AuctionIcon, {}),
  pdf: /* @__PURE__ */ jsx(PdfIcon, {})
};
const Features = () => {
  const ref = useReveal();
  return /* @__PURE__ */ jsxs("section", { className: "features r-container r-reveal", id: "features", ref, children: [
    /* @__PURE__ */ jsxs("div", { className: "features-head", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "r-eyebrow", children: "Why Ruma" }),
        /* @__PURE__ */ jsxs("h2", { className: "features-title", style: { marginTop: "1rem" }, children: [
          "Modern deal intelligence",
          /* @__PURE__ */ jsx("em", { children: "without the spreadsheet sprawl." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "features-lede", children: "Ruma pulls every lever — fees, yields, loan costs, scenarios, auction bids — into a single workflow so you can vet a property, compare scenarios, and move toward closing with confidence." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "features-grid", children: reasons.map((r, i) => /* @__PURE__ */ jsxs("article", { className: "feature-card", children: [
      /* @__PURE__ */ jsxs("div", { className: "feature-card-head", children: [
        /* @__PURE__ */ jsx("div", { className: "feature-icon", children: iconMap[r.icon] }),
        /* @__PURE__ */ jsxs("span", { className: "feature-num", children: [
          "0",
          i + 1
        ] })
      ] }),
      /* @__PURE__ */ jsx("h4", { children: r.title }),
      /* @__PURE__ */ jsx("p", { children: r.desc })
    ] }, r.title)) })
  ] });
};
const CountVal = ({ to, prefix = "", suffix = "", decimals = 0, duration = 1100, trigger }) => {
  const [v, setV] = useState(0);
  useEffect(() => {
    let raf = 0;
    let start = null;
    const step = (t) => {
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
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    prefix,
    display,
    suffix
  ] });
};
const tabs = [
  { id: "props", label: "Properties" },
  { id: "sens", label: "Scenario Lab" },
  { id: "cmp", label: "Compare" }
];
const sideItems = [
  { id: "props", label: "Properties" },
  { id: "sens", label: "Scenario Lab" },
  { id: "_", label: "Auction Lab" },
  { id: "_", label: "Loan Calculator" },
  { id: "cmp", label: "Comparison" },
  { id: "_", label: "Account" }
];
const HomeIcon = () => /* @__PURE__ */ jsx("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1z" }) });
const BuildingIcon = () => /* @__PURE__ */ jsxs("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
  /* @__PURE__ */ jsx("rect", { x: "4", y: "3", width: "16", height: "18", rx: "1.5" }),
  /* @__PURE__ */ jsx("path", { d: "M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01" }),
  /* @__PURE__ */ jsx("path", { d: "M10 21v-4h4v4" })
] });
const dashCards = [
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
    pills: ["Cash-flow +"]
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
    pills: ["Cash-flow +", "High DSCR"]
  }
];
const propertyDetails = {
  sri: {
    upfront: [
      { label: "Purchase price", value: "RM 530,000" },
      { label: "Stamp duty (MOT)", value: "RM 11,400" },
      { label: "Legal fees (MOT)", value: "RM 5,200" },
      { label: "Disbursement fees", value: "RM 850" },
      { label: "Valuation fee", value: "RM 700" },
      { label: "Stamp duty (loan)", value: "RM 4,500" },
      { label: "Legal fees (loan)", value: "RM 5,750" }
    ],
    total: "RM 558,400",
    kpis: [
      { label: "Real Rental Yield", value: "+4.6%", pos: true },
      { label: "IRR", value: "+9.2%", pos: true },
      { label: "Monthly Cash Flow", value: "RM 285", pos: true },
      { label: "Cash-on-Cash", value: "4.2%", pos: true }
    ],
    chart: [38, 42, 40, 46, 44, 50, 48, 52, 50, 56, 54, 60],
    note: {
      lead: "90% LTV residential loan.",
      body: "Modest cash flow, steady tenant profile. Stays positive even with −10% rent."
    }
  },
  mont: {
    upfront: [
      { label: "Purchase price", value: "RM 1,050,000" },
      { label: "Stamp duty (MOT)", value: "RM 41,500" },
      { label: "Legal fees (MOT)", value: "RM 9,800" },
      { label: "Disbursement fees", value: "RM 1,400" },
      { label: "Valuation fee", value: "RM 1,200" },
      { label: "Stamp duty (loan)", value: "RM 6,300" },
      { label: "Legal fees (loan)", value: "RM 7,800" }
    ],
    total: "RM 1,178,000",
    kpis: [
      { label: "Real Rental Yield", value: "+6.4%", pos: true },
      { label: "IRR", value: "+14.8%", pos: true },
      { label: "Monthly Cash Flow", value: "RM 1,240", pos: true },
      { label: "Cash-on-Cash", value: "5.8%", pos: true }
    ],
    chart: [55, 68, 64, 78, 70, 84, 76, 88, 80, 92, 86, 95],
    note: {
      lead: "70% LTV commercial loan, higher MOT.",
      body: "Bigger upfront, stronger cash flow. Commercial rent premium covers the lower leverage."
    }
  }
};
const DashPropertyCard = ({ card, trigger, selected, onSelect }) => /* @__PURE__ */ jsxs(
  "button",
  {
    type: "button",
    className: "walk-pcard" + (selected ? " is-best" : " is-muted"),
    onClick: onSelect,
    "aria-pressed": selected,
    children: [
      /* @__PURE__ */ jsxs("div", { className: "walk-pcard-head", children: [
        /* @__PURE__ */ jsx("span", { className: "walk-pcard-icon", children: card.icon === "home" ? /* @__PURE__ */ jsx(HomeIcon, {}) : /* @__PURE__ */ jsx(BuildingIcon, {}) }),
        /* @__PURE__ */ jsxs("div", { className: "walk-pcard-title", children: [
          /* @__PURE__ */ jsx("div", { className: "walk-pcard-name", children: card.name }),
          /* @__PURE__ */ jsx("div", { className: "walk-pcard-meta", children: card.meta })
        ] }),
        selected && /* @__PURE__ */ jsx("span", { className: "walk-pcard-active", children: "Viewing" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "walk-pcard-yield", children: [
        /* @__PURE__ */ jsx("small", { children: "Real Rental Yield" }),
        /* @__PURE__ */ jsx("b", { children: /* @__PURE__ */ jsx(CountVal, { to: card.yield_, decimals: 1, prefix: "+", suffix: "%", trigger }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "walk-pcard-grid", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("small", { children: "Actual Cost" }),
          /* @__PURE__ */ jsx("b", { children: card.actualCost })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("small", { children: "Monthly Rental" }),
          /* @__PURE__ */ jsx("b", { children: card.rental })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("small", { children: "Cash Flow" }),
          /* @__PURE__ */ jsx("b", { className: "pos", children: card.cashflow })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("small", { children: "DSCR" }),
          /* @__PURE__ */ jsx("b", { children: card.dscr })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "walk-pcard-pills", children: card.pills.map((p) => /* @__PURE__ */ jsx("span", { className: "walk-pcard-pill", children: p }, p)) })
    ]
  }
);
const parseKpi = (value) => {
  const m = value.match(/^([^\d-]*)(-?[\d,]+(?:\.\d+)?)(.*)$/);
  if (!m) return { num: 0, prefix: value, suffix: "", decimals: 0 };
  const prefix = m[1];
  const numStr = m[2].replace(/,/g, "");
  const suffix = m[3];
  const decimals = numStr.includes(".") ? numStr.split(".")[1]?.length ?? 0 : 0;
  return { num: parseFloat(numStr), prefix, suffix, decimals };
};
const AnimatedKpi = ({ value, trigger }) => {
  const { num, prefix, suffix, decimals } = parseKpi(value);
  return /* @__PURE__ */ jsx(CountVal, { to: num, prefix, suffix, decimals, trigger });
};
const Walkthrough = () => {
  const ref = useReveal();
  const [tab, setTab] = useState("props");
  const [selectedId, setSelectedId] = useState("mont");
  const selectedCard = dashCards.find((c) => c.id === selectedId) ?? dashCards[0];
  const selectedDetail = propertyDetails[selectedId];
  const chartPeak = Math.max(...selectedDetail.chart);
  const detailTrigger = `${tab}-${selectedId}`;
  const slug = selectedId === "sri" ? "sri-petaling-condo" : "mont-kiara-suite";
  const url = tab === "props" ? `workspace.ruma.app / properties / ${slug}` : tab === "sens" ? "workspace.ruma.app / lab / sri-petaling-condo" : "workspace.ruma.app / compare";
  return /* @__PURE__ */ jsxs("section", { className: "walkthrough r-container r-reveal", id: "walkthrough", ref, children: [
    /* @__PURE__ */ jsxs("div", { className: "walk-head", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "r-eyebrow", children: "Inside Ruma" }),
        /* @__PURE__ */ jsxs("h2", { className: "walk-title", children: [
          "A workspace built for ",
          /* @__PURE__ */ jsx("em", { children: "real decisions." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "walk-tabs", role: "tablist", children: tabs.map((t) => /* @__PURE__ */ jsx(
        "button",
        {
          className: "walk-tab" + (tab === t.id ? " is-active" : ""),
          onClick: () => setTab(t.id),
          children: t.label
        },
        t.id
      )) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "walk-frame", children: [
      /* @__PURE__ */ jsxs("div", { className: "walk-bar", children: [
        /* @__PURE__ */ jsxs("div", { className: "dots", children: [
          /* @__PURE__ */ jsx("i", {}),
          /* @__PURE__ */ jsx("i", {}),
          /* @__PURE__ */ jsx("i", {})
        ] }),
        /* @__PURE__ */ jsx("div", { className: "url", children: url }),
        /* @__PURE__ */ jsxs("div", { className: "who", children: [
          /* @__PURE__ */ jsx("b", { children: "AJ" }),
          " Ajile"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "walk-app", children: [
        /* @__PURE__ */ jsxs("aside", { className: "walk-side", children: [
          /* @__PURE__ */ jsx("div", { className: "walk-side-section", children: "Ruma" }),
          sideItems.map((item, i) => /* @__PURE__ */ jsxs(
            "a",
            {
              className: item.id !== "_" && item.id === tab ? "is-active" : "",
              children: [
                /* @__PURE__ */ jsx("span", { className: "dot" }),
                item.label
              ]
            },
            i
          ))
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "walk-main", children: [
          /* @__PURE__ */ jsxs("div", { className: "walk-panel walk-panel-props" + (tab === "props" ? " is-active" : ""), children: [
            /* @__PURE__ */ jsxs("div", { className: "walk-crumbs", children: [
              "Properties / ",
              /* @__PURE__ */ jsx("b", { children: selectedCard.name })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "walk-dash-head", children: /* @__PURE__ */ jsxs("div", { className: "walk-dash-title", children: [
              /* @__PURE__ */ jsx("h3", { children: "Properties" }),
              /* @__PURE__ */ jsx("span", { className: "walk-count", children: "6 active" })
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "walk-pcard-grid-outer", children: dashCards.map((card) => /* @__PURE__ */ jsx(
              DashPropertyCard,
              {
                card,
                trigger: tab,
                selected: card.id === selectedId,
                onSelect: () => setSelectedId(card.id)
              },
              card.id
            )) }),
            /* @__PURE__ */ jsxs("div", { className: "walk-detail", children: [
              /* @__PURE__ */ jsxs("div", { className: "walk-block", children: [
                /* @__PURE__ */ jsxs("div", { className: "walk-detail-head", children: [
                  /* @__PURE__ */ jsx("h6", { children: "Upfront costs" }),
                  /* @__PURE__ */ jsxs("span", { className: "walk-detail-sub", children: [
                    selectedCard.meta.split(" · ")[1],
                    " · ",
                    selectedCard.meta.split(" · ")[2]
                  ] })
                ] }),
                /* @__PURE__ */ jsx("ul", { className: "walk-stack", children: selectedDetail.upfront.map((row) => /* @__PURE__ */ jsxs("li", { children: [
                  /* @__PURE__ */ jsx("span", { children: row.label }),
                  /* @__PURE__ */ jsx("strong", { children: row.value })
                ] }, row.label)) }),
                /* @__PURE__ */ jsxs("div", { className: "walk-total", children: [
                  /* @__PURE__ */ jsx("span", { children: "Total actual cost" }),
                  /* @__PURE__ */ jsx("b", { children: selectedDetail.total })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "walk-detail-right", children: [
                /* @__PURE__ */ jsxs("div", { className: "walk-block", children: [
                  /* @__PURE__ */ jsx("h6", { children: "Key metrics" }),
                  /* @__PURE__ */ jsx("div", { className: "walk-kpis", children: selectedDetail.kpis.map((k) => /* @__PURE__ */ jsxs("div", { className: "walk-kpi" + (k.pos ? " pos" : ""), children: [
                    /* @__PURE__ */ jsx("small", { children: k.label }),
                    /* @__PURE__ */ jsx("b", { children: /* @__PURE__ */ jsx(AnimatedKpi, { value: k.value, trigger: detailTrigger }) })
                  ] }, k.label)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "walk-block", children: [
                  /* @__PURE__ */ jsxs("div", { className: "walk-detail-head", children: [
                    /* @__PURE__ */ jsx("h6", { children: "Cashflow · 12 mo" }),
                    /* @__PURE__ */ jsx("span", { className: "walk-detail-sub", children: "RM, net of mortgage" })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "walk-chart", children: selectedDetail.chart.map((h, i) => /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "walk-chart-bar" + (h === chartPeak ? " is-peak" : ""),
                      style: { height: `${h}%` }
                    },
                    `${selectedId}-${i}`
                  )) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "walk-note", children: [
                  /* @__PURE__ */ jsx("b", { children: selectedDetail.note.lead }),
                  " ",
                  selectedDetail.note.body
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "walk-panel" + (tab === "sens" ? " is-active" : ""), children: [
            /* @__PURE__ */ jsxs("div", { className: "walk-crumbs-wrap", children: [
              /* @__PURE__ */ jsxs("div", { className: "walk-crumbs", children: [
                "Scenario Lab / ",
                /* @__PURE__ */ jsx("b", { children: "Sri Petaling Condo" })
              ] }),
              /* @__PURE__ */ jsx("span", { className: "walk-deal-roi", children: "IRR +3.4% – +14.8%" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "walk-panel-grid", children: [
              /* @__PURE__ */ jsxs("div", { className: "walk-block", children: [
                /* @__PURE__ */ jsx("h6", { children: "Scenario inputs" }),
                /* @__PURE__ */ jsxs("div", { className: "walk-sens", children: [
                  /* @__PURE__ */ jsxs("div", { className: "walk-sens-row", children: [
                    /* @__PURE__ */ jsx("span", { children: "Rent expectation" }),
                    /* @__PURE__ */ jsx("div", { className: "walk-sens-range", children: /* @__PURE__ */ jsxs("div", { className: "walk-sens-track", children: [
                      /* @__PURE__ */ jsx("div", { className: "walk-sens-fill", style: { left: tab === "sens" ? "12%" : "50%", right: tab === "sens" ? "22%" : "50%" } }),
                      /* @__PURE__ */ jsx("span", { className: "walk-sens-handle", style: { left: tab === "sens" ? "12%" : "50%" } }),
                      /* @__PURE__ */ jsx("span", { className: "walk-sens-handle", style: { left: tab === "sens" ? "78%" : "50%" } })
                    ] }) }),
                    /* @__PURE__ */ jsx("b", { children: "RM 2.4k–3.2k" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "walk-sens-row", children: [
                    /* @__PURE__ */ jsx("span", { children: "Annual appreciation" }),
                    /* @__PURE__ */ jsx("div", { className: "walk-sens-range", children: /* @__PURE__ */ jsxs("div", { className: "walk-sens-track", children: [
                      /* @__PURE__ */ jsx("div", { className: "walk-sens-fill", style: { left: tab === "sens" ? "25%" : "50%", right: tab === "sens" ? "35%" : "50%" } }),
                      /* @__PURE__ */ jsx("span", { className: "walk-sens-handle", style: { left: tab === "sens" ? "25%" : "50%" } }),
                      /* @__PURE__ */ jsx("span", { className: "walk-sens-handle", style: { left: tab === "sens" ? "65%" : "50%" } })
                    ] }) }),
                    /* @__PURE__ */ jsx("b", { children: "2.0–6.5%" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "walk-sens-row", children: [
                    /* @__PURE__ */ jsx("span", { children: "Holding period" }),
                    /* @__PURE__ */ jsx("div", { className: "walk-sens-range", children: /* @__PURE__ */ jsxs("div", { className: "walk-sens-track", children: [
                      /* @__PURE__ */ jsx("div", { className: "walk-sens-fill", style: { left: tab === "sens" ? "20%" : "50%", right: tab === "sens" ? "15%" : "50%" } }),
                      /* @__PURE__ */ jsx("span", { className: "walk-sens-handle", style: { left: tab === "sens" ? "20%" : "50%" } }),
                      /* @__PURE__ */ jsx("span", { className: "walk-sens-handle", style: { left: tab === "sens" ? "85%" : "50%" } })
                    ] }) }),
                    /* @__PURE__ */ jsx("b", { children: "3–10 yrs" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "walk-sens-row", children: [
                    /* @__PURE__ */ jsx("span", { children: "Vacancy rate" }),
                    /* @__PURE__ */ jsx("div", { className: "walk-sens-range", children: /* @__PURE__ */ jsxs("div", { className: "walk-sens-track", children: [
                      /* @__PURE__ */ jsx("div", { className: "walk-sens-fill", style: { left: tab === "sens" ? "5%" : "50%", right: tab === "sens" ? "65%" : "50%" } }),
                      /* @__PURE__ */ jsx("span", { className: "walk-sens-handle", style: { left: tab === "sens" ? "5%" : "50%" } }),
                      /* @__PURE__ */ jsx("span", { className: "walk-sens-handle", style: { left: tab === "sens" ? "35%" : "50%" } })
                    ] }) }),
                    /* @__PURE__ */ jsx("b", { children: "2–8%" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "walk-aside", children: [
                /* @__PURE__ */ jsxs("div", { className: "walk-block", children: [
                  /* @__PURE__ */ jsx("h6", { children: "IRR range" }),
                  /* @__PURE__ */ jsxs("div", { className: "walk-kpis", children: [
                    /* @__PURE__ */ jsxs("div", { className: "walk-kpi pos", children: [
                      /* @__PURE__ */ jsx("small", { children: "IRR low" }),
                      /* @__PURE__ */ jsx("b", { children: /* @__PURE__ */ jsx(CountVal, { to: 3.4, decimals: 1, prefix: "+", suffix: "%", trigger: tab }) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "walk-kpi pos", children: [
                      /* @__PURE__ */ jsx("small", { children: "IRR high" }),
                      /* @__PURE__ */ jsx("b", { children: /* @__PURE__ */ jsx(CountVal, { to: 14.8, decimals: 1, prefix: "+", suffix: "%", trigger: tab }) })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "walk-dist", children: [
                    /* @__PURE__ */ jsx("div", { className: "walk-dist-track" }),
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: "walk-dist-fill",
                        style: { left: tab === "sens" ? "18%" : "50%", right: tab === "sens" ? "18%" : "50%" }
                      }
                    ),
                    /* @__PURE__ */ jsx("div", { className: "walk-dist-mark", style: { left: tab === "sens" ? "18%" : "50%" }, children: /* @__PURE__ */ jsx("span", { children: "Low" }) }),
                    /* @__PURE__ */ jsx("div", { className: "walk-dist-mark", style: { left: tab === "sens" ? "82%" : "50%" }, children: /* @__PURE__ */ jsx("span", { children: "High" }) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "walk-note", children: [
                  "Even at ",
                  /* @__PURE__ */ jsx("b", { children: "−10% rent" }),
                  " and ",
                  /* @__PURE__ */ jsx("b", { children: "+1% rates" }),
                  ", this deal stays cashflow-positive."
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "walk-panel" + (tab === "cmp" ? " is-active" : ""), children: [
            /* @__PURE__ */ jsx("div", { className: "walk-crumbs", children: "Comparison" }),
            /* @__PURE__ */ jsxs("div", { className: "walk-block walk-block-cmp", children: [
              /* @__PURE__ */ jsx("div", { className: "walk-cmp-head", children: /* @__PURE__ */ jsx("h6", { children: "4 properties side by side" }) }),
              /* @__PURE__ */ jsx("div", { className: "walk-cmp-scroll", children: /* @__PURE__ */ jsxs("table", { className: "walk-cmp", children: [
                /* @__PURE__ */ jsxs("thead", { children: [
                  /* @__PURE__ */ jsxs("tr", { className: "walk-cmp-name", children: [
                    /* @__PURE__ */ jsx("th", {}),
                    /* @__PURE__ */ jsx("th", { children: "Cyberjaya Townhouse" }),
                    /* @__PURE__ */ jsx("th", { children: "Setapak Apartment" }),
                    /* @__PURE__ */ jsx("th", { children: "Sri Petaling Condo" }),
                    /* @__PURE__ */ jsx("th", { className: "is-best", children: "Mont Kiara Suite" })
                  ] }),
                  /* @__PURE__ */ jsxs("tr", { className: "walk-cmp-meta", children: [
                    /* @__PURE__ */ jsx("th", {}),
                    /* @__PURE__ */ jsx("th", { children: "1,420 sqft · Residential" }),
                    /* @__PURE__ */ jsx("th", { children: "820 sqft · Residential" }),
                    /* @__PURE__ */ jsx("th", { children: "968 sqft · Residential" }),
                    /* @__PURE__ */ jsx("th", { className: "is-best", children: "1,800 sqft · Commercial" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("tbody", { children: [
                  /* @__PURE__ */ jsxs("tr", { children: [
                    /* @__PURE__ */ jsx("th", { children: "Real Rental Yield" }),
                    /* @__PURE__ */ jsx("td", { children: "3.1%" }),
                    /* @__PURE__ */ jsx("td", { children: "4.0%" }),
                    /* @__PURE__ */ jsx("td", { children: "4.6%" }),
                    /* @__PURE__ */ jsx("td", { className: "is-best", children: "6.4%" })
                  ] }),
                  /* @__PURE__ */ jsxs("tr", { children: [
                    /* @__PURE__ */ jsx("th", { children: "IRR" }),
                    /* @__PURE__ */ jsx("td", { children: "+4.2%" }),
                    /* @__PURE__ */ jsx("td", { children: "+7.5%" }),
                    /* @__PURE__ */ jsx("td", { children: "+9.2%" }),
                    /* @__PURE__ */ jsx("td", { className: "is-best", children: "+14.8%" })
                  ] }),
                  /* @__PURE__ */ jsxs("tr", { children: [
                    /* @__PURE__ */ jsx("th", { children: "Cash-on-Cash" }),
                    /* @__PURE__ */ jsx("td", { className: "is-neg", children: "−0.8%" }),
                    /* @__PURE__ */ jsx("td", { children: "3.2%" }),
                    /* @__PURE__ */ jsx("td", { className: "is-pos", children: "4.2%" }),
                    /* @__PURE__ */ jsx("td", { className: "is-best is-pos", children: "5.8%" })
                  ] }),
                  /* @__PURE__ */ jsxs("tr", { children: [
                    /* @__PURE__ */ jsx("th", { children: "Monthly Cash Flow" }),
                    /* @__PURE__ */ jsx("td", { className: "is-neg", children: "−RM 280" }),
                    /* @__PURE__ */ jsx("td", { children: "+RM 85" }),
                    /* @__PURE__ */ jsx("td", { className: "is-pos", children: "+RM 285" }),
                    /* @__PURE__ */ jsx("td", { className: "is-best is-pos", children: "+RM 1,240" })
                  ] }),
                  /* @__PURE__ */ jsxs("tr", { children: [
                    /* @__PURE__ */ jsx("th", { children: "DSCR" }),
                    /* @__PURE__ */ jsx("td", { className: "is-neg", children: "0.95×" }),
                    /* @__PURE__ */ jsx("td", { children: "1.08×" }),
                    /* @__PURE__ */ jsx("td", { children: "1.18×" }),
                    /* @__PURE__ */ jsx("td", { className: "is-best", children: "1.38×" })
                  ] }),
                  /* @__PURE__ */ jsxs("tr", { children: [
                    /* @__PURE__ */ jsx("th", { children: "Payback Period" }),
                    /* @__PURE__ */ jsx("td", { className: "is-neg", children: "—" }),
                    /* @__PURE__ */ jsx("td", { children: "22 yrs" }),
                    /* @__PURE__ */ jsx("td", { children: "14 yrs" }),
                    /* @__PURE__ */ jsx("td", { className: "is-best", children: "8 yrs" })
                  ] })
                ] })
              ] }) })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
};
const HowItWorks = () => {
  const ref = useReveal();
  return /* @__PURE__ */ jsx("section", { className: "howitworks r-reveal", id: "how", ref, children: /* @__PURE__ */ jsxs("div", { className: "r-container", children: [
    /* @__PURE__ */ jsxs("div", { className: "hiw-head", children: [
      /* @__PURE__ */ jsx("span", { className: "r-eyebrow", children: "How it works" }),
      /* @__PURE__ */ jsxs("h2", { children: [
        "Three steps from ",
        /* @__PURE__ */ jsx("em", { children: "listing to decision." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "hiw-grid", children: steps.map((s) => /* @__PURE__ */ jsxs("article", { className: "hiw-step", children: [
      /* @__PURE__ */ jsx("span", { className: "hiw-num", children: s.n }),
      /* @__PURE__ */ jsx("h4", { children: s.title }),
      /* @__PURE__ */ jsx("p", { children: s.desc })
    ] }, s.n)) })
  ] }) });
};
const Pricing = () => {
  const ref = useReveal();
  return /* @__PURE__ */ jsxs("section", { className: "pricing r-container r-reveal", id: "pricing", ref, children: [
    /* @__PURE__ */ jsxs("div", { className: "pricing-head", children: [
      /* @__PURE__ */ jsx("span", { className: "r-eyebrow", children: "Pricing" }),
      /* @__PURE__ */ jsxs("h2", { children: [
        "Free to start. ",
        /* @__PURE__ */ jsx("em", { children: "Pay only when you scale." })
      ] }),
      /* @__PURE__ */ jsx("p", { children: "No credit card needed to join." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "pricing-grid", children: pricingTiers.map((t) => /* @__PURE__ */ jsxs("article", { className: "tier" + (t.primary ? " is-primary" : ""), children: [
      t.badge && /* @__PURE__ */ jsx("span", { className: "tier-badge", children: t.badge }),
      /* @__PURE__ */ jsx("h4", { children: t.name }),
      /* @__PURE__ */ jsxs("div", { className: "tier-price", children: [
        t.price,
        t.cadence && /* @__PURE__ */ jsx("span", { className: "tier-cadence", children: t.cadence })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "tier-desc", children: t.desc }),
      /* @__PURE__ */ jsx("ul", { className: "tier-features", children: t.features.map((f) => /* @__PURE__ */ jsx("li", { children: f }, f)) }),
      /* @__PURE__ */ jsxs("a", { href: "#waitlist", className: "r-btn", children: [
        t.cta,
        " ",
        /* @__PURE__ */ jsx("span", { className: "r-arrow", children: "↗" })
      ] })
    ] }, t.name)) })
  ] });
};
const FAQ = () => {
  const ref = useReveal();
  const [open, setOpen] = useState(0);
  return /* @__PURE__ */ jsx("section", { className: "faq r-reveal", id: "faq", ref, children: /* @__PURE__ */ jsxs("div", { className: "r-container faq-grid", children: [
    /* @__PURE__ */ jsxs("div", { className: "faq-head", children: [
      /* @__PURE__ */ jsx("span", { className: "r-eyebrow", children: "FAQ" }),
      /* @__PURE__ */ jsxs("h2", { children: [
        "Questions, ",
        /* @__PURE__ */ jsx("em", { children: "answered." })
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Still curious? Email us anytime at ",
        /* @__PURE__ */ jsx("a", { href: "mailto:inbox@ajile.team", children: "inbox@ajile.team" }),
        " — we read every message."
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "faq-list", children: faqs.map((f, i) => /* @__PURE__ */ jsxs("div", { className: "faq-item" + (open === i ? " is-open" : ""), children: [
      /* @__PURE__ */ jsxs("button", { className: "faq-q", onClick: () => setOpen(open === i ? -1 : i), children: [
        /* @__PURE__ */ jsx("span", { children: f.q }),
        /* @__PURE__ */ jsx("span", { className: "ico", children: "+" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "faq-a", children: /* @__PURE__ */ jsx("p", { children: f.a }) })
    ] }, f.q)) })
  ] }) });
};
const Waitlist = () => {
  const ref = useReveal();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const submit = async (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setStatus("err");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("https://formsubmit.co/ajax/inbox@ajile.team", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email })
      });
      if (res.ok) {
        setStatus("ok");
        setEmail("");
      } else {
        setStatus("err");
      }
    } catch {
      setStatus("err");
    }
  };
  return /* @__PURE__ */ jsx("section", { className: "waitlist r-container r-reveal", id: "waitlist", ref, children: /* @__PURE__ */ jsxs("div", { className: "wl-card", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("span", { className: "r-eyebrow", children: "Early access" }),
      /* @__PURE__ */ jsxs("h2", { children: [
        "Be first when we open ",
        /* @__PURE__ */ jsx("em", { children: "Ruma to the public." })
      ] }),
      /* @__PURE__ */ jsx("p", { children: "We're polishing the final workflows with a small group of investors and agents. Drop your email for product updates and an invite." })
    ] }),
    /* @__PURE__ */ jsxs("form", { className: "wl-form", onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { className: "wl-input", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "email",
            placeholder: "you@goodemail.com",
            value: email,
            onChange: (e) => setEmail(e.target.value),
            required: true
          }
        ),
        /* @__PURE__ */ jsx("button", { type: "submit", children: status === "loading" ? "Adding…" : "Notify me ↗" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "wl-checks", children: [
        /* @__PURE__ */ jsxs("span", { children: [
          /* @__PURE__ */ jsx("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M3 7.4 6 10l5-6.5", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }) }),
          "No spam, ever"
        ] }),
        /* @__PURE__ */ jsxs("span", { children: [
          /* @__PURE__ */ jsx("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M3 7.4 6 10l5-6.5", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }) }),
          "Beta invites in waves"
        ] }),
        /* @__PURE__ */ jsxs("span", { children: [
          /* @__PURE__ */ jsx("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M3 7.4 6 10l5-6.5", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }) }),
          "Cancel any time"
        ] })
      ] }),
      status === "ok" && /* @__PURE__ */ jsx("div", { className: "wl-status ok", children: "You're on the list — we'll be in touch soon." }),
      status === "err" && /* @__PURE__ */ jsx("div", { className: "wl-status err", children: "Something went wrong. Try again or email inbox@ajile.team." })
    ] })
  ] }) });
};
const Footer = () => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsxs("footer", { className: "footer r-container", children: [
    /* @__PURE__ */ jsxs("div", { className: "footer-grid", children: [
      /* @__PURE__ */ jsxs("div", { className: "footer-brand", children: [
        /* @__PURE__ */ jsx("h4", { children: "Ruma" }),
        /* @__PURE__ */ jsx("p", { children: "Compare, calculate, and close smarter. Built by Team AJILE." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "footer-col", children: [
        /* @__PURE__ */ jsx("h6", { children: "Product" }),
        /* @__PURE__ */ jsxs("ul", { children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#features", children: "Why Ruma" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#walkthrough", children: "Preview" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#pricing", children: "Pricing" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faq", children: "FAQ" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "footer-col", children: [
        /* @__PURE__ */ jsx("h6", { children: "Company" }),
        /* @__PURE__ */ jsxs("ul", { children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "mailto:inbox@ajile.team", children: "Contact" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#waitlist", children: "Waitlist" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", children: "Roadmap" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", children: "Changelog" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "footer-col", children: [
        /* @__PURE__ */ jsx("h6", { children: "Legal" }),
        /* @__PURE__ */ jsxs("ul", { children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", children: "Privacy" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", children: "Terms" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", children: "Disclaimer" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "footer-credit", children: /* @__PURE__ */ jsxs("span", { children: [
      "© ",
      year,
      " Team AJILE"
    ] }) })
  ] });
};
const SHOW_TRUST_STRIP = false;
const SHOW_METRICS = false;
const SHOW_TESTIMONIALS = false;
function App() {
  return /* @__PURE__ */ jsxs("div", { className: "r-app", children: [
    /* @__PURE__ */ jsx(Hero, {}),
    SHOW_TRUST_STRIP,
    /* @__PURE__ */ jsx(Features, {}),
    /* @__PURE__ */ jsx(Walkthrough, {}),
    /* @__PURE__ */ jsx(HowItWorks, {}),
    SHOW_METRICS,
    SHOW_TESTIMONIALS,
    /* @__PURE__ */ jsx(Pricing, {}),
    /* @__PURE__ */ jsx(FAQ, {}),
    /* @__PURE__ */ jsx(Waitlist, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const SITE_URL = "https://ruma.app";
const appSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Ruma",
  description: "Property investment calculator for Malaysia. Estimate stamp duty, forecast rental yield, compare deals, and plan auction bids — without spreadsheets.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  url: SITE_URL,
  offers: pricingTiers.map((tier) => ({
    "@type": "Offer",
    name: tier.name,
    price: tier.price === "Free" ? "0" : tier.price.replace("RM ", ""),
    priceCurrency: "MYR"
  }))
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a
    }
  }))
};
const links = () => [{
  rel: "canonical",
  href: SITE_URL
}];
const meta = () => [
  {
    title: "Ruma — Property Investment Calculator for Malaysia"
  },
  {
    name: "description",
    content: "Compare, calculate, and close smarter. Ruma helps Malaysian property investors estimate stamp duty, forecast rental yield, and compare deals — without spreadsheets."
  },
  {
    name: "robots",
    content: "index, follow"
  },
  // Open Graph
  {
    property: "og:type",
    content: "website"
  },
  {
    property: "og:site_name",
    content: "Ruma"
  },
  {
    property: "og:url",
    content: SITE_URL
  },
  {
    property: "og:title",
    content: "Ruma — Property Investment Calculator for Malaysia"
  },
  {
    property: "og:description",
    content: "Estimate fees, stack loan offers, forecast returns, and choose the property that wins on yield & KPIs — without spreadsheets."
  },
  // Twitter Card
  {
    name: "twitter:card",
    content: "summary"
  },
  {
    name: "twitter:title",
    content: "Ruma — Property Investment Calculator for Malaysia"
  },
  {
    name: "twitter:description",
    content: "Estimate fees, stack loan offers, forecast returns, and choose the property that wins on yield & KPIs — without spreadsheets."
  }
];
const home = UNSAFE_withComponentProps(function Home() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("script", {
      type: "application/ld+json",
      dangerouslySetInnerHTML: {
        __html: JSON.stringify(appSchema)
      }
    }), /* @__PURE__ */ jsx("script", {
      type: "application/ld+json",
      dangerouslySetInnerHTML: {
        __html: JSON.stringify(faqSchema)
      }
    }), /* @__PURE__ */ jsx(App, {})]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  links,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-CDGVNWxY.js", "imports": ["/assets/chunk-4N6VE7H7-BF0DhbEB.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/root-C9h89gDV.js", "imports": ["/assets/chunk-4N6VE7H7-BF0DhbEB.js"], "css": ["/assets/root-C0JjD9pK.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/home-29t1h0Cx.js", "imports": ["/assets/chunk-4N6VE7H7-BF0DhbEB.js"], "css": ["/assets/home-Bn2qKJKy.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-2b691e5e.js", "version": "2b691e5e", "sri": void 0 };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_optimizeDeps": false, "v8_passThroughRequests": false, "unstable_trailingSlashAwareDataRequests": false, "unstable_previewServerPrerendering": false, "v8_middleware": false, "v8_splitRouteModules": false, "v8_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
const allowedActionOrigins = false;
export {
  allowedActionOrigins,
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
