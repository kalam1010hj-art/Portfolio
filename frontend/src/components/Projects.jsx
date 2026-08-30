import styles from "../modules/Projects.module.css";
import { useEffect, useState } from "react";
import getProjects from "../services/projectServices";
import Loading from "./Loading";
// const projects = [
//   {
//     id: 1,
//     number: "01",
//     title: "E-Commerce Platform",
//     description:
//       "A full-stack e-commerce application with product management, authentication, cart and order functionality.",
//     technologies: ["React", "Django", "DRF", "MySQL"],
//     github: "#",
//     live: "#",
//     featured: true,
//   },
//   {
//     id: 2,
//     number: "02",
//     title: "Project Two",
//     description:
//       "A modern web application focused on solving a real-world problem with a clean and intuitive user experience.",
//     technologies: ["React", "DRF", "MySQL"],
//     github: "#",
//     live: "#",
//     featured: false,
//   },
//   {
//     id: 3,
//     number: "03",
//     title: "Project Three",
//     description:
//       "A full-stack application designed with reusable components, REST APIs and a structured backend architecture.",
//     technologies: ["React", "Django", "MySQL"],
//     github: "#",
//     live: "#",
//     featured: false,
//   },
// ];

function Projects() {
  let [projects, setProjects] = useState([]);
  let [isLoading, setLoading] = useState(true);
  let [error, setError] = useState(false);

  useEffect(() => {
    getProjects()
      .then((data) => {
        console.log(data);
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setError(true);
      });
  }, []);

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.label}>03 — Projects</span>

          <div className={styles.headingContent}>
            <h2>
              Things I've
              <span> built.</span>
            </h2>

            <p>
              A selection of projects where I turn ideas into functional,
              reliable and thoughtful digital experiences.
            </p>
          </div>
        </div>

        {/* Projects */}
        <div className={styles.projectList}>
          {/* ======= Handling Network errors =========== */}
          {!isLoading && error && (
            <div className={styles.errorState}>
              <div className={styles.errorIcon}>!</div>

              <div className={styles.errorContent}>
                <span className={styles.errorLabel}>Unable to connect</span>

                <h3>Projects couldn't be loaded.</h3>

                <p>
                  We couldn't reach the server right now. Please check your
                  internet connection and try again.
                </p>

                <button
                  className={styles.retryButton}
                  onClick={() => window.location.reload()}
                >
                  Try again
                  <span>↗</span>
                </button>
              </div>
            </div>
          )}

          {/* Handling Loading */}
          {isLoading && <Loading />}

          {/* handling projects */}
          {projects.length > 0
            ? projects.map((project) => (
                <article
                  key={project.id}
                  className={`${styles.project} ${
                    project.featured ? styles.featured : ""
                  }`}
                >
                  {/* Project number */}
                  <div className={styles.projectNumber}>{project.number}</div>

                  {/* Project content */}
                  <div className={styles.projectContent}>
                    <div className={styles.projectTop}>
                      <div>
                        <span className={styles.projectType}>
                          {project.featured
                            ? "Featured project"
                            : "Full-stack application"}
                        </span>

                        <h3>{project.title}</h3>
                      </div>

                      <span className={styles.projectArrow}>↗</span>
                    </div>

                    <p className={styles.description}>{project.description}</p>

                    {/* Technologies */}
                    {/* <div className={styles.technologies}>
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div> */}

                    {/* Links */}
                    <div className={styles.links}>
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub
                        <span>↗</span>
                      </a>

                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo
                        <span>↗</span>
                      </a>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={styles.visual}>
                    <div className={styles.visualGrid}></div>

                    <div className={styles.visualWindow}>
                      <div className={styles.windowHeader}>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>

                      <div className={styles.visualContent}>
                        <div className={styles.visualLine}></div>
                        <div className={styles.visualLine}></div>
                        <div className={styles.visualLineShort}></div>

                        <div className={styles.visualCards}>
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))
            : !isLoading &&
              !error && (
                <div className={styles.emptyState}>
                  <div className={styles.emptyNumber}>00</div>

                  <div className={styles.emptyContent}>
                    <span className={styles.emptyLabel}>Projects</span>

                    <h3>Nothing here yet.</h3>

                    <p>
                      I'm currently working on new ideas and projects. Check
                      back soon to see what I've been building.
                    </p>
                  </div>

                  <div className={styles.emptyArrow}>↗</div>
                </div>
              )}
        </div>

        {/* Bottom */}
        <div className={styles.bottom}>
          <span className={styles.line}></span>

          <p>More projects coming soon.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
