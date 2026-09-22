function Footer() {
  const logoSrc = "/assets/library/brand/ash-logo-approved.png";

  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <img className="footer-logo" src={logoSrc} alt="ASH" />
        <span>GLOBAL CLUTCH SOLUTIONS</span>
      </div>
      <span>© 2026 ASH</span>
    </footer>
  )
}

export default Footer
