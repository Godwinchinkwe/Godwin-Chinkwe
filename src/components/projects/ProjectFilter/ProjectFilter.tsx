"use client";

import type { ProjectCategory } from "@/types/project";

import styles from "./ProjectFilter.module.css";

type ProjectFilterProps = {
  activeCategory: ProjectCategory;
  onCategoryChange: (
    category: ProjectCategory
  ) => void;
};

const categories: ProjectCategory[] = [
  "All",
  "Frontend",
  "Full-Stack",
  "Backend",
];

export default function ProjectFilter({
  activeCategory,
  onCategoryChange,
}: ProjectFilterProps) {
  return (
    <div className={styles.filter}>

      {categories.map((category) => (

        <button
          key={category}
          type="button"
          className={
            activeCategory === category
              ? styles.active
              : ""
          }
          onClick={() =>
            onCategoryChange(category)
          }
        >
          {category}
        </button>

      ))}

    </div>
  );
}