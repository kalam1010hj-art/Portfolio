import { useEffect, useState } from "react";
import styles from "../modules/Projects.module.css";

import getProjects from "../services/projectServices";
import Loading from "./Loading";

// Project screenshot component
function ProjectImage({ project }) {
  const [imageError, setImageError] = useState(false);

  // Use backend image if available.
  // Otherwise load from React's public folder.
  const imageUrl =project.image;

  useEffect(() => {
    setImageError(false);
  }, [imageUrl]);

  return (
    <div className={styles.preview}>
      <div className={styles.browser}>
        <div className={styles.browserHeader}>
          <div className={styles.browserDots}>
            <span />
            <span />
            <span />
          </div>

          <span className={styles.browserLabel}>
            Project preview
          </span>
        </div>

        <div className={styles.imageContainer}>
          {!imageError ? (
            <img
              src={imageUrl}
              alt={`${project.title} application screenshot`}
              className={styles.projectImage}
              loading="lazy"
              decoding="async"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className={styles.imageFallback}>
              <span>PROJECT PREVIEW</span>
              <h4>{project.title}</h4>
              {/* <p>Screenshot coming soon</p> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    let active = true;

    getProjects()
      .then((data) => {
        if (!active) return;

        const projectData = Array.isArray(data)
          ? data
          : data?.results || [];

        setProjects(projectData);
        setError(false);
      })
      .catch((err) => {
        if (!active) return;

        console.error(err);
        setError(true);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [retryCount]);

  const handleRetry = () => {
    setLoading(true);
    setError(false);
    setRetryCount((count) => count + 1);
  };

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>

        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.sectionIndex}>
            <span>03 / SELECTED WORK</span>
          </div>

          <div className={styles.headerContent}>
            <h2>
              Selected <span>projects.</span>
            </h2>

            <p>
              A collection of applications I've designed and
              developed, focusing on functionality, performance,
              and practical problem-solving.
            </p>
          </div>
        </div>

        {/* Loading */}
        {isLoading && (
          <div className={styles.stateContainer}>
            <Loading />
          </div>
        )}

        {/* Error */}
        {!isLoading && error && (
          <div className={styles.errorState}>
            <span className={styles.stateLabel}>
              SOMETHING WENT WRONG
            </span>

            <h3>Unable to load projects.</h3>

            <p>
              The projects couldn't be retrieved right now.
              Please try again.
            </p>

            <button
              className={styles.retryButton}
              onClick={handleRetry}
            >
              Try again <span>↗</span>
            </button>
          </div>
        )}

        {/* Projects */}
        {!isLoading && !error && projects.length > 0 && (
          <div className={styles.projectList}>
            {projects.map((project, index) => {
              const technologies = Array.isArray(
                project.technologies
              )
                ? project.technologies
                : [];

              return (
                <article
                  key={project.id}
                  className={styles.projectCard}
                >
                  {/* Project Details */}
                  <div className={styles.projectDetails}>

                    <div className={styles.projectMeta}>
                      <span className={styles.projectNumber}>
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {project.featured && (
                        <span className={styles.featuredBadge}>
                          Featured project
                        </span>
                      )}
                    </div>

                    <div className={styles.projectInfo}>
                      <h3>{project.title}</h3>

                      <p className={styles.description}>
                        {project.description}
                      </p>

                      {/* Technologies */}
                      {technologies.length > 0 && (
                        <div className={styles.technologies}>
                          {technologies.map((tech, index) => (
                            <span key={`${tech}-${index}`}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Project Links */}
                    <div className={styles.projectLinks}>
                      {project.live_url && (
                        <a
                          href={project.live_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.primaryLink}
                        >
                          Live Demo
                          <span>↗</span>
                        </a>
                      )}

                      {project.github_url && (
                        <a
                          href={project.github_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.secondaryLink}
                        >
                          GitHub
                          <span>↗</span>
                        </a>
                      )}
                    </div>

                  </div>

                  {/* Project Screenshot */}
                  <ProjectImage project={project} />

                </article>
              );
            })}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && !error && projects.length === 0 && (
          <div className={styles.emptyState}>
            <span>NO PROJECTS AVAILABLE</span>

            <h3>Work in progress.</h3>

            <p>
              New projects will be added here soon.
            </p>
          </div>
        )}

        {/* Footer */}
        {!isLoading && !error && projects.length > 0 && (
          <div className={styles.sectionFooter}>
            <span className={styles.footerLine}></span>

            <p>
              More projects are in development.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}

export default Projects;