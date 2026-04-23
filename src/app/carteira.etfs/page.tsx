"use client"

import React from 'react';
import { PortfolioPage } from "@/components/ui/starfall-portfolio-landing";
import { BrandLogo } from "@/components/ui/logos";
import TradingViewWidget from "@/components/tradingview-widget";
import { Info, TrendingUp, ShieldCheck, Globe, Zap } from "lucide-react";

export default function CarteiraETFs() {
  const allocationData = [
    { category: "RENDA FIXA BRASIL", sub: "Pós-fixado", cons: "72,5%", mod: "32,5%", sof: "12,5%", icon: <ShieldCheck className="w-4 h-4" /> },
    { category: "RENDA FIXA BRASIL", sub: "Inflação", cons: "12,5%", mod: "22,5%", sof: "27,5%", icon: <TrendingUp className="w-4 h-4" /> },
    { category: "RENDA FIXA BRASIL", sub: "Prefixado", cons: "5,0%", mod: "10,0%", sof: "7,5%", icon: <Zap className="w-4 h-4" /> },
    { category: "MULTIMERCADOS", sub: "", cons: "2,5%", mod: "14,0%", sof: "10,0%", icon: <Globe className="w-4 h-4" /> },
    { category: "RENDA VARIÁVEL BRASIL", sub: "", cons: "0,0%", mod: "7,5%", sof: "17,5%", icon: <TrendingUp className="w-4 h-4" /> },
    { category: "FUNDOS LISTADOS", sub: "", cons: "2,5%", mod: "4,0%", sof: "9,5%", icon: <Globe className="w-4 h-4" /> },
    { category: "ALTERNATIVOS", sub: "", cons: "0,0%", mod: "3,0%", sof: "7,0%", icon: <Zap className="w-4 h-4" /> },
    { category: "GLOBAL", sub: "Renda Fixa", cons: "2,5%", mod: "2,5%", sof: "2,5%", icon: <Globe className="w-4 h-4" /> },
    { category: "GLOBAL", sub: "Renda Variável", cons: "2,5%", mod: "4,0%", sof: "6,0%", icon: <Globe className="w-4 h-4" /> },
  ];

  return (
    <PortfolioPage
      logo={<BrandLogo className="h-10 text-white" />}
      hero={{
        titleLine1: 'Carteira Inteligente de',
        titleLine2Gradient: 'Alocação via ETFs',
        subtitle: 'Uma filosofia de investimento baseada em baixos custos, diversificação global e eficiência tributária. Menos ruído, mais resultado.',
      }}
      projects={[]}
      stats={[]}
      showAnimatedBackground={true}
    >
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-24 relative z-20">
        
        {/* Filosofia Section */}
        <section className="liquid-glass p-8 md:p-12 animate-premium-fade">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-blue3-sky/10 rounded-lg">
              <Info className="w-6 h-6 text-blue3-sky" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Filosofia de Gestão Passiva</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 text-gray-400 leading-relaxed font-light">
            <p>
              A estratégia de investimento proposta baseia-se na <strong className="text-blue3-sky">gestão passiva</strong>, fundamentada na eficiência dos mercados e na redução drástica de custos intermediários. Reconhecemos que tentar prever movimentos de curto prazo ou selecionar ações individuais raramente supera a média do mercado de forma consistente após taxas e impostos.
            </p>
            <p>
              O uso de <strong className="text-blue3-sky">ETFs de baixo custo</strong> é a ferramenta mais poderosa para garantir que o ganho fique no bolso do investidor. Ao investir em índices mundiais, eliminamos o risco específico e capturamos o crescimento estrutural da economia global, focando na regularidade dos aportes e na disciplina necessária para o longo prazo.
            </p>
          </div>
        </section>

        {/* TradingView Section */}
        <section className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Monitor de Ativos em Tempo Real</h2>
            <p className="text-gray-500">Acompanhamento dos principais índices e ETFs que compõem a tese de alocação.</p>
          </div>
          <div className="liquid-glass p-4 overflow-hidden">
            <TradingViewWidget />
          </div>
        </section>

        {/* Portfolio Table Section */}
        <section className="space-y-12 pb-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-2">Modelos de Alocação Sugeridos</h2>
            <p className="text-gray-500">Distribuição percentual por perfil de investidor (Ref: Abril 2026).</p>
          </div>
          
          <div className="overflow-x-auto rounded-[32px] border border-white/10 bg-blue3-deep/50 backdrop-blur-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="p-6 text-xs font-bold uppercase tracking-widest text-gray-500">Estratégia</th>
                  <th className="p-6 text-xs font-bold uppercase tracking-widest text-blue-300">Conservadora</th>
                  <th className="p-6 text-xs font-bold uppercase tracking-widest text-orange-300">Moderada</th>
                  <th className="p-6 text-xs font-bold uppercase tracking-widest text-yellow-500">Sofisticada</th>
                </tr>
              </thead>
              <tbody>
                {allocationData.map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                    <td className="p-6">
                      <div className="flex items-center gap-3">
                        <div className="text-blue3-sky opacity-40 group-hover:opacity-100 transition-opacity">
                          {row.icon}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-gray-300">{row.category}</div>
                          {row.sub && <div className="text-sm text-gray-500">{row.sub}</div>}
                        </div>
                      </div>
                    </td>
                    <td className="p-6 text-lg font-medium text-white">{row.cons}</td>
                    <td className="p-6 text-lg font-medium text-white">{row.mod}</td>
                    <td className="p-6 text-lg font-medium text-white">{row.sof}</td>
                  </tr>
                ))}
                <tr className="bg-white/5 font-black">
                  <td className="p-6 text-xs uppercase tracking-widest text-white">Total</td>
                  <td className="p-6 text-xl text-white">100%</td>
                  <td className="p-6 text-xl text-white">100%</td>
                  <td className="p-6 text-xl text-white">100%</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Metrics Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="liquid-glass p-6 border-l-4 border-blue-400">
              <div className="text-xs font-bold text-gray-500 uppercase mb-1">Conservadora</div>
              <div className="text-xl font-bold text-white mb-2">Retorno: CDI + 1%</div>
              <div className="text-sm text-gray-400">Volatilidade Alvo: 1,25%</div>
            </div>
            <div className="liquid-glass p-6 border-l-4 border-orange-400">
              <div className="text-xs font-bold text-gray-500 uppercase mb-1">Moderada</div>
              <div className="text-xl font-bold text-white mb-2">Retorno: CDI + 2%</div>
              <div className="text-sm text-gray-400">Volatilidade Alvo: 4,00%</div>
            </div>
            <div className="liquid-glass p-6 border-l-4 border-yellow-500">
              <div className="text-xs font-bold text-gray-500 uppercase mb-1">Sofisticada</div>
              <div className="text-xl font-bold text-white mb-2">Retorno: CDI + 3%</div>
              <div className="text-sm text-gray-400">Volatilidade Alvo: 8,00%</div>
            </div>
          </div>
        </section>
      </div>
    </PortfolioPage>
  );
}
