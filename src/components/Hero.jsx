function Hero() {
  return (
    <section className="hero container" id="home">
      <div className="hero-copy">
        <p className="hero-eyebrow">A simpler way to invest</p>
        <h1>Invest in everything.</h1>
        <p className="hero-description">
          Online platform to invest in stocks, IPOs, derivatives, mutual funds,
          ETFs, bonds, and more.
        </p>
        <a className="primary-button" href="#signup">
          Sign up for free <span aria-hidden="true">→</span>
        </a>
        <p className="hero-note">Simple, transparent and built for everyone.</p>
      </div>

      <div className="hero-visual" aria-label="Illustration of a modern investing dashboard" role="img">
        <div className="visual-orbit visual-orbit--one" />
        <div className="visual-orbit visual-orbit--two" />
        <div className="market-card market-card--main">
          <div className="market-card-top">
            <span className="market-dot" />
            <span className="market-label">PORTFOLIO OVERVIEW</span>
            <span className="market-menu">•••</span>
          </div>
          <div className="portfolio-value">₹ 4,82,650<span>+2.84%</span></div>
          <p className="portfolio-caption">Total investment value</p>
          <svg className="chart-line" viewBox="0 0 420 150" role="presentation" aria-hidden="true">
            <defs>
              <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#387ed1" stopOpacity=".22" />
                <stop offset="100%" stopColor="#387ed1" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0 118 C25 110 34 91 60 99 S98 119 124 82 S160 94 184 68 S220 82 245 51 S286 69 310 38 S350 55 374 22 S402 30 420 8 L420 150 L0 150Z" fill="url(#chartFill)" />
            <path d="M0 118 C25 110 34 91 60 99 S98 119 124 82 S160 94 184 68 S220 82 245 51 S286 69 310 38 S350 55 374 22 S402 30 420 8" fill="none" stroke="#387ed1" strokeWidth="4" strokeLinecap="round" />
          </svg>
          <div className="chart-axis"><span>1D</span><span>1W</span><span>1M</span><span>1Y</span><span>ALL</span></div>
        </div>
        <div className="market-card market-card--float">
          <span className="float-label">NIFTY 50</span>
          <strong>24,850.15</strong>
          <span className="float-change">↗ 1.24%</span>
        </div>
        <div className="visual-badge">Invest at your pace.</div>
      </div>
    </section>
  );
}

export default Hero;