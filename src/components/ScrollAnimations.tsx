import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Site-wide scroll-triggered animations using GSAP + ScrollTrigger.
 */
export function ScrollAnimations() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // Reveal targets across the page
      const revealGroups: Array<{ trigger: Element; targets: Element[] }> = [];

      gsap.utils
        .toArray<HTMLElement>("section:not(#top), footer")
        .forEach((section) => {
          // Headings + paragraphs + CTAs
          const headings = Array.from(
            section.querySelectorAll<HTMLElement>(
              "h2, h3, .reveal-text, .reveal-item"
            )
          );
          const paragraphs = Array.from(
            section.querySelectorAll<HTMLElement>(
              ":scope p, :scope .reveal-paragraph"
            )
          ).filter((el) => !el.closest("article"));

          const introTargets = [...headings, ...paragraphs];
          if (introTargets.length) {
            revealGroups.push({ trigger: section, targets: introTargets });
          }

          // Cards
          const cards = Array.from(
            section.querySelectorAll<HTMLElement>("article, [data-reveal-card]")
          );
          if (cards.length) {
            revealGroups.push({ trigger: cards[0], targets: cards });
          }
        });

      revealGroups.forEach(({ trigger, targets }) => {
        gsap.set(targets, { opacity: 0, y: 40 });
        ScrollTrigger.create({
          trigger,
          start: "top 88%",
          once: true,
          onEnter: () => {
            gsap.to(targets, {
              opacity: 1,
              y: 0,
              duration: 0.9,
              stagger: 0.08,
              ease: "power3.out",
              overwrite: "auto",
            });
          },
        });
      });

      // Hero blueprint parallax
      const blueprint = document.querySelector<SVGElement>(".hero-blueprint");
      if (blueprint) {
        gsap.to(blueprint, {
          yPercent: 18,
          rotate: 6,
          ease: "none",
          scrollTrigger: {
            trigger: "#top",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Hero background subtle parallax
      const heroImg = document.querySelector<HTMLElement>("#top img");
      if (heroImg) {
        gsap.to(heroImg, {
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
      }

      // Refresh after fonts/images settle
      requestAnimationFrame(() => ScrollTrigger.refresh());
      window.addEventListener("load", () => ScrollTrigger.refresh());
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}
