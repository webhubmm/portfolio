import Link from "next/link";

export default function ProductBanner() {
  return (
    <div className="coming-soon-banner">
      <div className="coming-soon-banner-shine" aria-hidden />
      <Link href="/vira-ai" className="coming-soon-banner-inner no-underline hover:opacity-95">
        <span className="coming-soon-badge">
          <span className="coming-soon-badge-dot" aria-hidden />
          New
        </span>
        <p className="coming-soon-copy">
          <span className="coming-soon-product">Try our new product</span>
          <span className="coming-soon-tagline">Vira AI — Bitcoin market intelligence</span>
        </p>
      </Link>
    </div>
  );
}
