function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <span className="footer-brand-logo" aria-hidden="true" />
        <span>ASHLIRA AUTOMOTIVE PARTS CO., LTD.</span>
      </div>
      <nav>
        <a href="#top">Home</a><i /> <a href="#products">Products</a><i /> <a href="#about">About Us</a><i /> <a href="#contact">Contact</a>
      </nav>
      <div className="footer-contact">
        <a href="mailto:starr@ashlira.com">✉ &nbsp; starr@ashlira.com</a>
        <span>© 2026 ASHLIRA. All rights reserved.</span>
      </div>
      <img className="footer-leaf" src="/assets/brand/footer-leaf.svg" alt="" />
    </footer>
  )
}

export default Footer
