const services = [
  {
    n: "01",
    title: "Perícias e Assistência Técnica",
    body: "Atuação como peritos e assistentes técnicos em demandas judiciais e extrajudiciais, com análises fundamentadas e embasamento técnico-científico para escritórios jurídicos e seguradoras.",
    tags: ["Laudos periciais", "Análise de falhas", "Pareceres técnicos"],
  },
  {
    n: "02",
    title: "Consultoria em Engenharia",
    body: "Suporte especializado para indústrias que buscam otimizar processos, avaliar desempenho de materiais e assegurar conformidade com normas e requisitos do setor.",
    tags: ["Otimização de processos", "Seleção de materiais", "Normatização"],
  },
  {
    n: "03",
    title: "Análise de Materiais e Produtos",
    body: "Avaliação técnica de matérias-primas e produtos processados, identificando características, defeitos e causas raízes de falhas a partir de metodologias normatizadas.",
    tags: ["Caracterização", "Ensaios mecânicos", "Análise de falhas"],
  },
  {
    n: "04",
    title: "Certificação e Conformidade",
    body: "Apoio na validação de produtos e processos, garantindo adequação a normas técnicas, padrões de qualidade e requisitos legais — nacionais e internacionais.",
    tags: ["ABNT", "Auditorias técnicas", "Validação de fornecedores"],
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-28 md:py-36 bg-background">
      <div className="container-x">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">
            Áreas de atuação
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-foreground text-balance">
            Da matéria-prima ao{" "}
            <span className="text-gradient-brand">laudo final</span>, com rigor de quem entende o todo.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Combinamos conhecimento acadêmico, prática industrial e domínio normativo
            para entregar respostas técnicas claras e defensáveis.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <article
              key={s.n}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 md:p-10 shadow-card-soft transition-all hover:shadow-elegant hover:-translate-y-1"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs font-mono tracking-widest text-accent">
                  {s.n}
                </span>
                <span className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-foreground/60 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
                  →
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-4 text-foreground/70 leading-relaxed">{s.body}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex rounded-full bg-secondary text-secondary-foreground px-3 py-1 text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
