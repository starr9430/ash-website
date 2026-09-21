const features = [
  { no: '01', icon: '/images/brand/icon-reliability.svg', title: 'HIGH RELIABILITY', text: <>Stable performance in<br />real-world applications.</> },
  { no: '02', icon: '/images/brand/icon-materials.svg', title: 'MATERIAL FOCUS', text: <>Product materials selected<br />for application requirements.</> },
  { no: '03', icon: '/images/brand/icon-coverage.svg', title: 'WIDE COVERAGE', text: <>Passenger, pickup, LCV<br />and commercial vehicles.</> },
  { no: '04', icon: '/images/brand/icon-supply.svg', title: 'GLOBAL SUPPLY', text: <>Built for importers,<br />distributors and workshops.</> },
]

function FeatureStrip() {
  return (
    <section className="feature-strip" aria-label="ASH product principles">
      {features.map((item) => (
        <article className="feature-card" key={item.no}>
          <div className="feature-meta">
            <span className="feature-index">{item.no}</span>
            <span className="feature-icon"><img src={item.icon} alt="" /></span>
          </div>
          <div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </article>
      ))}
    </section>
  )
}

export default FeatureStrip
