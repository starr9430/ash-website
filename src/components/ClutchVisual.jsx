function ClutchVisual() {
  return (
    <div className="clutch-visual" aria-hidden="true">
      <div className="visual-wash" />
      <img className="hero-ornament hero-ornament-leaf" src="/assets/brand/ash-leaf.svg" alt="" />
      <img className="hero-ornament hero-ornament-water" src="/assets/brand/ash-water.svg" alt="" />

      <img
        className="hero-product-photo"
        src="/images/products/hero-clutch.webp"
        alt=""
        onError={(event) => { event.currentTarget.style.display = 'none' }}
      />

      <img
        className="hero-product-placeholder"
        src="/assets/brand/ash-metal-ring.svg"
        alt=""
      />

      <div className="visual-caption">
        <span>ASH / 01</span>
        <span>CLUTCH SYSTEM</span>
      </div>
    </div>
  )
}

export default ClutchVisual
