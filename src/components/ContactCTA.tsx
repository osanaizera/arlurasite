export function ContactCTA() {
  return (
    <section id="contato" className="py-24 md:py-32 bg-background">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-hero text-on-deep p-10 md:p-16 shadow-elegant">
          <div
            className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full blur-3xl opacity-30"
            style={{ background: "var(--gradient-accent)" }}
            aria-hidden
          />
          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">
                Vamos conversar
              </div>
              <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-on-deep text-balance">
                Tem um caso técnico, uma falha ou uma dúvida normativa?
              </h2>
              <p className="mt-5 text-lg text-muted-on-deep leading-relaxed">
                Conte com a Arlura para uma análise inicial. Respondemos com
                objetividade e indicamos o caminho técnico mais adequado para o seu
                contexto.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="mailto:contato@arlura.com.br"
                  className="inline-flex items-center gap-2 rounded-full bg-accent-gradient text-accent-foreground px-7 py-3.5 text-sm font-semibold transition-all hover:shadow-accent-glow"
                >
                  contato@arlura.com.br
                </a>
                <a
                  href="https://www.linkedin.com/company/arlura"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full border hairline-border bg-white/5 backdrop-blur px-7 py-3.5 text-sm font-medium text-on-deep hover:bg-white/10 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <ul className="grid gap-4">
              {[
                { k: "Resposta inicial", v: "Em até 1 dia útil" },
                { k: "Atendimento", v: "Brasil e exterior" },
                { k: "Confidencialidade", v: "NDA disponível mediante solicitação" },
                { k: "Sede", v: "Florianópolis · Santa Catarina" },
              ].map((i) => (
                <li
                  key={i.k}
                  className="flex items-start justify-between gap-6 rounded-xl border hairline-border bg-white/5 backdrop-blur px-5 py-4"
                >
                  <span className="text-xs uppercase tracking-wider text-muted-on-deep">
                    {i.k}
                  </span>
                  <span className="text-sm font-medium text-on-deep text-right">
                    {i.v}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-x py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold">
            A
          </div>
          <div className="text-sm">
            <div className="font-semibold tracking-[0.18em] text-foreground">ARLURA</div>
            <div className="text-xs text-muted-foreground">Engenharia & Materiais</div>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Arlura. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
