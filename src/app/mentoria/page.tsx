import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShieldCheck, TrendingUp } from "lucide-react";

export default function MentoriaPage() {
  return (
    <main className="min-h-screen bg-deep-950 text-white font-sans selection:bg-gold-500/30 overflow-x-hidden">
      {/* Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-gold-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-gold-500/5 blur-[120px] rounded-full" />
      </div>

      {/* Header/Nav */}
      <nav className="relative z-10 w-full max-w-4xl mx-auto p-6 flex justify-between items-center animate-premium-fade">
        <Link href="/" className="text-gray-400 hover:text-gold-400 transition-all flex items-center gap-2 group">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Voltar
        </Link>
        <div className="font-bold text-xl tracking-tighter text-gradient">Jhony Bosio</div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 pt-12 pb-20 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-gold-400/10 text-gold-400 text-sm font-semibold mb-6 border border-gold-400/20 animate-premium-fade" style={{ animationDelay: '0.1s' }}>
          Diagnóstico & Mentoria Unificada
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight animate-premium-fade" style={{ animationDelay: '0.2s' }}>
          Raio-X Educativo da <br/> <span className="text-gradient">Sua Carteira.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-premium-fade" style={{ animationDelay: '0.3s' }}>
          Uma imersão de 1 hora para analisar sua carteira sob a ótica do <span className="text-white">Alinhamento Fiduciário</span> e <span className="text-white">Eficiência Global</span>. Clareza total para quem tem R$ 200k+ investidos.
        </p>

        <a 
          href="https://buy.stripe.com/cNi5kF5Mqeg1cT71f04ko05" 
          className="inline-block bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-deep-950 font-bold py-4 px-10 rounded-xl text-lg animate-premium-fade animate-magnetic-hover shadow-[0_0_40px_-10px_rgba(251,191,36,0.3)]"
          style={{ animationDelay: '0.4s' }}
        >
          Garantir Meu Raio-X Agora
        </a>
      </section>

      {/* Offer / Pricing */}
      <section id="checkout" className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="max-w-lg mx-auto p-[1px] rounded-3xl bg-gradient-to-b from-gold-400/20 to-transparent animate-premium-fade" style={{ animationDelay: '0.5s' }}>
          <div className="bg-deep-900 p-8 md:p-12 rounded-[22px] border border-white/5 backdrop-blur-xl">
            <h2 className="text-3xl font-bold mb-2 text-white">Raio-X Educativo</h2>
            <p className="text-gray-400 mb-8 text-sm leading-relaxed">
              Análise técnica de riscos e custos ocultos. Plano de ação por escrito e 7 dias de suporte institucional via WhatsApp.
            </p>
            
            <div className="flex justify-center items-baseline gap-2 mb-8">
              <span className="text-xl text-gray-400 font-medium">R$</span>
              <span className="text-5xl font-extrabold text-gradient">497</span>
              <span className="text-gray-400 text-xl">,00</span>
            </div>

            <ul className="text-left space-y-4 mb-10 max-w-sm mx-auto">
              <li className="flex items-center gap-3"><TrendingUp className="w-5 h-5 text-gold-400 flex-shrink-0" /> <span className="text-gray-300 italic">Diagnóstico educacional ao vivo</span></li>
              <li className="flex items-center gap-3"><ShieldCheck className="w-5 h-5 text-gold-400 flex-shrink-0" /> <span className="text-gray-300 italic">Análise de alocação de ativos</span></li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-gold-400 flex-shrink-0" /> <span className="text-gray-300 italic">Identificação de conflitos de interesse</span></li>
            </ul>

            <a href="https://buy.stripe.com/cNi5kF5Mqeg1cT71f04ko05" className="block w-full bg-white text-deep-950 hover:bg-gold-50 font-bold py-4 px-8 rounded-xl text-lg transition-colors animate-magnetic-hover">
               Garantir Minha Vaga
            </a>
            <p className="text-[10px] text-gray-500 mt-4 text-center uppercase tracking-widest">
              Ambiente Seguro via Stripe
            </p>
          </div>
        </div>
      </section>

      {/* Footer Disclaimer */}
      <footer className="relative z-10 w-full border-t border-white/5 py-12 mt-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[10px] text-gray-500 max-w-2xl mx-auto leading-relaxed uppercase tracking-widest opacity-60">
            Diagnóstico estritamente educacional sobre estruturas de carteira. Nenhuma informação contida aqui configura recomendação de valores mobiliários, conforme Resolução CVM 179.
          </p>
        </div>
      </footer>
    </main>
  );
}
