import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import "./globals.css";

import ThemeProvider from "@/components/providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar/Navbar";
import AnimatedCursor from "@/components/ui/AnimatedCursor/AnimatedCursor";
import Footer from "@/components/layout/Footer/Footer";
import PersonSchema from "@/components/SEO/PersonSchema";
import WebsiteSchema from "@/components/SEO/WebsiteSchema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

// import type {
//   Metadata,
// } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://yourdomain.com"
  ),

  title: {
    default:
      "Godwin Chinkwe | Full-Stack Developer",
    template:
      "%s | Godwin Chinkwe",
  },

  description:
    "Godwin Chinkwe is a full-stack developer specializing in modern web applications, scalable backend systems, and high-performance digital experiences.",

  keywords: [
    "Godwin Chinkwe",
    "Full-Stack Developer",
    "Backend Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "MongoDB Developer",
    "Web Developer Nigeria",
    "Lagos Web Developer",
  ],

  authors: [
    {
      name:
        "Godwin Chinkwe",
    },
  ],

  creator:
    "Godwin Chinkwe",

  openGraph: {
    type:
      "website",

    locale:
      "en_US",

    url:
      "https://yourdomain.com",

    title:
      "Godwin Chinkwe | Full-Stack Developer",

    description:
      "Full-stack developer building modern, scalable, and high-performance digital experiences.",

    siteName:
      "Godwin Chinkwe",

    images: [
      {
        url:
          "/images/og-image.jpg",

        width:
          1200,

        height:
          630,

        alt:
          "Godwin Chinkwe - Full-Stack Developer",
      },
    ],
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "Godwin Chinkwe | Full-Stack Developer",

    description:
      "Full-stack developer building modern, scalable, and high-performance digital experiences.",

    images: [
      "/images/og-image.jpg",
    ],
  },

  robots: {
    index:
      true,

    follow:
      true,

    googleBot: {
      index:
        true,

      follow:
        true,

      "max-image-preview":
        "large",

      "max-snippet":
        -1,

      "max-video-preview":
        -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body>
        <ThemeProvider>
           <PersonSchema />
           <WebsiteSchema />
          <Navbar />
          <AnimatedCursor />
          {children}
        
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}