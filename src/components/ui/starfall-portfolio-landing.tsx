"use client"

import React, { useEffect, useState } from 'react';
import { BrandLogo } from './logos';

interface NavLink { label: string; href: string; }
interface Project { 
  title: string; 
  description: string; 
  tags: string[]; 
  imageContent?: React.ReactNode; 
  href?: string;
  originalPrice?: string;
  promotionalMessage?: string;
  couponMessage?: string;
  limitedSpots?: boolean;
  highlight?: boolean;
}
interface Stat { value: string; label: string; }

export interface PortfolioPageProps {
  logo?: React.ReactNode;
  navLinks?: NavLink[];
  hero?: { titleLine1: React.ReactNode; titleLine2Gradient: React.ReactNode; subtitle: React.ReactNode; };
  ctaButtons?: { primary: { label: string; onClick?: () => void; }; secondary: { label: string; onClick?: () => void; }; };
  projects?: Project[];
  stats?: Stat[];
  showAnimatedBackground?: boolean;
  children?: React.ReactNode;
}

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

const defaultData: any = {
  logo: <BrandLogo />,
  navLinks: [ { label: 'Sobre', href: '#about' } ],
  hero: { titleLine1: 'Assessor nº1', titleLine2Gradient: 'Mentor', subtitle: 'Especialista' },
  ctaButtons: { primary: { label: 'OK', onClick: () => {} }, secondary: { label: 'Zap', onClick: () => {} } },
  projects: [],
  stats: [],
  showAnimatedBackground: true,
};

const PortfolioPage: React.FC<PortfolioPageProps> = ({
  logo = defaultData.logo,
  navLinks = defaultData.navLinks,
  hero = defaultData.hero,
  ctaButtons = defaultData.ctaButtons,
  projects = defaultData.projects,
  stats = defaultData.stats,
  showAnimatedBackground = true,
  children,
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
                <div className="flex items-center">{logo}</div>
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
                        <span className="block text-blue3-sky">{hero.titleLine2Gradient}</span>
                    </h1>
                    <p className="md:text-xl max-w-3xl leading-relaxed text-lg font-light text-gray-400 mx-auto mb-10">{hero.subtitle}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24">
                    <button onClick={ctaButtons.primary.onClick} className="px-8 py-4 bg-blue3-sky text-white rounded-full font-bold text-sm min-w-[200px] shadow-[0_10px_20px_-5px_rgba(0,141,255,0.4)]">
                      {ctaButtons.primary.label}
                    </button>
                </div>
                <div id="projects" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-24 text-left items-stretch">
                    {projects.map((project, index) => (
                        <div key={index} className="liquid-glass p-8 rounded-[32px]">
                            <h3 className="text-xl font-bold mb-3 tracking-tight text-white">{project.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            {children}
        </main>
        <footer className="w-full py-12 px-6 border-t border-white/5 bg-blue3-deep/50">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <BrandLogo className="opacity-50 grayscale" />
            <div className="text-gray-500 text-xs font-medium tracking-tight">© 2026 Jhony Bosio.</div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export {PortfolioPage};
