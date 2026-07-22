import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { FaGithub } from "react-icons/fa";

import { projects } from "@/data/projects";

import styles from "./page.module.css";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className={styles.notFound}>
        <h1>Project Not Found</h1>

        <Link href="/projects">Back to Projects</Link>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      {/* Back Navigation */}

      <div className={styles.container}>
        <Link href="/projects" className={styles.backLink}>
          <ArrowLeft size={18} />
          Back to Projects
        </Link>
      </div>

      {/* Hero */}

      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.category}>{project.category}</span>

          <h1 className={styles.title}>{project.title}</h1>

          <p className={styles.description}>{project.description}</p>

          <div className={styles.actions}>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryButton}
              >
                View Live Project
                <ArrowUpRight size={18} />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryButton}
              >
                View Source
                <FaGithub size={18} />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Project Image */}

      <section className={styles.imageSection}>
        <div className={styles.container}>
          <div className={styles.imageWrapper}>
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              sizes="100vw"
              className={styles.image}
            />
          </div>
        </div>
      </section>

      {/* Project Information */}

      <section className={styles.details}>
        <div className={styles.container}>
          <div className={styles.metaGrid}>
            <div>
              <span>Year</span>

              <strong>{project.year}</strong>
            </div>

            <div>
              <span>Role</span>

              <strong>{project.role}</strong>
            </div>

            <div>
              <span>Category</span>

              <strong>{project.category}</strong>
            </div>
          </div>

          {/* Challenge */}

          <div className={styles.contentGrid}>
            <div>
              <span className={styles.label}>The Challenge</span>

              <h2>Understanding the problem.</h2>
            </div>

            <p>{project.challenge}</p>
          </div>

          {/* Solution */}

          <div className={styles.contentGrid}>
            <div>
              <span className={styles.label}>The Solution</span>

              <h2>Building the right experience.</h2>
            </div>

            <p>{project.solution}</p>
          </div>

          {/* Features */}

          <div className={styles.featuresSection}>
            <span className={styles.label}>Key Features</span>

            <div className={styles.features}>
              {project.features.map((feature) => (
                <div key={feature} className={styles.feature}>
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}

          <div className={styles.techSection}>
            <span className={styles.label}>Technologies</span>

            <div className={styles.technologies}>
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
