
import styles from "../modules/Navbar.module.css"

function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>

        {/* Logo */}
        <a href="#home" className={styles.logo}>
          <span className={styles.logoDot}></span>
          <span>Azad</span>
        </a>

        {/* Navigation */}
        <div className={styles.navLinks}>
          <a href="#home" className={styles.active}>
            Home
          </a>

          <a href="#about">About</a>

          <a href="#skills">Skills</a>

          <a href="#projects">Projects</a>
        </div>

        {/* CTA */}
        <a href="#contact" className={styles.cta}>
          Let's Talk
          <span>↗</span>
        </a>

      </nav>
    </header>
  );
}

export default Navbar;

