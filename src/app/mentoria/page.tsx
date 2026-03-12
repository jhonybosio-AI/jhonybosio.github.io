import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShieldCheck, TrendingUp } from "lucide-react";

export default function MentoriaPage() {
  return (
    <main className="min-h-screen bg-[var(--color-blue3-primary)] text-white font-sans selection:bg-[var(--color-blue3-secondary)]">
      {/* Header/Nav Simples */}
      <nav className="w-full max-w-4xl mx-auto p-6 flex justify-between items-center">
        <Link href="/" className="text-gray-400 hover:text-white transition flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Voltar
        </Link>
        <div className="font-bold text-xl tracking-tighter">Jhony Bosio</div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 pt-12 pb-20 text-center animate-fade-in-up">
        <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-blue3-secondary)]/20 text-[var(--color-blue3-secondary)] text-sm font-semibold mb-6 border border-[var(--color-blue3-secondary)]/30">
          Diagnóstico & Mentoria Unificada
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          Raio-X Educativo da <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-blue3-secondary)] to-[var(--color-blue3-accent)]">Sua Carteira.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          1 hora ao vivo comigo para analisar sua carteira posição por posição. Riscos, custos ocultos e clareza total para quem tem R$ 200k+ investidos.
        </p>

        <a href="https://buy.stripe.com/cNi5kF5Mqeg1cT71f04ko05" className="inline-block bg-[var(--color-blue3-secondary)] hover:bg-[var(--color-blue3-accent)] text-white font-bold py-4 px-10 rounded-xl text-lg transition-all transform hover:scale-105 shadow-[0_0_40px_-10px_rgba(0,146,255,0.5)]">
          Garantir Meu Raio-X Agora
        </a>
      </section>

      {/* ... (Como Funciona Section remains similar) ... */}

      {/* Offer / Pricing */}
      <section id="checkout" className="max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="max-w-lg mx-auto bg-gradient-to-b from-white/10 to-transparent p-1 rounded-3xl">
          <div className="bg-[var(--color-blue3-primary)] p-8 md:p-12 rounded-[22px] border border-white/10">
            <h2 className="text-3xl font-bold mb-2">Raio-X Educativo</h2>
            <p className="text-gray-400 mb-8 text-sm leading-relaxed">
              1 hora ao vivo comigo. Analiso posição por posição: riscos e custos ocultos. Plano de ação por escrito e 7 dias de suporte no WhatsApp. Garantia incondicional de 7 dias.
            </p>
            
            <div className="flex justify-center items-baseline gap-2 mb-8">
              <span className="text-xl text-gray-400 font-medium">R$</span>
              <span className="text-5xl font-extrabold text-white">497</span>
              <span className="text-gray-400 text-xl">,00</span>
            </div>

            <ul className="text-left space-y-4 mb-10 max-w-sm mx-auto">
              <li className="flex items-center gap-3"><TrendingUp className="w-5 h-5 text-[var(--color-blue3-secondary)] flex-shrink-0" /> <span className="text-gray-300">Diagnóstico educacional ao vivo</span></li>
              <li className="flex items-center gap-3"><ShieldCheck className="w-5 h-5 text-[var(--color-blue3-secondary)] flex-shrink-0" /> <span className="text-gray-300">Análise de alocação de ativos</span></li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[var(--color-blue3-secondary)] flex-shrink-0" /> <span className="text-gray-300">Identificação clara de riscos</span></li>
            </ul>

            <a href="https://buy.stripe.com/cNi5kF5Mqeg1cT71f04ko05" className="block w-full bg-white text-[var(--color-blue3-primary)] hover:bg-gray-200 font-bold py-4 px-8 rounded-xl text-lg transition-colors">
               Garantir Minha Vaga
            </a>
            <p className="text-xs text-gray-500 mt-4 text-center">
              Você será redirecionado para um ambiente 100% seguro (Stripe).
            </p>
          </div>
        </div>
      </section>

      {/* Footer Disclaimer */}
      <footer className="w-full border-t border-white/5 py-8 mt-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Diagnóstico estritamente educacional sobre estruturas de carteira.<br/><br/>
            Nenhuma informação contida aqui configura recomendação de valores mobiliários, isentando de responsabilidades regulatórias CVM/ANBIMA. Os resultados obtidos em análises passadas não são garantia de rentabilidade futura.
          </p>
        </div>
      </footer>
    </main>
  );
}
