"use client"

import { PortfolioPage, PortfolioPageProps } from "@/components/ui/starfall-portfolio-landing";
import { BrandLogo } from "@/components/ui/logos";
import { Brain, TrendingUp, ShieldCheck } from "lucide-react";

export default function Home() {
  const customPortfolioData: PortfolioPageProps = {
    logo: <BrandLogo className="h-10 text-white" />,
    navLinks: [
      { label: 'Mentoria', href: '/mentoria-assessor' },
      { label: 'Carteiras ETF', href: '/carteira.etfs' },
      { label: 'Moabi', href: '/moabi' },
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
        title: 'Raio-X Educativo da Sua Carteira', 
        description: '1 hora ao vivo comigo. Análises de riscos, custos ocultos e o que grandes investidores diversificados fazem diferente. (Exclusivo para Investidores)',
        tags: ['Para Investidores', 'Consultoria', '1 Hora'],
        href: 'https://buy.stripe.com/cNi5kF5Mqeg1cT71f04ko05',
        imageContent: (\n          <div className="flex items-center justify-center h-full bg-blue3-deep/50 rounded-xl">\n            <ShieldCheck className="w-16 h-16 text-blue3-sky opacity-80" />\n          </div>\n        )
      },
      { 
        title: 'Fee Fixo + ETF + IA: A Fórmula do Assessor 3.0', 
        description: 'O método que me tornou o assessor número 1 em Fee Fixo. Domínio de ETFs e uso de IA no dia a dia.',
        tags: ['R$ 1.997,50', 'Mentoria'],
        href: 'https://buy.stripe.com/4gM5kF3EidbX7yNf5Q4ko08',
        highlight: true,
        limitedSpots: true,
        originalPrice: 'De R$ 3.999,00',
        promotionalMessage: 'R$ 1.997,50 por tempo limitado',
        couponMessage: 'Use o cupom: ESCRITORIO50',
        imageContent: (\n          <div className="flex items-center justify-center h-full bg-blue3-deep/50 rounded-xl">\n            <TrendingUp className="w-16 h-16 text-blue3-sky opacity-100" />\n          </div>\n        )
      },
      { 
        title: 'Mentoria Premium Assessor 3.0', 
        description: 'Acompanhamento VIP 1-a-1. Estruture seu sistema de IA, curadoria automatizada e transição completa para Fee Fixo.',
        tags: ['R$ 9.997,00', 'VIP', '1-a-1'],
        href: 'https://buy.stripe.com/00w9AV4Im8VH4mB9Lw4ko0a',
        limitedSpots: true,
        imageContent: (\n          <div className="flex items-center justify-center h-full bg-blue3-deep/50 rounded-xl">\n            <TrendingUp className="w-16 h-16 text-gray-300 opacity-80" />\n          </div>\n        )
      },
    ],
    stats: [
      { value: '+20 anos', label: 'de Mercado Financeiro' },
      { value: '+300', label: 'Clientes Assessorados' },
    ],
    showAnimatedBackground: true,
  };\n\n  return <PortfolioPage {...customPortfolioData} />;\n}\n