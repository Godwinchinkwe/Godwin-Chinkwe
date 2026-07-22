import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { blogPosts } from "@/data/blog";

import BlogCard from "@/components/blog/BlogCard/BlogCard";

import styles from "./page.module.css";

export const metadata = {
  title: "Blog | Godwin — Full-Stack Developer",

  description:
    "Articles about web development, frontend engineering, backend development, performance, and my journey as a developer.",
};

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured);

  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <main className={styles.page}>
      {/* Header */}

      <section className={styles.header}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>Journal</span>

          <h1 className={styles.title}>
            Thoughts,
            <span>ideas & insights.</span>
          </h1>

          <p className={styles.description}>
            I write about technology, development, design, performance, and
            lessons I've learned while building digital products.
          </p>
        </div>
      </section>

      {/* Featured Article */}

      {featuredPost && (
        <section className={styles.featuredSection}>
          <div className={styles.container}>
            <Link
              href={`/blog/${featuredPost.slug}`}
              className={styles.featured}
            >
              <div className={styles.featuredImage}>
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  priority
                  sizes="50vw"
                  className={styles.image}
                />
              </div>

              <div className={styles.featuredContent}>
                <span className={styles.featuredLabel}>Featured Article</span>

                <h2>{featuredPost.title}</h2>

                <p>{featuredPost.excerpt}</p>

                <span className={styles.featuredLink}>
                  Read Article
                  <ArrowUpRight size={18} />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Articles */}

      <section className={styles.articles}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span>Latest Articles</span>

            <h2>From the blog</h2>
          </div>

          <div className={styles.grid}>
            {regularPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
