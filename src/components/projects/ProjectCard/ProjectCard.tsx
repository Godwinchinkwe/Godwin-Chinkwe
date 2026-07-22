import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import type { Project } from "@/types/project";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.card} data-cursor="project">
      {/* Image */}
      <Link href={`/projects/${project.slug}`} className={styles.imageWrapper}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={styles.image}
        />

        <div className={styles.overlay}>
          <span>View Case Study</span>

          <ArrowUpRight size={20} />
        </div>
      </Link>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.top}>
          <span className={styles.category}>{project.category}</span>

          <div className={styles.links}>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
              >
                <FaGithub size={18} />
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} live`}
              >
                <ArrowUpRight size={18} />
              </a>
            )}
          </div>
        </div>

        <Link href={`/projects/${project.slug}`} className={styles.title}>
          {project.title}
        </Link>

        <p className={styles.description}>{project.shortDescription}</p>

        {/* Technologies */}
        <div className={styles.technologies}>
          {project.technologies.map((technology) => (
            <span key={technology} className={styles.technology}>
              {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
