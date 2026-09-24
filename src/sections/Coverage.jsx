const products = [
  {
    image: '/assets/library/products/clutch-cover-01.webp',
    title: 'Clutch Cover',
    subtitle: 'PRESSURE PLATE ASSEMBLY',
    className: 'product-card--featured',
  },
  {
    image: '/assets/library/products/clutch-disc-01.webp',
    title: 'Driven Disc',
    subtitle: 'FRICTION DISC',
  },
  {
    image: '/assets/library/products/release-bearing-front-01.webp',
    title: 'Release Bearing',
    subtitle: 'RELEASE SYSTEM',
  },
  {
    image: '/assets/library/products/hydraulic-bearing-front-01.webp',
    title: 'Hydraulic Bearing',
    subtitle: 'HYDRAULIC RELEASE SYSTEM',
  },
  {
    image: '/assets/library/products/pilot-bearing-01.webp',
    title: 'Pilot Bearing',
    subtitle: 'GUIDE & SUPPORT',
  },
]

function Coverage() {
  return (
    <section className="products-section" id="products">
      <div className="products-intro">
        <p className="section-label">PRODUCT SYSTEM</p>
        <div className="products-title-row">
          <span />
          <h2>Clutch Components<br />Built as a System</h2>
        </div>
        <p className="products-copy">
          From core clutch assemblies to supporting components, ASH brings practical coverage together for passenger cars, light commercial vehicles, and selected commercial applications.
        </p>
        <a className="products-link" href="#contact">
          Discuss Your Range <span>→</span>
        </a>
        <p className="products-note">Five core component groups shown. Full application coverage is supplied by part number and market.</p>
      </div>

      <div className="product-grid">
        {products.map((item) => (
          <article className={`product-card ${item.className || ''}`.trim()} key={item.title}>
            <div className="product-image">
              <img src={item.image} alt={item.title} loading="lazy" />
            </div>
            <div className="product-card-copy">
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
            </div>
            <span className="product-arrow" aria-hidden="true">↗</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Coverage
