const items = [
  { no: "01", title: "Passenger vehicles", tag: "DAILY / MAINSTREAM", text: "Broad manual-clutch coverage for the applications that move everyday markets." },
  { no: "02", title: "Light commercial", tag: "PICKUP / VAN", text: "Practical clutch coverage for pickups, vans and light-duty working vehicles." },
  { no: "03", title: "Commercial vehicles", tag: "WORK / LOAD", text: "A production base shaped by commercial-vehicle applications and real operating demands." },
]

function Coverage() {
  return (
    <section className="coverage-section" id="coverage">
      <div className="section-heading">
        <div>
          <div className="section-kicker">02 / APPLICATION COVERAGE</div>
          <h2>One range.<br /><em>Many roads.</em></h2>
        </div>
        <p>Built for mixed procurement: clear references, practical quantities and a range that can grow with the market.</p>
      </div>

      <div className="coverage-list">
        {items.map((item) => (
          <article className="coverage-item" key={item.no}>
            <span className="coverage-no">{item.no}</span>
            <div className="coverage-title">
              <h3>{item.title}</h3>
              <span>{item.tag}</span>
            </div>
            <p>{item.text}</p>
            <span className="coverage-arrow">↗</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Coverage
