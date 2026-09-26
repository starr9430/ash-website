const features = [
  { icon: '/assets/brand/icon-reliability.svg', title: 'HIGH RELIABILITY', text: 'Stable performance in all conditions.' },
  { icon: '/assets/brand/icon-materials.svg', title: 'PREMIUM MATERIALS', text: 'Selected materials for longer service life.' },
  { icon: '/assets/brand/icon-coverage.svg', title: 'WIDE COVERAGE', text: 'Passenger, light truck, commercial vehicles.' },
  { icon: '/assets/brand/icon-supply.svg', title: 'GLOBAL SUPPLY', text: 'Reliable support for your business.' },
]

function FeatureStrip() {
  return (
    <section className="feature-strip" aria-label="ASH capabilities">
      {features.map((item) => (
        <article className="feature-item" key={item.title}>
          <img src={item.icon} alt="" />
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
