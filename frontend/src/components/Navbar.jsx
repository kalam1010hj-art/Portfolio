import { useState } from "react";
import styles from "../modules/Navbar.module.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>

        {/* Logo */}
        <a
          href="#home"
          className={styles.logo}
          onClick={closeMenu}
        >
          <span className={styles.logoDot}></span>
          <span>Azad</span>
        </a>

        {/* Desktop Navigation */}
        <div className={styles.navLinks}>
          <a href="#home" className={styles.active}>
            Home
          </a>

          <a href="#about">
            About
          </a>

          <a href="#skills">
            Skills
          </a>

          <a href="#projects">
            Projects
          </a>
        </div>

        {/* Desktop CTA */}
        <a href="#contact" className={styles.cta}>
          Let's Talk
          <span>↗</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className={`${styles.menuButton} ${
            isMenuOpen ? styles.menuOpen : ""
          }`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
        </button>

      </nav>

      {/* Mobile Navigation */}
      <div
        className={`${styles.mobileMenu} ${
          isMenuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <div className={styles.mobileLinks}>

          <a href="#home" onClick={closeMenu}>
            <span>01</span>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            <span>02</span>
            About
          </a>

          <a href="#skills" onClick={closeMenu}>
            <span>03</span>
            Skills
          </a>

          <a href="#projects" onClick={closeMenu}>
            <span>04</span>
            Projects
          </a>

          <a
            href="#contact"
            className={styles.mobileCta}
            onClick={closeMenu}
          >
            <span>05</span>
            Let's Talk
            <b>↗</b>
          </a>

        </div>

        <div className={styles.mobileFooter}>
          <span>AVAILABLE FOR OPPORTUNITIES</span>
          <span>2026</span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;