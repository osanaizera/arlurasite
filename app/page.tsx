import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Methodology } from "@/components/Methodology";
import { Team } from "@/components/Team";
import { Blog } from "@/components/Blog";
import { ContactCTA, SiteFooter } from "@/components/ContactCTA";
import { ScrollAnimations } from "@/components/ScrollAnimations";

export const metadata: Metadata = {
  title: "Arlura · Consultoria em Engenharia de Materiais e Perícias Técnicas",
  description:
    "Consultoria especializada em engenharia de materiais, perícias técnicas, análise de falhas e conformidade industrial. Laudos defensáveis para indústrias, escritórios jurídicos e seguradoras.",
  openGraph: {
    title: "Arlura · Engenharia de Materiais & Perícias Técnicas",
    description:
      "Decisões de engenharia sustentadas por evidência técnica. Perícias, consultoria e conformidade industrial.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Home() {
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
