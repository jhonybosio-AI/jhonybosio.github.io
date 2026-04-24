"use client";
import { PortfolioPage, PortfolioPageProps } from "@/components/ui/starfall-portfolio-landing";
import { BrandLogo } from "@/components/ui/logos";
import { TrendingUp, ShieldCheck } from "lucide-react";

export default function Home() {
  const customPortfolioData: PortfolioPageProps = {
    logo: <BrandLogo className="h-10 text-white" />,
    navLinks: [
      { label: 'Protocolo 9A', href: 'https://lpls1.jhonybosio.com' },
      { label: 'Mentoria', href: '/mentoria-assessor' },
      { label: 'Carteiras ETF', href: '/carteira-etfs' },
      { label: 'Moabi', href: '/moabi' },
    ],
    hero: {
      titleLine1: 'Assessor nº1 Fee Fixo &',
      titleLine2Gradient: 'Mentor Assessor 3.0',
      subtitle: 'Especialista em alocação via ETFs Globais e automação com IA Local. Transformando a carreira de assessores através do modelo de remuneração transparente e tecnológico.',
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
        title: 'Mentoria Premium Assessor 3.0',
        description: 'Acompanhamento VIP 1-a-1. Estruture seu sistema de IA, curadoria automatizada e transição completa para Fee Fixo.',
        tags: ['R$ 9.997,00', 'VIP', '1-a-1'],
        href: 'https://buy.stripe.com/00w9AV4Im8VH4mB9Lw4ko0a',
        limitedSpots: true,
        imageContent: (
          <div className="flex items-center justify-center h-full bg-blue3-deep/50 rounded-xl">
            <TrendingUp className="w-16 h-16 text-gray-300 opacity-80" />
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