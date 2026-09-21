function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-identity">
          <strong>ASH</strong>
          <span>GLOBAL CLUTCH SOLUTIONS</span>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          <a href="#solutions">Approach</a>
          <a href="#coverage">Applications</a>
          <a href="#capability">Products</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="footer-mail" href="mailto:hello@ashlira.com">hello@ashlira.com <span>↗</span></a>
      </div>
      <div className="footer-bottom">
        <span>© 2026 ASH</span>
        <span>PASSENGER / LCV / COMMERCIAL</span>
      </div>
      <img className="footer-leaf" src="/images/brand/footer-leaf.svg" alt="" />
    </footer>
  )
}

export default Footer
