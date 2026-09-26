function Hero() {
  return (
    <section className="hero" id="top">
      <img className="hero-scene" src="/assets/library/derived/ash-hero-scene-clean.webp" alt="" />
      <div className="hero-copy">
        <span className="hero-logo" aria-hidden="true" />
        <p className="hero-product-name">CLUTCH KIT</p>
        <div className="hero-rule" />
        <h1>Precision<br /><em>in Motion</em></h1>
        <p className="hero-description">
          Reliable clutch solutions for a smoother,<br />stronger journey.
        </p>
        <a className="hero-button" href="#products">Explore Products <span>→</span></a>
      </div>
    </section>
  )
}

export default Hero
