"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import styles from "./AnimatedCursor.module.css";

export default function AnimatedCursor() {
  const cursorDotRef =
    useRef<HTMLDivElement>(null);

  const cursorRingRef =
    useRef<HTMLDivElement>(null);

  const [isHovering, setIsHovering] =
    useState(false);

  const [isVisible, setIsVisible] =
    useState(false);

  useEffect(() => {

    /*
     * Disable cursor on touch devices
     */

    const isTouchDevice =
      window.matchMedia(
        "(hover: none), (pointer: coarse)"
      ).matches;

    if (isTouchDevice) {
      return;
    }

    const mediaQuery =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      );

    if (mediaQuery.matches) {
      return;
    }

    let mouseX = 0;
    let mouseY = 0;

    let ringX = 0;
    let ringY = 0;

    let animationFrame: number;

    const moveCursor = (
      event: MouseEvent
    ) => {

      mouseX =
        event.clientX;

      mouseY =
        event.clientY;

      setIsVisible(true);

      if (
        cursorDotRef.current
      ) {
        cursorDotRef.current.style.transform =
          `translate3d(
            ${mouseX}px,
            ${mouseY}px,
            0
          )`;
      }

    };

    const animateRing = () => {

      ringX +=
        (mouseX - ringX) *
        0.15;

      ringY +=
        (mouseY - ringY) *
        0.15;

      if (
        cursorRingRef.current
      ) {
        cursorRingRef.current.style.transform =
          `translate3d(
            ${ringX}px,
            ${ringY}px,
            0
          )`;
      }

      animationFrame =
        requestAnimationFrame(
          animateRing
        );

    };

    const handleMouseOver = (
      event: MouseEvent
    ) => {

      const target =
        event.target as HTMLElement;

      const interactiveElement =
        target.closest(
          "a, button, [data-cursor]"
        );

      setIsHovering(
        Boolean(
          interactiveElement
        )
      );

    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener(
      "mousemove",
      moveCursor
    );

    document.addEventListener(
      "mouseover",
      handleMouseOver
    );

    document.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    animationFrame =
      requestAnimationFrame(
        animateRing
      );

    return () => {

      window.removeEventListener(
        "mousemove",
        moveCursor
      );

      document.removeEventListener(
        "mouseover",
        handleMouseOver
      );

      document.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      cancelAnimationFrame(
        animationFrame
      );

    };

  }, []);

  return (
    <>
      <div
        ref={cursorDotRef}
        className={`
          ${styles.cursorDot}
          ${
            isVisible
              ? styles.visible
              : ""
          }
        `}
      />

      <div
        ref={cursorRingRef}
        className={`
          ${styles.cursorRing}
          ${
            isVisible
              ? styles.visible
              : ""
          }
          ${
            isHovering
              ? styles.hovering
              : ""
          }
        `}
      />
    </>
  );
}