function Intro() {
  return (
    <section className="about-band" id="about">
      <div className="about-main">
        <div className="about-heading">
          <h2>
            Built around<br />
            <em>the application.</em>
          </h2>
        </div>

        <div className="about-art" aria-label="ASH clutch components">
          <div className="about-product about-product--cover">
            <img
              src="/assets/library/derived/products/clutch-cover-editorial.webp"
              alt="ASH clutch cover assembly"
            />
          </div>
          <div className="about-product about-product--disc">
            <img
              src="/assets/library/derived/products/clutch-disc-editorial.webp"
              alt="ASH driven disc"
            />
          </div>
          <div className="about-product about-product--bearing">
            <img
              src="/assets/library/derived/products/release-bearing-editorial.webp"
              alt="ASH release bearing"
            />
          </div>
          <img
            className="about-leaf"
            src="/images/brand/leaf-vein.svg"
            alt=""
            aria-hidden="true"
          />
          <img
            className="about-water"
            src="/images/brand/water-ribbon.svg"
            alt=""
            aria-hidden="true"
          />
          <img
            className="about-art-logo"
            src="/assets/library/brand/ash-logo-approved.png"
            alt=""
            aria-hidden="true"
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
          <span className="about-point-icon about-point-icon--fit" aria-hidden="true">○</span>
          <span>CLEAR FITMENT</span>
        </div>
        <div className="about-point">
          <span className="about-point-icon about-point-icon--supply" aria-hidden="true">◇</span>
          <span>PRACTICAL SUPPLY</span>
        </div>
        <div className="about-point">
          <span className="about-point-icon about-point-icon--direct" aria-hidden="true">—</span>
          <span>DIRECT COMMUNICATION</span>
        </div>
      </div>
    </section>
  )
}

export default Intro
