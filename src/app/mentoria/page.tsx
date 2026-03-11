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
          Diagnóstico Exclusivo
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          O medo de perder dinheiro em tempos de incerteza <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-blue3-secondary)] to-[var(--color-blue3-accent)]">acaba aqui.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Proteja seu patrimônio da inflação, identifique riscos ocultos e descubra se seus investimentos estão realmente trabalhando para sua aposentadoria.
        </p>

        <a href="#checkout" className="inline-block bg-[var(--color-blue3-secondary)] hover:bg-[var(--color-blue3-accent)] text-white font-bold py-4 px-10 rounded-xl text-lg transition-all transform hover:scale-105 shadow-[0_0_40px_-10px_rgba(0,146,255,0.5)]">
          Quero o Raio-X da Minha Carteira
        </a>
      </section>

      {/* Como Funciona / Benefícios */}
      <section className="bg-white/5 border-y border-white/10 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">O que você ganha na Mentoria?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <ShieldCheck className="w-10 h-10 text-[var(--color-blue3-secondary)] mb-4" />
              <h3 className="text-xl font-bold mb-2">Análise de Riscos</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Mapeamos os riscos atuais da sua carteira frente ao cenário macroeconômico (guerra, inflação, juros).</p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <TrendingUp className="w-10 h-10 text-[var(--color-blue3-secondary)] mb-4" />
              <h3 className="text-xl font-bold mb-2">Taxas Escondidas</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Descubra para onde seu dinheiro está indo. Identificamos fundos caros e ineficientes que corroem seus lucros.</p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <CheckCircle2 className="w-10 h-10 text-[var(--color-blue3-secondary)] mb-4" />
              <h3 className="text-xl font-bold mb-2">Diagnóstico Estrutural</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Uma visão clara dos seus pontos fortes e fracos, de forma 100% educacional e isenta.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Offer / Pricing */}
      <section id="checkout" className="max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="max-w-lg mx-auto bg-gradient-to-b from-white/10 to-transparent p-1 rounded-3xl">
          <div className="bg-[var(--color-blue3-primary)] p-8 md:p-12 rounded-[22px] border border-white/10">
            <h2 className="text-3xl font-bold mb-2">Sessão Individual</h2>
            <p className="text-gray-400 mb-8">Aproximadamente 1 hora de visão técnica profunda sobre seu patrimônio.</p>
            
            <div className="flex justify-center items-baseline gap-2 mb-8">
              <span className="text-xl text-gray-400 font-medium">R$</span>
              <span className="text-5xl font-extrabold text-white">997</span>
              <span className="text-gray-400 text-xl">,00</span>
            </div>

            <ul className="text-left space-y-4 mb-10 max-w-sm mx-auto">
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" /> <span className="text-gray-300">Diagnóstico educacional ao vivo</span></li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" /> <span className="text-gray-300">Análise de alocação de ativos</span></li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" /> <span className="text-gray-300">Identificação clara de riscos</span></li>
            </ul>

            <button className="w-full bg-white text-[var(--color-blue3-primary)] hover:bg-gray-200 font-bold py-4 px-8 rounded-xl text-lg transition-colors">
               Garantir Minha Vaga
            </button>
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
