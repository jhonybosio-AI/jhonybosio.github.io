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
        title: 'Mentoria Premium Assessor 3.0', 
        description: 'Acompanhamento VIP 1-a-1. Estruture seu sistema de IA, curadoria automatizada e transição completa para Fee Fixo.',
        tags: ['R$ 9.997,00', 'VIP', '1-a-1'],
        imageContent: (
          <div className="flex items-center justify-center h-full bg-blue3-deep/50">
            <TrendingUp className="w-20 h-20 text-blue3-sky opacity-80" />
          </div>
        )
      },
      { 
        title: 'Fee Fixo + ETF + IA: A Fórmula do Assessor 3.0', 
        description: 'O método que me tornou o assessor número 1 em Fee Fixo. Domínio de ETFs e uso de IA no dia a dia.',
        tags: ['R$ 3.999,00', 'Mentoria', 'Online'],
        imageContent: (
          <div className="flex items-center justify-center h-full bg-blue3-deep/50">
            <ShieldCheck className="w-20 h-20 text-blue3-sky opacity-80" />
          </div>
        )
      },
      { 
        title: 'Raio-X Educativo da Sua Carteira', 
        description: '1 hora ao vivo comigo. Análises de riscos, custos ocultos e o que investidores diversificados fazem diferente.',
        tags: ['R$ 497,00', 'Consultoria', '1 Hora'],
        imageContent: (
          <div className="flex items-center justify-center h-full bg-blue3-deep/50">
            <Brain className="w-20 h-20 text-blue3-sky opacity-80" />
          </div>
        )
      },
      { 
        title: 'Radar Assessor 3.0', 
        description: 'Sistema de curadoria automatizada com IA que gera resumos de mercado para clientes em segundos.',
        tags: ['R$ 97,00/mês', 'Assinatura', 'IA'],
        imageContent: (
          <div className="flex items-center justify-center h-full bg-blue3-deep/50">
            <Brain className="w-20 h-20 text-blue3-sky opacity-80" />
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
