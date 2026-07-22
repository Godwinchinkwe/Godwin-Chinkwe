"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { ProjectCategory } from "@/types/project";

import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard/ProjectCard";
import ProjectFilter from "@/components/projects/ProjectFilter/ProjectFilter";
import styles from "./Projects.module.css";
export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        {/* Header */}

        <div className={styles.header}>
          <div>
            <span className={styles.eyebrow}>Selected Work</span>

            <h2 className={styles.title}>
              Projects I&apos;ve
              <span>worked on.</span>
            </h2>
          </div>

          <p className={styles.description}>
            A selection of projects that demonstrate my approach to design,
            development, and problem solving.
          </p>
        </div>

        {/* Filter */}

        <ProjectFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Projects */}

        <div className={styles.grid}>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {/* View All */}

        <div className={styles.footer}>
          <Link href="/projects" className={styles.viewAll}>
            View all projects
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
