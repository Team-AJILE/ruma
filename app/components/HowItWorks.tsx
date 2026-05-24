import { useReveal } from "../hooks";
import { steps } from "../data";
import "./howitworks.css";

const HowItWorks = () => {
  const ref = useReveal<HTMLElement>();
  return (
    <section className="howitworks r-reveal" id="how" ref={ref}>
      <div className="r-container">
        <div className="hiw-head">
          <span className="r-eyebrow">How it works</span>
          <h2>Three steps from <em>listing to decision.</em></h2>
        </div>
        <div className="hiw-grid">
          {steps.map((s) => (
            <article key={s.n} className="hiw-step">
              <span className="hiw-num">{s.n}</span>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
