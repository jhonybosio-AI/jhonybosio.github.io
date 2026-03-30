"use client"

import { PortfolioPage, PortfolioPageProps } from "@/components/ui/starfall-portfolio-landing";
import { Blue3Logo, XPLogo } from "@/components/ui/logos";

export default function Home() {
  const customPortfolioData: PortfolioPageProps = {
    logo: {
      initials: 'JB',
      name: 'Jhony Bosio',
    },
    navLinks: [
      { label: 'Bio', href: '#about' },
      { label: 'Mentoria', href: '#projects' },
      { label: 'Radar', href: '#skills' },
    ],
    resume: {
      label: 'Área do Aluno',
      onClick: () => { window.open('https://jhonybosio.com.br', '_blank'); },
    },
    hero: {
      titleLine1: 'Assessor nº1 Fee Fixo &',
      titleLine2Gradient: 'Mentor Assessor 3.0',
      subtitle: 'Especialista em alocação via ETFs Globais e automação com IA Local. Transformando a carreira de assessores através do modelo de remuneração transparente e tecnológico.',
    },
    ctaButtons: {
      primary: {
        label: 'Ver Mentoria',
        onClick: () => { document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); },
      },
      secondary: {
        label: 'Falar no WhatsApp',
        onClick: () => { window.open('https://wa.me/5516991234567', '_blank'); }, // Link genérico, pode ajustar depois
      },
    },
    projects: [
      { 
        title: 'Mentoria Assessor 3.0', 
        description: 'Transição completa para o Fee Fixo, domínio de ETFs e uso de IA no dia a dia.',
        tags: ['Fee Fixo', 'ETFs', 'IA Local'],
        imageContent: <div className="text-4xl text-white/50">🚀</div>
      },
      { 
        title: 'Radar de Mercado IA', 
        description: 'Sistema de curadoria automatizada que gera resumos de mercado para clientes em segundos.',
        tags: ['Python', 'Telegram', 'Vercel'],
        imageContent: <div className="text-4xl text-white/50">🤖</div>
      },
      { 
        title: 'Institutional Partners', 
        description: 'Parcerias estratégicas com as maiores instituições financeiras do Brasil.',
        tags: ['Blue3', 'XP Investimentos'],
        imageContent: (
          <div className="flex flex-col items-center gap-4 bg-black/40 p-4 rounded-xl w-full">
            <Blue3Logo className="h-6 text-white" />
            <XPLogo className="h-6 text-white" />
          </div>
        )
      },
    ],
    stats: [
      { value: '100+', label: 'Assessores Mentorados' },
      { value: '10 anos', label: 'de Mercado Financeiro' },
      { value: 'R$ 500M+', label: 'Custódia Influenciada' },
    ],
    showAnimatedBackground: true,
  };

  return <PortfolioPage {...customPortfolioData} />;
}
