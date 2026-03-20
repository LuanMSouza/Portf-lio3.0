import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Luan Souza | Desenvolvedor Full Stack",
    template: "%s | Luan Souza"
  },
  description: "Desenvolvedor Full Stack em Santos/SP especializado em Next.js, Node.js e PostgreSQL. Criador do ecossistema ZentraX.",
  keywords: ["Desenvolvedor Full Stack", "Santos", "Baixada Santista", "Next.js", "React", "Node.js", "ZentraX", "Criação de SaaS", "Web Developer"],
  authors: [{ name: "Luan Souza", url: "https://luansouzadev.com.br" }],
  creator: "Luan Souza",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://luansouzadev.com.br",
    title: "Luan Souza | Full Stack Developer",
    description: "Transformando ideias em sistemas funcionais de ponta a ponta.",
    siteName: "Luan Souza Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Crie uma imagem de 1200x630px e coloque na pasta public
        width: 1200,
        height: 630,
        alt: "Luan Souza Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luan Souza | Full Stack Developer",
    description: "Desenvolvedor Full Stack focado em Next.js e PostgreSQL.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}