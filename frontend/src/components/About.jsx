
import styles from "../modules/About.module.css";

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>

        {/* Section heading */}
        <div className={styles.heading}>
          <span className={styles.label}>01 — About</span>

          <h2>
            Curious by nature.
            <br />
            <span>Driven to build.</span>
          </h2>
        </div>

        {/* Main content */}
        <div className={styles.content}>

          <div className={styles.intro}>
            <p className={styles.lead}>
              I'm Azad, an engineering student and full-stack
              developer who enjoys turning ideas into useful,
              thoughtful digital experiences.
            </p>

            <p>
              I work primarily with React on the frontend and
              Django REST Framework on the backend. I'm interested
              in building applications that are not only visually
              polished, but also reliable, maintainable and easy
              to use.
            </p>

            <p>
              I'm constantly learning, experimenting with new
              technologies and challenging myself to become a
              better developer with every project I build.
            </p>
          </div>

          {/* Highlights */}
          <div className={styles.highlights}>

            <div className={styles.highlight}>
              <span className={styles.number}>01</span>

              <div>
                <h3>Full Stack</h3>
                <p>
                  Building complete applications from
                  frontend to backend.
                </p>
              </div>
            </div>

            <div className={styles.highlight}>
              <span className={styles.number}>02</span>

              <div>
                <h3>Problem Solver</h3>
                <p>
                  Breaking complex problems into
                  simple solutions.
                </p>
              </div>
            </div>

            <div className={styles.highlight}>
              <span className={styles.number}>03</span>

              <div>
                <h3>Always Learning</h3>
                <p>
                  Continuously improving through
                  projects and experimentation.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom statement */}
        <div className={styles.bottom}>
          <span className={styles.bottomLine}></span>

          <p>
            Currently focused on building meaningful
            full-stack applications.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;

