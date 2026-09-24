const products = [
  { image: '/assets/library/products/clutch-cover-01.webp', title: 'Clutch Cover', subtitle: 'PRESSURE PLATE ASSEMBLY' },
  { image: '/assets/library/products/clutch-disc-01.webp', title: 'Driven Disc', subtitle: 'FRICTION DISC' },
  { image: '/assets/library/products/release-bearing-front-01.webp', title: 'Release Bearing', subtitle: 'RELEASE SYSTEM' },
  { image: '/assets/library/products/hydraulic-bearing-front-01.webp', title: 'Hydraulic Bearing', subtitle: 'HYDRAULIC RELEASE SYSTEM' },
]

function Coverage() {
  return (
    <section className="products-section" id="products">
      <div className="products-intro">
        <p className="section-label">PRODUCTS</p>
        <div className="products-title-row">
          <span />
          <h2>Complete Clutch Solutions<br />for Your Fleet</h2>
        </div>
        <p className="products-copy">
          From passenger cars to commercial vehicles, ASH provides a practical range of clutch components to meet diverse market needs.
        </p>
        <a className="products-link" href="#contact">View All Products <span>→</span></a>
      </div>

      <div className="product-grid">
        {products.map((item) => (
          <article className="product-card" key={item.title}>
            <div className="product-image">
              <img src={item.image} alt="" />
            </div>
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
            <span className="product-arrow">→</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Coverage
