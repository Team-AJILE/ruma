import { useReveal } from "../hooks";
import "./trust.css";

const TrustStrip = () => {
  const ref = useReveal<HTMLElement>();
  return (
    <section className="trust r-container r-reveal" ref={ref}>
      <div className="trust-row">
        <span className="trust-label">Trusted by early users from</span>
        <div className="trust-logos">
          <span className="trust-logo">PropertyGuru network</span>
          <span className="trust-logo sans">AJILE</span>
          <span className="trust-logo">Maybank IB alumni</span>
          <span className="trust-logo sans">REHDA youth</span>
          <span className="trust-logo">iProperty agents</span>
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
