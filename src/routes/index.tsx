import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Methodology } from "@/components/Methodology";
import { Team } from "@/components/Team";
import { Blog } from "@/components/Blog";
import { ContactCTA, SiteFooter } from "@/components/ContactCTA";
import { ScrollAnimations } from "@/components/ScrollAnimations";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title:
          "Arlura · Consultoria em Engenharia de Materiais e Perícias Técnicas",
      },
      {
        name: "description",
        content:
          "Consultoria especializada em engenharia de materiais, perícias técnicas, análise de falhas e conformidade industrial. Laudos defensáveis para indústrias, escritórios jurídicos e seguradoras.",
      },
      { name: "author", content: "Arlura" },
      {
        property: "og:title",
        content: "Arlura · Engenharia de Materiais & Perícias Técnicas",
      },
      {
        property: "og:description",
        content:
          "Decisões de engenharia sustentadas por evidência técnica. Perícias, consultoria e conformidade industrial.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Methodology />
        <Team />
        <Blog />
        <ContactCTA />
      </main>
      <SiteFooter />
      <ScrollAnimations />
    </div>
  );
}
