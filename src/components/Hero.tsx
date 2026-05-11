import heroImg from "@/assets/hero-engineering.jpg";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-hero text-on-deep">
      <img
        src={heroImg}
        alt="Componentes mecânicos de precisão sobre desenho técnico"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-35"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-overlay)" }}
        aria-hidden
      />
      <div
        className="absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full blur-3xl opacity-30"
        style={{ background: "var(--gradient-accent)" }}
        aria-hidden
      />

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
            <span className="bg-clip-text text-transparent bg-accent-gradient">
              evidência técnica
            </span>
            .
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
