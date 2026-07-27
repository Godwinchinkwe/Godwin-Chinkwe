import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "airport-golden-tulip-hotel",
    title: "Airport Golden Tulip Hotel",

    shortDescription:
      "A modern hotel website designed to showcase rooms, services, and drive direct bookings.",

    description:
      "A premium hotel website designed to provide travelers with a seamless digital experience while helping the hotel increase visibility and encourage direct booking inquiries.",

    category: "Full-Stack",

    technologies: ["Next.js", "React", "Node.js", "Express", "MongoDB"],

    image: "/images/projects/airport-golden-tulip.png",

    liveUrl: "https://airportgoldentuliphotel.com",

    githubUrl: "",

    featured: true,

    year: "2026",

    role: "Frontend & Full-Stack Developer",

    challenge:
      "The goal was to create a professional digital presence for the hotel that could showcase its rooms, amenities, and services while making it easier for potential guests to discover the hotel and initiate booking inquiries.",

    solution:
      "I built a responsive Next.js application with a modern visual design, structured content, optimized metadata, and a backend architecture capable of handling booking-related functionality.",

    features: [
      "Responsive hotel website",
      "Room and accommodation pages",
      "Booking inquiry functionality",
      "SEO optimized page structure",
      "Mobile-first design",
      "Performance optimization",
    ],

    results: [
      "Improved online presence",
      "Professional digital brand experience",
      "Mobile-friendly customer journey",
      "Structured foundation for direct bookings",
    ],
  },

  {
    slug: "geeluxe-store",

    title: "Geeluxe Store",

    shortDescription:
      "A luxury e-commerce experience for watches and fashion accessories.",

    description:
      "A modern e-commerce concept focused on presenting luxury watches and accessories through a clean and visually engaging shopping experience.",

    category: "Frontend",

    technologies: ["React", "JavaScript", "CSS", "Responsive Design"],

    image: "/images/projects/geeluxe-store.jpeg",

    liveUrl: "https://geeluxe.store",

    githubUrl: "",

    featured: true,

    year: "2026",

    role: "Frontend Developer",

    challenge:
      "The goal was to create an online shopping experience that presents fashion accessories in a premium and visually appealing way while remaining easy to navigate across mobile and desktop devices.",

    solution:
      "I developed a responsive frontend experience focused on clean product presentation, intuitive navigation, and a design system that emphasizes the luxury positioning of the brand.",

    features: [
      "Responsive product layouts",
      "Luxury-focused visual design",
      "Product presentation",
      "Mobile-first experience",
      "Reusable UI components",
    ],

    results: [
      "Premium visual identity",
      "Responsive shopping experience",
      "Scalable frontend structure",
    ],
  },

  {
    slug: "business-platform",

    title: "Business Management Platform",

    shortDescription:
      "A scalable web application designed to streamline business operations.",

    description:
      "A full-stack platform concept designed to help businesses manage operational workflows, data, and customer interactions through a centralized system.",

    category: "Full-Stack",

    technologies: ["Next.js", "Node.js", "Express", "MongoDB", "REST API"],

    image: "/images/projects/business-platform.jpeg",

    liveUrl: "",

    githubUrl: "",

    featured: true,

    year: "2026",

    role: "Full-Stack Developer",

    challenge:
      "The project required a scalable architecture capable of supporting multiple business workflows while keeping the user experience simple and intuitive.",

    solution:
      "I designed a full-stack architecture separating the frontend interface from backend services and database operations, creating a foundation that could scale as the application grows.",

    features: [
      "Modern dashboard interface",
      "REST API architecture",
      "Database integration",
      "Responsive UI",
      "Scalable application structure",
    ],

    results: [
      "Centralized business workflows",
      "Scalable technical architecture",
      "Improved operational organization",
    ],
  },
];
