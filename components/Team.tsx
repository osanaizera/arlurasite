import Image from "next/image";

const team = [
  {
    name: "Arthur Paiva Grimaldi Santos",
    photo: "/team-arthur.jpg",
    role: "Mestre em Engenharia Mecânica · UFSC",
    bio: "Experiência no LEBm (Laboratório de Engenharia Biomecânica do HU/UFSC) em avaliação de segurança e eficácia de implantes ortopédicos. Atua com ensaios mecânicos e biomecânicos, caracterização de produtos industriais e perícias judiciais no setor metal-mecânico.",
    linkedin: "https://www.linkedin.com/in/arthurpgsantos",
  },
  {
    name: "Luciano Fontes e Silva",
    photo: "/team-luciano.jpg",
    role: "Eng. de Produção Mecânica · UFSC",
    bio: "Atuou como Gerente Técnico no LEBm/HU-UFSC e é membro de comissões da ABNT/CB-026 (comitê de dispositivos médico-hospitalares). Experiência em cadeia de suprimentos, qualidade industrial e normatização técnica aplicada a processos de fabricação.",
    linkedin: "http://linkedin.com/in/luciano-fontes-e-silva-974b6a58",
  },
  {
    name: "Rafael Santiago Floriani Pereira",
    photo: "/team-rafael.jpg",
    role: "Doutor em Ciência e Eng. de Materiais · UFSC",
    bio: "Tese de doutorado em cerâmicas avançadas (zircônia) com foco em tribologia. Atua em análise de falhas metalúrgicas, ensaios destrutivos e não-destrutivos, e caracterização de materiais para os setores metal-mecânico e cerâmico.",
    linkedin: "http://linkedin.com/in/rsfpereira",
  },
];

export function Team() {
  return (
    <section id="equipe" className="py-28 md:py-36 bg-background">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">
              Equipe Arlura
            </div>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-foreground text-balance">
              Engenheiros formados pela <span className="text-gradient-brand">UFSC</span>, ativos na
              indústria e na ciência.
            </h2>
          </div>
          <p className="lg:col-span-5 text-lg text-muted-foreground leading-relaxed">
            Formados pela UFSC e com passagem pelo Laboratório de Engenharia Biomecânica (LEBm/HU) —
            referência nacional em ensaios de dispositivos médicos e implantes —, combinamos
            pesquisa acadêmica, atuação pericial e experiência industrial.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {team.map((m) => (
            <article
              key={m.name}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-card-soft transition-all hover:shadow-elegant hover:-translate-y-1"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-accent-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="-mx-8 -mt-8 mb-6 aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={m.photo}
                  alt={m.name}
                  width={900}
                  height={675}
                  loading="lazy"
                  className="h-full w-full object-cover object-center grayscale-[15%] transition-all duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{m.name}</h3>
              <p className="mt-1 text-sm text-accent font-medium">{m.role}</p>
              <p className="mt-4 text-foreground/70 text-sm leading-relaxed">{m.bio}</p>
              <a
                href={m.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                LinkedIn <span aria-hidden>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
