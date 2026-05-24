import type { LoaderFunctionArgs, MetaFunction } from "react-router";
import { Link, useLoaderData } from "react-router";
import LegalPage from "../components/LegalPage";
import { readLangCookie, type Lang } from "../lib/lang-cookie";

export const meta: MetaFunction = () => [
  { title: "Privacy Policy — Ruma" },
  { name: "description", content: "How AJILE STUDIO collects, uses, and protects personal data on Ruma in accordance with the Malaysian PDPA." },
  { name: "robots", content: "index, follow" },
];

export const loader = ({ request }: LoaderFunctionArgs) => {
  return { initialLang: readLangCookie(request) };
};

const EnglishContent = () => (
  <>
    <p>
      AJILE STUDIO (Company Registration No. 202503327530) (<strong>"AJILE"</strong>, <strong>"we"</strong>, <strong>"us"</strong>) operates Ruma (ruma.casa) (the <strong>"Service"</strong>). This Privacy Policy explains how we collect, use, store, and protect your personal data in accordance with the Personal Data Protection Act 2010 (<strong>"PDPA"</strong>) of Malaysia.
    </p>
    <p>By using the Service, you consent to the practices described below.</p>

    <h2>1. Personal data we collect</h2>
    <div className="legal-table-wrap">
      <table className="legal-table">
        <thead>
          <tr><th>Category</th><th>Examples</th><th>When collected</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Identity &amp; contact data</td>
            <td>Name, email address</td>
            <td>When you join the waitlist or contact us</td>
          </tr>
          <tr>
            <td>Calculator inputs</td>
            <td>Property price, loan amount, income, rental assumptions</td>
            <td>When you use the calculators (processed in your browser; not stored on our servers unless you explicitly save a scenario)</td>
          </tr>
          <tr>
            <td>Usage &amp; device data</td>
            <td>IP address, browser type, device, pages viewed, clicks, referrer</td>
            <td>Automatically via PostHog analytics</td>
          </tr>
          <tr>
            <td>Session recordings</td>
            <td>Recordings of your interactions with the Service (mouse movement, clicks, page navigation). Input fields are masked by default to avoid capturing what you type.</td>
            <td>Automatically via PostHog session replay</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>2. How we use your data</h2>
    <ul>
      <li>To operate, maintain, and improve the Service;</li>
      <li>To respond to enquiries and send waitlist or launch updates you have signed up for;</li>
      <li>To analyse usage patterns and diagnose technical issues;</li>
      <li>To comply with legal obligations in Malaysia.</li>
    </ul>

    <h2>3. Disclosure to third parties</h2>
    <p>We do <strong>not</strong> sell your personal data. We disclose data only to:</p>
    <ul>
      <li><strong>Service providers</strong> that help us run the Service (e.g. PostHog for analytics and session replay, our email and hosting providers), bound by confidentiality and data-protection obligations;</li>
      <li><strong>Law enforcement or regulators</strong> where required by Malaysian law.</li>
    </ul>
    <p>
      <strong>Future opt-in marketing partners.</strong> We may, in the future, offer you the option to share your name and email with selected real estate agencies and property developers for direct marketing and property sales. This will <strong>only occur if you provide separate, explicit, opt-in consent</strong> at the time the option is offered. You can withdraw consent at any time.
    </p>

    <h2>4. Cross-border transfer</h2>
    <p>
      Some of our service providers (including PostHog) process data on servers located outside Malaysia. We rely on the recipient's contractual undertakings and recognised safeguards to ensure a level of protection comparable to the PDPA, as permitted under Section 129 of the PDPA.
    </p>

    <h2>5. Retention</h2>
    <p>
      We retain personal data only for as long as necessary to fulfil the purposes set out above, or as required by Malaysian law. Waitlist data is retained until you unsubscribe or request deletion. Analytics and session-replay data are retained for up to <strong>12 months</strong> from collection, after which they are deleted or anonymised.
    </p>

    <h2>6. Security</h2>
    <p>
      We apply reasonable technical and organisational measures (encryption in transit, access controls, vendor due diligence) to protect personal data from unauthorised access, loss, or disclosure.
    </p>

    <h2>7. Your rights under the PDPA</h2>
    <p>You have the right to:</p>
    <ul>
      <li>access and obtain a copy of your personal data;</li>
      <li>correct inaccurate or incomplete data;</li>
      <li>withdraw consent to processing (which may affect our ability to provide the Service);</li>
      <li>request deletion of your data, subject to legal retention requirements;</li>
      <li>limit our processing of your data for direct marketing.</li>
    </ul>
    <p>To exercise any of these rights, email <a href="mailto:inbox@ajile.team">inbox@ajile.team</a>.</p>

    <h2>8. Cookies &amp; tracking</h2>
    <p>
      The Service uses cookies and similar technologies (via PostHog) for analytics and to remember your preferences. You can disable cookies through your browser settings; some features may not work correctly as a result.
    </p>

    <h2>9. Children</h2>
    <p>
      The Service is not directed at persons under 18. We do not knowingly collect personal data from children.
    </p>

    <h2>10. Changes</h2>
    <p>
      We may update this Policy from time to time. The "Last updated" date above reflects the most recent revision. Material changes will be highlighted on the Service.
    </p>

    <h2>11. Contact</h2>
    <p>
      AJILE STUDIO (202503327530)<br />
      Email: <a href="mailto:inbox@ajile.team">inbox@ajile.team</a>
    </p>

    <p style={{ marginTop: "2rem" }}>
      See also: <Link to="/terms">Terms of Service</Link> · <Link to="/disclaimer">Disclaimer</Link>
    </p>
  </>
);

const BahasaContent = () => (
  <>
    <div className="legal-placeholder">
      [Terjemahan Bahasa Malaysia akan datang. Versi Bahasa Inggeris di atas adalah dokumen sah buat masa ini.]
    </div>
    <p style={{ marginTop: "1.5rem" }}>
      Placeholder — full Bahasa Malaysia translation pending. The English version is the authoritative document at this time.
    </p>
  </>
);

export default function Privacy() {
  const { initialLang } = useLoaderData() as { initialLang: Lang };
  return (
    <LegalPage
      initialLang={initialLang}
      title={{ en: "Privacy Policy", bm: "Dasar Privasi" }}
      lastUpdated="24 May 2026"
      content={{ en: <EnglishContent />, bm: <BahasaContent /> }}
    />
  );
}
