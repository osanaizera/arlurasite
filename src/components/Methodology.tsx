import labImg from "@/assets/lab-analysis.jpg";

const steps = [
  {
    n: "01",
    title: "Diagnóstico",
    body: "Escuta técnica do problema, definição de escopo, riscos envolvidos e objetivos do laudo ou consultoria.",
  },
  {
    n: "02",
    title: "Investigação",
    body: "Coleta de evidências, ensaios, caracterização de materiais e revisão normativa aplicável ao caso.",
  },
  {
    n: "03",
    title: "Análise",
    body: "Interpretação cruzada com literatura científica, normas ABNT/ISO e benchmarks de mercado.",
  },
  {
    n: "04",
    title: "Entrega",
    body: "Documento técnico claro, defensável e voltado à decisão — seja em juízo, auditoria ou processo industrial.",
  },
];

export function Methodology() {
  return (
    <section id="metodologia" className="relative py-28 md:py-36 surface-deep text-on-deep overflow-hidden">
      <div
        className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full blur-3xl opacity-20"
        style={{ background: "var(--gradient-accent)" }}
        aria-hidden
      />
      <div className="container-x relative grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">
            Metodologia
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-on-deep text-balance">
            Um método que une ciência, norma e prática industrial.
          </h2>
          <p className="mt-5 text-lg text-muted-on-deep leading-relaxed max-w-xl">
            Cada projeto segue um protocolo claro de investigação técnica — para que o
            resultado entregue não seja apenas correto, mas defensável diante de qualquer
            instância.
          </p>

          <ol className="mt-12 space-y-8">
            {steps.map((s) => (
              <li key={s.n} className="grid grid-cols-[auto_1fr] gap-6 border-l hairline-border pl-6 -ml-6">
                <span className="text-3xl font-semibold text-accent font-mono">
                  {s.n}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-on-deep">{s.title}</h3>
                  <p className="mt-2 text-muted-on-deep leading-relaxed">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden border hairline-border shadow-elegant">
            <img
              src={labImg}
              alt="Engenheiro analisando componente metálico com paquímetro em laboratório"
              width={1024}
              height={1024}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 hidden md:block rounded-xl bg-card text-card-foreground p-6 shadow-elegant max-w-xs">
            <div className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">
              Compromisso
            </div>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80">
              "Transformamos conhecimento técnico em decisões seguras para nossos
              clientes."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
