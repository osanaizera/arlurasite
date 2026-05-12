"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Serviços", href: "#servicos" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Equipe", href: "#equipe" },
  { label: "Insights", href: "#insights" },
  { label: "Contato", href: "#contato" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-card-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold tracking-tight">
            A
          </div>
          <div className="leading-tight">
            <div
              className={`font-semibold tracking-[0.18em] text-sm ${scrolled ? "text-foreground" : "text-on-deep"}`}
            >
              ARLURA
            </div>
            <div
              className={`text-[10px] uppercase tracking-[0.22em] ${scrolled ? "text-muted-foreground" : "text-muted-on-deep"}`}
            >
              Engenharia & Materiais
            </div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/75 hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium transition-all hover:bg-primary/90 hover:shadow-elegant"
          >
            Solicitar consulta
            <span aria-hidden>→</span>
          </a>
        </div>

        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          <span className="text-xl">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-x py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium text-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium"
            >
              Solicitar consulta
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
