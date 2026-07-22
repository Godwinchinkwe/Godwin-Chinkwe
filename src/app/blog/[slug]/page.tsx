import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import type {Metadata,} from "next";

import {
  notFound,
} from "next/navigation";



import { blogPosts } from "@/data/blog";

import styles from "./page.module.css";

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPageProps) {
  const { slug } = await params;

  const post = blogPosts.find(
    (item) =>
      item.slug === slug
  );

  if (!post) {
    return {
      title:
        "Article Not Found",
    };
  }

  return {
    title:
      `${post.title} | Godwin`,

    description:
      post.excerpt,

    openGraph: {
      title:
        post.title,

      description:
        post.excerpt,

      images: [
        {
          url:
            post.image,

          width:
            1200,

          height:
            630,

          alt:
            post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({
  params,
}: BlogPageProps) {

  const { slug } = await params;

  const post =
    blogPosts.find(
      (item) =>
        item.slug === slug
    );

  if (!post) {
    return (
      <main
        className={
          styles.notFound
        }
      >
        <h1>
          Article Not Found
        </h1>

        <Link href="/blog">
          Back to Blog
        </Link>
      </main>
    );
  }

  const currentIndex =
    blogPosts.findIndex(
      (item) =>
        item.slug === slug
    );

  const previousPost =
    blogPosts[
      currentIndex - 1
    ];

  const nextPost =
    blogPosts[
      currentIndex + 1
    ];

  const relatedPosts =
    blogPosts
      .filter(
        (item) =>
          item.slug !==
          post.slug &&
          item.category ===
            post.category
      )
      .slice(0, 2);

  return (
    <main className={styles.page}>

      {/* Article Header */}

      <header className={styles.header}>

        <div className={styles.container}>

          <Link
            href="/blog"
            className={
              styles.backLink
            }
          >
            <ArrowLeft
              size={18}
            />

            Back to Blog
          </Link>

          <div className={styles.meta}>

            <span>
              {post.category}
            </span>

            <span>
              {post.readingTime}
            </span>

          </div>

          <h1>
            {post.title}
          </h1>

          <p
            className={
              styles.excerpt
            }
          >
            {post.excerpt}
          </p>

          <div
            className={
              styles.author
            }
          >

            <span>
              By {post.author}
            </span>

            <span>
              {post.publishedAt}
            </span>

          </div>

        </div>

      </header>

      {/* Featured Image */}

      <section
        className={
          styles.imageSection
        }
      >

        <div
          className={
            styles.container
          }
        >

          <div
            className={
              styles.imageWrapper
            }
          >

            <Image
              src={
                post.image
              }
              alt={
                post.title
              }
              fill
              priority
              sizes="100vw"
              className={
                styles.image
              }
            />

          </div>

        </div>

      </section>

      {/* Article */}

      <article
        className={
          styles.article
        }
      >

        <div
          className={
            styles.articleContainer
          }
        >

          <div
            className={
              styles.articleContent
            }
          >

            {post.sections.map(
              (
                section
              ) => (

                <section
                  key={
                    section.heading
                  }
                  className={
                    styles.articleSection
                  }
                >

                  <h2>
                    {
                      section.heading
                    }
                  </h2>

                  {section.paragraphs.map(
                    (
                      paragraph
                    ) => (

                      <p
                        key={
                          paragraph
                        }
                      >
                        {
                          paragraph
                        }
                      </p>

                    )
                  )}

                </section>

              )
            )}

          </div>

          {/* Tags */}

          <div
            className={
              styles.tags
            }
          >

            <span>
              Tags
            </span>

            <div>

              {post.tags.map(
                (tag) => (

                  <span
                    key={tag}
                  >
                    {tag}
                  </span>

                )
              )}

            </div>

          </div>

        </div>

      </article>

      {/* Related Posts */}

      {relatedPosts.length > 0 && (

        <section
          className={
            styles.related
          }
        >

          <div
            className={
              styles.container
            }
          >

            <div
              className={
                styles.relatedHeader
              }
            >

              <span>
                Continue Reading
              </span>

              <h2>
                Related Articles
              </h2>

            </div>

            <div
              className={
                styles.relatedGrid
              }
            >

              {relatedPosts.map(
                (relatedPost) => (

                  <Link
                    key={
                      relatedPost.slug
                    }
                    href={
                      `/blog/${relatedPost.slug}`
                    }
                    className={
                      styles.relatedCard
                    }
                  >

                    <span>
                      {
                        relatedPost.category
                      }
                    </span>

                    <h3>
                      {
                        relatedPost.title
                      }
                    </h3>

                    <ArrowUpRight
                      size={20}
                    />

                  </Link>

                )
              )}

            </div>

          </div>

        </section>

      )}

      {/* Previous / Next */}

      <nav
        className={
          styles.postNavigation
        }
      >

        <div
          className={
            styles.container
          }
        >

          {previousPost ? (
            <Link
              href={
                `/blog/${previousPost.slug}`
              }
              className={
                styles.navigationLink
              }
            >

              <ArrowLeft
                size={18}
              />

              <div>

                <span>
                  Previous Article
                </span>

                <strong>
                  {
                    previousPost.title
                  }
                </strong>

              </div>

            </Link>
          ) : (
            <div />
          )}

          {nextPost ? (
            <Link
              href={
                `/blog/${nextPost.slug}`
              }
              className={
                styles.navigationLink
              }
            >

              <div>

                <span>
                  Next Article
                </span>

                <strong>
                  {
                    nextPost.title
                  }
                </strong>

              </div>

              <ArrowRight
                size={18}
              />

            </Link>
          ) : (
            <div />
          )}

        </div>

      </nav>

    </main>
  );
}