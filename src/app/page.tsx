"use client";
import { PortfolioPage, PortfolioPageProps } from "@/components/ui/starfall-portfolio-landing";
import { BrandLogo } from "@/components/ui/logos";
import { TrendingUp, ShieldCheck, Cpu } from "lucide-react";

export default function Home() {
  const customPortfolioData: PortfolioPageProps = {
    logo: <BrandLogo className="h-10 text-white" />,
    navLinks: [
      { label: 'Protocolo 9A', href: 'https://lpls1.jhonybosio.com' },
      { label: 'Carteiras ETF', href: '/carteira-etfs' },
      { label: 'Moabi', href: '/moabi' },
    ],
    hero: {
      titleLine1: 'Wealth Management &',
      titleLine2Gradient: 'Gestão Passiva via ETFs Globais',
      subtitle: 'Investimentos globais eficientes com tecnologia de ponta. Utilizo Inteligência Artificial exclusiva (Assessor 3.0) para curadoria de portfólios, eliminando custos ocultos e protegendo seu patrimônio.',
    },
    ctaButtons: {
      primary: {
        label: 'Ver Masterclass',
        onClick: () => {
          window.location.href = 'https://lpls1.jhonybosio.com';
        },
      },
      secondary: {
        label: 'Falar no WhatsApp',
        onClick: () => {
          window.open('https://wa.me/5516996045700', '_blank');
        },
      },
    },
    projects: [
      {
        title: 'Masterclass: Protocolo 9A',
        description: 'Participe da Masterclass exclusiva e descubra como investir no exterior usando ETFs globais de forma simples, eficiente e com baixos custos.',
        tags: ['Lista de Espera', 'Evento Ao Vivo', 'Gratuito'],
        href: 'https://lpls1.jhonybosio.com',
        imageContent: (
          <div className="flex items-center justify-center h-full bg-blue3-deep/50 rounded-xl">
            <ShieldCheck className="w-16 h-16 text-blue3-sky opacity-80" />
          </div>
        )
      },
      {
        title: 'Mentoria em Grupo: Protocolo 9A',
        description: 'Implementação em grupo do Protocolo 9A. Estruture sua carteira de investimentos baseada em ETFs Globais com o meu acompanhamento.',
        tags: ['Lista de Espera', 'Mentoria em Grupo'],
        href: 'https://lpls1.jhonybosio.com',
        highlight: true,
        limitedSpots: true,
        promotionalMessage: 'Vagas limitadas na próxima turma',
        imageContent: (
          <div className="flex items-center justify-center h-full bg-blue3-deep/50 rounded-xl">
            <TrendingUp className="w-16 h-16 text-blue3-sky opacity-100" />
          </div>
        )
      },
      {
        title: 'Assessoria Exclusiva (Fee Fixo)',
        description: 'Atendimento private para investidores (R$ 300k+). Alinhamento total de interesses, zero conflitos (rebates) e curadoria impulsionada por IA Local.',
        tags: ['Wealth Management', 'Blue3', 'XP Investimentos'],
        href: 'https://wa.me/5516996045700',
        imageContent: (
          <div className="flex items-center justify-center h-full bg-blue3-deep/50 rounded-xl">
            <Cpu className="w-16 h-16 text-gray-300 opacity-80" />
          </div>
        )
      },
    ],
    stats: [
      { value: '+20 anos', label: 'de Mercado Financeiro' },
      { value: '+300', label: 'Clientes Assessorados' },
    ],
    showAnimatedBackground: true,
  };

  return <PortfolioPage {...customPortfolioData} />;
}