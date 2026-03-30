"use client"

import { PortfolioPage, PortfolioPageProps } from "@/components/ui/starfall-portfolio-landing";
import { BrandLogo } from "@/components/ui/logos";
import { Brain, TrendingUp, ShieldCheck } from "lucide-react";

export default function Home() {
  const customPortfolioData: PortfolioPageProps = {
    logo: <BrandLogo className="h-10 text-white" />,
    navLinks: [
      { label: 'Bio', href: '#about' },
      { label: 'Mentoria', href: '#projects' },
      { label: 'Radar', href: '#skills' },
    ],
    hero: {
      titleLine1: 'Assessor nº1 Fee Fixo &',
      titleLine2Gradient: 'Mentor Assessor 3.0',
      subtitle: 'Especialista em alocação via ETFs Globais e automação com IA Local. Transformando a carreira de assessores através do modelo de remuneração transparente e tecnológico.',
    },
    ctaButtons: {
      primary: {
        label: 'Ver Mentoria',
        onClick: () => { window.location.href = '/mentoria-assessor'; },
      },
      secondary: {
        label: 'Falar no WhatsApp',
        onClick: () => { window.open('https://wa.me/5516996045700', '_blank'); },
      },
    },
    projects: [
      { 
        title: 'Mentoria Assessor 3.0', 
        description: 'Transição completa para o Fee Fixo, domínio de ETFs e uso de IA no dia a dia para ganhar escala e liberdade.',
        tags: ['Fee Fixo', 'ETFs', 'IA Local'],
        imageContent: (
          <div className="flex items-center justify-center h-full bg-blue3-deep/50">
            <TrendingUp className="w-20 h-20 text-blue3-sky opacity-80" />
          </div>
        )
      },
      { 
        title: 'Radar de Mercado IA', 
        description: 'Sistema de curadoria automatizada que gera resumos de mercado para clientes em segundos, elevando o seu NPS.',
        tags: ['Python', 'Telegram', 'Vercel'],
        imageContent: (
          <div className="flex items-center justify-center h-full bg-blue3-deep/50">
            <Brain className="w-20 h-20 text-blue3-sky opacity-80" />
          </div>
        )
      },
      { 
        title: 'Clareza Patrimonial', 
        description: 'Metodologia exclusiva para análise de carteiras focada em eficiência tributária e sucessão.',
        tags: ['Alocação Global', 'Fee Fixo'],
        imageContent: (
          <div className="flex items-center justify-center h-full bg-blue3-deep/50">
            <ShieldCheck className="w-20 h-20 text-blue3-sky opacity-80" />
          </div>
        )
      },
    ],
    stats: [
      { value: '12 anos', label: 'de Mercado Financeiro' },
      { value: 'R$ 1B+', label: 'Custódia Assessorada' },
    ],
    showAnimatedBackground: true,
  };

  return <PortfolioPage {...customPortfolioData} />;
}
