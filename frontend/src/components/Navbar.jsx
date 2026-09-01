import { useEffect, useState } from "react";
import styles from "../modules/Navbar.module.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function handleNavClick(section) {
    setActiveSection(section);
    closeMenu();
  }

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      let currentSection = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionBottom
        ) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>

        {/* Logo */}
        <a
          href="#home"
          className={styles.logo}
          onClick={() => handleNavClick("home")}
        >
          <span className={styles.logoDot}></span>
          <span>Azad</span>
        </a>

        {/* Desktop Navigation */}
        <div className={styles.navLinks}>

          <a
            href="#home"
            className={activeSection === "home" ? styles.active : ""}
            onClick={() => handleNavClick("home")}
          >
            Home
          </a>

          <a
            href="#about"
            className={activeSection === "about" ? styles.active : ""}
            onClick={() => handleNavClick("about")}
          >
            About
          </a>

          <a
            href="#skills"
            className={activeSection === "skills" ? styles.active : ""}
            onClick={() => handleNavClick("skills")}
          >
            Skills
          </a>

          <a
            href="#projects"
            className={activeSection === "projects" ? styles.active : ""}
            onClick={() => handleNavClick("projects")}
          >
            Projects
          </a>

        </div>

        {/* CTA */}
        <a
          href="#contact"
          className={`${styles.cta} ${
            activeSection === "contact" ? styles.ctaActive : ""
          }`}
          onClick={() => handleNavClick("contact")}
        >
          Let's Talk
          <span>↗</span>
        </a>

        {/* Mobile button */}
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

      {/* Mobile menu */}
      <div
        className={`${styles.mobileMenu} ${
          isMenuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <div className={styles.mobileLinks}>

          <a
            href="#home"
            className={
              activeSection === "home"
                ? styles.mobileActive
                : ""
            }
            onClick={() => handleNavClick("home")}
          >
            <span>01</span>
            Home
          </a>

          <a
            href="#about"
            className={
              activeSection === "about"
                ? styles.mobileActive
                : ""
            }
            onClick={() => handleNavClick("about")}
          >
            <span>02</span>
            About
          </a>

          <a
            href="#skills"
            className={
              activeSection === "skills"
                ? styles.mobileActive
                : ""
            }
            onClick={() => handleNavClick("skills")}
          >
            <span>03</span>
            Skills
          </a>

          <a
            href="#projects"
            className={
              activeSection === "projects"
                ? styles.mobileActive
                : ""
            }
            onClick={() => handleNavClick("projects")}
          >
            <span>04</span>
            Projects
          </a>

          <a
            href="#contact"
            className={`${styles.mobileCta} ${
              activeSection === "contact"
                ? styles.mobileCtaActive
                : ""
            }`}
            onClick={() => handleNavClick("contact")}
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