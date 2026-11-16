import { useState } from "react";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Charges", href: "#charges" },
  { label: "About", href: "#about" },
  { label: "Support", href: "#support" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="Zerodha home" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">Z</span>
          <span className="brand-name">zerodha</span>
        </a>

        <button
          className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div
          className={`nav-panel ${menuOpen ? "nav-panel--open" : ""}`}
          id="primary-navigation"
        >
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} onClick={closeMenu}>{link.label}</a>
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <a className="nav-signin" href="#signin">Sign in</a>
            <a className="nav-signup" href="#signup">Sign up</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;