import Image from "next/image";

const posts = [
  {
    image: "/blog-fracture.jpg",
    tag: "Análise de falhas",
    date: "12 Mai 2026",
    read: "6 min",
    title: "Fratura frágil em parafusos estruturais: como diagnosticar a causa raiz",
    excerpt:
      "Um passo a passo metodológico — da inspeção visual à fractografia eletrônica — para distinguir defeito de fabricação, montagem inadequada e fadiga em campo.",
  },
  {
    image: "/blog-norma.jpg",
    tag: "Conformidade",
    date: "28 Abr 2026",
    read: "4 min",
    title: "ABNT NBR 15575: o que muda na responsabilidade técnica do incorporador",
    excerpt:
      "Revisamos os pontos críticos da norma de desempenho e o impacto direto em laudos de recebimento de obra e em disputas de garantia estendida.",
  },
  {
    image: "/blog-duplex.jpg",
    tag: "Materiais",
    date: "10 Abr 2026",
    read: "8 min",
    title: "Aços inoxidáveis duplex: quando o ganho de desempenho compensa o custo",
    excerpt:
      "Comparamos resistência à corrosão, soldabilidade e ciclo de vida frente aos austeníticos clássicos em ambientes industriais agressivos.",
  },
];

export function Blog() {
  return (
    <section id="insights" className="py-24 md:py-32 bg-background">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">
              Insights técnicos
            </div>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-foreground text-balance">
              Conhecimento aplicado para{" "}
              <span className="text-gradient-brand">decisões melhores</span>.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Artigos curtos sobre engenharia de materiais, conformidade e perícia técnica —
              escritos pela nossa equipe.
            </p>
          </div>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition-colors"
          >
            Receber por e-mail
            <span aria-hidden>→</span>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article
              key={p.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-elegant hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <Image
                  src={p.image}
                  alt={p.title}
                  width={1280}
                  height={832}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent"
                  aria-hidden
                />
              </div>
              <div className="flex flex-col p-7 flex-1">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 font-medium text-secondary-foreground">
                    {p.tag}
                  </span>
                  <span>{p.date}</span>
                  <span aria-hidden>·</span>
                  <span>{p.read} de leitura</span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground leading-snug text-balance">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                  {p.excerpt}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                  Ler artigo
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
