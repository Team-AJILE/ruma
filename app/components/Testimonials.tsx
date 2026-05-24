import { useReveal } from "../hooks";
import { testimonials } from "../data";
import "./testimonials.css";

const Testimonials = () => {
  const ref = useReveal<HTMLElement>();
  return (
    <section className="testimonials r-container r-reveal" ref={ref}>
      <div className="test-head">
        <span className="r-eyebrow">From the beta</span>
        <h2>Words from <em>the people we built it for.</em></h2>
      </div>
      <div className="test-grid">
        {testimonials.map((t) => (
          <article key={t.name} className="test-card">
            <p className="test-quote">{t.quote}</p>
            <div className="test-who">
              <div className="test-who-avatar">{t.name.split(" ").map((s) => s[0]).join("")}</div>
              <div className="test-who-text">
                <b>{t.name}</b>
                <small>{t.role}</small>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
