import { useEffect } from "react";

/**
 * Site-wide scroll-triggered animations using GSAP + ScrollTrigger.
 * Reveals headings, intro blocks, cards and applies subtle parallax.
 */
export function ScrollAnimations() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ctx: any;
    let cleanup = () => {};

    (async () => {
      const gsapMod = await import("gsap");
      const stMod = await import("gsap/ScrollTrigger");
      const gsap = gsapMod.gsap ?? gsapMod.default;
      const ScrollTrigger = stMod.ScrollTrigger ?? stMod.default;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // Animate intro blocks of every section (skip hero which already animates)
        gsap.utils
          .toArray<HTMLElement>("section:not(#top)")
          .forEach((section) => {
            const intro = section.querySelector<HTMLElement>(
              ".container-x > div:first-child"
            );
            if (intro && intro.children.length) {
              gsap.from(Array.from(intro.children), {
                y: 36,
                opacity: 0,
                duration: 0.9,
                stagger: 0.08,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: intro,
                  start: "top 82%",
                  toggleActions: "play none none none",
                },
              });
            }

            // Card-like grids
            const cards = section.querySelectorAll<HTMLElement>(
              "article, [data-reveal-card]"
            );
            if (cards.length) {
              gsap.from(cards, {
                y: 56,
                opacity: 0,
                duration: 0.85,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: cards[0],
                  start: "top 88%",
                  toggleActions: "play none none none",
                },
              });
            }

            // Generic data-reveal items
            const reveals = section.querySelectorAll<HTMLElement>("[data-reveal]");
            if (reveals.length) {
              gsap.from(reveals, {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.08,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: section,
                  start: "top 75%",
                  toggleActions: "play none none none",
                },
              });
            }
          });

        // Hero blueprint parallax
        const blueprint = document.querySelector<SVGElement>(".hero-blueprint");
        if (blueprint) {
          gsap.to(blueprint, {
            yPercent: 18,
            rotate: 8,
            ease: "none",
            scrollTrigger: {
              trigger: "#top",
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        }

        // Hero background image subtle zoom-out parallax
        const heroImg = document.querySelector<HTMLElement>("#top img");
        if (heroImg) {
          gsap.to(heroImg, {
            yPercent: 12,
            scale: 1.08,
            ease: "none",
            scrollTrigger: {
              trigger: "#top",
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        }

        ScrollTrigger.refresh();
      });

      cleanup = () => {
        ctx?.revert();
        ScrollTrigger.getAll().forEach((t: any) => t.kill());
      };
    })();

    return () => cleanup();
  }, []);

  return null;
}
