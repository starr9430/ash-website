function HeroGraphic() {
  return (
    <div className="hero-graphic" aria-hidden="true">
      <div className="graphic-glow" />
      <svg viewBox="0 0 700 700" role="presentation">
        <defs>
          <radialGradient id="metal" cx="36%" cy="30%" r="74%">
            <stop offset="0%" stopColor="#e8e6df" />
            <stop offset="48%" stopColor="#b7b9b4" />
            <stop offset="100%" stopColor="#777b76" />
          </radialGradient>
          <radialGradient id="inner" cx="42%" cy="34%" r="68%">
            <stop offset="0%" stopColor="#242724" />
            <stop offset="100%" stopColor="#111311" />
          </radialGradient>
        </defs>
        <circle cx="350" cy="350" r="260" fill="url(#metal)" opacity="0.98" />
        <circle cx="350" cy="350" r="215" fill="none" stroke="#5f645f" strokeWidth="2" opacity="0.58" />
        <circle cx="350" cy="350" r="165" fill="url(#inner)" />
        <circle cx="350" cy="350" r="92" fill="none" stroke="#9fa39d" strokeWidth="3" opacity="0.65" />
        <circle cx="350" cy="350" r="38" fill="#c9c8c1" opacity="0.92" />
        <circle cx="350" cy="350" r="18" fill="#373a36" />
        {[0,60,120,180,240,300].map((angle) => {
          const radians = (angle * Math.PI) / 180
          const x = 350 + Math.cos(radians) * 128
          const y = 350 + Math.sin(radians) * 128
          return <circle key={angle} cx={x} cy={y} r="8" fill="#c1c3bd" opacity="0.86" />
        })}
        {[0,45,90,135,180,225,270,315].map((angle) => (
          <line
            key={angle}
            x1="350"
            y1="350"
            x2="350"
            y2="112"
            transform={"rotate(" + angle + " 350 350)"}
            stroke="#f2f0e8"
            strokeWidth="1"
            opacity="0.16"
          />
        ))}
        <circle cx="350" cy="350" r="273" fill="none" stroke="#5e685f" strokeWidth="1" opacity="0.34" />
      </svg>
      <div className="graphic-caption">
        <span>CLUTCH SYSTEM</span>
        <span>ASH / 01</span>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-copy">
        <p className="eyebrow">ASH / CLUTCH SYSTEMS</p>
        <h1>Built around fit.<br /><em>Ready for the road.</em></h1>
        <p className="hero-text">
          A focused B2B clutch partner for passenger cars and commercial vehicles —
          combining broad application coverage with a dependable production base.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#solutions">Explore ASH <span>↗</span></a>
          <a className="text-link" href="#contact">Start a conversation <span>→</span></a>
        </div>
      </div>

      <HeroGraphic />
    </section>
  )
}

export default Hero
