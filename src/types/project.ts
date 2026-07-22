export type ProjectCategory = "All" | "Frontend" | "Full-Stack" | "Backend";

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;

  category: Exclude<ProjectCategory, "All">;

  technologies: string[];

  image: string;

  liveUrl?: string;
  githubUrl?: string;

  featured?: boolean;

  year: string;

  role: string;

  challenge: string;

  solution: string;

  features: string[];

  results: string[];
};
