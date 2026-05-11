import heroImg from "@/assets/hero-engineering.jpg";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-hero text-on-deep">
      <img
        src={heroImg}
        alt="Componentes mecânicos de precisão sobre desenho técnico"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-overlay)" }}
        aria-hidden
      />

      {/* Animated tech grid */}
      <div className="absolute inset-0 tech-grid" aria-hidden />

      {/* Scan line sweep */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px scan-line"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.72 0.13 55 / 0.7), transparent)",
          boxShadow: "0 0 24px 2px oklch(0.72 0.13 55 / 0.35)",
        }}
        aria-hidden
      />

      {/* Floating orbs */}
      <div
        className="absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full blur-3xl opacity-30 float-orb"
        style={{ background: "var(--gradient-accent)" }}
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-1/4 h-[320px] w-[320px] rounded-full blur-3xl opacity-20 float-orb"
        style={{ background: "var(--gradient-accent)", animationDelay: "-4s" }}
        aria-hidden
      />

      {/* Engineering blueprint SVG (right side) */}
      <svg
        className="hero-blueprint pointer-events-none absolute -right-16 top-1/2 -translate-y-1/2 hidden lg:block opacity-70"
        width="620"
        height="620"
        viewBox="0 0 620 620"
        fill="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="techStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.72 0.13 55)" stopOpacity="0.95" />
            <stop offset="100%" stopColor="oklch(0.72 0.13 55)" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="bluePrint" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="oklch(0.85 0.02 240)" stopOpacity="0.45" />
            <stop offset="100%" stopColor="oklch(0.85 0.02 240)" stopOpacity="0.05" />
          </linearGradient>
          {/* Gear path: 16 teeth */}
          <symbol id="gear" viewBox="-100 -100 200 200">
            <path
              d="M 0 -86 L 10 -86 L 14 -74 L 22 -74 L 26 -86 L 36 -82
                 L 50 -70 L 46 -60 L 54 -54 L 64 -60 L 70 -50
                 L 76 -36 L 64 -32 L 66 -22 L 78 -22 L 82 -10
                 L 86 4 L 74 8 L 74 18 L 86 22 L 82 32
                 L 74 46 L 64 42 L 58 50 L 64 60 L 54 66
                 L 42 76 L 34 68 L 24 72 L 24 86 L 12 86
                 L -2 84 L -2 72 L -12 70 L -18 80 L -28 76
                 L -42 68 L -36 58 L -44 52 L -54 56 L -60 46
                 L -68 32 L -56 28 L -58 18 L -70 16 L -72 4
                 L -72 -10 L -60 -14 L -60 -24 L -72 -28 L -68 -38
                 L -58 -50 L -48 -44 L -42 -52 L -48 -62 L -38 -68
                 L -24 -76 L -16 -68 L -6 -72 L -6 -86 Z"
              fill="none"
              stroke="oklch(0.72 0.13 55)"
              strokeWidth="1.5"
            />
            <circle r="42" fill="none" stroke="oklch(0.72 0.13 55)" strokeWidth="1.2" />
            <circle r="14" fill="none" stroke="oklch(0.72 0.13 55)" strokeWidth="1" />
            {[0, 60, 120, 180, 240, 300].map((a) => (
              <circle
                key={a}
                cx={Number((Math.cos((a * Math.PI) / 180) * 26).toFixed(3))}
                cy={Number((Math.sin((a * Math.PI) / 180) * 26).toFixed(3))}
                r="3"
                fill="oklch(0.72 0.13 55)"
                opacity="0.6"
              />
            ))}
          </symbol>
        </defs>

        {/* Outer reference circles */}
        <circle cx="310" cy="310" r="290" stroke="url(#bluePrint)" strokeWidth="1" strokeDasharray="2 6" />
        <circle cx="310" cy="310" r="220" stroke="url(#bluePrint)" strokeWidth="1" />

        {/* Crosshair / center axes */}
        <line x1="20" y1="310" x2="600" y2="310" stroke="url(#bluePrint)" strokeWidth="0.8" strokeDasharray="6 4" />
        <line x1="310" y1="20" x2="310" y2="600" stroke="url(#bluePrint)" strokeWidth="0.8" strokeDasharray="6 4" />

        {/* Tick marks around outer circle */}
        {Array.from({ length: 36 }).map((_, i) => {
          const a = (i * 10 * Math.PI) / 180;
          const r1 = 290;
          const r2 = i % 3 === 0 ? 275 : 282;
          return (
            <line
              key={i}
              x1={Number((310 + Math.cos(a) * r1).toFixed(3))}
              y1={Number((310 + Math.sin(a) * r1).toFixed(3))}
              x2={Number((310 + Math.cos(a) * r2).toFixed(3))}
              y2={Number((310 + Math.sin(a) * r2).toFixed(3))}
              stroke="oklch(0.85 0.02 240)"
              strokeOpacity="0.35"
              strokeWidth="1"
            />
          );
        })}

        {/* Main rotating gear */}
        <g style={{ transformOrigin: "310px 310px", animation: "spinSlow 28s linear infinite" }}>
          <use href="#gear" x="210" y="210" width="200" height="200" />
        </g>

        {/* Smaller counter-rotating gear */}
        <g style={{ transformOrigin: "470px 200px", animation: "spinSlowReverse 18s linear infinite" }}>
          <use href="#gear" x="410" y="140" width="120" height="120" opacity="0.85" />
        </g>

        {/* Dimension line with arrows */}
        <g stroke="oklch(0.85 0.02 240)" strokeOpacity="0.55" strokeWidth="0.8" fill="none">
          <line x1="90" y1="470" x2="240" y2="470" />
          <line x1="90" y1="464" x2="90" y2="476" />
          <line x1="240" y1="464" x2="240" y2="476" />
          <polyline points="96,466 90,470 96,474" />
          <polyline points="234,466 240,470 234,474" />
        </g>
        <text x="165" y="462" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="10" fill="oklch(0.85 0.02 240)" fillOpacity="0.7">
          150.00 mm
        </text>

        {/* Annotation pointer */}
        <g stroke="oklch(0.72 0.13 55)" strokeOpacity="0.7" strokeWidth="0.9" fill="none">
          <circle cx="310" cy="310" r="3" fill="oklch(0.72 0.13 55)" />
          <line x1="310" y1="310" x2="430" y2="430" />
          <line x1="430" y1="430" x2="500" y2="430" />
        </g>
        <text x="438" y="424" fontFamily="ui-monospace, monospace" fontSize="10" fill="oklch(0.72 0.13 55)" fillOpacity="0.85">
          ⌀ Ø42.5 H7
        </text>

        {/* Animated trace path */}
        <path
          d="M 40 310 Q 180 120 310 310 T 580 310"
          stroke="url(#techStroke)"
          strokeWidth="1.2"
          fill="none"
          strokeDasharray="800"
          style={{ animation: "drawLine 5s ease-out forwards" }}
        />
      </svg>

      <div className="container-x relative pt-40 pb-28 md:pt-48 md:pb-36">
        <div className="max-w-3xl fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full border hairline-border bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-muted-on-deep backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Engenharia de Materiais · Perícias Técnicas
          </div>

          <h1 className="mt-8 text-5xl md:text-7xl font-semibold leading-[1.02] text-balance">
            Decisões de engenharia
            <br />
            sustentadas por{" "}
            <span className="text-gradient-accent">evidência técnica</span>.
          </h1>

          <p className="mt-7 max-w-2xl text-lg md:text-xl text-muted-on-deep leading-relaxed">
            Somos uma consultoria especializada em materiais, perícias e conformidade
            industrial. Transformamos rigor científico em laudos, pareceres e soluções
            que protegem operações, contratos e produtos.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full bg-accent-gradient text-accent-foreground px-7 py-3.5 text-sm font-semibold transition-all hover:shadow-accent-glow"
            >
              Solicitar parecer técnico
              <span aria-hidden>→</span>
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-full border hairline-border bg-white/5 backdrop-blur px-7 py-3.5 text-sm font-medium text-on-deep hover:bg-white/10 transition-colors"
            >
              Áreas de atuação
            </a>
          </div>

          <dl className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl">
            {[
              { k: "UFSC", v: "Formação acadêmica de excelência" },
              { k: "ABNT", v: "Membros de comitês técnicos" },
              { k: "+15", v: "Anos de experiência somados" },
              { k: "100%", v: "Laudos com rastreabilidade" },
            ].map((s) => (
              <div key={s.k} className="border-l hairline-border pl-4">
                <dt className="text-2xl font-semibold text-on-deep">{s.k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-on-deep">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
