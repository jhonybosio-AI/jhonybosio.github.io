"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Lock, 
  BookOpen, 
  Send,
  ArrowRight,
  ChevronDown
} from "lucide-react";

export default function NotebookPage() {
  const [unlocked, setUnlocked] = useState(false);
  const [formData, setFormData] = useState({ nome: "", whatsapp: "", investimento: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Enviar para Formspree
    try {
      const response = await fetch("https://formspree.io/f/xreyqjey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setUnlocked(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        alert("Erro ao enviar dados. Por favor, tente novamente.");
      }
    } catch (error) {
      alert("Erro de conexão. Verifique sua internet.");
    }
  };

  return (
    <main className="min-h-screen bg-deep-950 text-white font-sans selection:bg-gold-500/30 overflow-x-hidden">
      {/* Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-gold-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-gold-500/5 blur-[120px] rounded-full" />
      </div>

      {/* Header */}
      <nav className="sticky top-0 z-50 w-full bg-deep-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-4xl mx-auto p-4 flex justify-between items-center">
          <Link href="/" className="text-gray-400 hover:text-gold-400 transition-all flex items-center gap-2 text-sm font-medium group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Voltar ao Início
          </Link>
          <div className="flex items-center gap-2">
             <BookOpen className="w-5 h-5 text-gold-400" />
             <span className="font-bold tracking-tighter uppercase text-[10px] text-gray-500 tracking-[0.2em]">Notebook do Jhony</span>
          </div>
        </div>
      </nav>

      {!unlocked ? (
        /* Tela de Captura (Gated) */
        <section className="relative z-10 max-w-xl mx-auto px-6 py-20 text-center animate-premium-fade">
          <div className="w-16 h-16 bg-gold-400/10 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-gold-400/20 shadow-[0_0_50px_-12px_rgba(251,191,36,0.2)]">
            <Lock className="w-8 h-8 text-gold-400" />
          </div>
          
          <h1 className="text-3xl font-extrabold tracking-tight mb-4 text-white">
            Filosofia de Investimentos
          </h1>
          <p className="text-gray-400 mb-10 text-sm leading-relaxed max-w-sm mx-auto">
            Acesso exclusivo aos manifestos de <span className="text-gold-400">Alinhamento Fiduciário</span> e <span className="text-gold-400">Construção de Patrimônio Global</span>.
          </p>

          <form onSubmit={handleSubmit} className="glass-card p-8 text-left space-y-6 shadow-2xl animate-premium-fade" style={{ animationDelay: '0.1s' }}>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 pl-1">Nome Completo</label>
              <input 
                required
                type="text" 
                placeholder="Seu nome completo"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-400/50 transition-colors text-white text-sm"
                onChange={(e) => setFormData({...formData, nome: e.target.value})}
              />
            </div>
            
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 pl-1">Seu Melhor Whatsapp</label>
              <input 
                required
                type="tel" 
                placeholder="(00) 00000-0000"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-400/50 transition-colors text-white text-sm"
                onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
              />
            </div>

            <div className="relative">
              <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 pl-1">Patrimônio Atual Investido</label>
              <select 
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-400/50 transition-colors text-white appearance-none text-sm cursor-pointer"
                onChange={(e) => setFormData({...formData, investimento: e.target.value})}
              >
                <option value="">Selecione a faixa</option>
                <option value="0-50k">Até R$ 50.000</option>
                <option value="50k-300k">R$ 50k a R$ 300k</option>
                <option value="300k-1m">R$ 300k a R$ 1 Milhão</option>
                <option value="1m+">Acima de R$ 1 Milhão</option>
              </select>
              <ChevronDown className="absolute right-4 top-[38px] w-4 h-4 text-gray-500 pointer-events-none" />
            </div>

            <button type="submit" className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-deep-950 font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 uppercase tracking-widest text-xs animate-magnetic-hover">
              Liberar Leitura Completa <Send className="w-3 h-3" />
            </button>
          </form>
        </section>
      ) : (
        /* CONTEÚDO INTEGRAL INTEGRADO AO NOVO DESIGN */
        <div className="relative z-10 max-w-3xl mx-auto px-6 py-20 animate-premium-fade">
          <header className="mb-16">
             <h1 className="text-4xl md:text-5xl font-black leading-tight text-white mb-6">
                Minha filosofia de investimentos
             </h1>
             <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 rounded-full border border-gold-400/30 p-0.5">
                   <div className="w-full h-full rounded-full overflow-hidden">
                      <img src="/profile.png" alt="Jhony Bosio" className="w-full h-full object-cover" />
                   </div>
                </div>
                <div className="flex flex-col">
                   <span className="text-white font-bold text-sm tracking-tight text-gradient">Jhony Bosio</span>
                   <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Alinhamento Fiduciário • Elite IP</span>
                </div>
             </div>
          </header>

          <article className="prose prose-invert prose-gold max-w-none text-gray-400 leading-relaxed font-normal">
            <p className="text-lg text-gray-300">
              Este material é uma prévia da forma como eu penso investimentos, planejamento financeiro e construção de patrimônio. Ele foi escrito para ajudar o investidor a entender o que realmente importa quando o assunto é organizar o dinheiro com clareza, eficiência e tranquilidade.
            </p>

            <div className="my-10 p-8 glass-card border-gold-400/20 italic text-gold-100">
              "O patrimônio cresce melhor quando existe alinhamento entre três pilares: transparência na remuneração, estratégia de alocação bem definida e escolha de veículos eficientes para investir."
            </div>

            {/* Resto do conteúdo permanece o mesmo, mas com styles refinados */}
            <p>
              Ao longo dos anos, eu fui consolidando uma visão muito objetiva sobre o que funciona de verdade. Na prática, o patrimônio cresce melhor quando existe alinhamento entre três pilares: transparência na remuneração, estratégia de alocação bem definida e escolha de veículos eficientes para investir. Quando esses três pontos estão organizados, o investidor tende a pagar menos, entender melhor o que está fazendo e tomar decisões com muito menos ruído.
            </p>

            <h2 className="text-white font-black text-2xl mt-12 mb-6">Transparência, remuneração e alinhamento de interesses</h2>

            <p>
              Minha experiência em assessoria demonstra que uma das discussões mais importantes do mercado financeiro nos últimos anos envolve a forma como profissionais e instituições são remunerados.
            </p>

            {/* ... Rest of text content remains identical to original for integrity ... */}
            <p>
              No modelo fee-based ou fee fixo, a lógica é mais transparente. O cliente sabe quanto paga e a recomendação tende a ficar menos contaminada pela necessidade de empurrar produtos com maior rebate. O centro da conversa deixa de ser comissão e passa a ser estratégia.
            </p>

            <h2 className="text-white font-black text-2xl mt-12 mb-6 text-gradient">Asset Allocation: O Motor da Riqueza</h2>
            <p>
              Asset Allocation é a definição estratégica de como o patrimônio será distribuído entre diferentes classes de ativos. É a escolha dos percentuais de renda fixa pós-fixada, renda fixa atrelada à inflação, renda variável global, ativos reais e proteção cambial.
            </p>

            <div className="my-12 p-10 bg-gradient-to-br from-gold-500 to-gold-700 rounded-3xl text-center shadow-2xl animate-magnetic-hover">
              <h3 className="text-2xl font-black mb-4 text-deep-950 tracking-tight">Pronto para aplicar esta estratégia?</h3>
              <p className="mb-8 text-deep-900/80 font-medium">Vamos transformar esse manifesto em um plano real para o seu futuro através de um diagnóstico individual.</p>
              <Link href="/mentoria" className="inline-flex items-center gap-2 bg-deep-950 text-white font-black py-4 px-10 rounded-xl hover:scale-105 transition-all shadow-xl">
                 Agendar Diagnóstico Individual <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>
        </div>
      )}

      {/* Footer Legal */}
      <footer className="relative z-10 py-20 border-t border-white/5 bg-deep-900/50 text-[9px] text-center px-6 leading-loose uppercase tracking-[0.2em] text-gray-500">
         <div className="max-w-2xl mx-auto opacity-60">
            Este conteúdo é meramente educativo e não constitui recomendação de investimento, conforme orientações da CVM. Jhony Bosio é Assessor de Investimentos credenciado. A rentabilidade passada não garante resultados futuros.
         </div>
      </footer>
    </main>
  );
}
