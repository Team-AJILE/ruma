import type { LoaderFunctionArgs, MetaFunction } from "react-router";
import { Link, useLoaderData } from "react-router";
import LegalPage from "../components/LegalPage";
import { readLangCookie, type Lang } from "../lib/lang-cookie";

export const meta: MetaFunction = () => [
  { title: "Terms of Service — Ruma" },
  { name: "description", content: "Terms governing the use of Ruma, operated by AJILE STUDIO under Malaysian law." },
  { name: "robots", content: "index, follow" },
];

export const loader = ({ request }: LoaderFunctionArgs) => {
  return { initialLang: readLangCookie(request) };
};

const EnglishContent = () => (
  <>
    <p>
      These Terms govern your use of Ruma (ruma.casa) (the <strong>"Service"</strong>), operated by AJILE STUDIO (Company Registration No. 202503327530) (<strong>"AJILE"</strong>, <strong>"we"</strong>, <strong>"us"</strong>). By accessing or using the Service, you agree to these Terms. If you do not agree, do not use the Service.
    </p>

    <h2>1. The Service</h2>
    <p>
      Ruma is a set of property investment calculators and comparison tools designed for the Malaysian property market. The Service is provided for <strong>informational and educational purposes only</strong>.
    </p>

    <h2>2. Eligibility</h2>
    <p>
      You must be at least 18 years old and able to enter into a binding contract under the Contracts Act 1950 of Malaysia to use the Service.
    </p>

    <h2>3. Acceptable use</h2>
    <p>You agree <strong>not</strong> to:</p>
    <ul>
      <li>use the Service for any unlawful purpose or in breach of any Malaysian law;</li>
      <li>reverse engineer, decompile, scrape, or attempt to extract the source code or underlying data of the Service, except to the extent permitted by law;</li>
      <li>interfere with, disrupt, or impose an unreasonable load on the Service or its infrastructure;</li>
      <li>use automated means (bots, crawlers) to access the Service without our prior written consent;</li>
      <li>upload or transmit malware, harmful code, or misleading information;</li>
      <li>impersonate any person or entity, or misrepresent your affiliation;</li>
      <li>use the Service to provide regulated financial, investment, or legal advice to third parties.</li>
    </ul>
    <p>We may suspend or terminate your access at any time for breach of these Terms.</p>

    <h2>4. Intellectual property</h2>
    <p>
      All content, software, design, calculators, methodologies, trademarks, and branding on the Service are owned by AJILE STUDIO or its licensors and are protected by Malaysian copyright, trademark, and other intellectual property laws.
    </p>
    <p>
      You are granted a limited, non-exclusive, non-transferable, revocable licence to access and use the Service for your personal, non-commercial use. Outputs that you generate from the calculators using your own inputs (e.g. exported PDF reports) may be used for your own personal or internal business purposes; you may not resell or redistribute the Service or its underlying components.
    </p>

    <h2>5. Accounts and waitlist</h2>
    <p>
      Information you submit (e.g. via the waitlist) must be accurate. You are responsible for any activity under your account, if one is created.
    </p>

    <h2>6. Fees</h2>
    <p>
      Free tiers are provided as described on the Service. Paid plans, if and when launched, will be subject to the pricing and payment terms shown at the point of purchase.
    </p>

    <h2>7. Disclaimers</h2>
    <p>
      The Service is provided <strong>"as is" and "as available"</strong>, without warranties of any kind, whether express or implied, to the maximum extent permitted by Malaysian law. We do not warrant that the Service will be uninterrupted, error-free, or that calculator outputs are accurate or suitable for any particular purpose. See our <Link to="/disclaimer">Disclaimer</Link> for further detail.
    </p>

    <h2>8. Limitation of liability</h2>
    <p>
      To the maximum extent permitted under Malaysian law, AJILE STUDIO, its directors, employees, and affiliates shall not be liable for any indirect, incidental, special, consequential, or exemplary damages, or any loss of profits, revenue, data, or business opportunity, arising out of or in connection with your use of the Service. Our total aggregate liability shall not exceed the amount (if any) you have paid to us in the 12 months preceding the event giving rise to the claim, or <strong>RM 100</strong>, whichever is lower.
    </p>
    <p>
      Nothing in these Terms excludes liability that cannot lawfully be excluded under Malaysian law (including under the Consumer Protection Act 1999, where applicable).
    </p>

    <h2>9. Indemnity</h2>
    <p>
      You agree to indemnify and hold harmless AJILE STUDIO from any claims, losses, or expenses arising from your breach of these Terms or your misuse of the Service.
    </p>

    <h2>10. Third-party links</h2>
    <p>
      The Service may link to third-party websites. We are not responsible for their content or practices.
    </p>

    <h2>11. Termination</h2>
    <p>
      We may modify, suspend, or discontinue the Service (or any part) at any time. These Terms remain in effect until terminated.
    </p>

    <h2>12. Governing law and jurisdiction</h2>
    <p>
      These Terms shall be governed by and construed in accordance with the <strong>laws of Malaysia</strong>. Any dispute arising out of or in connection with these Terms or the Service shall be submitted to the <strong>exclusive jurisdiction of the courts of Malaysia</strong>.
    </p>

    <h2>13. Changes</h2>
    <p>
      We may update these Terms from time to time. Continued use of the Service after changes take effect constitutes acceptance.
    </p>

    <h2>14. Contact</h2>
    <p>
      AJILE STUDIO (202503327530)<br />
      Email: <a href="mailto:inbox@ajile.team">inbox@ajile.team</a>
    </p>

    <p style={{ marginTop: "2rem" }}>
      See also: <Link to="/privacy">Privacy Policy</Link> · <Link to="/disclaimer">Disclaimer</Link>
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

export default function Terms() {
  const { initialLang } = useLoaderData() as { initialLang: Lang };
  return (
    <LegalPage
      initialLang={initialLang}
      title={{ en: "Terms of Service", bm: "Terma Perkhidmatan" }}
      lastUpdated="24 May 2026"
      content={{ en: <EnglishContent />, bm: <BahasaContent /> }}
    />
  );
}
