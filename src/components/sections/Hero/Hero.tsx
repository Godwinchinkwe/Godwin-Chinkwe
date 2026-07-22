"use client";

import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  // Download,
  //   Github,
  //   LinkedinIcon,
  Mail,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import styles from "./Hero.module.css";
import ResumeButton from "@/components/ui/ResumeButton/ResumeButton";

// import {motion,} from "framer-motion";

// import {fadeUp,staggerContainer,} from "@/lib/animations/variants";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      {/* Background Effects */}
      <div className={styles.background}>
        <div className={styles.gradientOne} />
        <div className={styles.gradientTwo} />
        <div className={styles.grid} />
      </div>

      <div className={styles.container}>
        {/* Availability Badge */}
        <div className={styles.availability}>
          <span className={styles.statusDot} />

          <span>Available for new opportunities</span>
        </div>

        {/* Main Heading */}
        <h1 className={styles.heading}>
          Building Digital Experiences
          <span className={styles.headingAccent}>That Make an Impact.</span>
        </h1>

        {/* Description */}
        <p className={styles.description}>
          I&apos;m a Frontend Engineer and Full-Stack Developer focused on
          building modern, scalable, and high-performance web applications that
          help businesses grow.
        </p>

        {/* CTA Buttons */}
        <div className={styles.actions}>
          <Link href="#projects" className={styles.primaryButton}>
            View My Work
            <ArrowRight size={18} />
          </Link>

          {/* <a
            href="/resume/Godwin-Chinkwe-Resume.pdf"
            download
            className={styles.secondaryButton}
          >
            Download Resume
            <Download size={17} />
          </a> */}
          <ResumeButton variant="secondary" />
        </div>

        {/* Social Links */}
        <div className={styles.socials}>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>

          <a href="mailto:your@email.com" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <Link href="#about" className={styles.scrollIndicator}>
          <span>Scroll to explore</span>

          <ArrowDown size={16} />
        </Link>
      </div>
    </section>
  );
}
