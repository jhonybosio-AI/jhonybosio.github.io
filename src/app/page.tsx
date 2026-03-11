import Link from "next/link";
import { 
  ArrowRight,
  BarChart3,
  BookOpen,
  Briefcase, 
  ChevronRight, 
  CircleDollarSign, 
  ExternalLink, 
  Instagram, 
  Linkedin, 
  Lock, 
  Mail, 
  MessageCircle,
  MessageSquare, 
  PlayCircle, 
  Star, 
  TrendingUp,
  User, 
  Users, 
  Youtube,
  Zap 
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start p-6 sm:p-12 relative overflow-hidden">
      
      {/* Elementos visuais de fundo (Glow) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-96 bg-[var(--color-blue3-secondary)]/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-md w-full flex flex-col items-center space-y-10 relative z-10 animate-fade-in-up mt-8">
        
        {/* Profile Card */}
        <header className="flex flex-col items-center text-center w-full">
          <div className="relative group mb-6">
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-blue3-secondary)] to-[var(--color-blue3-accent)] rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-[var(--color-blue3-primary)] relative bg-[var(--color-blue3-primary)]">
              <img 
                src="/profile.png" 
                alt="Jhony Bosio" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-3xl font-extrabold tracking-tight text-white mb-2">
            Jhony Bosio
          </h1>
          
          <div className="flex items-center gap-2 mb-4">
             <span className="bg-white/10 border border-white/20 text-white/90 text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1.5 shadow-sm">
                <Briefcase className="w-3 h-3" /> Assessor de Investimentos
             </span>
          </div>

          <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
            Estratégias institucionais para proteção e multiplicação do seu patrimônio.
          </p>
        </header>

        {/* Links Principais (Serviços e Info) */}
        <section className="w-full space-y-4">
          
          {/* Card 1: Quem é Jhony Bosio (Soft Link) */}
          <Link href="/biografia" className="w-full bg-white/5 hover:bg-white/10 border border-white/10 p-5 rounded-2xl transition-all group flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[var(--color-blue3-secondary)]/10 flex items-center justify-center">
                <User className="w-5 h-5 text-[var(--color-blue3-secondary)]" />
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-sm">Quem é Jhony Bosio?</p>
                <p className="text-gray-500 text-[10px] uppercase tracking-wider font-bold">Trajetória e Visão</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
          </Link>

          {/* Card 2: Notebook (FREE LEAD MAGNET) */}
          <Link href="/notebook" className="group block w-full">
            <div className="w-full rounded-2xl bg-white/5 border border-white/10 p-4 transition-all duration-300 hover:bg-white/10 hover:border-[var(--color-blue3-secondary)]/40">
              <div className="flex items-center gap-4">
                <div className="bg-[var(--color-blue3-secondary)]/10 p-2.5 rounded-xl flex-shrink-0 text-[var(--color-blue3-secondary)] group-hover:bg-[var(--color-blue3-secondary)] group-hover:text-white transition-all">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h2 className="text-white font-semibold text-base">Notebook de Educação</h2>
                    <span className="bg-green-500/20 text-green-400 text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-tighter shadow-sm border border-green-500/20 group-hover:bg-green-500 group-hover:text-white transition-all">Grátis</span>
                  </div>
                  <p className="text-gray-400 text-xs mt-0.5">Acesse meus insights e pesquisas de mercado.</p>
                </div>
                <ArrowRight className="text-gray-500 w-4 h-4 group-hover:translate-x-1 group-hover:text-white transition-all transform" />
              </div>
            </div>
          </Link>

          {/* Card 3: Diagnóstico Educacional R$ 497 */}
          <Link href="/diagnostico" className="group block w-full relative mt-2">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--color-blue3-secondary)] to-[var(--color-blue3-accent)] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative w-full rounded-2xl bg-[var(--color-blue3-primary)] border border-[var(--color-blue3-secondary)]/30 p-5 shadow-lg transition-all duration-300 group-hover:-translate-y-1">
              <div className="flex items-center justify-between mb-2">
                 <div className="flex items-center gap-3">
                    <BarChart3 className="text-[var(--color-blue3-secondary)] w-5 h-5" />
                    <h2 className="text-white font-bold text-lg leading-tight">Diagnóstico de Carteira</h2>
                 </div>
                 <span className="text-[var(--color-blue3-secondary)] font-bold text-sm bg-[var(--color-blue3-secondary)]/10 px-2.5 py-1 rounded-md">R$ 497</span>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed ml-8">Avaliação estrutural e mapa de riscos detalhado dos seus investimentos.</p>
            </div>
          </Link>

          {/* Card 3: Mentoria Premium R$ 997 (Destaque Principal) */}
          <Link href="/mentoria" className="group block w-full relative mt-2">
             <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--color-blue3-secondary)] to-[#1e90ff] rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
              <div className="relative w-full rounded-2xl bg-gradient-to-br from-[var(--color-blue3-primary)] to-[#00175a] border border-[var(--color-blue3-secondary)] p-5 shadow-2xl transition-all duration-300 group-hover:-translate-y-1 overflow-hidden">
                
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-blue3-secondary)]/20 rounded-full blur-[40px] -mr-10 -mt-10" />

                <div className="flex items-center justify-between mb-2 relative z-10">
                   <div className="flex items-center gap-3">
                      <TrendingUp className="text-white w-6 h-6" />
                      <h2 className="text-white font-extrabold text-xl tracking-tight">Mentoria Individual</h2>
                   </div>
                   <span className="text-white font-black text-sm bg-white/20 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-md shadow-sm">R$ 997</span>
                </div>
                <p className="text-gray-300 text-xs leading-relaxed ml-9 relative z-10 max-w-[250px]">
                  Sessão estratégica ao vivo. Planejamento completo, blindagem de patrimônio e rebalanceamento.
                </p>
                
                <div className="mt-4 flex items-center justify-end relative z-10">
                   <span className="text-[var(--color-blue3-secondary)] text-xs font-bold uppercase tracking-wider flex items-center gap-1 group-hover:text-white transition-colors">
                     Reservar Vaga <ArrowRight className="w-4 h-4" />
                   </span>
                </div>
              </div>
          </Link>
          
        </section>

        {/* Social Links Rápidos */}
        <section className="w-full flex justify-center gap-4 pt-4">
          <a href="https://instagram.com/seu.instagram" target="_blank" rel="noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-[#E1306C]/80 hover:border-transparent transition-all shadow-sm">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="https://youtube.com/seu.canal" target="_blank" rel="noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-[#FF0000]/80 hover:border-transparent transition-all shadow-sm">
            <Youtube className="w-5 h-5" />
          </a>
          <a href="https://wa.me/seunumero" target="_blank" rel="noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-[#25D366]/80 hover:border-transparent transition-all shadow-sm">
            <MessageCircle className="w-5 h-5" />
          </a>
        </section>
        
        <footer className="w-full pb-8">
          <p className="text-center text-[10px] text-gray-500 leading-relaxed max-w-[280px] mx-auto">
            © {new Date().getFullYear()} Jhony Bosio. Todos os direitos reservados.
            Nenhum link constitui oferta ou recomendação de valores mobiliários.
          </p>
        </footer>
      </div>
    </main>
  );
}
