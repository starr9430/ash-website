function ProductVisual({ type }) {
  if (type === 'disc') {
    return (
      <svg viewBox="0 0 260 190" className="product-svg" aria-hidden="true">
        <defs><radialGradient id="pd" cx=".35" cy=".3" r=".8"><stop offset="0" stopColor="#666b66" /><stop offset=".75" stopColor="#1d211e" /><stop offset="1" stopColor="#111410" /></radialGradient></defs>
        <circle cx="130" cy="94" r="67" fill="#272b28" />
        <circle cx="130" cy="94" r="54" fill="url(#pd)" stroke="#8e938d" strokeWidth="3" />
        {Array.from({ length: 18 }, (_, i) => {
          const a = (Math.PI * 2 * i) / 18
          return <circle key={i} cx={130 + Math.cos(a) * 60} cy={94 + Math.sin(a) * 60} r="3.2" fill="#b1b4ae" />
        })}
        <circle cx="130" cy="94" r="22" fill="#151815" stroke="#9b9f99" strokeWidth="3" />
        {Array.from({ length: 6 }, (_, i) => {
          const a = (Math.PI * 2 * i) / 6
          return <rect key={i} x="126" y="59" width="8" height="27" rx="4" fill="#565b56" transform={`rotate(${i * 60} 130 94)`} />
        })}
      </svg>
    )
  }

  if (type === 'bearing') {
    return (
      <svg viewBox="0 0 260 190" className="product-svg" aria-hidden="true">
        <defs><linearGradient id="pb" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#d9d9d2" /><stop offset=".55" stopColor="#777c77" /><stop offset="1" stopColor="#2e332f" /></linearGradient></defs>
        <path d="M70 67c9-17 30-27 50-27h31c22 0 37 10 47 27l-12 69c-7 18-24 25-49 25h-20c-25 0-43-10-49-28Z" fill="url(#pb)" stroke="#40453f" strokeWidth="2" />
        <ellipse cx="130" cy="75" rx="47" ry="21" fill="#373c37" />
        <ellipse cx="130" cy="75" rx="27" ry="11" fill="#111410" stroke="#b8bbb4" strokeWidth="2" />
        <ellipse cx="130" cy="150" rx="46" ry="13" fill="#70756f" opacity=".48" />
      </svg>
    )
  }

  if (type === 'other') {
    return (
      <svg viewBox="0 0 260 190" className="product-svg" aria-hidden="true">
        <circle cx="84" cy="92" r="42" fill="none" stroke="#737872" strokeWidth="12" />
        <circle cx="84" cy="92" r="19" fill="none" stroke="#252925" strokeWidth="9" />
        <path d="M133 62h53l21 30-21 30h-53l-21-30Z" fill="#8e938d" stroke="#363b36" strokeWidth="3" />
        <circle cx="160" cy="92" r="17" fill="#1a1e1b" stroke="#c0c2bc" strokeWidth="3" />
        <rect x="44" y="42" width="78" height="7" rx="3.5" fill="#446b5b" opacity=".55" transform="rotate(-16 44 42)" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 260 190" className="product-svg" aria-hidden="true">
      <defs><linearGradient id="pc" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f6f4ec" /><stop offset=".43" stopColor="#c6c9c3" /><stop offset="1" stopColor="#666c66" /></linearGradient></defs>
      <circle cx="130" cy="94" r="67" fill="url(#pc)" stroke="#70766f" strokeWidth="2" />
      <circle cx="130" cy="94" r="50" fill="#2a2f2b" />
      {Array.from({ length: 16 }, (_, i) => {
        const a = (Math.PI * 2 * i) / 16
        return <line key={i} x1={130 + Math.cos(a) * 30} y1={94 + Math.sin(a) * 30} x2={130 + Math.cos(a) * 56} y2={94 + Math.sin(a) * 56} stroke="#e2e2dc" strokeWidth="3" strokeLinecap="round" opacity=".85" />
      })}
      <circle cx="130" cy="94" r="22" fill="#a7aaa4" stroke="#303530" strokeWidth="4" />
      <circle cx="130" cy="94" r="8" fill="#202420" />
    </svg>
  )
}

export default ProductVisual
