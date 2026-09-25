function Intro() {
  return (
    <section className="about-band" id="about">
      <div className="about-top">
        <img
          className="about-logo"
          src="/assets/library/brand/ash-logo-approved.png"
          alt="ASH"
        />
      </div>

      <div className="about-main">
        <div className="about-heading">
          <h2>
            Built around<br />
            <em>the application.</em>
          </h2>
        </div>

        <div className="about-art" aria-hidden="true">
          <img
            src="/assets/library/derived/about/ash-about-mark.webp?v=sketch-20260925"
            alt=""
          />
        </div>

        <div className="about-copy">
          <div className="about-rule" />
          <p className="about-lead">
            ASH is a China-based clutch brand built for global markets.
          </p>
          <p>
            We specialize in clutch systems and help overseas buyers turn vehicle,
            reference and market requirements into practical product solutions —
            from the right part to the right supply.
          </p>
        </div>
      </div>

      <div className="about-rail">
        <div className="about-point">
          <span className="about-point-icon" aria-hidden="true">
            <svg viewBox="0 0 32 32" focusable="false">
              <circle cx="16" cy="16" r="11.5" />
              <circle cx="16" cy="16" r="4" />
              <path d="M16 2.5v6M16 23.5v6M2.5 16h6M23.5 16h6" />
            </svg>
          </span>
          <span>CLEAR FITMENT</span>
        </div>

        <div className="about-point">
          <span className="about-point-icon" aria-hidden="true">
            <svg viewBox="0 0 32 32" focusable="false">
              <circle cx="16" cy="16" r="5.5" />
              <path d="M16 3v4M16 25v4M3 16h4M25 16h4M6.8 6.8l2.8 2.8M22.4 22.4l2.8 2.8M25.2 6.8l-2.8 2.8M9.6 22.4l-2.8 2.8" />
              <path d="M16 7.8a8.2 8.2 0 1 1-5.8 2.4" />
            </svg>
          </span>
          <span>PRACTICAL SUPPLY</span>
        </div>

        <div className="about-point">
          <span className="about-point-icon" aria-hidden="true">
            <svg viewBox="0 0 32 32" focusable="false">
              <path d="M9 8.5h14A5.5 5.5 0 0 1 28.5 14v4A5.5 5.5 0 0 1 23 23.5h-7.2l-5.9 4v-4A5.5 5.5 0 0 1 5.5 18v-4A5.5 5.5 0 0 1 11 8.5Z" />
              <circle cx="12" cy="16" r="1.2" />
              <circle cx="16" cy="16" r="1.2" />
              <circle cx="20" cy="16" r="1.2" />
            </svg>
          </span>
          <span>DIRECT COMMUNICATION</span>
        </div>
      </div>
    </section>
  )
}

export default Intro
