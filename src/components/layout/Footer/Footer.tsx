"use client";

import Link from "next/link";
import {ArrowUp, Mail,} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ResumeButton from "@/components/ui/ResumeButton/ResumeButton";
import styles from "./Footer.module.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main Footer */}

        <div className={styles.main}>
          {/* Brand */}

          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              GODWIN CHINKWE
            </Link>

            <p>Building modern digital experiences that solve real problems.</p>

            <div className={styles.socials}>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub size={19} />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={19} />
              </a>

              <a href="mailto:your@email.com" aria-label="Email">
                <Mail size={19} />
              </a>
            </div>
          </div>

          {/* Navigation */}

          <div className={styles.column}>
            <span>Navigation</span>

            <Link href="/">Home</Link>

            <Link href="/#about">About</Link>

            <Link href="/#projects">Work</Link>

            <Link href="/blog">Blog</Link>

            <Link href="/#contact">Contact</Link>
          </div>

          {/* Resume */}

          <div className={styles.column}>
            <span>Let's Work Together</span>

            <p>
              Have a project or idea? Let's build something meaningful together.
            </p>

            <ResumeButton>Download Resume</ResumeButton>
          </div>
        </div>

        {/* Bottom */}

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Godwin. All rights reserved.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className={styles.backToTop}
          >
            Back to top
            <ArrowUp size={17} />
          </button>
        </div>
      </div>
    </footer>
  );
}
