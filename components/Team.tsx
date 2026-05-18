import Image from "next/image";

const team = [
  {
    name: "Arthur Paiva Grimaldi Santos",
    photo: "/team-arthur.jpg",
    role: "Mestre em Engenharia Mecânica · UFSC",
    bio: "Atuação em biomateriais, projeto mecânico e engenharia de materiais aplicada ao setor metal-mecânico. Experiência em caracterização de produtos industriais, análise ao longo da cadeia logística e ensaios periciais.",
    linkedin: "https://www.linkedin.com/in/arthurpgsantos",
  },
  {
    name: "Luciano Fontes e Silva",
    photo: "/team-luciano.jpg",
    role: "Eng. de Produção Mecânica · UFSC",
    bio: "Foco em projeto mecânico, materiais e processos de fabricação. Sólida experiência em normatização técnica, sendo membro de comitês da ABNT, com atuação em cadeias logísticas nacionais e internacionais.",
    linkedin: "http://linkedin.com/in/luciano-fontes-e-silva-974b6a58",
  },
  {
    name: "Rafael Santiago Floriani Pereira",
    photo: "/team-rafael.jpg",
    role: "Doutor em Ciência e Eng. de Materiais · UFSC",
    bio: "Atuação nas áreas metal-mecânica, cerâmica e de engenharia de materiais aplicada a processos de fabricação. Caracterização de materiais, propriedades mecânicas, análise de falhas e ensaios periciais.",
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
            Equipe complementar e em constante atualização. Combinamos pesquisa acadêmica, atuação
            pericial e experiência industrial para oferecer respostas seguras a empresas,
            escritórios de advocacia e órgãos públicos.
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
