import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arlura · Consultoria em Engenharia de Materiais e Perícias Técnicas",
  description:
    "Consultoria especializada em engenharia de materiais, perícias técnicas, análise de falhas e conformidade industrial.",
  authors: [{ name: "Arlura" }],
  openGraph: {
    title: "Arlura · Engenharia de Materiais & Perícias Técnicas",
    description:
      "Consultoria especializada em engenharia de materiais, perícias técnicas, análise de falhas e conformidade industrial.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
