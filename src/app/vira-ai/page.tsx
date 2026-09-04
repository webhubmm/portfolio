import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import ViraFooter from "@/components/layout/ViraFooter";
import ViraHero from "@/components/sections/vira/ViraHero";
import ViraTrust from "@/components/sections/vira/ViraTrust";
import ViraAnalyzes from "@/components/sections/vira/ViraAnalyzes";
import ViraHowItWorks from "@/components/sections/vira/ViraHowItWorks";
import ViraInsights from "@/components/sections/vira/ViraInsights";
import ViraAlerts from "@/components/sections/vira/ViraAlerts";
import ViraProof from "@/components/sections/vira/ViraProof";
import ViraProduct from "@/components/sections/vira/ViraProduct";
import ViraStory from "@/components/sections/vira/ViraStory";
import ViraFaq from "@/components/sections/vira/ViraFaq";
import ViraFinalCta from "@/components/sections/vira/ViraFinalCta";
import { siteUrl } from "@/lib/site";
import { VIRA_TELEGRAM_URL } from "@/lib/vira";

const title = "Vira AI — Bitcoin Market Intelligence";
const description =
  "AI-powered Bitcoin predictions, whale intelligence, trend detection and real-time market alerts — built to help traders make better-informed decisions.";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  alternates: {
    canonical: "/vira-ai",
  },
  keywords: [
    "Vira AI",
    "Bitcoin market intelligence",
    "Bitcoin AI analysis",
    "whale alerts",
    "crypto market sentiment",
    "Telegram trading bot",
  ],
  openGraph: {
    title,
    description,
    url: "/vira-ai",
    siteName: "Vira AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Vira AI",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Telegram",
  description,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  url: `${siteUrl}/vira-ai`,
  sameAs: [VIRA_TELEGRAM_URL],
};

export default function ViraAiPage() {
  return (
    <main className="vira-page min-h-screen min-w-0 max-w-full overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Navbar />
      <ViraHero />
      <ViraTrust />
      <ViraAnalyzes />
      <ViraHowItWorks />
      <ViraInsights />
      <ViraAlerts />
      <ViraProof />
      <ViraProduct />
      <ViraStory />
      <ViraFaq />
      <ViraFinalCta />
      <ViraFooter />
    </main>
  );
}
