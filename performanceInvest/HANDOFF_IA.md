# Handoff de Projeto: Performance Invest - Modelo Squad Anywhere & Cérebro Digital

## 1. Visão Geral do Projeto
O **Projeto Performance** é uma iniciativa de transformação digital e operacional para a **Performance Invest** (um escritório de assessoria credenciado à XP). O objetivo central é escalar o negócio, que atualmente conta com R$ 400-500 milhões sob custódia e faturamento de cerca de R$ 2 milhões mensais (ROA médio de 0,5%), visando a meta agressiva de alcançar **R$ 1 Bilhão de AUM** (Assets Under Management) e melhorar o ROA.

## 2. As Dores que o Projeto Resolve

### Para o Cliente (Investidor)
*   **Conflito de Interesses:** No modelo tradicional de bancos e corretoras, o assessor ganha comissionamento por produto vendido (rebate). Isso faz com que empurrem produtos ruins e caros (como COEs e fundos com taxas absurdas).
*   **Custos Ocultos:** O cliente não sabe quanto exatamente paga para investir.

### Para o Assessor de Investimentos (B2B)
*   **Remuneração Injusta:** Geralmente ficam com apenas 40% a 50% de split (repasse) daquilo que geram.
*   **Microgerenciamento e Metas:** Sofrem pressão de escritórios físicos tradicionais para bater metas de produtos específicos.
*   **Captação Arcaica:** Ainda dependem de "cold call" e planilhas antigas.

## 3. A Solução (O Que Estamos Construindo)
Criamos um ecossistema que resolve essas dores através de 3 pilares fundamentais:
1.  **Fee Fixo:** Mudança de remuneração cobrando uma taxa fixa transparente sobre o patrimônio e devolvendo os cashbacks. Isso alinha 100% o interesse do assessor ao do cliente.
2.  **Squad Anywhere (Modelo 70%):** Os assessores ganham total liberdade geográfica, sem metas abusivas e ficam com **até 70% do repasse**.
3.  **Cérebro Digital (Workforce de IA):** Um time inteiro de Inteligência Artificial para automatizar a prospecção e análise, reduzindo drasticamente o esforço manual do assessor.

## 4. O Que Já Foi Desenvolvido Até Aqui (Inventário)

### A. Estrutura Web e Captação
*   `index.html` / `style.css` / `script.js`: Uma Landing Page de recrutamento de novos assessores com uma comunicação agressiva focada no "Fim do Conflito de Interesses" e no repasse de 70%.

### B. O Cérebro Digital (Pasta `Cerebro_Digital`)
*   `AGENTS.md`: O organograma da nossa Workforce de IA. Conta com o Jhony Bosio na diretoria e agentes específicos: **AI CEO**, **AI Head Comercial**, **AI Prospector** (SDR), **AI Analista de Portfólio**, **AI CMO**, **AI Copywriter** e **AI Head of TA**.
*   **Ferramentas e Prompts Operacionais:**
    *   `01_Prospeccao_Fria.md`: Scripts personalizados usando IA para abordar leads no LinkedIn/WhatsApp quebrando o gelo de forma consultiva.
    *   `02_Conversao_Fee_Fixo.md`: Pitch matador para provar matematicamente as taxas ocultas do banco atual do cliente e convertê-lo para o modelo Fee Fixo.
    *   `03_Analise_Raio_X.md`: Um prompt que "devora" extratos de outros bancos/corretoras e encontra "Red Flags" (taxas abusivas, COEs, etc.) em segundos.
    *   `04_Resumo_Mercado.md`: Geração de insights matinais diários ligando a notícia do dia diretamente à carteira do cliente VIP.

### C. Gestão e Controle (Pasta `Gestao_e_KPIs`)
*   `SLA_Consultoria.md`: O contrato estrutural com KPIs definidos (captação alvo de R$ 30mi/mês, ROA alvo de 0,55%) e formato de remuneração (Retainer + Upside de performance).
*   `dashboard.html`: Estrutura visual inicial de BI e monitoramento dos números da assessoria.

## 5. Próximos Passos (Para a Próxima IA)
Quando a próxima inteligência artificial assumir, o foco será:
1.  **Refinar o Dashboard:** Conectar o `dashboard.html` e dados de CRM.
2.  **Testes e Integração API:** Transformar os prompts de texto da pasta `Cerebro_Digital` em fluxos automatizados (ex: bots que rodam via n8n/Make conectando no LinkedIn ou WhatsApp).
3.  **Lançamento da Campanha:** Subir e polir a Landing Page para atrair a primeira leva de assessores seniores.
