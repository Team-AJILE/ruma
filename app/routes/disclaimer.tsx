import type { LoaderFunctionArgs, MetaFunction } from "react-router";
import { Link, useLoaderData } from "react-router";
import LegalPage from "../components/LegalPage";
import { readLangCookie, type Lang } from "../lib/lang-cookie";

export const meta: MetaFunction = () => [
  { title: "Disclaimer — Ruma" },
  { name: "description", content: "Ruma calculator outputs are informational only. Not financial, investment, tax, or legal advice." },
  { name: "robots", content: "index, follow" },
];

export const loader = ({ request }: LoaderFunctionArgs) => {
  return { initialLang: readLangCookie(request) };
};

const EnglishContent = () => (
  <>
    <h2>1. Not financial, investment, tax, or legal advice</h2>
    <p>
      Ruma (ruma.casa), operated by AJILE STUDIO (Company Registration No. 202503327530), provides property investment calculators and analytical tools for <strong>informational and educational purposes only</strong>.
    </p>
    <p>
      Nothing on the Service — including calculator outputs, exported reports, articles, or any other content — constitutes financial, investment, tax, legal, or professional advice, nor a recommendation to buy, sell, finance, or transact in any property, security, or financial product. AJILE STUDIO is <strong>not</strong> a licensed financial adviser, valuer, real estate negotiator, or tax agent under Malaysian law, and the Service is not regulated by the Securities Commission Malaysia, Bank Negara Malaysia, or the Board of Valuers, Appraisers, Estate Agents and Property Managers.
    </p>
    <p>
      Before making any property, financing, or investment decision, you should consult appropriately licensed professionals (e.g. a licensed real estate negotiator, valuer, banker, tax agent, or lawyer) who can take your individual circumstances into account.
    </p>

    <h2>2. Accuracy of information</h2>
    <p>
      Calculator results are estimates based on the inputs you provide and on assumptions, formulae, default rates, and statutory figures (e.g. stamp duty schedules) that may change without notice and may not reflect the latest position under Malaysian law.
    </p>
    <p>
      While we take reasonable care, we make <strong>no representation or warranty</strong> as to the accuracy, completeness, timeliness, or reliability of any information, calculation, or output produced by the Service. Actual outcomes — including loan eligibility, interest, fees, taxes, rental yield, and capital growth — may differ materially from any estimate produced by the Service.
    </p>

    <h2>3. Limitation of liability</h2>
    <p>
      To the maximum extent permitted under Malaysian law, AJILE STUDIO, its directors, employees, and affiliates shall <strong>not be liable</strong> for any direct, indirect, incidental, special, consequential, or exemplary loss or damage (including loss of profit, savings, opportunity, or data) arising out of, or in any way connected with, your use of, or reliance on, the Service or any content produced by it.
    </p>
    <p>
      You assume <strong>full responsibility</strong> for any decision made, or action taken, based on the Service.
    </p>

    <h2>4. Third-party content</h2>
    <p>
      The Service may reference or link to third-party data, websites, or services. AJILE STUDIO does not endorse and is not responsible for any third-party content.
    </p>

    <h2>5. Governing law</h2>
    <p>
      This Disclaimer is governed by the laws of Malaysia and is to be read together with our <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>.
    </p>

    <h2>6. Contact</h2>
    <p>
      AJILE STUDIO (202503327530)<br />
      Email: <a href="mailto:inbox@ajile.team">inbox@ajile.team</a>
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

export default function Disclaimer() {
  const { initialLang } = useLoaderData() as { initialLang: Lang };
  return (
    <LegalPage
      initialLang={initialLang}
      title={{ en: "Disclaimer", bm: "Penafian" }}
      lastUpdated="24 May 2026"
      content={{ en: <EnglishContent />, bm: <BahasaContent /> }}
    />
  );
}
