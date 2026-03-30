"use client";

import Link from "next/link";
import { 
  Info, 
  Landmark, 
  Activity, 
  Zap, 
  FileText, 
  Globe, 
  Users, 
  CheckCircle2,
  Diamond,
  Rocket,
  BookOpen,
  MessageCircle,
  Calendar,
  ChevronRight
} from "lucide-react";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jhony Bosio",
    "jobTitle": "Assessor de Investimentos & Mentor",
    "description": "Assessor nº1 em Fee Fixo da Blue3 Investimentos e Mentor de Assessores 3.0. Especialista em ETFs e IA.",
    "url": "https://jhonybosio.github.io",
    "sameAs": [
      "https://blue3investimentos.com.br",
      "https://wa.me/5516996045700"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Mentoria e Assessoria",
      "itemListElement": [
        {
          "@type": "Course",
          "name": "Mentoria Assessor 3.0",
          "description": "Método para assessores escalarem sua operação com IA e Fee Fixo."
        },
        {
          "@type": "Service",
          "name": "Assessoria Fee Fixo",
          "description": "Gestão patrimonial com alinhamento total de interesses."
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-deep-950 text-white selection:bg-gold-500/30 font-sans overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-gold-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-gold-500/5 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-12 md:py-20 flex flex-col items-center">
        {/* Hero & Profile Section */}
        <section className="w-full mb-24 relative pt-8 md:pt-16 animate-premium-fade text-center">
          <div className="flex flex-col items-center">
            <div className="relative mb-8 group">
              <div className="absolute inset-0 bg-gold-400/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border border-white/10 p-1.5 backdrop-blur-sm bg-white/5 shadow-2xl">
                <img 
                  alt="Jhony Bosio — Estrategista de Investimentos" 
                  className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700" 
                  src="/profile.png" 
                />
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-6 leading-none text-gradient drop-shadow-sm">
              Jhony Bosio
            </h1>
            
            <p className="inline-flex items-center gap-2 text-gold-400 font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase mb-16 py-2 px-6 border border-gold-400/20 rounded-full bg-gold-400/5 backdrop-blur-md">
              <Diamond className="w-3 h-3" /> Referência Nacional em Fee Fixo | Mentor Assessor 3.0
            </p>

            <div className="glass-card w-full max-w-2xl p-8 md:p-10 text-left border-gold-400/10 shadow-gold-400/5">
              <h2 className="text-xl md:text-2xl font-black mb-6 flex items-center gap-3 text-white">
                <Info className="w-6 h-6 text-gold-400" />
                Quem é Jhony Bosio
              </h2>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                Especialista em gestão patrimonial com mais de 10 anos de mercado e <strong className="text-white">Assessor nº1 em Fee Fixo da Blue3 Investimentos</strong>. Dedico-me a transformar a complexidade financeira em clareza estratégica para famílias e investidores de alta performance. Minha missão é proteger e potencializar o seu legado através de transparência radical e tecnologias exponenciais.
              </p>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="w-full mb-28 animate-premium-fade" style={{ animationDelay: '0.2s' }}>
          <p className="text-center text-[10px] md:text-xs uppercase tracking-[0.3em] text-gray-500 font-black mb-10">
            Autoridade e Fiduciário
          </p>
          <div className="flex justify-center flex-wrap gap-10 md:gap-20 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            <a className="flex items-center gap-3 group transition-colors" href="https://blue3investimentos.com.br" target="_blank" rel="noopener noreferrer">
              <div className="bg-white p-2 rounded-lg">
                <img src="/blue3-logo.png" alt="Blue3" className="h-6 md:h-8 object-contain invert" />
              </div>
            </a>
            <a className="flex items-center gap-3 group transition-colors" href="https://xpi.com.br" target="_blank" rel="noopener noreferrer">
              <div className="bg-white p-2 rounded-lg">
                <img src="/xp-logo.png" alt="XP" className="h-6 md:h-8 object-contain invert" />
              </div>
            </a>
          </div>
        </section>

        {/* Main Product: Mentoria Assessor 3.0 */}
        <section className="w-full max-w-3xl mb-16 relative text-left animate-premium-fade" style={{ animationDelay: '0.3s' }}>
          <div className="absolute -right-20 top-1/2 w-96 h-96 bg-gold-400/5 rounded-full blur-[100px] -z-10 -translate-y-1/2 hidden md:block"></div>
          
          <div className="glass-card overflow-hidden border-gold-400/30 shadow-gold-400/10 hover:border-gold-400 transition-all duration-500">
            <div className="bg-white/5 p-8 md:p-10 flex justify-between items-center relative border-b border-white/5">
               <div className="absolute top-4 right-4 px-3 py-1 bg-gold-500 text-deep-950 text-[9px] font-black uppercase tracking-widest shadow-xl z-20 rounded-full">
                 Autoridade Máxima
               </div>
              <div>
                <h3 className="font-black text-3xl md:text-4xl text-white tracking-tight mb-1">Mentoria Assessor 3.0</h3>
                <p className="text-[10px] md:text-xs text-gold-400 uppercase tracking-[0.3em] font-black">Fee Fixo • ETF • IA</p>
              </div>
              <div className="text-right">
                <span className="block text-[10px] text-gray-500 line-through mb-1">R$ 3.997</span>
                <span className="text-3xl md:text-5xl font-black text-gold-400 drop-shadow-sm">R$ 1.997<span className="text-sm font-medium text-gray-500 select-none">*</span></span>
              </div>
            </div>
            
            <div className="p-10 font-medium">
              <p className="text-gray-400 text-lg mb-10 leading-relaxed font-semibold">
                O método para assessores XP escalarem sua operação com Inteligência Artificial e alinhamento total via Fee Fixo.
              </p>
              
              <ul className="grid md:grid-cols-2 gap-6 mb-12">
                {[
                  { icon: Zap, label: "Instalação de IA Local" },
                  { icon: FileText, label: "Discurso CVM 179" },
                  { icon: Globe, label: "Estratégia ETF Global" },
                  { icon: Users, label: "Grupo de Conteúdo IA" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-300">
                    <div className="bg-gold-400/10 p-2 rounded-lg">
                      <item.icon className="w-4 h-4 text-gold-400" />
                    </div>
                    <span className="text-sm font-bold">{item.label}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-5">
                <Link 
                  href="/mentoria" 
                  className="block w-full bg-gold-500 hover:bg-gold-400 text-deep-950 font-black py-6 rounded-2xl shadow-2xl transition-all text-center text-xl tracking-tight animate-magnetic-hover"
                >
                  ACESSAR MÉTODO COMPLETO
                </Link>
                <p className="text-center text-[9px] text-gray-500 uppercase tracking-[0.4em] font-black">
                  Oferta exclusiva para assessores fiduciários
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Separator / Divider */}
        <div className="w-full flex items-center gap-6 mb-16 opacity-30 animate-premium-fade" style={{ animationDelay: '0.4s' }}>
          <div className="h-px bg-white/20 flex-1"></div>
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 whitespace-nowrap">Soluções High-Ticket</span>
          <div className="h-px bg-white/20 flex-1"></div>
        </div>

        {/* Other Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 w-full animate-premium-fade mb-24" style={{ animationDelay: '0.5s' }}>
          {/* Raio-X Educativo */}
          <div className="glass-card p-8 flex flex-col hover:border-gold-400/50 transition-all duration-500 border-white/5">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="font-black text-2xl text-white mb-1">Raio-X Educativo</h3>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Diagnóstico de Carteira</p>
              </div>
              <div className="text-right">
                <span className="block text-[10px] text-gray-500 line-through">R$ 1.200</span>
                <span className="text-2xl font-black text-white">R$ 497</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-10 flex-1">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0" />
                <p className="text-sm text-gray-400 leading-snug">
                  <strong className="text-white">Diagnóstico de Risco:</strong> Identificação de vulnerabilidades ocultas.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0" />
                <p className="text-sm text-gray-400 leading-snug">
                  <strong className="text-white">Otimização de Taxas:</strong> Redução de custos com bancos e corretoras.
                </p>
              </li>
            </ul>

            <a 
              href="https://buy.stripe.com/cNi5kF5Mqeg1cT71f04ko05" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full bg-white/5 hover:bg-white/10 text-white font-black py-4 rounded-xl border border-white/10 transition-all text-center text-xs uppercase tracking-widest animate-magnetic-hover"
            >
              RESERVAR AGORA
            </a>
          </div>

          {/* Mentoria Premium */}
          <div className="glass-card p-8 flex flex-col border-gold-400/30 bg-gold-400/5 hover:bg-gold-400/10 transition-all duration-500 shadow-gold-400/5 overflow-hidden relative group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-700">
               <Diamond className="w-32 h-32 text-gold-400" />
            </div>
            
            <div className="flex justify-between items-start mb-8 relative z-10">
              <div>
                <h3 className="font-black text-2xl text-white mb-1">Mentoria Premium</h3>
                <p className="text-[10px] text-gold-400 uppercase tracking-widest font-black">Individual • VIP</p>
              </div>
              <div className="text-right">
                <span className="block text-[10px] text-gold-400/40 uppercase font-black mb-1">Ticket</span>
                <span className="text-2xl font-black text-gold-400">R$ 9.997</span>
              </div>
            </div>
            
            <p className="text-sm text-gray-400 mb-10 leading-relaxed flex-1 relative z-10 font-medium">
              Implementação direta no seu escritório ou carteira. Eu construo seu sistema de IA e curadoria completo. Edição limitada.
            </p>

            <a 
              href="https://buy.stripe.com/00w9AV4Im8VH4mB9Lw4ko0a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full bg-gold-500 hover:bg-gold-400 text-deep-950 font-black py-4 rounded-xl shadow-lg transition-all text-center text-xs uppercase tracking-widest relative z-10 animate-magnetic-hover"
            >
              SOLICITAR ACESSO VIP
            </a>
          </div>
        </div>

        {/* Secondary Navigation Section */}
        <section className="w-full max-w-2xl space-y-4 mb-32 animate-premium-fade" style={{ animationDelay: '0.6s' }}>
          {[
            { href: "/mentoria", label: "Módulo Mentoria Assessor 3.0", icon: Rocket, isExternal: false },
            { href: "/notebook", label: "Notebook de Educação Patrimonial", icon: BookOpen, isExternal: false },
            { href: "https://api.whatsapp.com/send?phone=5516996045700&text=tenho%20mais%20de%20500mil%20e%20quero%20assessoria%20no%20modelo%20fee%20fixo", label: "Assessoria Completa (Alta Renda)", icon: Users, isExternal: true }
          ].map((item, i) => (
            <div key={i}>
              {item.isExternal ? (
                 <a 
                  className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-gold-400/40 hover:bg-white/10 transition-all group" 
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-white/5 p-2.5 rounded-xl group-hover:bg-gold-400 group-hover:text-deep-950 transition-colors">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-sm md:text-lg">{item.label}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-gold-400 transition-colors" />
                </a>
              ) : (
                <Link 
                  className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-gold-400/40 hover:bg-white/10 transition-all group" 
                  href={item.href}
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-white/5 p-2.5 rounded-xl group-hover:bg-gold-400 group-hover:text-deep-950 transition-colors">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-sm md:text-lg">{item.label}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-gold-400 transition-colors" />
                </Link>
              )}
            </div>
          ))}
        </section>

        {/* Contact CTA */}
        <section className="w-full max-w-2xl mb-24 animate-premium-fade" style={{ animationDelay: '0.7s' }}>
          <h4 className="text-center text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] mb-12">
            Fale Diretamente Comigo
          </h4>
          <div className="grid grid-cols-2 gap-6">
            <a href="https://wa.me/5516996045700" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-4 p-8 rounded-3xl bg-green-500/5 border border-green-500/20 text-green-500 hover:bg-green-500/10 transition-all group">
              <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-black uppercase tracking-widest">WhatsApp</span>
            </a>
            <a href="https://outlook.office.com/bookwithme/user/9fda1584224147cdba97205d3501d2a2@investimentosblue.com.br/meetingtype/nQI_YkfutkiuHFTydHmxXA2?anonymous&ismsaljsauthenabled&ep=mlink" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-4 p-8 rounded-3xl bg-gold-400/5 border border-gold-400/20 text-gold-400 hover:bg-gold-400/10 transition-all group">
              <Calendar className="w-8 h-8 group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-black uppercase tracking-widest">Agendar</span>
            </a>
          </div>
        </section>

        {/* Footer Branding */}
        <footer className="w-full pt-20 border-t border-white/5 animate-premium-fade" style={{ animationDelay: '0.8s' }}>
          <div className="flex flex-col items-center gap-8">
            <p className="text-center text-[9px] text-gray-600 leading-loose max-w-sm mx-auto uppercase tracking-[0.2em]">
              © {new Date().getFullYear()} Jhony Bosio. Autoridade máxima em assessoria fiduciária.
              Rentabilidade passada não garante resultados futuros.
            </p>
            <span className="text-2xl font-black text-white/20 block tracking-tighter uppercase italic">
              Legacy Focus
            </span>
          </div>
        </footer>
      </main>
    </div>
  );
}
