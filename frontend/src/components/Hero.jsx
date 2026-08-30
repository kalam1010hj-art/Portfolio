import styles from "../modules/Hero.module.css";

function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.grid}></div>
      <div className={styles.glow}></div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.eyebrow}>
            <span className={styles.statusDot}></span>
            Available for opportunities
          </div>

          <h1 className={styles.title}>
            I build digital
            <span> experiences </span>
            that matter.
          </h1>

          <p className={styles.description}>
            I'm Azad, a full-stack developer focused on building
            modern, reliable and user-friendly web applications
            with React and Django.
          </p>

          <div className={styles.actions}>
            <a href="#projects" className={styles.primaryButton}>
              View my work
              <span>↗</span>
            </a>

            <a href="#contact" className={styles.secondaryButton}>
              Let's talk
            </a>
          </div>

          <div className={styles.techStack}>
            <span>Currently working with</span>

            <div className={styles.techList}>
              <span>React</span>
              <span>•</span>
              <span>Django</span>
              <span>•</span>
              <span>DRF</span>
              <span>•</span>
              <span>PostgreSQL</span>
            </div>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.visualGlow}></div>

          <div className={styles.codeCard}>
            <div className={styles.cardHeader}>
              <div className={styles.windowDots}>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span className={styles.fileName}>
                developer.js
              </span>
            </div>

            <div className={styles.code}>
              <div>
                <span className={styles.lineNumber}>01</span>
                <span className={styles.keyword}>const</span>{" "}
                <span className={styles.variable}>developer</span>{" "}
                = {"{"}
              </div>

              <div>
                <span className={styles.lineNumber}>02</span>
                <span className={styles.property}>name</span>:{" "}
                <span className={styles.string}>"Azad"</span>,
              </div>

              <div>
                <span className={styles.lineNumber}>03</span>
                <span className={styles.property}>role</span>:{" "}
                <span className={styles.string}>
                  "Full Stack Developer"
                </span>,
              </div>

              <div>
                <span className={styles.lineNumber}>04</span>
                <span className={styles.property}>frontend</span>:{" "}
                <span className={styles.string}>"React"</span>,
              </div>

              <div>
                <span className={styles.lineNumber}>05</span>
                <span className={styles.property}>backend</span>:{" "}
                <span className={styles.string}>"Django"</span>,
              </div>

              <div>
                <span className={styles.lineNumber}>06</span>
                <span className={styles.property}>database</span>:{" "}
                <span className={styles.string}>"PostgreSQL"</span>
              </div>

              <div>
                <span className={styles.lineNumber}>07</span>
                {"};"}
              </div>
            </div>

            <div className={styles.cardFooter}>
              <span className={styles.footerIndicator}></span>
              Building something meaningful
            </div>
          </div>

          <div className={styles.floatingCard}>
            <span className={styles.floatingIcon}>✦</span>

            <div>
              <strong>Clean code</strong>
              <span>Thoughtful solutions</span>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className={styles.scrollIndicator}>
        <span>Scroll to explore</span>
        <span className={styles.scrollArrow}>↓</span>
      </a>
    </section>
  );
}

export default Hero;

