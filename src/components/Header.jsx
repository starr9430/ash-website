function Header() {
  const logoSrc = "/assets/library/brand/ash-logo-approved.png"

  return (
    <header className="site-header">
      <a className="header-logo" href="#top" aria-label="ASH home">
        <img src={logoSrc} alt="ASH" />
      </a>
      <nav>
        <a className="active" href="#top">HOME</a>
        <a href="#products">PRODUCTS</a>
        <a href="#products">ABOUT US</a>
        <a href="#contact">CONTACT</a>
      </nav>
      <div className="header-meta">
        <a href="mailto:starr@ashlira.com">✉ &nbsp; starr@ashlira.com</a>
        <span />
        <a href="#top">◎ &nbsp; EN⌄</a>
      </div>
    </header>
  )
}

export default Header
