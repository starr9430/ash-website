const items = [
  { no: "01", title: "Passenger vehicles", text: "Broad manual-clutch coverage across mainstream passenger applications." },
  { no: "02", title: "Light commercial", text: "Practical coverage for pickups, vans and light-duty work vehicles." },
  { no: "03", title: "Commercial vehicles", text: "A strong production base shaped by commercial-vehicle applications." },
]

function Coverage() {
  return (
    <section className="coverage-section" id="coverage">
      <div className="section-heading">
        <div>
          <div className="section-kicker">02 / COVERAGE</div>
          <h2>One source.<br /><em>Wider application.</em></h2>
        </div>
        <p>Designed around the way importers and distributors actually buy: mixed applications, clear references, practical quantities.</p>
      </div>

      <div className="coverage-list">
        {items.map((item) => (
          <article className="coverage-item" key={item.no}>
            <span className="coverage-no">{item.no}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <span className="coverage-arrow">↗</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Coverage
