import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { BlogPost } from "@/types/blog";

import styles from "./BlogCard.module.css";

type BlogCardProps = {
  post: BlogPost;
};

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className={styles.card}>
      <Link href={`/blog/${post.slug}`} className={styles.imageWrapper}>
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={styles.image}
        />

        <div className={styles.overlay}>
          <ArrowUpRight size={22} />
        </div>
      </Link>

      <div className={styles.content}>
        <div className={styles.meta}>
          <span>{post.category}</span>

          <span>{post.readingTime}</span>
        </div>

        <Link href={`/blog/${post.slug}`} className={styles.title}>
          {post.title}
        </Link>

        <p className={styles.excerpt}>{post.excerpt}</p>

        <div className={styles.footer}>
          <span>{post.publishedAt}</span>

          <Link href={`/blog/${post.slug}`} className={styles.readMore}>
            Read Article
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
