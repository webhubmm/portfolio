import Image from "next/image";
import Link from "next/link";
import viraLogo from "@/assets/images/vira-logo.png";
import { VIRA_FACEBOOK_URL, VIRA_TELEGRAM_URL, VIRA_TIKTOK_URL } from "@/lib/vira";

const footerLinks = [
  { href: "#product", label: "Product" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#whale", label: "Whale Intelligence" },
  { href: "#alerts", label: "Alerts" },
  { href: "#history", label: "Prediction History" },
  { href: "#faq", label: "FAQ" },
] as const;

const legalLinks = [
  { href: "/vira-ai/terms", label: "Terms" },
  { href: "/vira-ai/privacy", label: "Privacy" },
  { href: "/vira-ai/risk", label: "Risk Disclaimer" },
] as const;

function TelegramIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.16 15.3a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.27 8.27 0 0 0 4.76 1.5V6.77a4.84 4.84 0 0 1-1.01-.08z" />
    </svg>
  );
}

export default function ViraFooter() {
  return (
    <footer className="section-container py-12 md:py-16">
      <div className="footer-container">
        <div className="footer-top-row">
          <Link href="/vira-ai" className="flex-shrink-0 flex items-center gap-3">
            <Image
              src={viraLogo}
              alt="Vira AI"
              width={40}
              height={40}
              className="rounded-xl"
            />
            <span className="flex flex-col items-start gap-0.5">
              <span className="text-white font-title text-lg font-bold uppercase tracking-wide">Vira AI</span>
              <span className="text-white/70 text-sm">Bitcoin Market Intelligence.</span>
            </span>
          </Link>
          <nav className="footer-nav" aria-label="Vira AI footer">
            <ul className="footer-links-list">
              {footerLinks.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="link-nav-hover">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="footer-social-list" aria-label="Social media">
            <li>
              <a
                href={VIRA_TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="footer-icon-card"
              >
                <TelegramIcon />
              </a>
            </li>
            <li>
              <a
                href={VIRA_FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="footer-icon-card"
              >
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a
                href={VIRA_TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="footer-icon-card"
              >
                <TikTokIcon />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-3 w-full">
          <nav aria-label="Legal">
            <ul className="footer-links-list justify-center">
              {legalLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="link-nav-hover text-sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="footer-copyright">© 2026 Vira AI. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
