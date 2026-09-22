const features = [
  { icon: '01', title: 'APPLICATION-LED', text: <>Start from the vehicle,<br />reference and market need.</> },
  { icon: '02', title: 'MATERIAL FOCUS', text: <>Product choices follow<br />the application requirement.</> },
  { icon: '03', title: 'RANGE BUILDING', text: <>Combine references into<br />a workable sourcing range.</> },
  { icon: '04', title: 'EXPORT-MINDED', text: <>Built for importers,<br />distributors and workshops.</> },
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
