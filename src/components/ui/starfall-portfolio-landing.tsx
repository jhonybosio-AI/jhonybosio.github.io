"use client"

import React, { useEffect, useState } from 'react';
import { BrandLogo } from './logos';

// --- TYPE DEFINITIONS FOR PROPS ---
interface NavLink { label: string; href: string; }
interface Project { title: string; description: string; tags: string[]; imageContent?: React.ReactNode; }
interface Stat { value: string; label: string; }

export interface PortfolioPageProps {
  logo?: React.ReactNode;
  navLinks?: NavLink[];
  hero?: { titleLine1: React.ReactNode; titleLine2Gradient: React.ReactNode; subtitle: React.ReactNode; };
  ctaButtons?: { primary: { label: string; onClick?: () => void; }; secondary: { label: string; onClick?: () => void; }; };
  projects?: Project[];
  stats?: Stat[];
  showAnimatedBackground?: boolean;
}

// --- INTERNAL CORPORATE BACKGROUND COMPONENT ---
const Blue3Background: React.FC = () => {
    return (
        <div className="fixed inset-0 z-0 bg-blue3-deep">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(0,141,255,0.15),transparent_50%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,26,53,1)_100%)]" />
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none overflow-hidden">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue3-sky/20 blur-[120px]" />
                <div className="absolute top-[40%] -right-[10%] w-[30%] h-[30%] rounded-full bg-blue3-sky/10 blur-[100px]" />
            </div>
        </div>
    );
};

// --- DEFAULT DATA ---
const defaultData: Required<Omit<PortfolioPageProps, 'logo'>> & { logo: React.ReactNode } = {
  logo: <BrandLogo />,
  navLinks: [ 
    { label: 'Sobre', href: '#about' }, 
    { label: 'Mentoria', href: '#projects' }, 
    { label: 'Radar', href: '#skills' } 
  ],
  hero: { 
    titleLine1: 'Assessor nº1 Fee Fixo &', 
    titleLine2Gradient: 'Mentor Assessor 3.0', 
    subtitle: 'Especialista em alocação via ETFs Globais e automação com IA Local. Transformando a carreira de assessores através do modelo de remuneração transparente.', 
  },
  ctaButtons: { 
    primary: { label: 'Conhecer Mentoria', onClick: () => {} }, 
    secondary: { label: 'Falar no WhatsApp', onClick: () => {} }, 
  },
  projects: [ 
    { title: 'Mentoria Assessor 3.0', description: 'O guia definitivo para migrar para o Fee Fixo e dominar ETFs.', tags: ['Fee Fixo', 'ETFs', 'CVM 179'], imageContent: null }, 
    { title: 'Radar de Mercado IA', description: 'Curadoria diária automatizada para seus clientes PF.', tags: ['IA Local', 'Telegram', 'Python'], imageContent: null }, 
    { title: 'Alocação Global', description: 'Carteiras eficientes com foco em custo e diversificação.', tags: ['BDRs', 'ETFs US', 'Rebalanceamento'], imageContent: null }, 
  ],
  stats: [ 
    { value: '100+', label: 'Assessores Mentorados' }, 
    { value: '10 anos', label: 'Experiência no Mercado' }, 
    { value: 'R$ 500M+', label: 'Sob Custódia' }, 
  ],
  showAnimatedBackground: true,
};


// --- MAIN CUSTOMIZABLE PORTFOLIO COMPONENT ---
const PortfolioPage: React.FC<PortfolioPageProps> = ({
  logo = defaultData.logo,
  navLinks = defaultData.navLinks,
  hero = defaultData.hero,
  ctaButtons = defaultData.ctaButtons,
  projects = defaultData.projects,
  stats = defaultData.stats,
  showAnimatedBackground = true,
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-blue3-deep text-white min-h-screen selection:bg-blue3-sky/30">
      <Blue3Background />
      <div className="relative z-10 font-outfit">
        <nav className={`fixed top-0 w-full px-6 py-4 transition-all duration-300 ${scrolled ? 'bg-blue3-deep/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    {logo}
                </div>
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map(link => (
                        <a key={link.label} href={link.href} className="text-gray-400 hover:text-blue3-sky transition-colors text-sm font-medium tracking-tight">{link.label}</a>
                    ))}
                </div>
            </div>
        </nav>
        
        <main id="about" className="w-full min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20">
            <div className="max-w-6xl mx-auto text-center">
                <div className="mb-12 flex flex-col items-center">
                    <img src="/profile.png" alt="Jhony Bosio" className="w-32 h-32 rounded-full mb-8 object-cover border-2 border-white/10 shadow-[0_0_30px_rgba(0,141,255,0.2)] grayscale" />
                    <h1 className="md:text-7xl lg:text-8xl leading-[1] text-5xl font-bold text-white tracking-tighter mb-6">
                        {hero.titleLine1}
                        <span className="block text-blue3-sky drop-shadow-[0_0_15px_rgba(0,141,255,0.3)]">{hero.titleLine2Gradient}</span>
                    </h1>
                    <p className="md:text-xl max-w-3xl leading-relaxed text-lg font-light text-gray-400 mx-auto mb-10">{hero.subtitle}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24">
                    <button onClick={ctaButtons.primary.onClick} className="px-8 py-4 bg-blue3-sky text-white rounded-full font-bold text-sm min-w-[200px] shadow-[0_10px_20px_-5px_rgba(0,141,255,0.4)] hover:bg-blue3-sky/90 transition-all hover:scale-105 active:scale-95">
                      {ctaButtons.primary.label}
                    </button>
                    <button onClick={ctaButtons.secondary.onClick} className="px-8 py-4 border border-white/20 text-white rounded-full font-bold text-sm min-w-[200px] hover:bg-white/5 transition-all">
                      {ctaButtons.secondary.label}
                    </button>
                </div>
                
                <div id="projects" className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-24 text-left">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative liquid-glass p-8 hover:border-blue3-sky/30 transition-all duration-500 overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue3-sky/5 blur-3xl -mr-16 -mt-16 rounded-full group-hover:bg-blue3-sky/10 transition-colors" />
                            <div className="relative z-10">
                                <div className="mb-6 h-12 flex items-center">{project.imageContent}</div>
                                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{project.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 min-h-[48px]">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-blue3-sky bg-blue3-sky/10 border border-blue3-sky/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {stats && stats.length > 0 && (
                  <div id="skills" className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center py-12 px-8 liquid-glass max-w-4xl mx-auto">
                      {stats.map((stat, index) => (
                          <div key={stat.label} className="relative">
                              <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter">{stat.value}</div>
                              <div className="text-gray-500 text-xs font-bold uppercase tracking-widest">{stat.label}</div>
                              {index < stats.length - 1 && (
                                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-white/5" />
                              )}
                          </div>
                      ))}
                  </div>
                )}
            </div>
        </main>

        <footer className="w-full py-12 px-6 border-t border-white/5 bg-blue3-deep/50">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <BrandLogo className="opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer" />
            <div className="text-gray-500 text-xs font-medium tracking-tight">
              © 2026 Jhony Bosio. Todos os direitos reservados.
            </div>
            <div className="flex gap-6">
               <a href="https://www.instagram.com/jhonybosio/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">Instagram</a>
               <a href="https://www.linkedin.com/in/jhonybosio/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">LinkedIn</a>
               <a href="https://x.com/jhonhybosio" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">X (Twitter)</a>
               <a href="https://www.facebook.com/jhonybosio" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">Facebook</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export {PortfolioPage};
