export default function ComingSoonBanner() {
  return (
    <div className="coming-soon-banner" role="status">
      <div className="coming-soon-banner-shine" aria-hidden />
      <div className="coming-soon-banner-inner">
        <span className="coming-soon-badge">
          <span className="coming-soon-badge-dot" aria-hidden />
          Coming Soon
        </span>
        <p className="coming-soon-copy">
          <span className="coming-soon-product">Vira AI Trading Assistant</span>
          <span className="coming-soon-tagline">
            Our upcoming AI-powered trading product
          </span>
        </p>
      </div>
    </div>
  );
}
