"use client"

import React, { useEffect, useState } from 'react';

const HATCH_ASSETS = [
    { ticker: 'ACWI', name: 'MSCI ACWI', price: '$145,03', avgPrice: '$145,44', quantity: '76,8914', value: '$11.151,56', change: '-0,28%', status: 'down', target: '24,00%' },
    { ticker: 'IEI', name: 'ICE US Treasury 3-7 Yr', price: '$118,40', avgPrice: '$120,14', quantity: '71,61', value: '$8.478,62', change: '-1,45%', status: 'down', target: '20,00%' },
    { ticker: 'BIL', name: 'Solactive 1-3m T-Bill', price: '$91,49', avgPrice: '$91,56', quantity: '70,4774', value: '$6.447,98', change: '-0,08%', status: 'down', target: '15,00%' },
    { ticker: 'AGG', name: 'BBG U.S. Aggregate', price: '$99,35', avgPrice: '$101,03', quantity: '42,5913', value: '$4.231,45', change: '-1,66%', status: 'down', target: '10,00%' },
    { ticker: 'HYG', name: 'Markit iBoxx USD High', price: '$80,00', avgPrice: '$80,85', quantity: '34,6712', value: '$2.773,70', change: '-1,05%', status: 'down', target: '6,50%' },
    { ticker: 'GLD', name: 'LBMA Gold Price', price: '$437,00', avgPrice: '$447,39', quantity: '4,8124', value: '$2.103,02', change: '-2,32%', status: 'down', target: '5,00%' },
    { ticker: 'LQD', name: 'Markit iBoxx USD Grade', price: '$109,28', avgPrice: '$111,88', quantity: '14,4495', value: '$1.579,04', change: '-2,32%', status: 'down', target: '3,50%' },
    { ticker: 'BOTZ', name: 'AI & Big Data Index', price: '$35,42', avgPrice: '$38,58', quantity: '27,8159', value: '$985,24', change: '-8,19%', status: 'down', target: '2,50%' },
    { ticker: 'IEUR', name: 'MSCI Europe Index', price: '$74,06', avgPrice: '$75,49', quantity: '14,3693', value: '$1.064,19', change: '-1,89%', status: 'down', target: '2,50%' },
    { ticker: 'FDIS', name: 'Consumer Disc 40 Act', price: '$96,89', avgPrice: '$99,14', quantity: '10,8231', value: '$1.048,65', change: '-2,27%', status: 'down', target: '2,50%' },
    { ticker: 'FNCL', name: 'MSCI Financials ETF', price: '$72,34', avgPrice: '$74,67', quantity: '14,3693', value: '$1.039,48', change: '-3,12%', status: 'down', target: '2,50%' },
    { ticker: 'FXI', name: 'FTSE China 50', price: '$36,26', avgPrice: '$38,53', quantity: '23,4384', value: '$849,88', change: '-5,89%', status: 'down', target: '2,00%' },
    { ticker: 'ILF', name: 'S&P Latin America 40', price: '$37,73', avgPrice: '$35,90', quantity: '25,1547', value: '$949,09', change: '+5,10%', status: 'up', target: '2,00%' },
    { ticker: 'VOO', name: 'VOO S&P 500 Vanguard', price: '$624,52', avgPrice: '$612,03', quantity: '3,2727', value: '$2.043,87', change: '+2,04%', status: 'up', target: '2,00%' }
];

const SHARESIES_ASSETS = [
    { ticker: 'EFC', name: 'Ellington Financial Inc', price: '$13,01', avgPrice: '-', quantity: '915,55', value: '$11.915,97', change: '-3,18%', status: 'down', target: '-' },
    { ticker: 'HRZN', name: 'Horizon Technology', price: '$4,28', avgPrice: '-', quantity: '2148,44', value: '$9.206,10', change: '-31,40%', status: 'down', target: '-' },
    { ticker: 'MAXI', name: 'Simplify Bitcoin Strategy', price: '$11,16', avgPrice: '-', quantity: '940,73', value: '$10.499,16', change: '-47,37%', status: 'down', target: '-' },
    { ticker: 'YAL.AX', name: 'Yancoal Australia Ltd', price: '$5,76', avgPrice: '-', quantity: '-', value: '$3.500,00', change: '-0,35%', status: 'down', target: '-' },
    { ticker: 'VHY.AX', name: 'Vanguard Aus High Yield', price: '$78,84', avgPrice: '-', quantity: '-', value: '$2.120,00', change: '-0,53%', status: 'down', target: '-' },
    { ticker: 'NZD', name: 'Wallet (Cash)', price: '$1,00', avgPrice: '-', quantity: '-', value: '$613,73', change: '0,00%', status: 'up', target: '-' }
];

export default function MoabiDashboard() {
    const [tab, setTab] = useState('hatch');
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        
        // Load TradingView scripts
        const script1 = document.createElement('script');
        script1.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
        script1.async = true;
        script1.innerHTML = JSON.stringify({
            "symbols": [
                { "proName": "NASDAQ:ACWI", "title": "ACWI" },
                { "proName": "NASDAQ:IEI", "title": "IEI" },
                { "proName": "AMEX:BIL", "title": "BIL" },
                { "proName": "AMEX:AGG", "title": "AGG" },
                { "proName": "AMEX:HYG", "title": "HYG" },
                { "proName": "AMEX:GLD", "title": "GLD" },
                { "proName": "AMEX:LQD", "title": "LQD" },
                { "proName": "NASDAQ:BOTZ", "title": "BOTZ" },
                { "proName": "AMEX:VOO", "title": "VOO" }
            ],
            "showSymbolLogo": true,
            "colorTheme": "dark",
            "isTransparent": false,
            "displayMode": "adaptive",
            "locale": "br"
        });
        document.getElementById('ticker-container')?.appendChild(script1);

        const script2 = document.createElement('script');
        script2.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
        script2.async = true;
        script2.innerHTML = JSON.stringify({
            "colorTheme": "dark",
            "dateRange": "12M",
            "locale": "en",
            "largeChartUrl": "",
            "isTransparent": true,
            "showFloatingTooltip": false,
            "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
            "plotLineColorFalling": "rgba(41, 98, 255, 1)",
            "gridLineColor": "rgba(240, 243, 250, 0)",
            "scaleFontColor": "#FFFFFF",
            "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
            "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
            "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
            "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
            "symbolActiveColor": "rgba(41, 98, 255, 0.12)",
            "tabs": [
                {
                    "title": "Portfólio Moabi",
                    "symbols": [
                        { "s": "NASDAQ:ACWI", "d": "MSCI ACWI" },
                        { "s": "NASDAQ:IEI", "d": "3-7 Yr Treasury" },
                        { "s": "AMEX:BIL", "d": "1-3 Mo T-Bill" },
                        { "s": "AMEX:AGG", "d": "Agg Bond" },
                        { "s": "AMEX:HYG", "d": "High Yield" },
                        { "s": "AMEX:GLD", "d": "Gold" },
                        { "s": "AMEX:LQD", "d": "Inv. Grade" },
                        { "s": "NASDAQ:BOTZ", "d": "Robotics/AI" },
                        { "s": "AMEX:VOO", "d": "S&P 500" }
                    ]
                }
            ],
            "width": "100%",
            "height": "550",
            "showSymbolLogo": true,
            "showChart": true
        });
        document.getElementById('market-widget-container')?.appendChild(script2);
    }, []);

    const assets = tab === 'hatch' ? HATCH_ASSETS : SHARESIES_ASSETS;

    if (!isClient) return null;

    return (
        <main className="min-h-screen bg-[#04050a] text-white font-inter selection:bg-blue-600/30">
            <style dangerouslySetInnerHTML={{ __html: `
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
                
                .bg-gradient-custom {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
                                radial-gradient(circle at 90% 80%, rgba(245, 158, 11, 0.05) 0%, transparent 50%);
                    z-index: -1;
                }

                .ticker-wrapper {
                    position: relative;
                    z-index: 100;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    background: #000000 !important;
                    min-height: 46px;
                }

                .glass-card {
                    background: rgba(255, 255, 255, 0.05);
                    backdrop-filter: blur(24px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 24px;
                    padding: 2rem;
                    transition: all 0.3s ease;
                }

                .glass-card:hover {
                    transform: translateY(-5px);
                    border-color: rgba(255, 255, 255, 0.2);
                }

                .asset-item {
                    display: grid;
                    grid-template-columns: 60px 1.5fr 80px 100px 100px 120px 80px 80px;
                    align-items: center;
                    padding: 1.25rem;
                    background: rgba(255, 255, 255, 0.02);
                    border-radius: 16px;
                    border: 1px solid transparent;
                    transition: all 0.2s ease;
                    margin-bottom: 1rem;
                }

                .asset-item:hover {
                    background: rgba(255, 255, 255, 0.05);
                    border-color: rgba(255, 255, 255, 0.1);
                }

                .asset-icon {
                    width: 40px;
                    height: 40px;
                    background: #0066ff;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 700;
                    font-size: 0.75rem;
                }

                @media (max-width: 1024px) {
                    .asset-item {
                        grid-template-columns: 1fr 1fr;
                        gap: 1rem;
                    }
                    .asset-icon, .asset-price-col, .asset-change-col {
                        display: none;
                    }
                }
            `}} />

            <div className="bg-gradient-custom"></div>

            {/* Ticker Tape */}
            <div className="ticker-wrapper" id="ticker-container"></div>

            <div className="max-w-7xl mx-auto px-6 py-8">
                {/* Header */}
                <header className="flex justify-between items-center mb-16">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#0066ff] rounded-full flex items-center justify-center font-bold">JB</div>
                        <div className="flex flex-col">
                            <span className="font-bold text-lg">Jhony Bosio</span>
                            <span className="text-sm text-zinc-400">Sócio · Blue3 Investimentos</span>
                        </div>
                    </div>
                </header>

                {/* Hero */}
                <section className="mb-20">
                    <div className="bg-amber-400/10 text-amber-400 px-4 py-1 rounded-full text-xs font-bold inline-block mb-6 border border-amber-400/20">
                        Sócio Blue3 · Parceiro XP Investimentos
                    </div>
                    <h1 className="text-6xl md:text-7xl font-bold leading-tight tracking-tighter mb-8">
                        Seu patrimônio merece um <span className="text-[#0066ff]">plano</span> feito pra <span className="text-amber-400">você.</span>
                    </h1>
                    <div className="flex gap-8 text-zinc-400 text-xl">
                        <p><strong className="text-white">Cliente:</strong> Moabi Tavares Guanor</p>
                        <p><strong className="text-white">País:</strong> Austrália</p>
                    </div>
                </section>

                {/* Summary Cards */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="glass-card">
                        <span className="text-sm text-zinc-400 block mb-2 uppercase tracking-widest">Patrimônio Total (USD)</span>
                        <div className="text-4xl font-bold mb-2">$77.362,94</div>
                        <div className="text-emerald-400 font-semibold">-1.84% Total (Est.)</div>
                    </div>
                    <div className="glass-card">
                        <span className="text-sm text-zinc-400 block mb-2 uppercase tracking-widest">Conta Hatch (Pessoal)</span>
                        <div className="text-4xl font-bold mb-2">$44.106,94</div>
                        <div className="text-rose-400 font-semibold">-0.65%</div>
                    </div>
                    <div className="glass-card">
                        <span className="text-sm text-zinc-400 block mb-2 uppercase tracking-widest">Conta Sharesies (H2OFF)</span>
                        <div className="text-4xl font-bold mb-2">$33.256,82</div>
                        <div className="text-rose-400 font-semibold">-3.18%</div>
                    </div>
                </section>

                {/* Dashboard Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8">
                    <div>
                        <div className="flex gap-4 mb-8">
                            <button 
                                onClick={() => setTab('hatch')}
                                className={`px-6 py-3 rounded-xl font-bold transition-all ${tab === 'hatch' ? 'bg-[#0066ff] text-white shadow-[0_0_20px_rgba(0,102,255,0.3)]' : 'border border-white/10 text-zinc-400 hover:text-white'}`}
                            >
                                CONTA HATCH
                            </button>
                            <button 
                                onClick={() => setTab('sharesies')}
                                className={`px-6 py-3 rounded-xl font-bold transition-all ${tab === 'sharesies' ? 'bg-[#0066ff] text-white shadow-[0_0_20px_rgba(0,102,255,0.3)]' : 'border border-white/10 text-zinc-400 hover:text-white'}`}
                            >
                                CONTA SHARESIES (H2OFF)
                            </button>
                        </div>

                        <div className="flex flex-col gap-4">
                            {assets.map((asset, idx) => (
                                <div key={idx} className="asset-item group">
                                    <div className="asset-icon">{asset.ticker.substring(0, 4)}</div>
                                    <div>
                                        <div className="font-bold text-lg">{asset.name}</div>
                                        <div className="text-sm text-zinc-500">{asset.ticker}</div>
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-zinc-500 uppercase">QTD</div>
                                        <div className="font-medium">{asset.quantity}</div>
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-zinc-500 uppercase">MÉDIO</div>
                                        <div className="font-medium">{asset.avgPrice}</div>
                                    </div>
                                    <div className="asset-price-col">
                                        <div className="text-[10px] text-zinc-500 uppercase">COTAÇÃO</div>
                                        <div className="font-medium">{asset.price}</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[10px] text-zinc-500 uppercase">VALOR</div>
                                        <div className="font-bold text-lg">{asset.value}</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[10px] text-zinc-500 uppercase">ALVO</div>
                                        <div className="font-medium text-zinc-400">{asset.target}</div>
                                    </div>
                                    <div className={`text-right font-bold ${asset.status === 'up' ? 'text-emerald-400' : 'text-rose-400'}`}>
                                        {asset.change}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <aside>
                        <div className="glass-card mb-8">
                            <h3 className="text-amber-400 font-bold uppercase tracking-widest mb-6">Market Intelligence</h3>
                            <div id="market-widget-container" className="min-h-[550px]"></div>
                        </div>
                    </aside>
                </div>

                {/* Strategy Section */}
                <section className="mt-16">
                    <h2 className="text-2xl font-bold flex items-center gap-3 mb-8">
                        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                        Visão da Estratégia
                    </h2>
                    <div className="bg-gradient-to-br from-blue-600/5 to-amber-600/5 border border-white/10 rounded-[32px] p-10">
                        <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                            A carteira do Moabi está estruturada para preservação de capital e crescimento global diversificado. Atualmente, observamos uma forte concentração em <strong>Renda Fixa (54%)</strong>, o que confere um caráter conservador/moderado à estratégia.
                        </p>
                        <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                            A conta na <strong>Hatch</strong> foca em ETFs de larga escala nos EUA e mercados globais (ACWI, VOO), enquanto a conta <strong>Sharesies (H2Off)</strong> mantém posições legadas em ativos específicos que estão sendo monitorados para rebalanceamento.
                        </p>
                        <p className="text-zinc-400 text-lg leading-relaxed">
                            <strong>Destaque:</strong> O ativo BOTZ e MAXI apresentam volatilidade acentuada. O VOO (S&P 500) continua sendo o pilar de performance positiva, sugerindo uma oportunidade futura de realização parcial para realocação.
                        </p>
                    </div>
                </section>

                <footer className="mt-24 text-center text-zinc-500 text-sm pb-12">
                    <p>&copy; 2026 Jhony Bosio Consultoria Digital. Todos os direitos reservados.</p>
                </footer>
            </div>
        </main>
    );
}
