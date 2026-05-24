import { useState, type ReactNode } from "react";
import { Link } from "react-router";
import Footer from "./Footer";
import { LANG_COOKIE, langCookieAttributes, type Lang } from "../lib/lang-cookie";
import logo from "../assets/logo.png";
import "./legal.css";

interface LegalPageProps {
  initialLang?: Lang;
  title: { en: string; bm: string };
  lastUpdated: string;
  content: { en: ReactNode; bm: ReactNode };
}

const LegalPage = ({ initialLang = "en", title, lastUpdated, content }: LegalPageProps) => {
  const [lang, setLang] = useState<Lang>(initialLang);

  const switchLang = (next: Lang) => {
    setLang(next);
    if (typeof document !== "undefined") {
      document.cookie = `${LANG_COOKIE}=${next}; ${langCookieAttributes()}`;
    }
  };

  return (
    <div className="legal-page">
      <header className="legal-header">
        <div className="r-container legal-header-inner">
          <Link to="/" className="legal-brand" aria-label="Ruma">
            <img src={logo} alt="Ruma" className="legal-brand-img" />
          </Link>
          <div style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}>
            <Link to="/" className="legal-back">← Back to home</Link>
            <div className="lang-toggle" role="group" aria-label="Language">
              <button
                type="button"
                className={lang === "en" ? "is-active" : ""}
                aria-pressed={lang === "en"}
                onClick={() => switchLang("en")}
              >
                ENG
              </button>
              <button
                type="button"
                className={lang === "bm" ? "is-active" : ""}
                aria-pressed={lang === "bm"}
                onClick={() => switchLang("bm")}
              >
                BM
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="r-container legal-content">
        <h1>{lang === "en" ? title.en : title.bm}</h1>
        <p className="legal-meta">
          {lang === "en" ? "Last updated" : "Kemas kini terakhir"}: {lastUpdated}
        </p>
        {lang === "en" ? content.en : content.bm}
      </main>

      <Footer />
    </div>
  );
};

export default LegalPage;
