import { useState } from "react";
import { useReveal } from "../hooks";
import "./waitlist.css";

type Status = "idle" | "loading" | "ok" | "err";

const Waitlist = () => {
  const ref = useReveal<HTMLElement>();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const submit = async (e: React.FormEvent) => {
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
        body: JSON.stringify({ email }),
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

  return (
    <section className="waitlist r-container r-reveal" id="waitlist" ref={ref}>
      <div className="wl-card">
        <div>
          <span className="r-eyebrow">Early access</span>
          <h2>Be first when we open <em>Ruma to the public.</em></h2>
          <p>We're polishing the final workflows with a small group of investors and agents. Drop your email for product updates and an invite.</p>
        </div>
        <form className="wl-form" onSubmit={submit}>
          <div className="wl-input">
            <input
              type="email"
              placeholder="you@goodemail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">{status === "loading" ? "Adding…" : "Notify me ↗"}</button>
          </div>
          <div className="wl-checks">
            <span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7.4 6 10l5-6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
              No spam, ever
            </span>
            <span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7.4 6 10l5-6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Beta invites in waves
            </span>
            <span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7.4 6 10l5-6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Cancel any time
            </span>
          </div>
          {status === "ok" && <div className="wl-status ok">You're on the list — we'll be in touch soon.</div>}
          {status === "err" && <div className="wl-status err">Something went wrong. Try again or email inbox@ajile.team.</div>}
        </form>
      </div>
    </section>
  );
};

export default Waitlist;
