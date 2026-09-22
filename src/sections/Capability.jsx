import ProductVisual from '../components/ProductVisual'

const products = [
  { no: '01', name: 'Clutch Cover', type: 'cover', src: '/assets/library/products/clutch-cover-01.jpg', note: 'Pressure plate assembly' },
  { no: '02', name: 'Driven Disc', type: 'disc', src: '/assets/library/products/clutch-disc-01.png', note: 'Friction disc assembly' },
  { no: '03', name: 'Release Bearing', type: 'bearing', src: '/assets/library/products/release-bearing-01.png', note: 'Release system' },
  { no: '04', name: 'Related Components', type: 'other', src: '/assets/library/products/related-components-01.png', note: 'Application-led sourcing' },
]

function Capability() {
  return (
    <section className="capability-section" id="capability">
      <div className="capability-intro">
        <div>
          <div className="section-kicker">03 / PRODUCT SYSTEM</div>
          <h2>The right part is<br /><em>the whole system.</em></h2>
        </div>
        <p>
          ASH is not built around a fixed shelf. We build the clutch combination
          around the vehicle, the market and the buyer's actual requirement.
        </p>
      </div>

      <div className="product-grid">
        {products.map((item) => (
          <article className="product-card" key={item.no}>
            <div className="product-top"><span>{item.no}</span><span>ASH</span></div>
            <ProductVisual type={item.type} src={item.src} alt={item.name} />
            <div className="product-bottom">
              <div><h3>{item.name}</h3><p>{item.note}</p></div>
              <span>↗</span>
            </div>
          </article>
        ))}
      </div>

      <div className="packaging-strip">
        <div className="packaging-copy">
          <div className="section-kicker">04 / PACKAGING</div>
          <h2>Made to arrive<br /><em>as ASH.</em></h2>
          <p>
            Packaging is part of the product experience — clear identification,
            restrained graphics and a format designed for an export-facing line.
          </p>
        </div>
        <div className="packaging-frame">
          <img
            src="/assets/library/packaging/ash-clutch-kit-box-01.webp"
            alt="ASH clutch kit packaging"
          />
          <div className="packaging-label">ASH / CLUTCH KIT</div>
        </div>
      </div>

      <div className="capability-panel">
        <div className="section-kicker">05 / CAPABILITY</div>
        <div className="capability-copy">
          <h2>Production discipline.<br /><em>Commercial clarity.</em></h2>
          <p>
            A mature manufacturing base behind a lean overseas-facing model.
            Consistent product, direct communication and enough flexibility to
            build a range around real demand.
          </p>
        </div>
        <div className="capability-meta">
          <span>APPLICATION-LED</span>
          <span>OEM-MINDED PRODUCTION</span>
          <span>EXPORT FOCUSED</span>
        </div>
      </div>
    </section>
  )
}

export default Capability
