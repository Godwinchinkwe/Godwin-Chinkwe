export type BlogPost = {
  slug: string;

  title: string;

  excerpt: string;

  content: string;

  category: string;

  author: string;

  publishedAt: string;

  readingTime: string;

  image: string;

  featured?: boolean;

  tags: string[];

  sections: BlogSection[];
};

export type BlogSection = {
  heading: string;

  paragraphs: string[];
};