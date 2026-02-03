import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

/* Fonts from src/assets/fonts – loaded here, used in globals.css via CSS variables */
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

export const metadata: Metadata = {
  title: "WebHub Asia | Custom Software Development",
  description:
    "Global custom software development company offering blockchain apps, AI chatbots, SaaS solutions, UI/UX design, and enterprise software.",
  keywords: [
    "custom software development",
    "blockchain applications",
    "AI chatbot",
    "SaaS solutions",
    "UI/UX design",
    "enterprise software",
    "WebHub Asia",
  ],
  authors: [{ name: "WebHub Asia" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "WebHub Asia | Custom Software Development",
    description:
      "Global custom software development company offering blockchain apps, AI chatbots, SaaS solutions, UI/UX design, and enterprise software.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${futuraPT.variable} ${futuraPTCond.variable} ${ttTravels.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
