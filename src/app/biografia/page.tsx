import Link from "next/link";
import { ArrowLeft, Briefcase, Award, MapPin, TrendingUp, Users, Star, ArrowRight } from "lucide-react";
import { BrandLogo } from "@/components/ui/logos";

export default function BiografiaPage() {
  return (
    <main className="min-h-screen bg-blue3-deep text-white font-inter selection:bg-blue3-sky/30">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[10%] right-[-5%] w-[600px] h-[600px] bg-blue3-sky/5 rounded-full blur-[140px] opacity-40" />
        <div className="absolute bottom-[5%] left-[-5%] w-[500px] h-[500px] bg-blue3-sky/3 rounded-full blur-[120px] opacity-20" />
      </div>

      <nav className="sticky top-0 z-50 w-full bg-blue3-deep/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-4xl mx-auto p-4 flex justify-between items-center">
          <Link href="/" className="text-gray-400 hover:text-white transition flex items-center gap-2 text-sm font-medium">
            <ArrowLeft className="w-4 h-4" /> Voltar
          </Link>
          <div className="flex items-center gap-2">
             <span className="font-bold tracking-widest uppercase text-[10px] text-gray-500">Autoridade & Legado</span>
          </div>
        </div>
      </nav>

      <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-[300px_1fr] gap-12 items-start">
          
          {/* Lado Esquerdo: Perfil */}
          <div className="space-y-8 sticky top-24">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-tr from-blue3-sky to-blue-900 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-white/5">
                <img 
                  src="/profile.png" 
                  alt="Jhony Bosio" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            <div className="space-y-4">
                <div className="flex items-center gap-3 text-white/60">
                   <Briefcase className="w-4 h-4 text-blue3-sky" />
                   <span className="text-sm">Especialista em Gestão Patrimonial</span>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                   <MapPin className="w-4 h-4 text-blue3-sky" />
                   <span className="text-sm">Atendimento Global</span>
                </div>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500">Credenciais</h3>
              <div className="flex flex-col gap-4">
                <BrandLogo className="scale-90 origin-left opacity-80" />
              </div>
            </div>
          </div>

          {/* Lado Direito: História */}
          <div className="space-y-12">
            <div>
              <h1 className="text-5xl md:text-7xl font-black font-outfit tracking-tighter mb-8 leading-none text-white">
                Construindo Legados <span className="text-gradient">Financeiros.</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
                Especialista em gestão patrimonial com mais de 12 anos de mercado. Dedico-me a transformar a complexidade financeira em clareza estratégica para famílias e investidores de alta performance. Minha missão é proteger e potencializar o seu legado.
              </p>
            </div>

            <div className="space-y-8">
               <h2 className="text-2xl font-bold flex items-center gap-3">
                  <TrendingUp className="text-[var(--color-blue3-secondary)]" />
                  Trajetória e Visão
               </h2>
               <div className="prose prose-invert prose-lg text-gray-400 space-y-6">
                  <p>
                    Com anos de dedicação ao mercado, atuo na assessoria de alta performance, sempre focando em modelos transparentes e inovadores. Meu foco não está em "produtos da moda", mas sim na construção de um planejamento financeiro 360°, onde cada centavo investido tem um propósito claro.
                  </p>
                  <p>
                    Acredito na **transparência radical**. O investidor moderno não quer apenas uma recomendação; ele quer entender os custos, os riscos e, acima de tudo, ter a certeza de que seu assessor está do mesmo lado da mesa. É por isso que adoto uma filosofia de investimentos baseada em alocação global e eficiência tributária.
                  </p>
               </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
               <div className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-[var(--color-blue3-secondary)]/30 transition-all group">
                  <Users className="w-10 h-10 text-[var(--color-blue3-secondary)] mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold mb-3">Mentoria Impulse</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Ajudo investidores com patrimônio de até R$ 300 mil a criarem um plano de voo sólido, com diagnóstico estrutural e suporte estratégico.
                  </p>
               </div>
               <div className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-[var(--color-blue3-secondary)]/30 transition-all group">
                  <Star className="w-10 h-10 text-[var(--color-blue3-secondary)] mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold mb-3">Equilibrium Experience</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Assessoria personalizada para patrimônios acima de R$ 300 mil, focada em diversificação internacional e sucessão.
                  </p>
               </div>
            </div>

            <div className="bg-gradient-to-br from-blue3-sky/20 to-blue-900/40 p-10 rounded-[2.5rem] border border-white/5 space-y-6 text-center">
               <h3 className="text-2xl font-bold">"O tempo é o melhor amigo do bom investidor e o pior inimigo de quem quer atalhos."</h3>
               <p className="text-gray-400">
                 Se você busca uma gestão profissional, técnica e alinhada com seus objetivos de vida, vamos conversar.
               </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <a href="https://buy.stripe.com/cNi5kF5Mqeg1cT71f04ko05" target="_blank" rel="noreferrer" className="bg-blue3-sky hover:bg-blue3-sky/90 text-white font-black py-4 px-8 rounded-2xl transition-all shadow-xl flex items-center justify-center gap-2 uppercase tracking-tight">
                       Reservar Raio-X <ArrowRight className="w-4 h-4" />
                    </a>
                   <a href="https://wa.me/5516996045700" className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-2xl transition-all border border-white/10 flex items-center justify-center gap-2">
                      Falar no WhatsApp
                   </a>
                </div>
            </div>
          </div>

        </div>
      </section>

      <footer className="py-12 border-t border-white/5 opacity-30 text-center text-[10px] tracking-widest uppercase text-gray-500">
         Jhony Bosio • Todos os direitos reservados
      </footer>
    </main>
  );
}
