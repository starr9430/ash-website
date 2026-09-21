import ProductVisual from '../components/ProductVisual'

const products = [
  { no: '01', name: 'Clutch Cover', type: 'cover', note: 'Pressure plate assembly' },
  { no: '02', name: 'Driven Disc', type: 'disc', note: 'Friction disc assembly' },
  { no: '03', name: 'Release Bearing', type: 'bearing', note: 'Release system' },
  { no: '04', name: 'Related Components', type: 'other', note: 'Application-led sourcing' },
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
            <ProductVisual type={item.type} />
            <div className="product-bottom">
              <div><h3>{item.name}</h3><p>{item.note}</p></div>
              <span>↗</span>
            </div>
          </article>
        ))}
      </div>

      <div className="capability-panel">
        <div className="section-kicker">04 / CAPABILITY</div>
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
