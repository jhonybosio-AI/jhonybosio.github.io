import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jhony Bosio — Assessor nº1 Fee Fixo | Especialista em IA e ETFs",
  description: "Mentoria para assessores de investimentos XP. Especialista em gestão patrimonial, remuneração por Fee Fixo, alocação em ETFs globais e implementação de IA local.",
  keywords: ["Jhony Bosio", "Assessor 3.0", "Fee Fixo", "ETF Global", "IA para Assessores", "Blue3", "XP Investimentos"],
  openGraph: {
    title: "Jhony Bosio — Estrategista de Investimentos & Mentor",
    description: "Transformando o mercado de assessoria com Fee Fixo e IA.",
    type: "website",
    locale: "pt_BR",
    url: "https://jhonybosio.github.io",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
      </head>
      <body
        className={`${manrope.variable} ${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
