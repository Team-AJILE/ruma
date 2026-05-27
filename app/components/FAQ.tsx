import { useState } from "react";
import { useReveal } from "../hooks";
import { faqs } from "../data";
import "./faq.css";

const renderAnswer = (a: string) => {
  const marker = "AJILE Studios";
  const idx = a.indexOf(marker);
  if (idx === -1) return a;
  return (
    <>
      {a.slice(0, idx)}
      <a href="https://ajile.team" target="_blank" rel="noopener noreferrer">{marker}</a>
      {a.slice(idx + marker.length)}
    </>
  );
};

const FAQ = () => {
  const ref = useReveal<HTMLElement>();
  const [open, setOpen] = useState<number>(0);
  return (
    <section className="faq r-reveal" id="faq" ref={ref}>
      <div className="r-container faq-grid">
        <div className="faq-head">
          <span className="r-eyebrow">FAQ</span>
          <h2>Questions, <em>answered.</em></h2>
          <p>Still curious? Email us anytime at <a href="mailto:inbox@ajile.team">inbox@ajile.team</a> — we read every message.</p>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <div key={f.q} className={"faq-item" + (open === i ? " is-open" : "")}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{f.q}</span>
                <span className="ico">+</span>
              </button>
              <div className="faq-a"><p>{renderAnswer(f.a)}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
