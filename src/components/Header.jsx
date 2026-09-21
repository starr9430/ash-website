function Mark() {
  return (
    <svg className="brand-mark" viewBox="0 0 40 40" aria-hidden="true">
      <path d="M20 3C14.8 10.8 9 16.1 9 23.4 9 30.1 13.9 35 20 35s11-4.9 11-11.6C31 16.1 25.2 10.8 20 3Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 10.5v18.7M15.3 17.2c3.1 2.2 6.3 2.2 9.4 0M13.5 24.2c4.3 2.6 8.7 2.6 13 0" fill="none" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
    </svg>
  )
}
function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="ASH home"><Mark /><span>ASH</span></a>
      <nav className="nav" aria-label="Primary navigation">
        <a href="#solutions">Approach</a><a href="#coverage">Applications</a><a href="#capability">Products</a>
      </nav>
      <a className="header-contact" href="#contact">Start a conversation <span>↗</span></a>
    </header>
  )
}
export default Header
