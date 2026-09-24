const products = [
  {
    key: 'cover',
    image: '/assets/library/derived/products/clutch-cover-editorial.webp',
    title: 'Clutch Cover',
    subtitle: 'PRESSURE PLATE ASSEMBLY',
  },
  {
    key: 'disc',
    image: '/assets/library/derived/products/clutch-disc-editorial.webp',
    title: 'Driven Disc',
    subtitle: 'FRICTION DISC',
  },
  {
    key: 'release',
    image: '/assets/library/derived/products/release-bearing-editorial.webp',
    title: 'Release Bearing',
    subtitle: 'RELEASE SYSTEM',
  },
  {
    key: 'hydraulic',
    image: '/assets/library/derived/products/hydraulic-bearing-editorial.webp',
    title: 'Hydraulic Bearing',
    subtitle: 'HYDRAULIC RELEASE SYSTEM',
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
          From core clutch assemblies to supporting release components, ashlira brings practical coverage together for passenger cars, light commercial vehicles, and selected commercial applications.
        </p>
        <a className="products-link" href="#contact">
          Discuss Your Range <span>→</span>
        </a>
      </div>

      <div className="product-grid">
        {products.map((item) => (
          <article className={`product-card product-card--${item.key}`} key={item.title}>
            <div className="product-image">
              <img className="product-photo" src={item.image} alt={item.title} loading="lazy" />
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
