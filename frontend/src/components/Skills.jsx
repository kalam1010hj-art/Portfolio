

import styles from "../modules/Skills.module.css";

const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    description: "Building clean and responsive user interfaces.",
    skills: ["React", "JavaScript", "HTML5", "CSS3"],
  },
  {
    number: "02",
    title: "Backend",
    description: "Designing APIs and reliable backend systems.",
    skills: ["Python", "Django", "Django REST Framework"],
  },
  {
    number: "03",
    title: "Database",
    description: "Working with structured data and relational databases.",
    skills: ["MySQL", "SQL"],
  },
  {
    number: "04",
    title: "Tools & Workflow",
    description: "Managing code and building efficient development workflows.",
    skills: ["Git", "GitHub", "REST APIs", "VS Code"],
  },
];

function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <span className={styles.label}>02 — Skills</span>

          <div className={styles.headingContent}>
            <h2>
              Tools I use to
              <span> build things.</span>
            </h2>

            <p>
              A focused set of technologies I use to design,
              develop and ship full-stack web applications.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className={styles.grid}>
          {skillGroups.map((group) => (
            <article key={group.number} className={styles.card}>

              <div className={styles.cardTop}>
                <span className={styles.number}>
                  {group.number}
                </span>

                <span className={styles.arrow}>↗</span>
              </div>

              <div className={styles.cardContent}>
                <h3>{group.title}</h3>

                <p>{group.description}</p>
              </div>

              <div className={styles.skillList}>
                {group.skills.map((skill) => (
                  <span key={skill} className={styles.skill}>
                    {skill}
                  </span>
                ))}
              </div>

            </article>
          ))}
        </div>

        {/* Bottom statement */}
        <div className={styles.bottom}>
          <span className={styles.line}></span>

          <p>
            Always learning. Always building.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Skills;
