import type { BlogPost } from "@/types/blog";


export const blogPosts: BlogPost[] = [
  {
    slug:
      "how-to-build-modern-websites",

    title:
      "How I Approach Building Modern Websites",

    excerpt:
      "A practical look at my process for turning an idea into a fast, responsive, and scalable web experience.",

    content:
      "Building a modern website requires more than writing code. It requires understanding the problem, defining the user experience, choosing the right technology, and creating a maintainable architecture.",

    category:
      "Web Development",

    author:
      "Godwin",

    publishedAt:
      "2026-07-01",

    readingTime:
      "5 min read",

    image:
      "/images/blog/modern-websites.jpg",

    featured:
      true,

    tags: [
      "Web Development",
      "Next.js",
      "React",
      "Frontend",
    ],

    sections: [
      {
        heading:
          "Start With the Problem",

        paragraphs: [
          "Before writing any code, I first try to understand the problem the website is supposed to solve. A website should have a clear purpose and a clear audience.",

          "Understanding the target users helps shape everything else, from the page structure to the visual design and the technical architecture.",
        ],
      },

      {
        heading:
          "Choose the Right Technology",

        paragraphs: [
          "The technology should support the goals of the project rather than simply being chosen because it is popular.",

          "For modern applications, I often work with technologies such as React and Next.js because they provide a strong foundation for building fast and scalable web experiences.",
        ],
      },

      {
        heading:
          "Focus on User Experience",

        paragraphs: [
          "A technically impressive website can still fail if it is difficult to use.",

          "I focus on clear navigation, responsive layouts, intuitive interactions, accessibility, and fast page performance.",
        ],
      },

      {
        heading:
          "Build for the Future",

        paragraphs: [
          "A good website should not only work today. It should also be structured in a way that makes future improvements easier.",

          "Reusable components, clear architecture, organized data, and maintainable code all contribute to a project that can evolve over time.",
        ],
      },

      {
        heading:
          "Final Thoughts",

        paragraphs: [
          "My approach to web development is centered around solving real problems with thoughtful technology.",

          "The goal is always to create digital products that are useful, fast, accessible, and enjoyable to use.",
        ],
      },
    ],
  },

  {
    slug:
      "why-performance-matters",

    title:
      "Why Website Performance Matters",

    excerpt:
      "Performance isn't just a technical metric. It directly affects user experience, engagement, and business results.",

    content:
      "A slow website creates friction. Users expect websites to load quickly and respond immediately to their actions.",

    category:
      "Performance",

    author:
      "Godwin",

    publishedAt:
      "2026-06-20",

    readingTime:
      "4 min read",

    image:
      "/images/blog/performance.jpg",

    tags: [
      "Performance",
      "SEO",
      "Core Web Vitals",
    ],

    sections: [
      {
        heading:
          "Performance Is Part of User Experience",

        paragraphs: [
          "Website performance directly affects how users perceive a product.",

          "When pages load quickly and interactions feel responsive, visitors are more likely to continue exploring the website.",
        ],
      },

      {
        heading:
          "Performance and SEO",

        paragraphs: [
          "Search engines consider a variety of signals when evaluating web pages. Technical performance is therefore an important part of a broader SEO strategy.",

          "Optimizing images, reducing unnecessary JavaScript, and improving loading performance can contribute to a better experience for both users and search engines.",
        ],
      },

      {
        heading:
          "Building Performance Into the Process",

        paragraphs: [
          "Performance should not be treated as something to fix at the end of a project.",

          "It is better to consider performance from the beginning by choosing appropriate technologies, optimizing assets, and monitoring the application as it develops.",
        ],
      },
    ],
  },

  {
    slug:
      "learning-full-stack-development",

    title:
      "My Journey Into Full-Stack Development",

    excerpt:
      "Why I decided to move beyond frontend development and learn how the entire application works.",

    content:
      "Learning full-stack development changed the way I think about building products.",

    category:
      "Career",

    author:
      "Godwin",

    publishedAt:
      "2026-06-10",

    readingTime:
      "6 min read",

    image:
      "/images/blog/full-stack.jpg",

    tags: [
      "Career",
      "JavaScript",
      "Node.js",
      "MongoDB",
    ],

    sections: [
      {
        heading:
          "Starting With Frontend Development",

        paragraphs: [
          "My journey started with frontend development and learning how to create interfaces that users could interact with.",

          "Working with HTML, CSS, JavaScript, and React gave me a strong foundation for understanding the browser and modern web interfaces.",
        ],
      },

      {
        heading:
          "Why I Learned Backend Development",

        paragraphs: [
          "As I worked on more complex projects, I wanted to understand what happens behind the interface.",

          "Learning Node.js, Express, databases, and APIs helped me understand how complete applications work from frontend to backend.",
        ],
      },

      {
        heading:
          "The Advantage of Full-Stack Thinking",

        paragraphs: [
          "Understanding both frontend and backend development makes it easier to make better technical decisions.",

          "It also helps when working with teams because you can understand how different parts of a product connect.",
        ],
      },
    ],
  },
];