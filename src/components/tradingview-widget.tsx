"use client"

import React, { useEffect, useRef } from 'react';

const TradingViewWidget: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "colorTheme": "dark",
      "dateRange": "12M",
      "locale": "en",
      "largeChartUrl": "",
      "isTransparent": true,
      "showFloatingTooltip": false,
      "plotLineColorGrowing": "rgba(0, 141, 255, 1)",
      "plotLineColorFalling": "rgba(0, 141, 255, 1)",
      "gridLineColor": "rgba(240, 243, 250, 0)",
      "scaleFontColor": "#9ca3af",
      "belowLineFillColorGrowing": "rgba(0, 141, 255, 0.12)",
      "belowLineFillColorFalling": "rgba(0, 141, 255, 0.12)",
      "belowLineFillColorGrowingBottom": "rgba(0, 141, 255, 0)",
      "belowLineFillColorFallingBottom": "rgba(0, 141, 255, 0)",
      "symbolActiveColor": "rgba(0, 141, 255, 0.12)",
      "tabs": [
        {
          "title": "Ativos da Carteira",
          "symbols": [
            { "s": "BMFBOVESPA:LFTB11", "d": "Pós e Inflação" },
            { "s": "BMFBOVESPA:B5P211", "d": "Inflação até 5 anos" },
            { "s": "BMFBOVESPA:IRFM11", "d": "Pré" },
            { "s": "BMFBOVESPA:WRLD11", "d": "Multimercado" },
            { "s": "BMFBOVESPA:BOVA11", "d": "RV Brasil" },
            { "s": "BMFBOVESPA:XFIX11", "d": "FII" },
            { "s": "BMFBOVESPA:GOLD11", "d": "Ouro" },
            { "s": "BMFBOVESPA:HGBR11", "d": "Renda Fixa Global" },
            { "s": "BMFBOVESPA:IVVB11", "d": "RV Global" }
          ],
          "originalTitle": "Indices"
        },
        {
          "title": "Mercado Global",
          "symbols": [
            { "s": "BMFBOVESPA:ISP1!", "d": "S&P 500" },
            { "s": "BMFBOVESPA:EUR1!", "d": "Euro" },
            { "s": "CMCMARKETS:GOLD", "d": "Gold" },
            { "s": "PYTH:WTI3!", "d": "WTI Crude Oil" },
            { "s": "BMFBOVESPA:CCM1!", "d": "Milho" }
          ],
          "originalTitle": "Futures"
        }
      ],
      "support_host": "https://www.tradingview.com",
      "width": "100%",
      "height": "600",
      "showSymbolLogo": true,
      "showChart": true
    });

    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/markets/" rel="noopener nofollow" target="_blank">
          <span className="blue-text text-blue3-sky">World markets</span>
        </a>
        <span className="trademark text-gray-500 text-xs"> by TradingView</span>
      </div>
    </div>
  );
};

export default TradingViewWidget;
