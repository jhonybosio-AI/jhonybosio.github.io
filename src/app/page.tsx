import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-surface-dim text-on-surface selection:bg-primary selection:text-on-primary">
      <main className="max-w-5xl mx-auto px-6 py-12 md:py-20 flex flex-col items-center font-inter">
        {/* Hero & Profile Section */}
        <section className="w-full mb-16 relative">
          <div className="absolute top-0 right-0 w-64 h-64 neon-glow -z-10 translate-x-1/4 -translate-y-1/4"></div>
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-6">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-primary-container p-1 shadow-2xl shadow-primary-container/20">
                <img 
                  alt="Jhony Bosio" 
                  className="w-full h-full object-cover rounded-full" 
                  src="/profile.png" 
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold font-manrope tracking-tight text-on-surface mb-2 leading-tight">
              Jhony Bosio
            </h1>
            <p className="text-primary font-semibold tracking-wide text-sm md:text-base uppercase mb-8">
              Assessor de Investimentos
            </p>
            

            <div className="glass-card w-full max-w-2xl p-6 md:p-8 rounded-2xl border border-outline-variant/10 text-left">
              <h2 className="text-lg md:text-xl font-bold font-manrope mb-4 flex items-center gap-2 text-white">
                <span className="material-symbols-outlined text-primary">info</span>
                Quem é Jhony Bosio
              </h2>
              <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">
                Especialista em gestão patrimonial com mais de 10 anos de mercado e <strong>Assessor nº1 em Fee Fixo da Blue3 Investimentos</strong>. Pioneiro na implementação de IA local para gestão de carteiras, transformo a complexidade financeira em clareza estratégica para famílias e investidores de alta performance. Minha missão é unir transparência radical e tecnologia de ponta para proteger e potencializar o seu legado.
              </p>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="w-full mb-20">
          <p className="text-center text-[10px] md:text-xs uppercase tracking-[0.2em] text-outline mb-8">
            Autoridade e Confiança
          </p>
          <div className="flex justify-center flex-wrap gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all">
            <a className="flex items-center gap-3 hover:text-primary transition-colors" href="https://blue3investimentos.com.br" target="_blank" rel="noopener noreferrer">
              <span className="material-symbols-outlined text-3xl">account_balance</span>
              <span className="font-manrope font-bold text-sm md:text-base uppercase tracking-wider">Blue3</span>
            </a>
            <a className="flex items-center gap-3 hover:text-primary transition-colors" href="https://xpi.com.br" target="_blank" rel="noopener noreferrer">
              <span className="material-symbols-outlined text-3xl">monitoring</span>
              <span className="font-manrope font-bold text-sm md:text-base uppercase tracking-wider">XP Investimentos</span>
            </a>
          </div>
        </section>

        {/* NEW Product: Mentoria Assessor 3.0 */}
        <section className="w-full max-w-3xl mb-12 relative text-left group">
          <div className="absolute -right-20 top-1/2 w-80 h-80 bg-primary/10 rounded-full blur-[100px] -z-10 -translate-y-1/2 hidden md:block"></div>
          <div className="bg-gradient-to-br from-surface-container to-surface-container-high rounded-3xl border border-primary/30 overflow-hidden shadow-2xl shadow-primary/10 hover:border-primary transition-all">
            <div className="bg-gradient-to-r from-primary-container to-[#0039b5] p-6 md:p-8 flex justify-between items-center relative">
               <div className="absolute top-0 right-0 p-2 bg-yellow-400 text-black text-[10px] font-black uppercase tracking-widest rotate-12 translate-x-2 -translate-y-2 shadow-lg z-10 border border-black/10">
                 Assessor nº1
               </div>
              <div>
                <h3 className="font-manrope font-extrabold text-xl md:text-2xl text-white">Mentoria Assessor 3.0</h3>
                <p className="text-xs md:text-sm text-white/90">Fee Fixo + ETF + IA</p>
              </div>
              <div className="text-right">
                <span className="block text-[10px] md:text-xs text-white/60 line-through">R$ 3.997</span>
                <span className="text-2xl md:text-3xl font-black text-white">R$ 1.997*</span>
              </div>
            </div>
            <div className="p-8 md:p-10">
              <p className="text-on-surface-variant text-sm md:text-base mb-8 leading-relaxed font-medium">
                O método para assessores XP escalarem sua operação com Inteligência Artificial e alinhamento total via Fee Fixo.
              </p>
              <ul className="grid md:grid-cols-2 gap-4 mb-10">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-sm">bolt</span>
                  <span className="text-xs md:text-sm text-on-surface">Instalação de IA Local</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-sm">contract</span>
                  <span className="text-xs md:text-sm text-on-surface">Discurso CVM 179</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-sm">public</span>
                  <span className="text-xs md:text-sm text-on-surface">Estratégia ETF Global</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-sm">group</span>
                  <span className="text-xs md:text-sm text-on-surface">Grupo de Conteúdo IA</span>
                </li>
              </ul>
              <div className="flex flex-col gap-4">
                <a 
                  href="/mentoria-assessor" 
                  className="block w-full bg-white text-surface-container-lowest font-black py-5 rounded-2xl shadow-xl hover:bg-primary-fixed hover:scale-[1.01] transition-all active:scale-95 text-center text-base md:text-lg uppercase tracking-tight"
                >
                  CONHECER A MENTORIA
                </a>
                <p className="text-center text-[10px] text-outline uppercase tracking-[0.2em]">
                  *Com cupom exclusivo para escritórios
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Separator / Divider */}
        <div className="w-full flex items-center gap-4 mb-12 opacity-20">
          <div className="h-px bg-outline flex-1"></div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-outline whitespace-nowrap">Para Investidores PF</span>
          <div className="h-px bg-outline flex-1"></div>
        </div>

        {/* 🛡️ Level 2: Raio-X Educativo */}
        <section className="w-full max-w-3xl mb-12 relative text-left">
          <div className="absolute -left-20 top-1/2 w-80 h-80 neon-glow -z-10 -translate-y-1/2 hidden md:block"></div>
          <div className="bg-surface-container/50 rounded-3xl border border-outline-variant/20 overflow-hidden shadow-xl">
            <div className="bg-surface-container p-6 md:p-8 flex justify-between items-center border-b border-outline-variant/10">
              <div>
                <h3 className="font-manrope font-extrabold text-xl md:text-2xl text-white">Raio-X Educativo</h3>
                <p className="text-xs md:text-sm text-outline">Análise profunda da sua carteira</p>
              </div>
              <div className="text-right">
                <span className="block text-[10px] md:text-xs text-outline line-through">R$ 1.200</span>
                <span className="text-2xl md:text-3xl font-black text-white">R$ 497</span>
              </div>
            </div>
            <div className="p-8 md:p-10">
              <ul className="space-y-6 mb-10">
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary bg-primary/10 rounded-full p-1.5 text-sm md:text-base" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <p className="text-sm md:text-base text-on-surface-variant">
                    <strong className="text-on-surface">Diagnóstico de Risco:</strong> Identificação de vulnerabilidades ocultas.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary bg-primary/10 rounded-full p-1.5 text-sm md:text-base" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <p className="text-sm md:text-base text-on-surface-variant">
                    <strong className="text-on-surface">Otimização de Taxas:</strong> Redução de custos com bancos e corretoras.
                  </p>
                </li>
              </ul>
              <a 
                href="https://buy.stripe.com/cNi5kF5Mqeg1cT71f04ko05" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full bg-surface-container-highest text-white font-bold py-5 rounded-2xl border border-outline-variant/20 hover:bg-outline-variant/30 transition-all text-center text-base uppercase tracking-widest"
              >
                RESERVAR AGORA
              </a>
            </div>
          </div>
        </section>

        {/* 💎 LEVEL 3: MENTORIA PREMIUM (Alto Ticket) */}
        <section className="w-full max-w-3xl mb-20 relative text-left">
          <div className="absolute -right-20 top-1/2 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] -z-10 -translate-y-1/2 hidden md:block"></div>
          <div className="bg-gradient-to-br from-[#1c1917] to-surface-container-high rounded-3xl border border-amber-500/30 overflow-hidden shadow-2xl shadow-amber-500/5 hover:border-amber-500 transition-all">
            <div className="bg-gradient-to-r from-[#292524] to-[#1c1917] p-6 md:p-8 flex justify-between items-center border-b border-amber-500/10">
              <div className="flex items-center gap-4">
                <div className="bg-amber-500/10 p-3 rounded-2xl text-amber-500">
                  <span className="material-symbols-outlined text-3xl">diamond</span>
                </div>
                <div>
                  <h3 className="font-manrope font-extrabold text-xl md:text-2xl text-white">Mentoria Premium</h3>
                  <p className="text-xs md:text-sm text-white/50 uppercase tracking-widest">Escritórios & Alta Renda</p>
                </div>
              </div>
              <div className="text-right">
                <span className="block text-[10px] md:text-xs text-white/30 line-through">Consultoria</span>
                <span className="text-2xl md:text-3xl font-black text-amber-500">R$ 9.997</span>
              </div>
            </div>
            <div className="p-8 md:p-10">
              <p className="text-on-surface-variant text-sm md:text-base mb-8 leading-relaxed font-medium">
                Implementação direta no seu escritório ou carteira. Eu construo seu sistema de IA e curadoria completo. Edição limitada para garantir exclusividade.
              </p>
              <div className="flex flex-col gap-4">
                <a 
                  href="https://buy.stripe.com/00w9AV4Im8VH4mB9Lw4ko0a" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-amber-500 text-black font-black py-5 rounded-2xl shadow-xl shadow-amber-500/20 hover:bg-amber-400 hover:scale-[1.01] transition-all active:scale-95 text-center text-lg uppercase tracking-tight"
                >
                  SOLICITAR ACESSO VIP
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Secondary Links */}
        <section className="w-full max-w-2xl space-y-4 mb-20">
          <Link className="flex items-center justify-between p-5 md:p-6 rounded-2xl bg-surface-container/30 border border-outline-variant/10 hover:bg-surface-container/50 transition-colors group" href="/mentoria-assessor">
            <div className="flex items-center gap-4 text-left">
              <span className="material-symbols-outlined text-outline text-2xl group-hover:text-primary transition-colors">rocket_launch</span>
              <span className="font-semibold text-sm md:text-base">Módulo Mentoria Assessor 3.0</span>
            </div>
            <span className="material-symbols-outlined text-outline text-lg">chevron_right</span>
          </Link>
          <a className="flex items-center justify-between p-5 md:p-6 rounded-2xl bg-surface-container/30 border border-outline-variant/10 hover:bg-surface-container/50 transition-colors group" href="/notebook">
            <div className="flex items-center gap-4 text-left">
              <span className="material-symbols-outlined text-outline text-2xl group-hover:text-primary transition-colors">menu_book</span>
              <span className="font-semibold text-sm md:text-base">Notebook de Educação</span>
            </div>
            <span className="material-symbols-outlined text-outline text-lg">chevron_right</span>
          </a>
          <a className="flex items-center justify-between p-5 md:p-6 rounded-2xl bg-surface-container/30 border border-outline-variant/10 hover:bg-surface-container/50 transition-colors group" href="https://api.whatsapp.com/send?phone=5516996045700&text=tenho%20mais%20de%20500mil%20e%20quero%20assessoria%20no%20modelo%20fee%20fixo" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center gap-4 text-left">
              <span className="material-symbols-outlined text-outline text-2xl group-hover:text-primary transition-colors">groups</span>
              <span className="font-semibold text-sm md:text-base">Assessoria Completa (Alta Renda)</span>
            </div>
            <span className="material-symbols-outlined text-outline text-lg">chevron_right</span>
          </a>
        </section>


        {/* Contact CTA */}
        <section className="w-full max-w-2xl mb-12">
          <h4 className="text-center text-xs font-bold text-outline uppercase tracking-widest mb-8">
            Fale Diretamente Comigo
          </h4>
          <div className="flex flex-col md:flex-row gap-4">
            <a href="https://wa.me/5516996045700" target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col items-center justify-center gap-2 p-6 md:p-8 rounded-3xl bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] hover:bg-[#25D366]/20 transition-all">
              <span className="material-symbols-outlined text-3xl md:text-4xl">chat</span>
              <span className="text-xs md:text-sm font-bold uppercase tracking-wide">WhatsApp</span>
            </a>
            <a href="https://outlook.office.com/bookwithme/user/9fda1584224147cdba97205d3501d2a2@investimentosblue.com.br/meetingtype/nQI_YkfutkiuHFTydHmxXA2?anonymous&ismsaljsauthenabled&ep=mlink" target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col items-center justify-center gap-2 p-6 md:p-8 rounded-3xl bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-all">
              <span className="material-symbols-outlined text-3xl md:text-4xl">calendar_month</span>
              <span className="text-xs md:text-sm font-bold uppercase tracking-wide">Agendar Reunião</span>
            </a>
          </div>
        </section>

        {/* Footer Branding */}
        <footer className="w-full pt-16 border-t border-outline-variant/10">
          <div className="flex flex-col items-center gap-6">
            <p className="text-center text-[10px] text-outline leading-relaxed max-w-md mx-auto">
              © {new Date().getFullYear()} Jhony Bosio. Todos os direitos reservados. 
              Investimentos envolvem riscos. O desempenho passado não garante resultados futuros.
            </p>
            <span className="text-xl font-bold text-on-surface block font-manrope tracking-tight">
              Jhony Bosio
            </span>
          </div>
        </footer>
      </main>
    </div>
  );
}
