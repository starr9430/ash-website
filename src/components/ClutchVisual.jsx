function ClutchVisual() {
  const bolts = Array.from({ length: 8 }, (_, i) => {
    const a = (Math.PI * 2 * i) / 8 - Math.PI / 8
    return { x: 330 + Math.cos(a) * 198, y: 274 + Math.sin(a) * 198 }
  })

  return (
    <div className="clutch-visual" aria-hidden="true">
      <div className="visual-wash" />
      <svg viewBox="0 0 760 560" className="clutch-svg" role="presentation">
        <defs>
          <linearGradient id="cvMetal" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f8f6ef" />
            <stop offset="38%" stopColor="#cfd1cc" />
            <stop offset="72%" stopColor="#888d88" />
            <stop offset="100%" stopColor="#5d625e" />
          </linearGradient>
          <linearGradient id="cvMetal2" x1="0" y1="0" x2="0.9" y2="1">
            <stop offset="0%" stopColor="#e8e8e2" />
            <stop offset="50%" stopColor="#9da29e" />
            <stop offset="100%" stopColor="#6a6f6a" />
          </linearGradient>
          <radialGradient id="cvDark" cx="38%" cy="32%" r="72%">
            <stop offset="0%" stopColor="#424743" />
            <stop offset="75%" stopColor="#202420" />
            <stop offset="100%" stopColor="#101310" />
          </radialGradient>
          <linearGradient id="cvLeaf" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#9daf99" />
            <stop offset="100%" stopColor="#355844" />
          </linearGradient>
          <linearGradient id="cvWater" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#d9ece9" stopOpacity=".18" />
            <stop offset="48%" stopColor="#5a9cad" stopOpacity=".95" />
            <stop offset="100%" stopColor="#bfdfe4" stopOpacity=".2" />
          </linearGradient>
          <filter id="cvShadow" x="-20%" y="-20%" width="140%" height="150%">
            <feDropShadow dx="0" dy="26" stdDeviation="25" floodColor="#18201c" floodOpacity=".22" />
          </filter>
        </defs>

        <path
          d="M54 427C190 393 190 238 340 182c119-45 263-13 377 45"
          fill="none"
          stroke="url(#cvWater)"
          strokeWidth="26"
          strokeLinecap="round"
          opacity=".88"
        />
        <path
          d="M78 454C238 382 247 285 373 237c114-42 227-34 311 15"
          fill="none"
          stroke="#fff"
          strokeWidth="7"
          strokeLinecap="round"
          opacity=".62"
        />

        <path
          d="M128 140c75-79 170-99 247-63-48 22-82 59-109 109-43 81-91 111-165 116 3-55 12-102 27-162Z"
          fill="url(#cvLeaf)"
          opacity=".96"
        />
        <path d="M151 286C216 229 274 160 329 88" fill="none" stroke="#dbe4d9" strokeWidth="2" opacity=".82" />

        <g filter="url(#cvShadow)">
          <circle cx="330" cy="274" r="221" fill="url(#cvMetal)" />
          <circle cx="330" cy="274" r="186" fill="none" stroke="#7b817b" strokeWidth="2" opacity=".55" />
          <circle cx="330" cy="274" r="145" fill="url(#cvDark)" />
          <circle cx="330" cy="274" r="102" fill="none" stroke="#a6aaa4" strokeWidth="4" opacity=".62" />
          <circle cx="330" cy="274" r="47" fill="url(#cvMetal2)" />
          <circle cx="330" cy="274" r="24" fill="#303530" />

          {Array.from({ length: 18 }, (_, i) => {
            const a = (Math.PI * 2 * i) / 18
            const x1 = 330 + Math.cos(a) * 55
            const y1 = 274 + Math.sin(a) * 55
            const x2 = 330 + Math.cos(a) * 122
            const y2 = 274 + Math.sin(a) * 122
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#d9dad4" strokeWidth="4" opacity=".78" strokeLinecap="round" />
          })}

          {bolts.map((b, i) => <circle key={i} cx={b.x} cy={b.y} r="8" fill="#5d625d" stroke="#e6e6df" strokeWidth="2" />)}
          <circle cx="330" cy="274" r="197" fill="none" stroke="#f1f0e9" strokeWidth="1.5" opacity=".72" />
        </g>

        <g opacity=".72" transform="translate(255 285)">
          <circle cx="0" cy="0" r="126" fill="none" stroke="#161a17" strokeWidth="22" strokeDasharray="3 14" />
          <circle cx="0" cy="0" r="84" fill="none" stroke="#333833" strokeWidth="4" />
          {Array.from({ length: 12 }, (_, i) => {
            const a = (Math.PI * 2 * i) / 12
            return <circle key={i} cx={Math.cos(a) * 104} cy={Math.sin(a) * 104} r="4.5" fill="#aeb2ab" />
          })}
        </g>

        <path d="M477 86c76 46 131 106 180 174" fill="none" stroke="#fff" strokeWidth="5" opacity=".42" />
        <path d="M500 117c63 33 112 75 150 127" fill="none" stroke="#7aafba" strokeWidth="12" opacity=".28" strokeLinecap="round" />
      </svg>

      <div className="visual-caption">
        <span>ASH / 01</span>
        <span>CLUTCH SYSTEM</span>
      </div>
    </div>
  )
}

export default ClutchVisual
