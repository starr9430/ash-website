function Header() {
  const logoSrc = "/assets/library/brand/ash-logo-approved.png";

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="ASH home">
        <img className="brand-logo" src={logoSrc} alt="ASH" />
      </a>
      <nav className="nav" aria-label="Primary navigation">
        <a href="#solutions">Approach</a>
        <a href="#coverage">Applications</a>
        <a href="#capability">Products</a>
      </nav>
      <div className="header-right">
        <span className="header-email">hello@ashlira.com</span>
        <a className="header-contact" href="#contact">Start a conversation <span>↗</span></a>
      </div>
    </header>
  )
}

export default Header
