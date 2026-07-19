"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";

import styles from "./Navbar.module.css";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Expertise", href: "#expertise" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`${styles.navbar} ${
        isScrolled ? styles.scrolled : ""
      }`}
    >
      <div className={styles.container}>

        {/* Logo */}
        <Link
          href="/"
          className={styles.logo}
          onClick={closeMenu}
        >
          <span className={styles.logoMark}>G</span>

          <span className={styles.logoText}>
            Godwin<span>.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={styles.navLink}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className={styles.actions}>

          {/* Theme Toggle */}
          <button
            type="button"
            className={styles.iconButton}
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            aria-label="Toggle theme"
          >
            <Sun className={styles.sunIcon} />
            <Moon className={styles.moonIcon} />
          </button>

          {/* CTA */}
          <Link
            href="#contact"
            className={styles.cta}
          >
            Let's Talk
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className={styles.mobileMenuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={
            isMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${styles.mobileMenu} ${
          isMenuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <nav className={styles.mobileNav}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={styles.mobileNavLink}
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="#contact"
            className={styles.mobileCta}
            onClick={closeMenu}
          >
            Let's Talk
          </Link>
        </nav>
      </div>
    </header>
  );
}
