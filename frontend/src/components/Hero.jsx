import styles from "../modules/Hero.module.css";
import { ArrowUpRight} from "lucide-react";
import { FaGithubSquare } from "react-icons/fa";
import { RiFolderDownloadFill } from "react-icons/ri";

function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.backgroundGlow}></div>

      <div className={styles.container}>

        {/* LEFT CONTENT */}
        <div className={styles.content}>

          <div className={styles.status}>
            <span className={styles.statusDot}></span>
            Available for opportunities
          </div>

          <p className={styles.greeting}>
            Hello, I'm
          </p>

          <h1 className={styles.name}>
            Abdul Kalam <span>Azad.</span>
          </h1>

          <h2 className={styles.role}>
            Full-Stack Developer
          </h2>

          <p className={styles.description}>
            I build modern, scalable, and user-friendly web
            applications using React, Django, and REST APIs.
            I enjoy turning ideas into real-world digital
            solutions that solve meaningful problems.
          </p>

          <div className={styles.actions}>

            <a href="#projects" className={styles.primaryButton}>
              View My Work
              <ArrowUpRight size={18} />
            </a>

            <a
              href="/resume.pdf"
              download
              className={styles.secondaryButton}
            >
              Download Resume
           < RiFolderDownloadFill />
            </a>

          </div>

          <div className={styles.socials}>
            <a
              href="https://github.com/kalam1010hj-art"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithubSquare size={21} />
            </a>
          </div>

        </div>

        {/* RIGHT PROFILE IMAGE */}
        <div className={styles.imageSection}>

          <div className={styles.imageGlow}></div>

          <div className={styles.imageFrame}>
            <img
              src="/images/profile.png"
              alt="Abdul Kalam Azad - Full Stack Developer"
              className={styles.profileImage}
            />
          </div>

          <div className={styles.floatingBadge}>
            <span className={styles.badgeDot}></span>
            Open to Work
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;