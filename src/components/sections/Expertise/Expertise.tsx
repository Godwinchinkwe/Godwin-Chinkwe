import {
  Code2,
  Database,
  Gauge,
  Layers3,
  ArrowUpRight,
} from "lucide-react";

import styles from "./Expertise.module.css";

const expertise = [
  {
    number: "01",
    icon: Code2,
    title: "Frontend Development",
    description:
      "Building responsive, accessible, and high-performance interfaces that deliver excellent user experiences across devices.",
    technologies: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
    ],
  },
  {
    number: "02",
    icon: Database,
    title: "Backend Development",
    description:
      "Developing scalable backend systems, APIs, and database architectures that power reliable digital products.",
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "REST APIs",
      "SQL",
    ],
  },
  {
    number: "03",
    icon: Layers3,
    title: "UI & Motion",
    description:
      "Creating polished interfaces with thoughtful interactions, smooth animations, and modern visual design principles.",
    technologies: [
      "Responsive Design",
      "Framer Motion",
      "Animations",
      "UI Systems",
      "Accessibility",
    ],
  },
  {
    number: "04",
    icon: Gauge,
    title: "Performance & SEO",
    description:
      "Optimizing websites for speed, search visibility, technical performance, and better overall user experiences.",
    technologies: [
      "Technical SEO",
      "Core Web Vitals",
      "Vercel",
      "Google Search Console",
      "Performance",
    ],
  },
];

export default function Expertise() {
  return (
    <section
      id="expertise"
      className={styles.expertise}
    >
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>

          <div>
            <span className={styles.eyebrow}>
              Expertise
            </span>

            <h2 className={styles.title}>
              Turning ideas into
              <span>digital products.</span>
            </h2>
          </div>

          <p className={styles.intro}>
            I combine engineering, design, and
            business thinking to build digital
            experiences that are functional,
            scalable, and built to last.
          </p>

        </div>

        {/* Expertise Grid */}
        <div className={styles.grid}>

          {expertise.map((item) => {

            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className={styles.card}
              >

                {/* Card Header */}
                <div className={styles.cardTop}>

                  <span className={styles.number}>
                    {item.number}
                  </span>

                  <div className={styles.icon}>
                    <Icon size={22} />
                  </div>

                </div>

                {/* Content */}
                <div className={styles.cardContent}>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                </div>

                {/* Technologies */}
                <div className={styles.technologies}>

                  {item.technologies.map(
                    (technology) => (
                      <span
                        key={technology}
                        className={
                          styles.technology
                        }
                      >
                        {technology}
                      </span>
                    )
                  )}

                </div>

                {/* Arrow */}
                <div className={styles.arrow}>
                  <ArrowUpRight size={20} />
                </div>

              </article>
            );

          })}

        </div>

      </div>
    </section>
  );
}