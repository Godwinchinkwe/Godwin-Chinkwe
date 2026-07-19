import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Gauge,
  Layers3,
  Sparkles,
} from "lucide-react";

import styles from "./About.module.css";

const strengths = [
  {
    icon: Code2,
    title: "Clean Development",
    description:
      "Writing maintainable, scalable, and well-structured code built for long-term growth.",
  },
  {
    icon: Gauge,
    title: "Performance Focused",
    description:
      "Building fast experiences with performance, accessibility, and user experience in mind.",
  },
  {
    icon: Layers3,
    title: "Full-Stack Thinking",
    description:
      "Understanding the complete product lifecycle from frontend interfaces to backend APIs.",
  },
  {
    icon: Sparkles,
    title: "Modern Experiences",
    description:
      "Combining thoughtful design with modern technologies to create engaging digital products.",
  },
];

const stats = [
  {
    value: "20+",
    label: "Projects Built",
  },
  {
    value: "10+",
    label: "Technologies",
  },
  {
    value: "100%",
    label: "Responsive",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className={styles.about}
    >
      <div className={styles.container}>

        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>
            About Me
          </span>

          <h2 className={styles.title}>
            I build digital products
            <span>
              that solve real problems.
            </span>
          </h2>
        </div>

        {/* Main Content */}
        <div className={styles.content}>

          {/* Introduction */}
          <div className={styles.introduction}>

            <p className={styles.lead}>
              I&apos;m a Frontend Engineer and
              Full-Stack Developer focused on
              building modern, scalable, and
              high-performance web experiences.
            </p>

            <p className={styles.text}>
              My approach combines clean engineering,
              thoughtful design, and business thinking.
              I enjoy transforming ideas into digital
              products that are fast, intuitive, and
              built to deliver real value.
            </p>

            <p className={styles.text}>
              Whether I&apos;m developing a business
              website, building a booking platform,
              or creating a full-stack application,
              I focus on creating solutions that are
              reliable, maintainable, and enjoyable
              to use.
            </p>

            <Link
              href="#projects"
              className={styles.link}
            >
              Explore my work

              <ArrowRight size={18} />
            </Link>

          </div>

          {/* Strengths */}
          <div className={styles.strengths}>

            {strengths.map((strength) => {

              const Icon = strength.icon;

              return (
                <div
                  key={strength.title}
                  className={styles.strengthCard}
                >

                  <div className={styles.iconWrapper}>
                    <Icon size={21} />
                  </div>

                  <div>
                    <h3>
                      {strength.title}
                    </h3>

                    <p>
                      {strength.description}
                    </p>
                  </div>

                </div>
              );

            })}

          </div>

        </div>

        {/* Statistics */}
        <div className={styles.stats}>

          {stats.map((stat) => (
            <div
              key={stat.label}
              className={styles.stat}
            >
              <span className={styles.statValue}>
                {stat.value}
              </span>

              <span className={styles.statLabel}>
                {stat.label}
              </span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}