const features = [
  { icon: '/images/brand/icon-reliability.svg', title: 'HIGH RELIABILITY', text: 'Stable performance in all conditions.' },
  { icon: '/images/brand/icon-materials.svg', title: 'PREMIUM MATERIALS', text: 'Selected materials for longer service life.' },
  { icon: '/images/brand/icon-coverage.svg', title: 'WIDE COVERAGE', text: 'Passenger, light truck, commercial vehicles.' },
  { icon: '/images/brand/icon-supply.svg', title: 'GLOBAL SUPPLY', text: 'Reliable support for your business.' },
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
