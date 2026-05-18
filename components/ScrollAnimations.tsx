"use client";

import { useEffect } from "react";

/**
 * Site-wide scroll-triggered reveal animations using IntersectionObserver
 * + CSS classes defined in globals.css (.reveal-on-scroll).
 *
 * Marks targets as hidden via inline style on mount, then reveals them when
 * they intersect the viewport. Uses GSAP only for hero parallax.
 */
export function ScrollAnimations() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Collect reveal targets across the page
    const sections = document.querySelectorAll<HTMLElement>("section:not(#top), footer");

    const targets: HTMLElement[] = [];

    sections.forEach((section) => {
      // Headings + intro paragraphs (not inside cards)
      section
        .querySelectorAll<HTMLElement>("h2, h3, p, .reveal-item, [data-reveal]")
        .forEach((el) => {
          if (!el.closest("article")) targets.push(el);
        });
      // Cards
      section
        .querySelectorAll<HTMLElement>("article, [data-reveal-card]")
        .forEach((el) => targets.push(el));
    });

    if (reduceMotion) return;

    // Apply hidden state
    targets.forEach((el, i) => {
      el.classList.add("reveal-on-scroll");
      // Stagger via CSS variable
      const parent = el.parentElement;
      const siblingIndex = parent ? Array.from(parent.children).indexOf(el) : i;
      el.style.transitionDelay = `${Math.min(siblingIndex, 6) * 80}ms`;
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    targets.forEach((el) => io.observe(el));

    // Hero parallax via GSAP (loaded only client-side, dynamic)
    let cleanupParallax = () => {};
    (async () => {
      try {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        const triggers: ReturnType<typeof ScrollTrigger.create>[] = [];

        const heroImg = document.querySelector<HTMLElement>("#top img");
        if (heroImg) {
          const tw = gsap.to(heroImg, {
            yPercent: 12,
            scale: 1.06,
            ease: "none",
            scrollTrigger: {
              trigger: "#top",
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
          if (tw.scrollTrigger) triggers.push(tw.scrollTrigger);
        }

        cleanupParallax = () => {
          triggers.forEach((t) => t?.kill?.());
        };
      } catch {
        // ignore
      }
    })();

    return () => {
      io.disconnect();
      cleanupParallax();
    };
  }, []);

  return null;
}
