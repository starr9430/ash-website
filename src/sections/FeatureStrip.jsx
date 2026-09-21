const features = [
  { icon: '01', title: 'HIGH RELIABILITY', text: <>Stable performance in<br />real-world applications.</> },
  { icon: '02', title: 'MATERIAL FOCUS', text: <>Product materials selected<br />for application requirements.</> },
  { icon: '03', title: 'WIDE COVERAGE', text: <>Passenger, pickup, LCV<br />and commercial vehicles.</> },
  { icon: '04', title: 'GLOBAL SUPPLY', text: <>Built for importers,<br />distributors and workshops.</> },
]

function FeatureStrip() {
  return (
    <section className="feature-strip" aria-label="ASH product principles">
      {features.map((item) => (
        <article className="feature-card" key={item.icon}>
          <span className="feature-index">{item.icon}</span>
          <span className="feature-rule" />
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
