import ClutchVisual from '../components/ClutchVisual'

function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-copy">
        <p className="eyebrow">ASH / GLOBAL CLUTCH SOLUTIONS</p>
        <h1>Precision that<br /><em>moves.</em></h1>
        <p className="hero-text">
          Application-led clutch solutions for importers and distributors —
          built around fit, consistency and practical range building.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#coverage">Explore applications <span>↗</span></a>
          <a className="text-link" href="#contact">Talk to ASH <span>→</span></a>
        </div>
        <div className="hero-note">
          <span>PASSENGER / LCV / COMMERCIAL</span>
          <span>EST. 2026</span>
        </div>
      </div>
      <ClutchVisual />
    </section>
  )
}

export default Hero
