import Image from "next/image";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-hero text-on-deep">
      <Image
        src="/hero-arlura.png"
        alt="Superfície de fratura por fadiga em componente metálico"
        width={1920}
        height={1080}
        priority
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-overlay)" }}
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
            sustentadas por <span className="text-gradient-accent">evidência técnica</span>.
          </h1>

          <p className="mt-7 max-w-2xl text-lg md:text-xl text-muted-on-deep leading-relaxed">
            Investigamos falhas, caracterizamos materiais e emitimos laudos técnicos defensáveis —
            para indústrias, escritórios jurídicos e seguradoras que precisam de respostas claras
            sobre o que aconteceu e por quê.
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

          <div className="mt-10 flex flex-wrap gap-2">
            {[
              "Metal-mecânico",
              "Dispositivos médicos",
              "Óleo & Gás",
              "Construção civil",
              "Automotivo",
            ].map((setor) => (
              <span
                key={setor}
                className="inline-flex rounded-full border hairline-border bg-white/5 backdrop-blur px-3.5 py-1.5 text-xs font-medium text-muted-on-deep"
              >
                {setor}
              </span>
            ))}
          </div>

          <dl className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl">
            {[
              { k: "UFSC", v: "Formação acadêmica de excelência" },
              { k: "ABNT", v: "Membros de comitês técnicos" },
              { k: "+15", v: "Anos de atuação da equipe" },
              { k: "100%", v: "Laudos com rastreabilidade" },
            ].map((s) => (
              <div key={s.k} className="border-l hairline-border pl-4">
                <dt className="text-2xl font-semibold text-on-deep">{s.k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-on-deep">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
