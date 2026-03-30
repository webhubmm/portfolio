import type { Metadata } from "next";
import localFont from "next/font/local";
import { siteUrl } from "@/lib/site";
import "./globals.css";

/* Fonts */
const futuraPT = localFont({
  src: [
    { path: "../assets/fonts/futura-pt/FuturaPTBold.otf", weight: "700", style: "normal" },
    { path: "../assets/fonts/futura-pt/FuturaPTExtraBold.otf", weight: "800", style: "normal" },
  ],
  variable: "--font-futura-pt",
  display: "swap",
});

const futuraPTCond = localFont({
  src: [
    { path: "../assets/fonts/futura-pt/FuturaPTCondBold.otf", weight: "700", style: "normal" },
    { path: "../assets/fonts/futura-pt/FuturaPTCondExtraBold.otf", weight: "800", style: "normal" },
  ],
  variable: "--font-futura-pt-cond",
  display: "swap",
});

const ttTravels = localFont({
  src: [
    { path: "../assets/fonts/tt_travels/TT Travels Trial Regular.otf", weight: "400", style: "normal" },
    { path: "../assets/fonts/tt_travels/TT Travels Trial Medium.otf", weight: "500", style: "normal" },
  ],
  variable: "--font-tt-travels",
  display: "swap",
});

/* SEO Content */
const defaultTitle = "WebHub Asia | AI, Blockchain & Custom Software Development Company";

const defaultDescription =
  "WebHub Asia is a leading software development company specializing in Agentic AI systems, blockchain applications, SaaS platforms, and scalable web & mobile apps. We help startups and enterprises build, launch, and scale digital products globally.";

/* Metadata */
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: defaultTitle,
    template: "%s | WebHub Asia",
  },

  description: defaultDescription,

  keywords: [
    "AI development company",
    "Agentic AI engineering",
    "blockchain development company",
    "custom software development",
    "SaaS product development",
    "startup software development partner",
    "web and mobile app development",
    "outsourcing software development Asia",
    "enterprise software solutions",
    "WebHub Asia",
  ],

  authors: [{ name: "WebHub Asia", url: siteUrl }],
  creator: "WebHub Asia",
  publisher: "WebHub Asia",

  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },

  alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    siteName: "WebHub Asia",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: "WebHub Asia - AI & Blockchain Development",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [`${siteUrl}/logo.png`],
  },

  category: "technology",
};

/* Structured Data */
const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "WebHub Asia",
      url: siteUrl,
      logo: `${siteUrl}/logo.png`,
      description: defaultDescription,
      sameAs: [
        "https://www.facebook.com/share/1DdNisrS4R/",
        "https://www.youtube.com/@webhubmyanmar1213",
        "https://www.linkedin.com/company/webhub-asia",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "WebHub Asia",
      description: defaultDescription,
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-US",
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteUrl}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Service",
      name: "AI & Blockchain Development Services",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      areaServed: "Worldwide",
      serviceType: [
        "Agentic AI Development",
        "Blockchain Development",
        "SaaS Development",
        "Custom Software Development",
      ],
    },
  ],
};

/* Layout */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${futuraPT.variable} ${futuraPTCond.variable} ${ttTravels.variable} font-sans`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}