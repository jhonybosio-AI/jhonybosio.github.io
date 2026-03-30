import { ArrowLeft, CheckCircle2, Cpu, LineChart, MessageSquare, ShieldCheck, Zap, TrendingUp, Users, Video } from "lucide-react";
import { Blue3Logo, XPLogo } from "@/components/ui/logos";

export default function MentoriaAssessorPage() {
  const stripeLink = "https://buy.stripe.com/4gM5kF3EidbX7yNf5Q4ko08";
  const couponCode = "ESCRITORIO50";

  return (
    <main className="min-h-screen bg-background text-on-surface font-inter selection:bg-amber-gold selection:text-black">
      {/* Header/Nav */}
      <nav className="w-full max-w-5xl mx-auto p-6 flex justify-between items-center bg-transparent">
        <Link href="/" className="text-outline hover:text-primary transition flex items-center gap-2 text-sm font-medium">
          <ArrowLeft className="w-4 h-4" /> Voltar
        </Link>
        <div className="font-bold text-xl tracking-tighter text-white">Jhony Bosio</div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-24 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-bold mb-8 border border-primary/20 uppercase tracking-widest">
          🔥 Exclusivo para Assessores XP
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black font-outfit tracking-tighter mb-8 leading-[0.9] text-white">
          Fee Fixo + ETF + IA:<br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-gold to-amber-gold-low">Assessor 3.0</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-on-surface-variant max-w-3xl mx-auto mb-12 leading-relaxed">
          O método que me tornou o <span className="text-white font-bold underline decoration-primary underline-offset-4">assessor nº1 em Fee Fixo na Blue3</span>. Aprenda a blindar sua carteira e escalar seu atendimento com Inteligência Artificial.
        </p>

        <div className="flex flex-col items-center gap-6">
          <a 
            href={stripeLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-black font-black py-6 px-14 rounded-2xl text-xl transition-all transform hover:bg-amber-gold hover:scale-[1.05] shadow-2xl active:scale-95 uppercase tracking-tight"
          >
            QUERO SER ASSESSOR 3.0
          </a>
          <div className="flex flex-col gap-1">
             <p className="text-sm font-bold text-primary">Use o cupom: <span className="bg-primary/20 px-2 py-1 rounded select-all">{couponCode}</span></p>
             <p className="text-xs text-outline uppercase tracking-widest">50% de desconto para o seu escritório</p>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="bg-surface-container/30 py-20 border-y border-outline-variant/10">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center text-left">
          <div className="bg-gradient-to-br from-surface-container to-surface-dim p-8 md:p-12 rounded-[2rem] border border-white/5 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl group-hover:bg-amber-gold/10 transition-colors"></div>
            <h3 className="text-3xl font-black mb-8 text-white flex items-center gap-4 font-outfit">
              <TrendingUp className="text-amber-gold w-8 h-8" />
              Resultado Real
            </h3>
            <p className="text-white/60 leading-relaxed text-lg mb-8">
              Não é teoria. Eu apliquei este método na minha própria base de clientes na <strong className="text-white">Blue3 Investimentos</strong>. O resultado? Liderança no ranking de Fee Fixo e uma operação 10x mais eficiente usando IA.
            </p>
            <div className="flex gap-4 mb-4">
               <Blue3Logo />
               <XPLogo />
            </div>
            <div className="mt-8 flex items-center gap-6 border-t border-white/10 pt-8">
               <div className="w-16 h-16 rounded-2xl bg-amber-gold/10 flex items-center justify-center font-black text-amber-gold text-2xl border border-amber-gold/20">#1</div>
               <div>
                 <p className="text-lg font-black text-white">Líder Nacional em Fee Fixo</p>
                 <p className="text-xs text-white/40 uppercase tracking-widest font-bold">Ranking Blue3 Investimentos</p>
               </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-white leading-tight">
              A XP mudou as regras.<br />Você mudou sua operação?
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
              Em 2026, a cobrança sobre estoque vai penalizar quem não atingir 65 pontos no Modelo de Servir. O assessor que não se automatizar vai pagar do próprio bolso. 
            </p>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              O modelo de "giro de carteira" morreu. A nova vitória está na transparência do <strong>Fee Fixo</strong> e na eficiência da <strong>IA Local</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Triad Section */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-center text-3xl md:text-5xl font-black mb-16 text-white">A Tríade do Assessor 3.0</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <ShieldCheck className="w-10 h-10" />,
              title: "Fee Fixo",
              desc: "Alinhamento total. 85% de desconto em corretagem e 50% de cashback para o cliente. Blindagem contra o compliance."
            },
            {
              icon: <LineChart className="w-10 h-10" />,
              title: "ETFs Globais",
              desc: "Carteira eficiente e barata. Exposição internacional e proteção cambial sem a complexidade de produtos estruturados."
            },
            {
              icon: <Cpu className="w-10 h-10" />,
              title: "IA Local",
              desc: "Seu assistente sênior 24/7. Roda na sua máquina, sem nuvem, garantindo sigilo total dos dados do seu cliente."
            }
          ].map((item, i) => (
            <div key={i} className="bg-surface-container p-8 rounded-3xl border border-outline-variant/10 hover:border-primary/30 transition-all flex flex-col items-center text-center">
              <div className="text-primary mb-6 bg-primary/10 p-4 rounded-2xl">{item.icon}</div>
              <h4 className="text-xl font-bold mb-4 text-white uppercase tracking-wider">{item.title}</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="bg-surface-container/50 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-center text-3xl md:text-5xl font-black mb-16 text-white">O que você vai receber</h2>
          <div className="space-y-6">
            {[
              { t: "Instalação e configuração da IA local na sua máquina", i: <Zap /> },
              { t: "Skills personalizadas com o seu playbook e sua voz", i: <MessageSquare /> },
              { t: "A mesma estratégia de Fee Fixo que usei para liderar o ranking", i: <TrendingUp /> },
              { t: "O discurso passo a passo da Resolução CVM 179 que converte", i: <Users /> },
              { t: "Pacote de conteúdo de redes sociais com templates prontos", i: <Video /> },
              { t: "Acesso ao grupo Telegram com resumo diário de mercado", i: <Cpu /> },
              { t: "Acesso 1 a 1 comigo durante toda a jornada", i: <CheckCircle2 /> },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-5 p-6 rounded-2xl bg-surface-container border border-outline-variant/5 hover:bg-surface-container-high transition-colors">
                <div className="text-primary">{item.i}</div>
                <span className="text-lg md:text-xl font-semibold text-on-surface leading-tight">{item.t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="checkout" className="max-w-5xl mx-auto px-6 py-24 text-center">
        <div className="max-w-2xl mx-auto bg-gradient-to-b from-primary/20 to-transparent p-1 rounded-[40px] shadow-3xl">
          <div className="bg-[#08112e] p-12 md:p-16 rounded-[36px] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <h2 className="text-4xl font-black mb-4 text-white">Mentoria Individual</h2>
            <p className="text-on-surface-variant mb-12 text-lg">
              Mentoria 100% individual e personalizada. Vagas limitadas por design para garantir sua implementação completa.
            </p>
            
            <div className="flex flex-col items-center mb-12">
              <span className="text-outline line-through text-xl md:text-2xl mb-2">R$ 3.999,00</span>
              <div className="flex justify-center items-baseline gap-2">
                <span className="text-2xl text-primary font-bold">R$</span>
                <span className="text-6xl md:text-8xl font-black text-white tracking-tighter">1.997</span>
                <span className="text-primary text-2xl">,00</span>
              </div>
              <p className="text-primary font-bold mt-4 uppercase tracking-[0.2em] text-sm">À vista com cupom</p>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-12">
               <p className="text-xs uppercase tracking-widest text-[#cad3ff] mb-2 font-bold">Cupom de Desconto</p>
               <p className="text-3xl font-black text-primary select-all tracking-wider">{couponCode}</p>
            </div>

            <a 
              href={stripeLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full bg-white text-black font-black py-7 rounded-2xl text-xl md:text-2xl transition-all hover:bg-amber-gold hover:scale-[1.02] active:scale-95 shadow-2xl uppercase tracking-tight"
            >
               GARANTIR MINHA VAGA AGORA
            </a>
            
            <p className="text-xs text-outline mt-6 flex items-center justify-center gap-2">
               <ShieldCheck className="w-4 h-4" /> Pagamento 100% Seguro via Stripe
            </p>
          </div>
        </div>
      </section>

      {/* Footer Disclaimer */}
      <footer className="w-full border-t border-outline-variant/10 py-16 mt-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <p className="text-xl font-bold text-white mb-4">Jhony Bosio</p>
          <p className="text-xs text-outline max-w-2xl mx-auto leading-relaxed uppercase tracking-widest">
            Mentoria Assessor 3.0 — Metodologia Exclusiva © {new Date().getFullYear()}<br/><br/>
            Resultados passados não garantem retornos futuros. A implementação das ferramentas de IA é de responsabilidade técnica do mentorado seguindo as orientações dadas.
          </p>
        </div>
      </footer>
    </main>
  );
}
