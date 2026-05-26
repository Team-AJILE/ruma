import type { MetaFunction, LinksFunction } from "react-router";
import App from "../App";
import { faqs, pricingTiers } from "../data";

const SITE_URL = "https://ruma.casa";

const appSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Ruma",
  description:
    "Property investment calculator for Malaysia. Estimate stamp duty, forecast rental yield, compare deals, and plan auction bids — without spreadsheets.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  url: SITE_URL,
  offers: pricingTiers.map((tier) => ({
    "@type": "Offer",
    name: tier.name,
    price: tier.price === "Free" ? "0" : tier.price.replace("RM ", ""),
    priceCurrency: "MYR",
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const links: LinksFunction = () => [
  { rel: "canonical", href: SITE_URL },
];

export const meta: MetaFunction = () => [
  { title: "Ruma — Property Investment Calculator for Malaysia" },
  {
    name: "description",
    content:
      "Compare, calculate, and close smarter. Ruma helps Malaysian property investors estimate stamp duty, forecast rental yield, and compare deals — without spreadsheets.",
  },
  { name: "robots", content: "index, follow" },
  // Open Graph
  { property: "og:type", content: "website" },
  { property: "og:site_name", content: "Ruma" },
  { property: "og:url", content: SITE_URL },
  { property: "og:title", content: "Ruma — Property Investment Calculator for Malaysia" },
  {
    property: "og:description",
    content:
      "Estimate fees, forecast returns, and choose the property that wins on yield & KPIs — without spreadsheets. Built for Malaysian investors, and real estate agents.",
  },
  // Twitter Card
  { name: "twitter:card", content: "summary" },
  { name: "twitter:title", content: "Ruma — Property Investment Calculator for Malaysia" },
  {
    name: "twitter:description",
    content:
      "Estimate fees, forecast returns, and choose the property that wins on yield & KPIs — without spreadsheets. Built for Malaysian investors, and real estate agents.",
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <App />
    </>
  );
}
